import React from 'react';
import { BsListCheck, BsPalette, BsRecycle } from "react-icons/bs";
import { PiSidebar } from "react-icons/pi";
import FeaturesSection from './FeaturesSection';


const steps = [
    {
        step: "01",
        icon: <BsListCheck className="lg:text-[56px] md:text-[46px] text-2xl text-white" />,
        title: "Requirement Analysis",
        pointOne: "Extracted key features, workflows, and technical specifications directly from the Business Requirement Document (BRD).",
        pointTwo: "Mapped out essential user tasks to establish a clear foundation for the design."
    },
    {
        step: "02",
        icon: <PiSidebar className="lg:text-[56px] md:text-[46px] text-2xl text-white" />,
        title: "Wireframing & Layout Creation",
        pointOne: "Developed high-fidelity wireframes to represent user flows, ensuring intuitive navigation and a logical layout.",
        pointTwo: "Focused on creating a seamless experience for essential tasks like account management, billing, and energy tracking."
    },
    {
        step: "03",
        icon: <BsPalette className="lg:text-[56px] md:text-[46px] text-2xl text-white" />,
        title: "UI Design in Light & Dark Mode",
        pointOne: "Designed visually engaging screens for both light and dark themes, maintaining consistency in typography, color palette, and visual hierarchy.",
        pointTwo: "Prioritized accessibility and readability to ensure usability across different environments and user preferences.",
    },
    {
        step: "04",
        icon: <BsRecycle className="lg:text-[56px] md:text-[46px] text-2xl text-white" />,
        title: "Iterative Feedback",
        pointOne: "Conducted internal reviews to align the designs with client goals and technical expectations.",
        pointTwo: "Refined the UI elements and flows based on feedback to deliver a polished, user-centric solution."
    },
];

const DesignProcess = () => {
    return (
        <div className='bg-[#f9f6f5]'>
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 lg:py-[200px] md:py-[150px] py-[100px]'>
                <div>
                    <h2 className='md:text-5xl text-2xl text-[#DD0101] text-center font-[900] lg:tracking-[9.6px] md:tracking-[2px] tracking-[1px] opacity-25'>The design process</h2>
                    <div className='mt-[80px]'>
                        <div className='flex-col space-y-[42px]'>
                            {
                                steps.map((step, i) => (
                                    <div key={i} className={`flex md:gap-6 gap-3 justify-center ${i % 2 === 1 ? "flex-row-reverse lg:ml-24 md:ml-16" : ""}`}>
                                        <div className='bg-[#DD0101] lg:w-[100px] lg:h-[100px]  md:w-[80px] md:h-[80px] w-[40px] h-[40px] flex justify-center items-center relative'>
                                            <p>{step.icon}</p>
                                            <span className={`lg:text-5xl md:text-4xl text-2xl text-[#221429] font-[900] absolute -top-0  -translate-y-[50%] md:-translate-x-[100%] -translate-x-[50%] ${i % 2 === 1 ? "md:translate-x-[100%] translate-x-[50%]" : ""}`}>{step.step}</span>
                                        </div>
                                        {/* padding: 16px 16px 39px 40px; */}

                                        <div className='text-[#2A2A2A]'>
                                            <h1 className={`font-[500] md:tracking-[2.4px] tracking-[1px] md:text-2xl text-[18px] leading-[26.4px] ${i % 2 === 1 ? "text-end" : ""} `}>{step.title}</h1>
                                            <ul className={`${i % 2 === 1 ? "border-style-left md:pt-4 md:pr-4 md:pb-[39px] md:pl-[40px] pt-2 pl-8 pb-5" : "border-style-right md:pt-4 md:pr-4 md:pb-[39px] md:pl-[40px]  pt-2 pl-8 pb-5 pr-4"}  md:text-[20px] text-sm md:leading-[24px] md:tracking-[.6px] mt-2`}>
                                                <li className='max-w-[40ch] list-disc'>{step.pointOne}</li>
                                                <li className='max-w-[40ch] list-disc'>{step.pointTwo}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="lg:pt-[200px] md:pt-[150px] pt-[100px]">
                    <FeaturesSection></FeaturesSection>
                </div>
            </div>
        </div>
    );
};

export default DesignProcess;





