import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div  className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-centerm border-b dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center space-x-5  w-screen'>
                <Link to="/">
                    <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:bg-gray-900'>
                        Google 
                    </p>
                </Link>
                <button type='button' onClick={() => setDarkTeam(!darkTeam)}>

                </button>
            </div>
        </div>
    )
}

