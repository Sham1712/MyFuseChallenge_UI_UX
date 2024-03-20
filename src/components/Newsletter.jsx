import React from 'react'
import circle from '../assets/circle.png'
import ar1 from '../assets/arrow1.png'

export const Newsletter = () => {
    return (
        <div className='relative'>
            <div class="h-full bg-black bg-opacity-60 pb-40 pt-5">
                <h1 class="mt-3 flex justify-center text-4xl font-semibold text-[#FAB140] pt-5">Subscribe to Our Newsletter</h1>
                <p class="mx-5 my-5 text-center text-lg font-light text-white">"Stay in the loop and never miss out on our latest updates and exclusive content. Subscribe to our newsletter to receive fresh insights and news delivered right to your inbox."</p>

                    <div class="flex flex-row justify-center">
                        <div class="flex w-[60%] flex-row rounded-full bg-white py-0 my-5 items-center">
                            <input type="text" class="w-[906px] rounded-full px-4 py-4 outline-none" placeholder="Email" />
                            <button class="m-1 flex rounded-full bg-[#FAB140] text-white px-8 py-3 hover:scale-105">Send</button>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0'>
                        <img src={circle} alt="" className='w-[150px]' />
                    </div>
                    <div className='absolute top-0 right-0 rotate-90'>
                        <img src={circle} alt="" className='w-[150px]' />
                    </div>
                    <div className='absolute bottom-10 right-48'>
                        <img src={ar1} alt="" className='w-[150px]' />
                    </div>
                </div>
        </div>
    )
}
