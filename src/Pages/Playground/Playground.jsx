import React from 'react';
import playground1 from "/playground/playground1.gif"

const Playground = () => {
    return (
        <div>
            <div className='max-w-[1128px] text-center mx-auto px-4 mt-16 md:mt-60'>
                <h2 className='mb-10 text-[20px]  md:text-[28px] font-semibold leading-[40px] tracking-[1.12px]'>THE CREATIVE PLAYGROUND</h2>
                <p className='text-[24px] font-normal leading-[40px] tracking-[1.2px]'>Welcome to my experimental lab, where ideas come alive and creativity knows no bounds. Stay tuned for bold prototypes and fresh design explorations!</p>
            </div>
 
            <div className='my-52 bg-[#E5F2F9] w-[840px]  py-20 px-56  mx-auto'>
                <img className='rounded-[64.28px]' src={playground1} alt="" />
            </div>

            <div className='my-52 bg-[#FFD8D8] w-full  py-20 px-56  mx-auto'>

            </div>
        </div>
    );
};

export default Playground;