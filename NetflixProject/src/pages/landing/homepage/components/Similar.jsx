import React, { useState, useEffect, useRef } from 'react';
import Modal from 'src/pages/landing/components/Modal';
import MovieCard from 'src/pages/landing/components/MovieCard';
import { useStore } from 'zustand';
import { themeStore } from 'common/Store.js';


const Similar = ({ id, type: initialType }) => {
  const { token } = useStore(themeStore);

  const [data, setData] = useState([]);
  const [selectedType] = useState(initialType || 'movie'); // Default to 'movie'
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const carouselRef = useRef(null); // Ref for the movie card container

  const fetchSimilarData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${selectedType}/${id}/similar`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Use dynamic token if needed
          },
        }
      );
      const result = await response.json();
      if (response.ok) {
        setData(result.similar || []);
      } else {
        console.error('Failed to fetch similar data:', result.message);
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching similar data:', error);
      setData([]);
    }
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust this for the scrolling distance
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    if (id) {
      fetchSimilarData();
    }
  }, [id, selectedType]);

  useEffect(() => {
    if (selectedItem) {
      setModalOpen(true);
    }
  }, [selectedItem]);

  return (
    <div className="w-[90%] py-20 mt-[300px] h-fit relative ">
      <h3 className="text-white text-2xl font-semibold mb-4">Similar Content</h3>

      <div className="relative flex items-center w-full">
        {/* Left Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 bg-gray-800 text-white py-8 px-2 rounded-full z-10 hover:bg-gray-700"
          style={{ transform: 'translateY(-50%)', top: '50%' }}
        >
          &#9664; {/* Left Arrow */}
        </button>

        {/* Movie Cards */}
        <div
          ref={carouselRef}
          className="w-[full] flex gap-4 overflow-x-hidden py-5 pl-7 scrollbar-thin scrollbar-thumb-gray-500"
        >
          {data.length > 0 ? (
            data.map((item, index) => (
              <MovieCard
                key={index}
                setSelectedItem={setSelectedItem}
                item={item}
                index={index}
              />
            ))
          ) : (
            <div className="text-white text-center w-full">
              No similar content available.
            </div>
          )}
        </div>

        {/* Right Button */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 bg-gray-800 text-white py-8 px-2 rounded-full z-10 hover:bg-gray-700"
          style={{ transform: 'translateY(-50%)', top: '50%' }}
        >
          &#9654; {/* Right Arrow */}
        </button>
      </div>

      {/* Modal for Item Details */}
      {modalOpen && (
        <Modal data={selectedItem} handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default Similar;
