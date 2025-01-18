import React from 'react';

const FinalDesignCard = ({ data, position }) => {
    return (
        <div className="md:mb-40">
            {/* Effortless Section with Centered SVG */}
            <div>
                <div className="relative flex items-center justify-center md:mb-9 w-full">
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
                    <h1 className="ml-[-50px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] not-italic">
                        {data.title}
                    </h1>
                </div>
            </div>


            {/* Description */}
            <p className=" mb-12 md:text-[24px] text-center font-normal md:leading-[32px] md:tracking-[0.72px] not-italic">
                {data.content}
            </p>

                <div className="relative w-full h-auto lg:w-[1029.421px] lg:h-[667.053px] flex-shrink-0 mb-12">
                {/* Laptop Mockup */}
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
                            src={data.laptopGif}
                            alt="Laptop GIF"
                            className="w-[86%] sm:w-[80%] mb-4 md:w-[87%] lg:w-[780px] lg:h-[680px] object-contain"
                        />
                    </div>

                    {/* Mobile Frame in Bottom-Right Corner */}
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
            </div>
            
        </div>
    );
};

export default FinalDesignCard;
