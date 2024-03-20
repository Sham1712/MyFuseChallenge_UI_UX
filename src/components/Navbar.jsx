import React from 'react'
import { FaAngleDown } from "react-icons/fa6";


export const Navbar = () => {
    return (
        <div className='flex justify-between px-20 py-8'>
                <div className='logo font-bold text-3xl'>
                    MyFuse<span className='text-rose-500'>.</span>In
                </div>
                <div className='flex items-center'>
                    {["for students","for Seekers","For corporates","Login"].map((items,id)=>(
                        id == 3 ? <p className='capitalize mr-5' key={id}>{items}</p>: <div className='capitalize flex mr-2 items-center' key={id}><p className='mr-1'>{items}</p> <FaAngleDown className='mr-6'/></div>
                    ))}
                </div>
        </div>
    )
}
