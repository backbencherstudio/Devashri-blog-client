import React from 'react';
import typo from "../../../assets/bachelorRite/typo.png"

const TypographyForRite = () => {
    return (
        <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 lg:pt-[120px] md:pt-[100px] pt-[100px] ">
            <div className='lg:mb-[120px] md:mb-[100px] mb-[60px]'>
                <div className="mb-8">
                    <div className='md:flex xl:gap-[172px] lg:gap-[140px] md:gap-[100px]'>
                        <h2 className="text-[#DD0101] uppercase font-semibold md:text-[28px] text-2xl leading-[30.8px] tracking-[2.8px]">TYPOGRAPHY</h2>
                        <p className="text-[#2A2A2A] mt-6 md:mt-0 lg:text-2xl md:text-[20px] text-[18px] md:leading-[32px] leading-[30px] md:tracking-[.72px] tracking-[.36px]">
                        The main goal was to ensure users could easily navigate and accomplish their tasks. We aimed to provide a seamless experience, leveraging the clean and modern typefaces Rubik and Karla to create a visually engaging and user-friendly interface.
                        </p>
                    </div>
                </div>
                <img src={typo} alt="" />
            </div>
            <div className="mb-8">
                <div className='md:flex xl:gap-[172px] lg:gap-[140px] md:gap-[100px]'>
                    <h2 className="text-[#DD0101] uppercase font-semibold md:text-[28px] text-2xl leading-[30.8px] tracking-[2.8px]">Colors</h2>
                    <p className="text-[#2A2A2A] mt-6 md:mt-0 lg:text-2xl md:text-[20px] text-[18px] md:leading-[32px] leading-[30px] md:tracking-[.72px] tracking-[.36px]">
                        Utilizing Teal Mist and Deep Ocean as primary colors creates a vibrant and grounded visual presence, while Cloud White and Slate Grey in the secondary palette add a sense of balance and elegance. The accent colors, Golden Sunrise and Rosy Blush, infuse warmth and energy, enhancing the overall design with a touch of sophistication.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-[56px] mt-[36px]">
                {/* Primary Colors */}
                <div className="space-y-4">
                    <div
                        className="h-full rounded-[16px] shadow-lg transition-transform hover:scale-105 flex items-end"
                        style={{ backgroundColor: '#4FA3A3' }}
                    >
                        <div className="p-6 text-white">
                            <span className="font-semibold">PRIMARY</span>
                            <p className="text-base opacity-90">#4FA3A3</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div
                        className="h-full rounded-[16px] shadow-lg transition-transform hover:scale-105 items-end flex"
                        style={{ backgroundColor: '#204248' }}
                    >
                        <div className="p-6 text-white ">
                            <span className="font-semibold">PRIMARY</span>
                            <p className="text-base opacity-90">#204248</p>
                        </div>
                    </div>
                </div>

                {/* Secondary Colors */}
                <div>

                    <div className="space-y-4">
                        <div
                            className="h-[120px] rounded-[16px] shadow-lg transition-transform hover:scale-105 items-end flex"
                            style={{ backgroundColor: '#EFFFFF' }}
                        >
                            <div className="p-6 text-gray-600">
                                <span className="font-semibold">SECONDARY</span>
                                <p className="text-base opacity-90">#EFFFFF</p>
                            </div>
                        </div>

                        <div
                            className="h-[120px] rounded-[16px] shadow-lg transition-transform hover:scale-105 items-end flex"
                            style={{ backgroundColor: '#7E8186' }}
                        >
                            <div className="p-6 text-white">
                                <span className="font-semibold">SECONDARY</span>
                                <p className="text-base opacity-90">#7E8186</p>
                            </div>
                        </div>
                        {/* Accent Colors */}
                        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                                className="h-[150px] rounded-[16px] shadow-lg transition-transform hover:scale-105 flex items-end"
                                style={{ backgroundColor: '#FDAF2A' }}
                            >
                                <div className="p-6 text-white">
                                    <span className="font-semibold">ACCENT</span>
                                    <p className="text-base opacity-90">#FDAF2A</p>
                                </div>
                            </div>

                            <div
                                className="h-[150px] rounded-[16px] shadow-lg transition-transform hover:scale-105 items-end flex"
                                style={{ backgroundColor: '#E03288' }}
                            >
                                <div className="p-6 text-white">
                                    <span className="font-semibold">ACCENT</span>
                                    <p className="text-base opacity-90">#E03288</p>
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