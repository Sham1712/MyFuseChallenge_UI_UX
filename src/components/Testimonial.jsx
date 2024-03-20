import React from 'react'
import testi from "../assets/testimonials.png"
import TestimonialCarousel from './Testimonials'
import ar from "../assets/arrow.png"

export const Testimonial = () => {
    return (
        <div className='px-20 h-screen bg-white py-5 relative my-8 mt-20'>
            <h1 className='text-center text-bold text-5xl'>Testimonials from Graduates</h1>
            <div className='flex justify-around mt-10'>
                <div className='content'>
                    <h1 className='text-4xl mt-10'>Over 82% of candidates <br /> found their ideal job</h1>
                    <div className='relative'>
                        <TestimonialCarousel/>
                        <div className='absolute right-4'>
                            <img src={ar} alt="" className='w-[350px]' />
                        </div>
                    </div>
                    <div className='absolute bottom-6 right-[558px]'>
                            <button className='bg-blue-500 px-6 py-3 rounded-lg text-white hover:scale-95'>Read More</button>
                    </div>
                </div>
                <div className='img'>
                    <img src={testi} alt="" className='w-96'/>
                </div>
            </div>
        </div>
    )
}
