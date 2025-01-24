import React from 'react';
import playground1 from "/playground/playground1.gif"
import playground2 from "/playground/playground2.gif"
import playground2half from "/playground/Laptop Mockup 1.png"
import playground3 from "/playground/playground3.gif"
// import playground3 from "/playground/playground2.gif"
const Playground = () => {
    return (
        <div className='max-w-[1128px] mx-auto px-4 2xl:px-0'>

            {/* title and description */}
            <div className='max-w-[1028px] responsive-padding2  flex flex-col gap-5 lg::gap-10 items-center mx-auto md:text-center text-justify '>
                <h1 className='md:text-[28px] text-2xl font-semibold leading-[142.857%] md:tracking-[1.12px] tracking-[.72px] text-[#2A2A2A]'>THE CREATIVE PLAYGROUND</h1>
                <p className='lg:text-[24px] md:text-xl text-lg font-normal leading-[166.667%] tracking-[1.2px] text-[#2A2A2A] '>Welcome to my experimental lab, where ideas come alive and creativity knows no bounds. Stay tuned for bold prototypes and fresh design explorations!</p>
            </div>

            {/* mobile first div */}
            <div className='flex justify-center'>
                <div className='bg-[#E5F2F9] px-[144px] py-[80px] '>
                    <img className="rounded-l" src={playground1} alt="" />
                </div>
            </div>
            {/* <div className=" bg-[#E5F2F9] justify-center flex  mx-auto">
                <img className="" src={playground1} alt="" />
            </div> */}


            {/* laptop section */}
            <div className="py-20 md:py-[80px] my-[200px] bg-[#FFD8D8] w-full">
                <div className="relative max-w-[1009px] mx-auto aspect-[1009/653]">
                    {/* Container to maintain aspect ratio */}
                    <div className="absolute inset-0">
                        {/* Laptop Frame */}
                        <img
                            src="/LaptopMockup.png"
                            alt="Laptop Mockup"
                            className="w-full h-full object-contain"
                        />

                        {/* GIF Container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[84%] h-[84%] mt-[-3.5%] ml-[-0.5%]">
                                <img
                                    src={playground2}
                                    alt="Laptop GIF"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile last div */}
            <div className='flex justify-center'>
                <div className='bg-[#EEF8D6] px-[144px] py-[80px] '>
                    <img className="rounded-l" src={playground3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Playground;