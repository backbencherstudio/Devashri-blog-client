import React from 'react';
import img1 from "../../assets/competitiveAnalysis/Untitled - Frame 1.png"
import img2 from "../../assets/competitiveAnalysis/Untitled - Frame 5.png"
import img3 from "../../assets/competitiveAnalysis/Untitled - Frame 6.png"
import img4 from "../../assets/competitiveAnalysis/Untitled - Frame 7.png"
const CompetitiveAnalysis = () => {
    return (
        <div className="mb-28">
            <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
                {/* Title Section */}
                <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[28px] lg:leading-[30px] tracking-[1.5px] lg:tracking-[2.8px] text-[#DD0101]">
                COMPETITIVE
                ANALYSIS
                </h1>

                {/* Content Section */}
                <div className="w-full md:w-[73%]">
                {/* Intro Paragraph */}
                <p className="font-medium mb-14 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-justify text-[#221429]">
                Benchmarking and understanding the housing and rental ecosystem
                </p>

                <div className="w-full md:w-[73%]">
                    <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic lg:mb-6 md:mb-5 mb-4'><span className='font-medium'>Direct Competitors:</span> Zolo Stays, NestAway, and NoBroker.</p>
                    <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic lg:mb-6 md:mb-5 mb-4'><span className='font-medium'>Indirect Competitors:</span> 99acres and Magicbricks.</p>
                    <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic mb-14'><span className='font-medium'>Parameters Benchmarked:</span> Service model, target audience, brand positioning, pricing structure, technology integration, and customer experience.</p>

                    <div className='grid md:grid-cols-2 gap-6'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default CompetitiveAnalysis;