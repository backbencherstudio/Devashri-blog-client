import React from 'react';
import img1 from "../../assets/bachelorRite/1.png"
import img1half from "../../assets/bachelorRite/1.5.png"
import img2 from "../../assets/bachelorRite/2.png"
import img2half from "../../assets/bachelorRite/2.5.png"
import img3 from "../../assets/bachelorRite/3.png"
import img3half from "../../assets/bachelorRite/3.5.png"
import img4 from "../../assets/bachelorRite/4.png"
import img4half from "../../assets/bachelorRite/4.5.png"
import img5 from "../../assets/bachelorRite/5.png"
import img5half from "../../assets/bachelorRite/5.5.png"
import img6 from "../../assets/bachelorRite/6.png"
import img6half from "../../assets/bachelorRite/6.5.png"

const FinalDesignforRite = () => {
    return (
        <div className='max-w-[1128px] mx-auto px-4 2xl:px-4 md:pt-[120px] pt-[100px]'>
            <div>
                <div className='text-center'>
                    <h3 className='md:text-[28px] text-2xl font-semibold md:tracking-[2.8px] tracking-[1.2px] text-center text-[#DD0101]'>THE FINAL DESIGN</h3>
                    <h1 className='lg:text-[48px] md:text-[36px] text-2xl font-semibold md:tracking-[1.44px] tracking-[.72px] text-center mt-3  lg:mt-4'>Perfecting the bachelor living experience</h1>
                </div>
                <div className='lg:mt-[120px] md:mt-[100px] mt-[60px]'>
                    <div className='flex flex-col md:gap-[96px] gap-[80px]'>
                        <div >
                            <div className='flex lg:mb-[80px] mb-[40px] mt-6 md:mt-0 gap-6 items-center md:justify-end md:mr-[150px]'>
                                <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>On-boarding Screens</h3>
                            </div>
                            <div className='xl:gap-[96px] lg:gap-[70px] md:gap-[40px] md:flex flex-col md:flex-row lg:mx-[100px] md:mx-[60px]'>
                                <div className=''>
                                    <img src={img1} alt="" />
                                </div>
                                <div className='md:mt-[150px] mt-[40px]'>
                                    <img src={img1half} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='md:flex flex-col md:flex-row md:gap-[64px] gap-[40px]'>
                            <div>
                                <div className=' flex lg:mb-[80px] mb-[40px] md:mt-[44px] mt-[20px] gap-6 items-center md:justify-center md:mr-[40px]'>
                                    <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                    <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>Home Screens</h3>
                                </div>
                                <img src={img2} alt="" />
                            </div>
                            <div className='mt-10 md:mt-0'>
                                <img src={img2half} alt="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='md:flex xl:gap-[400px] lg:gap-[300px] md:gap-[150px] items-center md:relative'>
                                    <div className=''>
                                        <div className='md:absolute top-50 md:translate-x-[100%] flex lg:mb-[80px] mb-[40px] mt-6 md:mt-0 gap-6 items-center md:justify-end '>
                                            <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                            <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>Property Browsing</h3>
                                        </div>
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className='mt-[40px]'>
                                        <img src={img3half} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:mx-[134px] lg:mx-[115px] md:mx-[100px]'>
                            <div className='md:flex md:flex-row flex flex-col-reverse xl:gap-[160px] lg:gap-[130px] md:gap-[100px] '>
                                <div className='mt-[40px] md:mt-0'>
                                    <img src={img4} alt="" />
                                </div>
                                <div>
                                    <div className='flex lg:mb-[64px] mb-[40px] mt-6 md:mt-0 gap-6 items-center md:justify-center'>
                                        <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                        <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>Product Browsing</h3>
                                    </div>
                                    <div ><img src={img4half} alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='md:flex xl:gap-[410px] lg:gap-[300px] md:gap-[150px] md:relative'>
                                <div className='md:absolute top-50 left-1/2 md:-translate-x-[50%] flex md:mb-[80px] mb-[40px] mt-6 md:mt-0 gap-6 items-center md:justify-end '>
                                    <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                    <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>Service Browsing</h3>
                                </div>
                                <div className='self-end'>
                                    <img src={img5} alt="" />
                                </div>
                                <div className='mt-[40px] md:mt-0'>
                                    <img src={img5half} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='flex flex-col xl:mx-[60px] lg:mx-[45px] md:mx-[30px]'>
                                    <div className='  flex lg:mb-[68px]  mb-[40px] mt-6 md:mt-0 gap-6 items-center xl:ml-[80px] lg:ml-[70px] md:ml-[60px]'>
                                        <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                        <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>Checkout Screens</h3>
                                    </div>
                                    <div className='md:flex xl:gap-[160px] lg:gap-[130px] md:gap-[80px]'>
                                        <div>
                                            <img src={img6} alt="" />
                                        </div>
                                        <div className='self-center mt-[40px] md:mt-[0]'>
                                            <img src={img6half} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalDesignforRite;