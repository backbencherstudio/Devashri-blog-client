import React from 'react';
import playground1 from "/playground/playground1.gif"
import animation3 from '../../assets/animation3.gif'
const Playground = () => {
    return (
        <div>
            <div className='max-w-[1128px] text-center mx-auto px-4 mt-16 md:mt-60'>
                <h2 className='md:mb-10 text-[20px]  md:text-[28px] font-semibold leading-[40px] tracking-[1.12px]'>THE CREATIVE PLAYGROUND</h2>
                <p className='text-[17px] md:text-[24px] font-normal leading-[20px] md:leading-[40px] tracking-[1.2px]'>Welcome to my experimental lab, where ideas come alive and creativity knows no bounds. Stay tuned for bold prototypes and fresh design explorations!</p>
            </div>
 
            <div className="my-10 md:my-20 bg-[#E5F2F9] w-full max-w-[840px] py-10 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 mx-auto">
                <img className="rounded-[64.28px] w-full max-w-[500px] mx-auto" src={playground1} alt="" />
            </div>

            <div className="my-10 md:my-20  bg-[#FFD8D8] w-full py-10 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 mx-auto">
                {/* todo: add the laptop here */}
            </div>

            
            <div className="my-10 md:my-20  bg-[#E5F2F9] w-full max-w-[840px] py-10 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 mx-auto">
                <img className="rounded-[64.28px] w-full max-w-[500px] mx-auto" src={animation3} alt="" />
            </div>
        </div>
    );
};

export default Playground;