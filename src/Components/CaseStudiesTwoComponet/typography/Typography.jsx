import React from 'react';
import ColorPalette from './ColorPlatte';

const Typography = () => {

    const typographyExamples = [
        {

            sampleText: "Aa",
            style: "Inter Bold",
            description: "for headings",
            className: "text-5xl font-bold", // Tailwind classes for styling
        },
        {
            sampleText: "Aa",
            style: "Inter Medium",
            description: "for buttons",
            className: "text-5xl font-medium", // Tailwind classes for styling
        },
        {
            sampleText: "Aa",
            sampleTextTwo: "Aa",
            style: "Inter Regular & Light",
            description: "for body copy",
            className: "text-5xl font-light", // Tailwind classes for styling
        },
    ];

    return (
        <div className=''>
            <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 ">
                <div className=" bg-[#F2ECEB] 2xl:p-[144px] xl:p-[120px] lg:p-[100px] md:p-[80px] p-[50px]">
                    <h1 className="text-[#DD0101] md:tracking-[2.8px] md:text-[28px] tracking-[1px] text-2xl uppercase font-semibold ">
                        Typography
                    </h1>
                    <p className="text-[#2A2A2A] lg:mt-12 md:mt-10 mt-6 traking-[.72px] lg:text-2xl md:text-[22px] text-[18px]">
                        Inter is a clean, modern sans-serif typeface optimized for digital
                        interfaces. Its excellent legibility and versatile styles make it
                        ideal for creating professional, user-friendly designs, perfectly
                        aligning with the Watt Wise portal's sleek aesthetic.
                    </p>

                    <div className="2xl:mt-[142px] xl:mt-[120px] lg:mt-[100px] md:mt-[80px] mt-[60px] flex md:flex-row flex-col gap-6 2xl:gap-[92px] xl:gap-[82px] lg:gap-[72px] md:gap-[22px] text-[#2A2A2A] font-inter justify-evenly">
                        {
                            typographyExamples.map((item, i) => (
                                <div className="text-center ">
                                    <p className={`xl:text-[112px] lg:text-[90px] md:text-[60px] text-[52px] ${i === 0 ? "font-[700]" : i === 1 ? "font-[500]" : "font-[400]"} `}>{item.sampleText} <span className='font-[300]'>{item?.sampleTextTwo}</span></p>
                                    <h2 className="xl:mt-4 mt-2 xl:text-[32px] text-[26px] font-semibold xl:leading-[38.4px]">{item.style}</h2>
                                    <p className="xl:text-2xl  lg:text-[22px] text-[20px]  lg:mt-2  leading-[32px]">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
                <ColorPalette></ColorPalette>
        </div>
    );
};

export default Typography;





