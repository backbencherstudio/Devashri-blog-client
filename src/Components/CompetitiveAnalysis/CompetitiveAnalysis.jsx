import React from 'react';
import img1 from "../../assets/competitiveAnalysis/Untitled - Frame 1.png"
import img2 from "../../assets/competitiveAnalysis/Untitled - Frame 5.png"
import img3 from "../../assets/competitiveAnalysis/Untitled - Frame 6.png"
import img4 from "../../assets/competitiveAnalysis/Untitled - Frame 7.png"
const CompetitiveAnalysis = () => {
    return (
        <div className="lg:mb-[120px] md:mb-[100px] mb-[60px] text-[#2A2A2A]">
            <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-6">
                {/* Title Section */}
                <h1 className="md:max-w-[197px] text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.5px] lg:tracking-[2.8px] text-[#DD0101]">
                COMPETITIVE
                ANALYSIS
                </h1>

                {/* Content Section */}
                <div className="w-full lg:w-[74.5%] ">
                {/* Intro Paragraph */}
                <p className="font-medium lg:mb-14 md:mb-10 mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[110%]  text-justify text-[#221429] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
                Benchmarking and understanding the housing and rental ecosystem
                </p>

                <div className="">
                    <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]  leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic lg:mb-6 md:mb-5 mb-4'><span className='font-medium'>Direct Competitors:</span> Zolo Stays, NestAway, and NoBroker.</p>
                    <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]  leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic lg:mb-6 md:mb-5 mb-4'><span className='font-medium'>Indirect Competitors:</span> 99acres and Magicbricks.</p>
                    <p className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]  leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic lg:mb-14 md:mb-10 mb-8'><span className='font-medium'>Parameters Benchmarked:</span> Service model, target audience, brand positioning, pricing structure, technology integration, and customer experience.</p>

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