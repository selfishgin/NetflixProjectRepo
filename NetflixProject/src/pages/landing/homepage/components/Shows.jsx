import {useEffect, useState} from 'react'

const Shows = () => {
    const [trendingShows, setTrendingShows] = useState([])

    const getShows = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/tv/trending`)
            const data = await response.json()

            if (response.ok){
                setTrendingShows(data.content)
            }
        }catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getShows()
    }, [])

  return (
     <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.3}}}>
        <div className='grid grid-cols-5 px-[90px] pt-[120px] gap-10'>
            {trendingShows.map(item => <button>
                <img className='min-w-[180px] h-[250px] hover:scale-110 transition duration-150 ease-in' src={`url(https://image.tmdb.org/t/p/original${visibleShow.backdrop_path})`} alt="" />
            </button>)}

        </div>
     </motion.div>
  )
}

export default Shows