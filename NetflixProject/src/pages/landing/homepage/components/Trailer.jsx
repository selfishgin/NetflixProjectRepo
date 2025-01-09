import { useState, useEffect } from 'react';

const MovieTrailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Replace with the actual way you retrieve the token
        if (!token) {
          console.error("No token found. Make sure the user is logged in.");
          return;
        }
    
        const response = await fetch(`http://localhost:5001/api/v1/movie/${movieId}/trailers`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token here
          },
        });
    
        if (response.status === 401) {
          throw new Error("Unauthorized - Invalid or Missing Token");
        }
    
        const data = await response.json();
        if (data.success) {
          const officialTrailer = data.trailers.find(
            (trailer) => trailer.type === "Trailer" && trailer.name === "Official Trailer"
          );
          if (officialTrailer) {
            setTrailerKey(officialTrailer.key);
          }
        } else {
          console.error("API response unsuccessful:", data);
        }
      } catch (error) {
        console.error("Error fetching trailers:", error);
      }
    };
    
    

    fetchTrailers();
  }, [movieId]);

  return (
    <div className="trailer-container">
      {trailerKey ? (
        <iframe
          className="w-full h-64"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Official Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default MovieTrailer;
