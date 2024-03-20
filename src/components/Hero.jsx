import React from 'react'
import hero from "../assets/hero.png"
import line from "../assets/Line.png"
import { IoIosSearch } from "react-icons/io";

export const Hero = () => {
    return (
        <div className='px-20 mt-10 flex justify-around h-screen'>
            <div className='content'>
                <h1 className='text-6xl font-bold'>Find Your Ideal</h1>
                <h1 className='text-center text-6xl font-bold'>Job</h1>
                <img src={line} alt=""  className='mx-auto w-40'/>
                <p className='mt-4 text-2xl text-center'>"Shape your future:Explore,thrive,<br />Achieve - Let's Begin Your Adventure!"</p>
                <div className='flex mt-[80px]'>
                    <input type="text" placeholder='Search job, Titles, Places '  className='rounded-l-md w-full p-3 outline-none shadow-md'/>
                    <button className='bg-[#FAB140] p-3 shadow-md rounded-r-md text-white flex items-center'><IoIosSearch className='w-6 h-6 mr-1' /> Search</button>
                </div>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>
        </div>
    )
}
