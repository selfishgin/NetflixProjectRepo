import React, { useState, useEffect } from 'react';
import Modal from 'src/pages/landing/components/Modal';
import CustomSelect from 'src/pages/landing/components/CustomSelect';
import MovieCard from 'src/pages/landing/components/MovieCard';
import { useStore } from 'zustand';
import { themeStore } from 'common/Store.js';

const Similar = ({ id, type: initialType }) => {
  const { token } = useStore(themeStore);


  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState(initialType || 'movie'); // Default to 'movie'
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const options = [
    { title: 'Movies', value: 'movie' },
    { title: 'TV Shows', value: 'tv' },
  ];

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
    <div className="w-full py-20 mt-20 h-fit relative">
      <h3 className="text-white text-2xl font-semibold mb-4">Similar Content</h3>

      {/* Dropdown Selector */}


      {/* Render Similar Content */}
      <div className="w-full flex gap-12 overflow-x-auto py-5 pl-7 scrollbar-thin scrollbar-thumb-gray-500">
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

      {/* Modal for Item Details */}
      {modalOpen && (
        <Modal data={selectedItem} handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default Similar;
