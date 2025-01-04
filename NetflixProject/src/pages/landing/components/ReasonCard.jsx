import React from 'react'

const ReasonCard = ({item}) => {
  return (
    <div className='bg-white px-4 pt-6 min-w-[274px] min-h-[268px] rounded-[16px] bg-gradient-to-br from-[#192247] to-[#210E17] relative'>
        <h2 className='text-white font-medium text-[24px] mb-4'>{item.title}</h2>
        <p className='text-white/70'>{item.desc}</p>
        <img className='size-[72px] absolute bottom-2 right-2' src={item.img} alt="" />
    </div>
  )
}

export default ReasonCard