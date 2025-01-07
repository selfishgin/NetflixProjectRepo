import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

const Trailer = () => {

    const { id } = useParams(); // Get the movie ID from the URL
    const [movieTrailers, setMovieTrailers] = useState(null); // State for movie trailers
  
    const fetchTrailers = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve token if required
        const response = await fetch(`http://localhost:5001/api/v1/movie/${id}/trailers`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
        if (response.ok) {
          setMovieTrailers(data.content || {}); // Set movie trailers
        } else {
          console.log(data.message || 'Failed to fetch movie trailers');
        }
      } catch (error) {
        console.log('Failed to fetch movie trailers. Please check your connection.');
      } 
    };


    useEffect(() => {
        fetchTrailers(); // Fetch movie trailers when the component mounts
      }, [id]); // Dependency array ensures it refetches if `id` changes
    


  return (
    <div className='w-[500px] h-[500px]'>
        <iframe src={`https://www.youtube.com/embed/${id.key}`} frameborder="0"></iframe>
    </div>
  )
};

export default Trailer;