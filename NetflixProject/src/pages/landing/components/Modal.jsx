import React from 'react'
import GenreItems from "./GenreItems"
import { motion } from "motion/react"
import { createPortal } from "react-dom";
import { useEffect } from 'react';
import { div } from 'motion/react-client';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


const Modal = ({ data, handleModalClose, scrollY }) => {
    const navigate = useNavigate(); // Initialize the navigate function
    const { t } = useTranslation();


    useEffect(() => {
        console.log(scrollY)
    }, [scrollY])


    return (
        createPortal(
            /* Style */
            <div style={{ top: scrollY }} onClick={handleModalClose} className='absolute left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
                    <div className='size-[620px] border-px border-zinc-300 rounded-lg bg-zinc-900 overflow-y-scroll relative'>
                        <button onClick={handleModalClose} className='z-10 absolute top-4 right-4 size-[30px] hover:bg-zinc-500/25 hover:cursor-pointer rounded-full p-2 items-center'>
                            <svg />
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

                            <div className='justify-center items-center'>
                                <button className='text-[18px] flex flex-row gap-1 justify-center items-center align-middle bg-[#E50914] hover:bg-[#CE272FFB] text-white w-[150px] h-[50px] rounded-[4px] mt-5 py-3' onClick={() => navigate('/signup')}> {t('entryCTA')}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="ChevronRightSmall" aria-hidden="true" class="default-ltr-cache-137pweu eo5tv5s0"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4371 8.00153L4.96857 2.53295L6.02923 1.47229L12.0281 7.4712C12.1688 7.61185 12.2478 7.80262 12.2478 8.00153C12.2478 8.20044 12.1688 8.39121 12.0281 8.53186L6.02923 14.5308L4.96857 13.4701L10.4371 8.00153Z" fill="currentColor"></path></svg>
                                </button>

                            </div>
                        </div>

                    </div>
                </motion.div>


            </div>,
            document.getElementById("landing")
        )


    )
}

export default Modal