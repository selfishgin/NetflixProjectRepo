import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useStore } from 'zustand';
import { themeStore } from 'common/Store.js';


const Details = () => {
    const { token } = useStore(themeStore);

    const navigate = useNavigate(); // For navigation
    const location = useLocation(); // Get the query parameters
    const {id, type} = location.state
    console.log(id, type)
    const [contentDetails, setContentDetails] = useState(null); // State for content details
    const [trailer, setTrailer] = useState(null); // State for trailer
    const [error, setError] = useState(null); // State for errors
    const [loading, setLoading] = useState(true); // State for loading
 
    // Fetch content details
    const fetchDetails = async () => {
        try {
            console.log(`Fetching details for movie ID:`, id);

            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/details`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,// MAKE IT WORK DYNAMICALLY
                },
            });

            const data = await response.json();
            if (response.ok) {
                setContentDetails(data.content || {}); // Set content details
            } else {
                console.error('API Error (Details):', data.message);
                setError(data.message || `Failed to fetch movie details.`);
            }
        } catch (error) {
            console.error('Fetch Error (Details):', error);
            setError(`Failed to fetch movie details. Please check your connection.`);
        } finally {
            setLoading(false); // Stop the loading state
        }
    };


    // Fetch content trailer
    const fetchTrailer = async () => {
        try {
            console.log(`Fetching trailer for ${type} ID:`, id);

            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/trailers`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`// MAKE IT WORK DYNAMICALLY
                },
            });

            const data = await response.json();
            if (response.ok) {
                const specificTrailer = data.trailers.find(
                    (t) => t.type === 'Trailer' && t.site === 'YouTube'
                );
                if (specificTrailer) {
                    setTrailer(specificTrailer);
                } else {
                    console.error('No suitable trailer found.');
                }
            } else {
                console.log('API Error (Trailer):', data.message);
            }
        } catch (error) {
            console.error('Fetch Error (Trailer):', error);
        }
    };


    useEffect(() => {
        console.log("USEEFFECT")
        fetchDetails(); // Fetch content details
        fetchTrailer(); // Fetch trailer
    }, [id]);

    const renderDetails = () => {
        if (loading) {
            return <p className="text-white text-center">Loading...</p>;
        }

        if (error) {
            return <p className="text-red-500 text-center">{error}</p>;
        }

        if (!contentDetails) {
            return <p className="text-white text-center">No details available for this {type}.</p>;
        }

        return (
            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${contentDetails.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-cover bg-center bg-no-repeat"
            >
                <div className="p-6 inset-0 bg-gradient-to-b from-black/40 to-black/90 flex justify-center flex-col items-center h-screen w-screen bg-cover bg-center bg-no-repeat">
                    <div className='mt-40'>
                        <h1 className="text-3xl text-white font-bold mb-4">
                            {contentDetails.name || contentDetails.title || 'Untitled'}
                        </h1>

                    </div>

                    <div className='mt-25 h-[100px]'>
                        <div className='w-[500px]'>
                            <p className="text-white mb-4">
                                <strong>Description:</strong>{' '}
                                {contentDetails.overview || 'No description available.'}
                            </p>
                        </div>

                        <div className='w-[500px]'>
                            <p className="text-white mb-4">
                                <strong>Release Date:</strong>{' '}
                                {contentDetails.release_date || 'Unknown'}
                            </p>

                        </div>

                        <div className='w-[500px]'>
                            <p className="text-white mb-4">
                                <strong>Rating:</strong> {contentDetails.vote_average || 'Not Rated'}
                            </p>

                        </div>

                        <div className='w-[500px]'>
                            {contentDetails.genres && (
                                <p className="text-white mb-4">
                                    <strong>Genres:</strong>{' '}
                                    {contentDetails.genres.map((genre) => genre.name).join(', ')}
                                </p>
                            )}
                        </div>
                    </div>



                </div>
            </div>
        );
    };

    const renderTrailer = () => {
        if (!trailer) {
            return <p className="text-white text-center">Trailer not available for this {type}.</p>;
        }

        return (
            <div className="trailer-section w-[500px] bg-gray-800 rounded shadow-md">
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    title={trailer.name}
                    className="w-full aspect-video rounded"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    };

    return (
        <div>
            <div className="p-6">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 mb-4"
                >
                    Go Back
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                {renderDetails()}
                {renderTrailer()}

            </div>


        </div>
    );
};

export default Details;
