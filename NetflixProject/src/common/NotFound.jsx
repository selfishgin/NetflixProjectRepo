import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <div>
        <p>Page you were looking for is not available</p>
        <button onClick={() => {
            navigate("/")
        }} className='bg-[#E50911] px-6 py-3 font-bold text-lg mt-4'>Go Back</button>
    </div>
  )
}

export default NotFound