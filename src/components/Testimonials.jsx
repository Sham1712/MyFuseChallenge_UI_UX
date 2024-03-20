    import React, { useState, useEffect } from 'react';

    const testimonials = [
        {
            text: "'I'm incredibly grateful for the support I received during my job search journey. With tailored guidance and insightful resources, I swiftly secured my dream role. - Emily Thompson, Marketing Graduate'",
        },
        {
            text:'"My experience with the career guidance provided was exceptional. The personalized assistance and access to valuable tools significantly eased the job hunting process for me. - Jason Lee, Engineering Graduate"',
        },
        {
            text:'"The assistance I received surpassed my expectations. From resume tips to interview preparation, every aspect was meticulously handled, leading me to land my ideal job. - Sarah Johnson, Finance Graduate"'
        },
        {
            text:'"Navigating the job market was daunting, but the support I received was instrumental. Their dedication ensured I found a position aligned perfectly with my aspirations. - Michael Smith, IT Graduate"'
        }
    ];

    const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='mt-[95px] w-[750px]'>
            {testimonials.map((item,index)=>(
                <p className='text-3xl font-extralight transition'>{index === currentIndex ? item.text : ""}</p>
            ))}
            
        </div>
    );
    };

    export default TestimonialCarousel;