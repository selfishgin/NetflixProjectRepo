import React from 'react';
import top10 from '/src/icons/Top10.svg';
import { motion } from 'motion/react';

const Home = ({ visibleMovie }) => {
  // console.log(visibleMovie)
  if (!visibleMovie) { 
    return (
      <div className="text-white text-center mt-10">
        No trending movies available.
      </div>
    );
  }

  const { backdrop_path, title, overview } = visibleMovie;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>

      {/* Content */}
      <div className="relative max-w-[400px] ml-[90px] pt-[100px] z-10">
        <h2 className="text-4xl md:text-7xl text-white font-bold">{title}</h2>
        <div className="flex items-center gap-2 my-5">
          <img src={top10} alt="Top 10 Icon" className="w-10 h-10" />
          <h3 className="text-white text-xl md:text-2xl font-bold">
            #1 in Movies Today
          </h3>
        </div>
        <p className="text-white text-sm md:text-base">
          {overview?.slice(0, 150)}...
        </p>
        <div className="flex items-center gap-3 mt-5">
          <button className="bg-white text-black font-bold px-4 md:px-6 py-2 md:py-3 rounded-[4px] hover:bg-zinc-300">
            Play
          </button>
          <button className="bg-[#515451] text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-[4px] hover:bg-zinc-300">
            More Info
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
