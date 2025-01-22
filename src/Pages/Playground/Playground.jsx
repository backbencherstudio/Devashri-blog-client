import React from 'react';
import playground1 from "/playground/playground1.gif"
import playground2 from "/playground/playground2.gif"
import playground2half from "/playground/Laptop Mockup 1.png"
import playground3 from "/playground/playground3.gif"
// import playground3 from "/playground/playground2.gif"
const Playground = () => {
    return (
        <div className='mt-[100px] lg:mt-[250px]'>

            {/* title and description */}
            <div className='max-w-[1038px] flex flex-col gap-5 lg::gap-10 items-center mx-auto md:text-center text-justify '>
                <h1 className='text-[28px] font-semibold leading-[142.857%] tracking-[1.12px] text-[#2A2A2A]'>THE CREATIVE PLAYGROUND</h1>
                <p className='text-[24px] font-normal leading-[166.667%] tracking-[1.2px] text-[#2A2A2A] px-7 md:px-0'>Welcome to my experimental lab, where ideas come alive and creativity knows no bounds. Stay tuned for bold prototypes and fresh design explorations!</p>
            </div>

            {/* mobile first div */}
            <div className="my-[100px] lg:my-[200px] md:bg-[#E5F2F9] md:py-[80px] md:px-[144px] max-w-[90%] max-h-[90%] md:max-w-[840px] mx-auto">
                <img className="w-full rounded-[61.28px] md:rounded-[74.28px] lg:rounded-[87.28px] " src={playground1} alt="" />
            </div>
            

            {/* laptop section */}
            <div className="py-20 md:py-[80px] bg-[#FFD8D8] w-full">
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
            <div className="my-[100px] lg:my-[200px] md:bg-[#E5F2F9] md:py-[80px] md:px-[144px] max-w-[90%] max-h-[90%] md:max-w-[840px] mx-auto">
                <img className="w-full rounded-[61.28px] md:rounded-[74.28px] lg:rounded-[87.28px] " src={playground3} alt="" />
            </div>
        </div>
    );
};

export default Playground;