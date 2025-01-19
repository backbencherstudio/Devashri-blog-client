import React from 'react';
import img1 from "../../assets/bachelorRite/1.png"
import img2 from "../../assets/bachelorRite/2.png"
import img3 from "../../assets/bachelorRite/2.5.png"

const FinalDesignforRite = () => {
    return (
        <div className='max-w-[1128px] mx-auto px-4 2xl:px-4 py-[120px]'>
            <div>
                <div className='text-center'>
                    <h3 className='md:text-[28px] text-2xl font-semibold md:tracking-[2.8px] tracking-[1.2px] text-center text-[#DD0101]'>THE FINAL DESIGN</h3>
                    <h1 className='lg:text-[48px] md:text-[36px] text-2xl font-semibold md:tracking-[1.44px] tracking-[.72px] text-center mt-3  lg:mt-4'>Perfecting the bachelor living experience</h1>
                </div>
                <div className='mt-[120px]'>
                    <div className='flex flex-col md:gap-[96px] gap-[50px]'>
                        <div className='md:mx-[100px] '>
                            <div className='flex md:mb-[40px] mb-[20px] mt-6 md:mt-0 gap-6 items-center justify-end mr-[40px]'>
                                <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>On-boarding Screens</h3>
                            </div>
                            <div className='md:mt-[100px] mt-[40px]'>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className='md:flex flex flex-col md:gap-[68px] gap-[40px]'>
                            <div>
                                <div className=' flex md:mb-[80px] mb-[20px] md:mt-[44px] mt-[20px] gap-6 items-center justify-center md:mr-[40px]'>
                                    <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                    <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>On-boarding Screens</h3>
                                </div>
                                <img src={img2} alt="" />
                            </div>
                            <div>
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalDesignforRite;