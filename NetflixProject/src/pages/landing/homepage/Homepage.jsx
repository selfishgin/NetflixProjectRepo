import {useEffect, useState} from 'react'
import Home from './components/Home'
import Shows from './components/Shows'
import Movies from './components/Movies'

const Homepage = () => {
    const [selectedTab, setSelectedTab] = useState()
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingShows, setTrendingShows] = useState([])

    const tabItems = [
        {
            title: "Home",
            value: "home"
        },
        {
            title: "TV Shows",
            value: "tv"
        },
        {
            title: "Movies",
            value: "movies"
        },
    ]


    const getMovies = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.value}/trending`)
            const data = await response.json()
            setData(data.content)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    const visibleTab = () => {
        switch (selectedTab.value) {
            case "movie":
                return <Movies />
            case "tv":
                return <Shows />
            default:
                return <Home visibleMovie={trendingMovies[0]}/>

        }
    }

  return (
    <div className='relative'>
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabItems={tabItems}/>
        {visibleTab()}
    </div>
  )
}

export default Homepage