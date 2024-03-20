import React from 'react'
import jr from "../assets/journey.png"

export const Userjrny = () => {
    return (
        <div className='bg-white h-screen px-20 py-20 relative'>
            <h1 className='text-5xl mt-[131px] mb-[42px]'>Navigating the Candidate journey</h1>
            <div className='w-[610px]'>
                <p className='text-lg'>"Incorporating the candidate journey in our profile highlights our dedication to showcasing talent in a comprehensive and transparent manner. By illuminating the career progression and achievements of our candidates, we demonstrate our commitment to connecting recruiters with top-tier talent that aligns seamlessly with their needs and expectations."</p>
            </div>
            <div className='absolute  bottom-0 right-0'>
                <img src={jr} alt="" className='w-[52rem]' />
            </div>
        </div>
    )
}
