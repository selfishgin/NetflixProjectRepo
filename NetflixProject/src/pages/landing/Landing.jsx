import React from 'react'
import Entry from './components/Entry'
import ReasonToJoin from './components/ReasonToJoin'
const Landing = () => {
  return (
    <>

        <Entry/>
        <div className='w-full px-[144px] relative'>
          <ReasonToJoin/>
        </div>
    </>
  )
}

export default Landing
