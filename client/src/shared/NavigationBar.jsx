import React from 'react'
import { FaSearch, FaBell } from 'react-icons/fa'
import {motion} from 'framer-motion'

const NavigationBar = () => {
    return (
        <nav className='w-full flex justify-between bg-indigo-800 p-3 items-center'>
            <div className='flex items-center'>
                <div className='hidden sm:block'>
                    <img className='w-8 h-8 text-white' src='https://peoplefirst.ril.com/v2/favicon.ico' />
                </div>
                <motion.div
                    className='text-white font-extrabold text-xl hidden sm:block cursor-pointer'
                    
                >
                    PeopleFirst
                </motion.div>
                <div className='sm:hidden text-white text-4xl cursor-pointer'>
                    <a>&#8801;</a>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='mx-2 md:mx-5 flex items-center md:bg-sky-500  p-2 space-x-2 rounded-4xl'>
                    <div className='cursor-pointer'>
                        <FaSearch className='h-5 w-5 fill-white' />
                    </div>
                    <div className='w-sm hidden sm:block'>
                        <input className='outline-0 text-white font-bold'
                            placeholder='Search...'
                        />
                    </div>
                </div>
                <div className='mx-2 md:mx-5 cursor-pointer'>
                    <FaBell className='fill-white h-6 w-6' />
                </div>
                <div className='mx-2 md:mx-5 cursor-pointer'>
                    <img className='bg-white p-[10px] rounded-4xl' src='https://peoplefirst.ril.com/v2/assets/images/svg/ic_profile_male.svg' />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar