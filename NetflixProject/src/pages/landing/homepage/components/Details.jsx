import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Trailer from './Trailer';

const Details = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const navigate = useNavigate(); // For navigation
    const [movieDetails, setMovieDetails] = useState(null); // State for movie details
    const [error, setError] = useState(null); // State for errors
    const [loading, setLoading] = useState(true); // State for loading

    const fetchDetails = async () => {
        try {
            const token = localStorage.getItem('authToken'); // Retrieve token if required
            const response = await fetch(`http://localhost:5001/api/v1/movie/${id}/details`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (response.ok) {
                setMovieDetails(data.content || {}); // Set movie details
            } else {
                setError(data.message || 'Failed to fetch movie details');
            }
        } catch (error) {
            setError('Failed to fetch movie details. Please check your connection.');
        } finally {
            setLoading(false); // Stop the loading state
        }
    };

    useEffect(() => {
        fetchDetails(); // Fetch movie details when the component mounts
    }, [id]); // Dependency array ensures it refetches if `id` changes

    const renderDetails = () => {
        if (loading) {
            return <p className="text-white text-center">Loading...</p>;
        }

        if (error) {
            return <p className="text-red-500 text-center">{error}</p>;
        }

        if (!movieDetails) {
            return <p className="text-white text-center">No details available for this movie.</p>;
        }

        return (
            <div className="p-6">
                <h1 className="text-3xl text-white font-bold mb-4">{movieDetails.title || 'Untitled Movie'}</h1>
                {movieDetails.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                        alt={movieDetails.title || 'Movie Poster'}
                        className="w-full max-w-[300px] object-cover rounded-lg mb-4"
                    />
                )}
                <p className="text-white mb-4">
                    <strong>Description:</strong> {movieDetails.overview || 'No description available.'}
                </p>
                <p className="text-white mb-4">
                    <strong>Release Date:</strong> {movieDetails.release_date || 'Unknown'}
                </p>
                <p className="text-white mb-4">
                    <strong>Rating:</strong> {movieDetails.vote_average || 'Not Rated'}
                </p>

                <Trailer />
                {/* <iframe src={`https://www.youtube.com/watch?v=${key}`} frameborder="0"></iframe> */}
                {/* <iframe src="https://www.youtube.com/watch?v=${key}" frameborder="0"></iframe> */}

            </div>
        );

    };

    return (
        //         <div
        //   style={{
        //     backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        //   }}
        //   className="bg-cover bg-center h-[500px] w-full"
        // >
        //   {/* Content inside the div */}
        // </div>

        <div>
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 mb-4"
                >
                    Go Back
                </button>
                {renderDetails()}

            </div>

        </div>
    );
};

export default Details;
