import { PiShieldStar,PiChartLine,PiSpeedometerLight,PiFileArrowDownDuotone,PiGraph,PiMagnifyingGlassLight,PiUserCircle } from "react-icons/pi";


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
            <div className="md:max-w-[264px]">
                <h1 className="text-[#DD0101] lg:text-[28px] md:text-[24px] text-[20px] uppercase font-semibold lg:tracking-[2.8px] md:tracking-[1.4px] tracking-[.72px] leading-[110%]">
                    Understanding the Requirements
                </h1>
            </div>
            <div className="max-w-[840px]">
                <p className="lg:text-[24px] mb-14 md:text-[20px] font-[500] pt-4 md:pt-0 lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px] leading-[110%] text-[#221429]">
                    The Watt Wise Customer Portal was designed with the following key
                    features in mind, as outlined in the Business Requirement Document
                    (BRD):
                </p>
                <div className="flex flex-col lg:gap-10 md:gap-8 gap-6">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <div>
                                <h2 className="lg:text-2xl md:text-[20px] text-[18px] font-semibold tracking-[.72px] text-[#2A2A2A] opacity-80 ">
                                    {feature.title}
                                </h2>
                            </div>
                            <div key={index} className="flex items-start md:gap-8 gap-4 mt-2">
                                <div className=''>{feature.icon}</div>
                                <p className="lg:text-2xl md:text-[20px] text-base text-[#2A2A2A] md:tracking-[.72px] tracking-[.36px] leading-[133%]">{feature.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection