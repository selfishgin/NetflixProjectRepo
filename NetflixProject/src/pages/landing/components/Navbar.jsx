import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Navbar = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className='bg-gradient-to-b from-black to-transparent h-[120px] w-full justify-between items-center flex flex-row'>
            <div className='w-full mx-48 justify-between items-center flex flex-row'>
                <div className='w-fit'><img src="src/assets/NetflixLogo.png" alt="" /></div>
                <div className='justify-between flex gap-2'>
                    <select id="lang" className='w-[7rem] bg-black text-white border rounded border-white-100'>
                        <option value="english">English</option>
                        <option value="azerbaijani">Azerbaijani</option>
                    </select>

                    <button
                        onClick={() => navigate('/login')} 
                        className='bg-red-600 rounded p-1 w-[5rem] text-white'>
                        Sign in
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
