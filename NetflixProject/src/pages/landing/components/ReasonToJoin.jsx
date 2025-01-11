import React from 'react'
import ReasonCard from './ReasonCard'
import enjoy from '../../../icons/enjoyIco.svg'
import download from '../../../icons/downIco.svg'
import watch from '../../../icons/watchIco.svg'
import forKids from '../../../icons/kidsIco.svg'

const ReasonToJoin = () => {

    const items = [
        {
            title: "Enjoy on your TV",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: enjoy
        },
        {
            title: "Download your shows to watch offline",
            desc: "Save your favorites easily and always have something to watch.",
            img: download
        },        
        {
            title: "Watch everywhere",
            desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img: watch
        },
        {
            title: "Create profiles for kids",
            desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img: forKids
        }
    ]


    

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <h2 className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 font-medium text-[24px] text-white'>
            More Reasons to Join
          </h2>
          {items.map(item => (
            <ReasonCard key={item.id} item={item} />
          ))}
        </div>
      );
      
}

export default ReasonToJoin