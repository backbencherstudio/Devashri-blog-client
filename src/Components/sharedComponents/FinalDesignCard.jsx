import React from 'react';

import img from "/LaptopMockup.png"


const FinalDesignCard = ({ data, position }) => {
    console.log(data)
    return (
        <div className="">
            {/* Effortless Section with Centered SVG */}
            <div>
                <div className="relative flex items-center justify-center md:mb-9 w-full ">
                    {/* Background SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="83"
                        height="57"
                        viewBox="0 0 83 57"
                        fill="none"
                        className="flex-shrink-0"
                    >
                        <rect
                            x="29.0781"
                            width="40"
                            height="40"
                            transform="rotate(45 29.0781 0)"
                            fill="#F19999"
                        />
                        <rect
                            x="53.8633"
                            width="40"
                            height="40"
                            transform="rotate(45 53.8633 0)"
                            fill="#F8CCCC"
                        />
                    </svg>
                    {/* Text */}
                    <h1 className=" ml-[-50px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] not-italic">
                        {data.title}
                    </h1>
                </div>
            </div>


            {/* Description */}
            <p className={` mb-12 lg:text-[24px] md:text-[20px] ${data.id == 1 ? "text-center" : "text-left"} text-base  font-normal leading-[133%] md:tracking-[0.72px] tracking-[.52px] not-italic`}>
                {data.content}
            </p>




            {/* <div className="relative w-full h-auto lg:w-[1029.421px] lg:h-[667.053px] flex-shrink-0 mb-12">
                
                <div className="relative w-full max-w-[900.421px] h-auto flex-shrink-0 mx-auto">
                    
                    <img
                        src="/LaptopMockup.png"
                        alt="Laptop Mockup"
                        className="w-full h-auto object-cover z-10"
                    />

                   
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <img
                            src={data.laptopGif}
                            alt="Laptop GIF"
                            className="w-[86%] sm:w-[80%] mb-4 md:w-[87%] lg:w-[780px] lg:h-[680px] object-contain"
                        />
                    </div>

                    
                    <div
                        className="absolute bottom-[-30px] right-[-10px] sm:bottom-[-40px] sm:right-[-30px] md:bottom-[-50px] md:right-[-20px] w-[80px] h-[160px] sm:w-[100px] sm:h-[200px] md:w-[201.931px] md:h-[414.992px] z-30"
                    >
                        <img
                            className="absolute inset-0 w-full h-full object-cover z-10"
                            src="/mobileFrame.png"
                            alt="Mobile Frame"
                        />
                        <div className="absolute inset-[3px] sm:inset-[5px] md:inset-[10px] w-[calc(100%-6px)] sm:w-[calc(100%-10px)] md:w-[calc(100%-20px)] h-[calc(100%-6px)] sm:h-[calc(100%-10px)] md:h-[calc(100%-20px)] z-20 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={data.mobilePic}
                                alt="Mobile Screen"
                            />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={`lg:mb-[140px]  border border-transparent  md:mb-[120px] mb-[80px] relative ${data.id % 2 === 0 ? "flex justify-end":""} `}>
                <div className={`relative  w-full  xl:p-[50px] lg:p-[50px] md:p-[34px] p-[17px] bg-cover bg-center max-w-[91.56%]`} style={{backgroundImage:`url(${img})`,}}>
                <img className=' xl:-translate-y-[2%] lg:-translate-y-[3%] -translate-y-[3%]' src={data.laptopGif}  alt="" />
                </div>
                <div className={`absolute ${data.id % 2 === 0 ? "left-0":"right-0 "} -bottom-8  lg:max-w-fit md:max-w-[20%] max-w-[25%]`}>
                    <img src={data.mobilePic} alt="" />
                </div>
            </div>

            {/* <div className={`relative ${data.id % 2 === 0 ? "flex justify-end":""}`}  >
                <img src="/LaptopMockup.png" className='2xl:max-w-full xl:max-w-[92%] lg:max-w-[90%] md:max-w-[90%] max-w-[85%]' alt="" />
                <img src={data.laptopGif} className={`absolute top-0 left-0  2xl:w-[78%] xl:w-[78%] lg:max-w-[78%] md:max-w-[76%] max-w-[72%]  ${data.id % 2 === 0 ? "translate-x-[20%] translate-y-[6%]":"translate-x-[9.5%] translate-y-[6%]"}`} alt="" />
                <div>
                    <img
                        className={`absolute ${data.id % 2 === 0 ? "left-0":"right-0 "} -bottom-8  lg:max-w-fit md:max-w-[20%] max-w-[25%]  object-cover z-10  `}
                        src="/mobileFrame.png"
                        alt="Mobile Frame"
                    />
                </div>
            </div> */}

        </div>
    );
};

export default FinalDesignCard;
