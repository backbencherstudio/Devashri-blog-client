import React from 'react';
import playground1 from "/playground/playground1.gif"
import playground2 from "/playground/playground2.gif"
import playground2half from "/playground/Laptop Mockup 1.png"
import playground3 from "/playground/playground3.gif"
// import playground3 from "/playground/playground2.gif"
const Playground = () => {
    return (
        <div>
            <div className='max-w-[1128px] text-center mx-auto px-4 mt-16 md:mt-60'>
                <h2 className='md:mb-10 text-[20px]  md:text-[28px] font-semibold leading-[40px] tracking-[1.12px]'>THE CREATIVE PLAYGROUND</h2>
                <p className='text-[17px] md:text-[24px] font-normal leading-[20px] md:leading-[40px] tracking-[1.2px]'>Welcome to my experimental lab, where ideas come alive and creativity knows no bounds. Stay tuned for bold prototypes and fresh design explorations!</p>
            </div>

            <div className="my-10 md:my-20 bg-[#E5F2F9] w-full max-w-[510px] py-10 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 mx-auto">
                <img className="rounded-[64.28px] w-[80%] max-w-[500px] mx-auto" src={playground1} alt="" />
            </div>

            <div className="my-10 md:my-20  bg-[#FFD8D8] w-full py-10 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 mx-auto">
                {/* todo: add the laptop here */}
                <div className="relative w-full max-w-[900.421px] h-auto flex-shrink-0 mx-auto">
                    {/* Laptop Mockup */}
                    <img
                        src="/LaptopMockup.png"
                        alt="Laptop Mockup"
                        className="w-full h-auto object-cover z-10"
                    />

                    {/* GIF Inside Frame */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <img
                            src={playground2}
                            alt="Laptop GIF"
                            className="w-[86%] sm:w-[80%] mb-4 md:w-[86%] lg:w-[746px] xl:w-[87%] lg:h-[680px] object-contain"
                        />
                    </div>

                    
                </div>
            </div>


            <div className="my-10 md:my-20  bg-[#E5F2F9] w-full max-w-[510px] py-10 px-6 sm:py-16 sm:px-10 lg:py-20 lg:px-20 mx-auto">
                <img className="rounded-[64.28px] w-full max-w-[500px] mx-auto" src={playground3} alt="" />
            </div>
        </div>
    );
};

export default Playground;