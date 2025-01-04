import React from 'react'
import GenreItems from "./GenreItems"
import { motion } from "motion/react"
import { createPortal } from "react-dom";
import { useEffect } from 'react';
import { div } from 'motion/react-client';

const Modal = ({ data, handleModalClose, scrollY }) => {

    useEffect(() => {
        console.log(scrollY)
    }, [scrollY])


    return (
        createPortal(
            /* Style */
            <div style={{top: scrollY}} onClick={handleModalClose} className='absolute left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.3}}}>
                    <div className='size-[620px] border-px border-zinc-300 rounded-lg bg-zinc-900 overflow-y-scroll relative'>
                        <button onClick={handleModalClose} className='z-10 absolute top-4 right-4 size-[30px] hover:bg-zinc-500/25 hover:cursor-pointer rounded-full p-2 items-center'>
                            <svg/> 
                        </button>
                        
                        <div onClick={
                            (e) => {
                                e.stopPropagation()
                            }
                        } className='relative'>
                            <div className='absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end'>
                                <h3 className='text-white text-5xl font-bold ml-8 mb-6'>{data.media_type === "movie" ? data.title : data.name}</h3>
                            </div>
                            <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
                        </div>

                        <div onClick={
                            (e) => {
                                e.stopPropagation()
                            }
                        } className='px-8 pb-5'>
                            <GenreItems genres={data.genres} />

                            <p className='text-white'>{data.overview}</p>

                            <button className='flex items-center justify-center bg-[#E50914] hover:bg-[#CE272FFB] text-white h-full px-4 py-3 pr-6 gap-4 rounded-[4px] mt-5'> Get Started
                                <svg/>
                            </button>
                        </div>

                    </div>
                </motion.div>


            </div>,
            document.getElementById("landing")
        )


    )
}

export default Modal