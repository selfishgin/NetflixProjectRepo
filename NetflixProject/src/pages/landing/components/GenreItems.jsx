import React from 'react';

const GenreItems = ({ genres }) => {
    return (
        <div className="flex flex-wrap gap-2 my-4">
            {genres && genres.length > 0 ? (
                genres.map((genre) => (
                    <span 
                        key={genre.id} 
                        className="px-3 py-1 bg-zinc-800 text-white text-sm rounded-lg">
                        {genre.name}
                    </span>
                ))
            ) : (
                <p className="text-zinc-500 text-sm">No genres available</p>
            )}
        </div>
    );
};

export default GenreItems;
