import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/movie/trending`);
      const data = await response.json();

      if (response.ok) {
        console.log('API Response:', data); // Inspect the API response
        setTrendingMovies(data.content);
      }
    } catch (error) {
      console.error('Failed to fetch trending Movies:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      className="px-[90px] pt-[120px]"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {trendingMovies.map((item) => (
          <button key={item.id || item.title} className="relative group" onClick={() => { // BURADA
                navigate(`/details`, {state: {id: item.id, type: item.media_type}}) // burada
          }}>
            <img
              className="w-full h-[250px] object-scale-down rounded-md transform hover:scale-110 transition duration-150 ease-in-out"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.name || item.title || 'Show Poster'}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out">
              {item.name || item.title || 'Untitled'}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Movies;
