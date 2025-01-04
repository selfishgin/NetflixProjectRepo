import React from 'react';

const MovieCard = ({ item, setSelectedItem }) => {
    const handleClick = () => {
        setSelectedItem(item);
    };

    return (
        <div
            onClick={handleClick}
            className="w-60 h-80 bg-zinc-800 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform">
            <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
                <h4 className="text-white text-sm font-semibold mb-2 truncate">
                    {item.title || item.name}
                </h4>
                <p className="text-zinc-400 text-xs truncate">
                    {item.release_date || item.first_air_date}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
