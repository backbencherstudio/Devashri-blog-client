import React from 'react';
import typo from "../../../assets/bachelorRite/typo.png"

const TypographyForRite = () => {
    return (
        <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 lg:pt-[120px] md:pt-[100px] pt-[60px] ">
            <div className='lg:mb-[120px] md:mb-[100px] mb-[60px]'>
                <div className="mb-8">
                    <div className='md:flex justify-between gap-10'>
                        <div className=''>
                        <h2 className="text-[#DD0101] uppercase font-semibold lg:text-[28px] md:text-[26px] text-2xl leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.8px]">TYPOGRAPHY</h2>
                        </div>
                        <div className='md:max-w-[840px]'>
                        <p className="text-[#2A2A2A] mt-6 md:mt-0 lg:text-2xl md:text-[20px] text-[18px]  leading-[110%] md:tracking-[.72px] tracking-[.36px]">
                        The main goal was to ensure users could easily navigate and accomplish their tasks. We aimed to provide a seamless experience, leveraging the clean and modern typefaces Rubik and Karla to create a visually engaging and user-friendly interface.
                        </p>
                        </div>
                    </div>
                </div>
                <img src={typo} alt="" />
            </div>
            <div className="mb-8">
                <div className='md:flex justify-between gap-10'>
                    <div>
                    <h2 className="text-[#DD0101] uppercase font-semibold lg:text-[28px] md:text-[26px] text-2xl leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.8px]">Colors</h2>
                    </div>
                    <div className='md:max-w-[840px]'>
                    <p className="text-[#2A2A2A] mt-6 md:mt-0 lg:text-2xl md:text-[20px] text-[18px]  leading-[110%] md:tracking-[.72px] tracking-[.36px]">
                        Utilizing Teal Mist and Deep Ocean as primary colors creates a vibrant and grounded visual presence, while Cloud White and Slate Grey in the secondary palette add a sense of balance and elegance. The accent colors, Golden Sunrise and Rosy Blush, infuse warmth and energy, enhancing the overall design with a touch of sophistication.
                    </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:mt-[56px] mt-[36px]">
                {/* Primary Colors */}
                <div className="space-y-4  flex-1">
                    <div
                        className="h-full rounded-[16px] shadow-lg transition-transform hover:scale-[1.01] flex items-end"
                        style={{ backgroundColor: '#4FA3A5' }}
                    >
                        <div className="p-6 text-white ">
                            <span className="tracking-[3px] font-medium text-[20px] leading-[110%]">PRIMARY</span>
                            <p className="text-[18px] opacity-90 leading-[110%]">#4FA3A5</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 flex-1">
                    <div
                        className="h-full rounded-[16px] shadow-lg transition-transform hover:scale-[1.01] items-end flex"
                        style={{ backgroundColor: '#264248' }}
                    >
                        <div className="p-6 text-white ">
                            <span className="tracking-[3px] font-medium text-[20px] leading-[110%]">PRIMARY</span>
                            <p className="text-[18px] opacity-90 leading-[110%]">#264248</p>
                        </div>
                    </div>
                </div>

                {/* Secondary Colors */}
                <div className='md:w-[48%]'>

                    <div className="space-y-4 ">
                        <div
                            className="h-[120px] rounded-[16px] shadow-lg transition-transform hover:scale-[1.01] items-end flex"
                            style={{ backgroundColor: '#EEFFFF' }}
                        >
                            <div className="p-6 ">
                                <span className="tracking-[3px] font-medium text-[20px] leading-[110%] text-[#2A2A2A]">SECONDARY</span>
                                <p className="text-[18px] opacity-90 leading-[110%] text-[#2A2A2A]">#EEFFFF</p>
                            </div>
                        </div>

                        <div
                            className="h-[120px] rounded-[16px] shadow-lg transition-transform hover:scale-[1.01] items-end flex"
                            style={{ backgroundColor: '#7E8186' }}
                        >
                            <div className="p-6 text-white">
                                <span className="tracking-[3px] font-medium text-[20px] leading-[110%]">SECONDARY</span>
                                <p className="text-[18px] opacity-90 leading-[110%]">#7E8186</p>
                            </div>
                        </div>
                        {/* Accent Colors */}
                        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                                className="h-[150px] rounded-[16px] shadow-lg transition-transform hover:scale-[1.01] flex items-end"
                                style={{ backgroundColor: '#FDAF2A' }}
                            >
                                <div className="p-6 text-white">
                                    <span className="tracking-[3px] font-medium text-[20px] leading-[110%] text-[#2A2A2A]">ACCENT</span>
                                    <p className="text-[18px] opacity-90 leading-[110%] text-[#2A2A2A]">#FDAF2A</p>
                                </div>
                            </div>

                            <div
                                className="h-[150px] rounded-[16px] shadow-lg transition-transform hover:scale-105 items-end flex"
                                style={{ backgroundColor: '#E03268' }}
                            >
                                <div className="p-6 text-white">
                                    <span className="tracking-[3px] font-medium text-[20px] leading-[110%]">ACCENT</span>
                                    <p className="text-[18px] opacity-90 leading-[110%]">#E03268</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TypographyForRite;