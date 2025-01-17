import React from 'react';
import { BsListCheck, BsPalette, BsRecycle } from "react-icons/bs";
import { PiSidebar } from "react-icons/pi";
import { PiShieldStar,PiChartLine,PiSpeedometerLight,PiFileArrowDownDuotone,PiGraph,PiMagnifyingGlassLight,PiUserCircle } from "react-icons/pi";



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



const FeaturesSection = () => {


    const features = [
        {
            icon: <PiShieldStar className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px] " />,
            title: "Secure Login",
            description: "Ensuring safe access to the portal for registered users through secure authentication.",
        },
        {
            icon: <PiChartLine className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px]" />,
            title: "Customer Dashboard",
            description:
                "Providing a comprehensive and user-friendly dashboard to view energy usage, billing, and contract details.",
        },
        {
            icon: <PiUserCircle className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px]" />,
            title: "Account Management",
            description:
                "Simplifying customer management with easy access to account information, contract documents, and payment history.",
        },
        {
            icon: <PiSpeedometerLight className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px]" />,
            title: "Meter Reads & Usage",
            description: "Allowing users to track and view meter readings along with real-time usage data.",
        },
        {
            icon: <PiFileArrowDownDuotone className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px]" />,
            title: "Bill View & Download",
            description: "Enabling users to access, view, and download their bills seamlessly.",
        },
        {
            icon: <PiMagnifyingGlassLight className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px]" />,
            title: "Advanced Search System",
            description:
                "Implementing advanced search functionality with filters and custom sorting for efficient data retrieval.",
        },
        {
            icon: <PiGraph className="text-[#DD0101] lg:w-[64px] lg:h-[64px] md:w-[56px] md:h-[56px] w-[48px] h-[48px]" />,
            title: "Scalability & Integration",
            description:
                "Ensuring the portal is scalable for future system integrations like ticketing systems.",
        },
    ];

    return (
        <div className="md:flex gap-6">
            <div>
                <h1 className="text-[#DD0101] lg:text-[28px] md:text-[24px] text-[20px] uppercase font-semibold tracking-[2.8px] leading-[30.8px]">
                    Understanding <br /> the Requirements
                </h1>
            </div>
            <div>
                <p className="lg:text-[24px] md:text-[20px] font-[500] pt-4 md:pt-0 lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.36px] leading-[26.4px] text-[#221429]">
                    The Watt Wise Customer Portal was designed with the following key
                    features in mind, as outlined in the Business Requirement Document
                    (BRD):
                </p>
                <div className="mt-8 flex flex-col gap-10">
                    {features.map((feature, index) => (
                        <div>
                            <div>
                                <h2 className="lg:text-2xl md:text-[20px] text-[18px] font-semibold tracking-[.72px] text-[#2A2A2A] opacity-80 ">
                                    {feature.title}
                                </h2>
                            </div>
                            <div key={index} className="flex items-start md:gap-8 gap-4 mt-2">
                                <div className=''>{feature.icon}</div>
                                <p className="lg:text-2xl md:text-[20px] text-base text-[#2A2A2A] md:tracking-[.72px] tracking-[.36px]">{feature.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


