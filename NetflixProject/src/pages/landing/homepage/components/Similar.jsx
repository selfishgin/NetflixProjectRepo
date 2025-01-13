import React, { useState, useEffect, useRef } from 'react';
import MovieCard from 'src/pages/landing/components/MovieCard';
import { useStore } from 'zustand';
import { themeStore } from 'common/Store.js';
import { useTranslation } from 'react-i18next';


const Similar = ({ id, type: initialType }) => {
  const { token } = useStore(themeStore);
  const { t } = useTranslation();


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
      <h3 className="text-white text-2xl font-semibold mb-4">{t('similarContent')}</h3>

      <div className="relative flex items-center w-full">
        {/* Left Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 bg-gray-800 text-white py-8 px-2 rounded-full z-10 hover:bg-gray-700"
          style={{ transform: 'translateY(-50%)', top: '50%' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronLeftStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z" fill="currentColor"></path></svg>

        </button>

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>

        </button>
      </div>


      {/* {modalOpen && (
        <Modal data={selectedItem} handleModalClose={handleModalClose} /> // ???????
      )} */}

    </div>
  );
};

export default Similar;
