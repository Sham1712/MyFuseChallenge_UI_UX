    import React from 'react'
    import emp from "../assets/emp.png";

    export const About = () => {
        return (
            <div className='h-full px-20'>
                <div class=" my-5 flex flex-col">
                    <div class="mb-5 text-5xl font-medium">
                            About Us
                    </div>
                    <p class="mb-5 text-xl font-extralight tracking-wider indent-10 leading-relaxed">
                            "At MyFuse.In, we believe in the transformative power of informed career decisions. Our mission is to empower inpiduals like you to navigate the intricate maze of career choices with confidence and clarity. With a team of dedicated experts, we curate invaluable resources, deliver actionable advice, and foster a supportive community to guide you on your journey to professional fulfillment. Whether you're a recent graduate exploring your options or a seasoned professional seeking a new direction, we're here to inspire, educate, and elevate your career aspirations. Welcome to a place where dreams meet reality, and success becomes achievable for all."
                    </p>
                    <div class=" flex flex-row justify-center mt-4">
                        <div class="mb-5 text-xl font-extralight bg-black opacity-70 px-6 py-3 rounded-lg text-white justify-center flex align-middle hover:scale-95">
                            Learn More
                        </div>
                    </div>
                </div>
                <div className='mt-[105px] flex w-full h-screen' >
                    <div className='content w-[791px]'>
                        <h1 className='text-5xl'>"We're Dedicated to Assisting Candidates Discover Their Next Exciting Opportunity"</h1>
                        <p className='mt-[42px] text-lg font-extralight'>Our mission is to simplify the job search process, ensuring that each candidate finds their perfect fit seamlessly. With us, candidates can expect a transformative experience, propelling them towards professional success. Join us today and embark on a journey towards a brighter future.</p>
                    </div>
                    <div>
                        <img src={emp} className='w-[586px]' alt="" />
                    </div>
                </div>
            </div>
            
        )
    }
