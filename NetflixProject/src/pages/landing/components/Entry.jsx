import React from 'react'
import Navbar from './Navbar'

const Entry = () => {
    return (
        <div className="relative h-screen">
            {/* Background Image with Decreased Brightness */}
            <div 
                className="absolute top-0 left-0 w-full h-full bg-[url('src/assets/NetflixBackground.jpg')] bg-cover brightness-50 z-0">
            </div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>
        </div>
    )
}


export default Entry