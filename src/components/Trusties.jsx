import React from 'react'
import l1 from "../assets/logo1.png"
import l2 from "../assets/logo2.png";
import l3 from "../assets/logo3.png";
import l4 from "../assets/logo4.png";
import l5 from "../assets/logo5.png";
import l6 from "../assets/logo6.png";
import l7 from "../assets/logo7.png";
import l8 from "../assets/logo8.png";
import l9 from "../assets/logo9.png";
import l10 from "../assets/logo10.png";

export const Trusties = () => {
    const cmpny = [l1,l2,l3,l4,l5,l6,l7,l8]
    return (
        <div className=' bg-white py-40 w-full mt-20'>
            <h1 className='text-5xl text-center'>Trusties</h1>
                <div className='flex gap-x-5 justify-center items-center mt-20 px-5'>
                    {cmpny.map((l,index)=>(
                    <img src={l} alt="" key={index} className='mr-10' />
                ))}
                
                </div>
        </div>
    )
}
