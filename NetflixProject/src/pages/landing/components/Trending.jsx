import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import CustomSelect from './CustomSelect';
import MovieCard from './MovieCard';

const Trending = ({ scrollY }) => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('movie'); // Updated to match the value used in CustomSelect
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const carouselRef = useRef(null); // Ref for the card container

  const options = [
    { title: 'Movies', value: 'movie' },
    { title: 'TV Shows', value: 'tv' },
  ];

  const getData = async () => {
    try {
      console.log(`Fetching data for: ${selectedOption}`);
      const response = await fetch(`http://localhost:5001/api/v1/${selectedOption}/trending`);
      const data = await response.json();

      if (response.ok) {
        console.log('API Response:', data);
        setData(data.content || []); // Handle empty or undefined content
      } else {
        console.error('Failed to fetch data:', data.message || 'Unknown error');
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching trending data:', error);
      setData([]);
    }
  };

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust this for scrolling distance
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
    getData();
  }, [selectedOption]);

  useEffect(() => {
    if (selectedItem) {
      setModalOpen(true);
    }
  }, [selectedItem]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'scroll';
  }, [modalOpen]);

  return (
    <div className="w-full py-20 relative">
      <h3 className="text-white text-2xl font-semibold mb-4">Trending Now</h3>

      {/* Dropdown Selector */}
      <CustomSelect
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />

      {/* Navigation Buttons and Trending Content */}
      <div className="relative flex items-center w-full">
        {/* Left Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 bg-gray-800 text-white py-8 px-2 rounded-full z-10 hover:bg-gray-700"
          style={{ transform: 'translateY(-50%)', top: '50%' }}
        >
          &#9664; {/* Left Arrow */}
        </button>

        {/* Movie/TV Show Cards */}
        <div
          ref={carouselRef}
          className="w-full flex gap-4 overflow-x-hidden py-5 pl-7 scrollbar-thin scrollbar-thumb-gray-500"
        >
          {data.length > 0 ? (
            data.map((item, index) => (
              <MovieCard key={index} setSelectedItem={setSelectedItem} item={item} index={index} />
            ))
          ) : (
            <div className="text-white text-center w-full">No data available.</div>
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

      {/* Modal */}
      {modalOpen && (
        <Modal scrollY={scrollY} data={selectedItem} handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default Trending;
