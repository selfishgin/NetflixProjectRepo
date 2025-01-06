import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Shows from './components/Shows';
import Movies from './components/Movies';
import Navbar from './components/Navbar'; // Ensure Navbar is correctly imported

const Homepage = () => {
  const [selectedTab, setSelectedTab] = useState({ value: 'home' }); // Initialize with a default tab
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);

  const tabItems = [
    {
      title: 'Home',
      value: 'home',
    },
    {
      title: 'TV Shows',
      value: 'tv',
    },
    {
      title: 'Movies',
      value: 'movies',
    },
  ];

  const getMovies = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/${selectedTab.value === "tv" ? "tv" : "movie"}/trending`);
      const data = await response.json();

      if (selectedTab.value === 'movies' || selectedTab.value === 'home') {
        setTrendingMovies(data.content);
      } else if (selectedTab.value === 'tv') {
        setTrendingShows(data.content);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [selectedTab]); // Fetch data when selectedTab changes

  const visibleTab = () => {
    console.log(trendingMovies)

    switch (selectedTab.value) {
      case 'movies':
        return <Movies trendingMovies={trendingMovies} />;
      case 'tv':
        return <Shows trendingShows={trendingShows} />;
      default:
        return <Home visibleMovie={trendingMovies[0]} />;
    }
  };

  return (
    <div className="relative">
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabItems={tabItems} />
      {visibleTab()}
    </div>
  );
};

export default Homepage;
