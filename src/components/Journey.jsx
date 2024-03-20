    import React from 'react'
    import hs from "../assets/Handshake.png"
    import rs from "../assets/Resume.png"
    import gr from "../assets/Graduated.png"

    export const Journey = () => {
        return (
            <div className='bg-white'>
                <div class="mx-5 my-5 flex flex-col">
    <div class="my-3 mt-1 flex justify-center text-3xl font-semibold text-black">Expansion Journey</div>

    <div class="mx-1 mt-7 flex flex-row justify-evenly">

        <div class="mx-5 flex flex-col">
        <div class="flex flex-row justify-center">
            <img src={gr} alt="" />
        </div>
        <div class="mb-3 mt-5 flex justify-center text-xl font-bold text-[#050C26]">Active Students</div>
        <div class="my-3 mt-1 flex justify-center text-center align-middle text-4xl font-bold text-[#8A8A8A]">5500+</div>
        </div>
        
        <div class="inline-block h-48 min-h-[1em] w-[1px] self-stretch bg-gray-500 "></div>
        <div class="mx-5 flex flex-col">
        <div class="flex flex-row justify-center">
                    <img src={hs} alt="" />
        </div>
        <div class="mb-3 mt-5 flex justify-center text-xl font-bold text-[#050C26]">Jobs</div>
        <div class="my-3 mt-1 flex justify-center text-center align-middle text-4xl font-bold text-[#8A8A8A]">2500+</div>
        </div>

        <div class="inline-block h-48 min-h-[1em] w-[1px] self-stretch bg-gray-500 "></div>

        <div class="mx-5 flex flex-col">
        <div class="flex flex-row justify-center">
                    <img src={rs} alt="" />
        </div>
        <div class="mb-3 mt-5 flex justify-center text-xl font-bold text-[#050C26]">Active Applications</div>
        <div class="my-3 mt-1 flex justify-center text-center align-middle text-4xl font-bold text-[#8A8A8A]">850+</div>
        </div>


    </div>
    </div>

            </div>
        )
    }
