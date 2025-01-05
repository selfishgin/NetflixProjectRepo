import React from 'react';

const MovieCard = ({ item, index, setSelectedItem }) => {
    return (
        <div onClick={() => {
            setSelectedItem(item)
        }} className='relative min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in'>
            <p className='absolute -left-7 bottom-4 text-[100px] drop-shadow-[0_0_4px_#444] font-bold'>{index + 1}</p>
            <img className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
        </div>
    );
};

export default MovieCard;
