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
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0  lg:py-[200px] md:py-[150px] py-[100px]'>
                <div>
                    <h2 className='md:text-4xl lg:text-5xl text-2xl text-[#DD0101] text-center font-[900] lg:tracking-[9.6px] md:tracking-[6px] tracking-[4px] opacity-25 uppercase leading-[110%]'>The design process</h2>
                    <div className='lg:mt-[80px] md:mt-[60px] mt-[40px] '>
                        <div className='flex-col md:space-y-10 space-y-7 max-w-[840px] mx-auto  '>
                            {
                                steps.map((step, i) => (
                                    <div key={i} className={`flex md:gap-6 gap-3  ${i % 2 === 1 ? "flex-row-reverse  " : ""}`}>
                                        <div className='relative lg:w-[124px] lg:h-[127px] md:w-[100px] md:h-[103px] w-[60px] h-[57px]'>
                                        <div className={`bg-[#DD0101] absolute  ${i % 2 === 1 ? "bottom-0 left-0 " : "bottom-0 right-0"} md:w-[81px] md:h-[81px] w-[40px] h-[43px] lg:w-[100px] lg:h-[100px]    flex justify-center items-center `}>
                                            <p>{step.icon}</p>
                                        </div>
                                            <span className={`lg:text-5xl md:text-4xl text-2xl lg:tracking-[1.44px] md:tracking-[1.2px] tracking-[.72px] leading-[110%] text-[#221429] font-[900] absolute top-0   ${i % 2 === 1 ? "right-0" : "left-0"}`}>{step.step}</span>
                                        </div>
                                        {/* padding: 16px 16px 39px 40px; */}

                                        <div className='text-[#2A2A2A] lg:w-[73%] md:w-[76%]  lg:translate-y-[18%]  translate-y-[12%]'>
                                            <h1 className={`font-[500] lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px] md:text-2xl text-[16px] leading-[110%] ${i % 2 === 1 ? "text-end" : ""} `}>{step.title}</h1>
                                            <ul className={`${i % 2 === 1 ? "border-style-left md:pt-4 md:pr-4 md:pb-[39px] md:pl-[40px] pt-[6px] pl-8 pb-5" : "border-style-right md:pt-4 md:pr-4 md:pb-[39px] md:pl-[40px]  pt-2 pl-6 pb-5 pr-3"}  md:text-[20px] text-sm  md:tracking-[.6px] md:mt-2 mt-[6px]`}>
                                                <li className='max-w-[45ch] leading-[120%] list-disc'>{step.pointOne}</li>
                                                <li className='max-w-[45ch] leading-[120%] list-disc'>{step.pointTwo}</li>
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
                <div className="lg:pt-[220px] md:pt-[170px] pt-[120px]">
                    <FeaturesSection></FeaturesSection>
                </div>
            </div>
        </div>
    );
};

export default DesignProcess;





