import React, { useEffect } from 'react';
import playground1 from "/playground/playground1.gif"
import playground2 from "/playground/playground2.gif"
import playground2half from "/playground/Laptop Mockup 1.png"
import playground3 from "/playground/playground3.gif"
// import playground3 from "/playground/playground2.gif"
const Playground = () => {
    useEffect(()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    },[])
    return (
        <>
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0'>

                {/* title and description */}
                <div className='max-w-[1028px] responsive-padding2  flex flex-col gap-5 lg::gap-10 items-center mx-auto md:text-center  '>
                    <h1 className='md:text-[28px] text-2xl font-semibold leading-[142.857%] md:tracking-[1.12px] tracking-[.72px] text-[#2A2A2A]'>THE CREATIVE PLAYGROUND</h1>
                    <p className='lg:text-[24px] md:text-xl text-lg font-normal leading-[166.667%] tracking-[1.2px] text-[#2A2A2A] '>Welcome to my experimental lab, where ideas come alive and creativity knows no bounds. Stay tuned for bold prototypes and fresh design explorations!</p>
                </div>

                {/* mobile first div */}
                <div className='flex justify-center'>
                    <div className='bg-[#E5F2F9] xl:px-[144px] xl:py-[80px]  lg:px-[124px] lg:py-[80px] md:px-[110px] md:py-[80px] px-[40px] py-[60px]' style={{

                    }}>
                        <div className=''>
                            <img className=" md:rounded-[65px] rounded-[52px] rounded-l-[52px] md:rounded-l-[68px]  " src={playground1} alt="" />
                        </div>               
                         </div>
                </div>
                {/* <div className=" bg-[#E5F2F9] justify-center flex  mx-auto">
                <img className="" src={playground1} alt="" />
            </div> */}

            </div>
            {/* laptop section */}
            <div className="dynamic-margin py-[80px] bg-[#FFD8D8] w-full px-4 2xl:px-0" style={{ marginTop: `clamp(40px, 10vw, 200px)`, marginBottom: "clamp(40px,10vw,200px" }}>
                <div className="relative  max-w-[1009px] mx-auto aspect-[1009/653]">
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
          <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 lg:mb-[200px] md:mb-[150px] mb-[100px]'>
          <div className='flex justify-center'>
                    <div className='bg-[#EEF8D6] xl:px-[144px] xl:py-[80px]  lg:px-[124px] lg:py-[80px] md:px-[110px] md:py-[80px] px-[40px] py-[60px]' style={{

                    }}>
                        <div className=''>
                            <img className=" md:rounded-[65px] rounded-[52px] rounded-l-[52px] md:rounded-l-[68px]  " src={playground3} alt="" />
                        </div>               
                         </div>
                </div>
          </div>
        </>
    );
};

export default Playground;