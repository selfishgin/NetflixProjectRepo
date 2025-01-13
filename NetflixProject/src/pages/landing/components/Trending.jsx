import React, { useState, useEffect, useRef } from 'react';
import Modal from './Modal';
import CustomSelect from './CustomSelect';
import MovieCard from './MovieCard';
import { useTranslation } from 'react-i18next';


const Trending = ({ scrollY }) => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('movie'); // Updated to match the value used in CustomSelect
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();


  const carouselRef = useRef(null); // Ref for the card container

  const options = [
    { title: t('moviesTrending'), value: 'movie' },
    { title: t('tvShowsTrending'), value: 'tv' },
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
      <h3 className="text-white text-2xl font-semibold mb-4">{t('trendingNow')}</h3>

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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronLeftStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z" fill="currentColor"></path></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
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
