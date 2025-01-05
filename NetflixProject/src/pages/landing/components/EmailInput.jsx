import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const EmailInput = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
  return (
    <div className='flex items-center h-[55px] w-[580px] mx-auto mt-5 gap-2'>
        <input value={email} onChange={(e) => {
            setEmail(e.target.value)
        }} className='w-full bg-transparent border-[1px] border-zinc-400 h-full px-4 rounded-[4px] text-white' type='email'/>
        <button onClick={() => {
            navigate("/signup", {state: {email: email}})
        }} className='min-w-[200px] flex items-center justify-center bg-[#E50914] hover:bg-[#CE272FFB] text-white'>
            <svg/>
        </button>
    </div>
  )
}

export default EmailInput