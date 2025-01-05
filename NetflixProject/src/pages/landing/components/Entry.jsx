import React from 'react'
import Navbar from './Navbar'
import EmailInput from './EmailInput'

const Entry = () => {
    return (
        <div className="relative h-screen">
            {/* Background Image with Decreased Brightness */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[url('src/assets/NetflixBackground.jpg')] bg-cover brightness-50 z-0 ">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            <div className='flex flex-col justify-center text-center items-center mt-[80px]'>
                <div className='relative font-black text-[3.5rem] w-[36.5rem] text-white mb-3'>
                    <h1 >Unlimited movies, TV shows, and more</h1>
                </div>
                <div className='relative font-medium text-[1.25rem] w-[36.5rem] text-white mb-5'>
                    <p>Starts at EUR 7.99. Cancel anytime.</p>
                </div>
                <EmailInput />
            </div>
        </div>
    )
}


export default Entry