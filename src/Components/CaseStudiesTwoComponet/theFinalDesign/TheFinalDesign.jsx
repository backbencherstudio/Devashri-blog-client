import React from 'react';
import img1 from "../../../assets/case-studies-2/gif1.gif"
import img2 from "../../../assets/case-studies-2/gif2.gif"
import img3 from "../../../assets/case-studies-2/gif3.gif"
import img4 from "../../../assets/case-studies-2/gif4.gif"
import img5 from "../../../assets/case-studies-2/gif5.gif"
import img6 from "../../../assets/case-studies-2/gif6.gif"
import img7 from "../../../assets/case-studies-2/gif7.gif"
import img8 from "../../../assets/case-studies-2/gif8.gif"
import bgImg from "../../../assets/case-studies-2/Laptop Mockup 1.png"


const TheFinalDesign = () => {
    return (
        <div className='bg-[#f9f6f5] lg:mt-[200px] md:mt-[150px] mt-[100px] lg:mb-[200px] text-[#2A2A2A]'>
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0'>
                <div className='lg:mb-[120px] md:mb-[100px] mb-[60px]'>
                    <h3 className='md:text-[28px] text-2xl font-semibold md:tracking-[2.8px] tracking-[1.2px] leading-[110%] text-center text-[#DD0101]'>THE FINAL DESIGN</h3>
                    <h1 className='lg:text-[48px] md:text-[36px] text-2xl font-semibold md:tracking-[1.44px] tracking-[.72px] text-center mt-3 leading-[110%]  lg:mt-4'>Empowering Smarter Energy Management</h1>
                </div>
                <div className='flex flex-col lg:gap-[160px] md:gap-[110px] gap-[80px]'>
                    {sections.map((item, i) => (
                        <div key={i} className='md:flex  lg:gap-6 gap-4'>
                            <div className={` ${i % 2 == 1 && "md:order-1 md:mt-0" || i % 2 == 0 && "md:mt-[80px]"}`}>
                                {/* <img src={item.img} alt="" /> */}
                                <div className=' p-[8%] bg-no-repeat  bg-contain ' style={{ backgroundImage: `url(${bgImg})`, }}>
                                    <div className=''>
                                        <img className='-translate-y-[8.5%]' src={item.img} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`max-w-[408px]  ${
                                item.id === 2 && "xl:mt-[115px] lg:mt-[98px] md:mt-[75px]" ||
                                item.id === 4 && "md:mt-[18.5%]" ||
                                item.id === 6 && "md:mt-[12%]" ||
                                item.id === 8 && "md:mt-[9%]"
                             }`}>
                                <div className='flex md:mb-[40px] mb-[20px] mt-6 md:mt-0 gap-6 items-center'>
                                    <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                    <h3 className='text-2xl font-semibold tracking-[.72px] leading-[133%] text-[#2A2A2A]'>{item.title}</h3>
                                </div>
                                <div className={`font-medium ${item.id > 2 ? "lg:text-2xl" : "lg:text-[20px]"}   md:text-[18px] text-base leading-[140%] md:tracking-[.6px] tracking-[.32px]  `}>
                                    <div className=''>
                                        <h2 className=' leading-[140%]'>{item.features[0]?.label} <span className='font-normal'> {item.features[0].description}</span></h2>

                                    </div>
                                    <div className=''>
                                        <h2 className=''>{item.features[1]?.label}<span className='font-normal  leading-[140%]'>{item.features[1]?.description} </span></h2>
                                    </div>
                                    <div className=''>
                                        <h2 className=''>{item.features[2]?.label} <span className='font-normal  leading-[140%]'> {item.features[2]?.description}</span></h2>
                                    </div>
                                    <div className=''>
                                        <h2 className=''>{item.features[3]?.label} <span className='font-normal  leading-[140%]'>{item.features[3]?.description} </span></h2>
                                    </div>
                                    <div className=''>
                                        <h2 className=''> {item.features[4]?.label} <span className='font-normal  leading-[140%]'> {item?.features[4]?.description}</span></h2>
                                    </div>
                                    <div className=''>
                                        <h2 className=''> {item.features[5]?.label} <span className='font-normal  leading-[140%]'> {item?.features[5]?.description}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default TheFinalDesign;

const sections = [
    {
        id:1,
        title: "Login",
        img: img1,
        features: [
            {
                label: "Branding: ",
                description: "Gradient background, logo consistency, and clear brand identity.",
            },
            {
                label: "Minimal Design: ",
                description: "Simple, labeled input fields for clarity.",
            },
            {
                label: "CTA Focus: ",
                description: `Prominent "Login" button for visibility.`,
            },
            {
                label: "Usability: ",
                description: `"Remember Me" checkbox and "Forgot Password" link for convenience.`,
            },
            {
                label: "Accessibility: ",
                description: "High contrast, large buttons, and structured layout for ease of use.",
            },
        ],
    },
    {
        id:2,
        title: "Dashboard",
        img: img2,
        features: [
            {
                label: "Grid-Based Layout: ",
                description: "Clear organization of information into distinct sections.",
            },
            {
                label: "Key Info Display: ",
                description: "Account details, payments, and usage stats upfront.",
            },
            {
                label: "Actionable Buttons: ",
                description: `Intuitive CTAs like "Pay Now" and "View My Usage" for quick actions.`,
            },
            {
                label: "Alerts Section: ",
                description: "Highlights key notifications for user attention.",
            },
            {
                label: "Service Options: ",
                description: "Easy access to FAQs, quotes, and service requests.",
            },
            {
                label: "Calming Visuals: ",
                description: "Soft gradients and clean typography enhance readability.",
            },
        ],
    },
    {
        id:3,
        title: "My Account",
        img: img3,
        features: [
            {
                label: "Branding: ",
                description: "Gradient background, consistent logo placement, and modern aesthetic.",
            },
            {
                label: "Layout: ",
                description: "Card-based design with vertical navigation for clarity and focus.",
            },
            {
                label: "Content: ",
                description: "Prioritized primary details; secondary details neatly organized.",
            },
            {
                label: "Actionable: ",
                description: `Clear CTAs like "Edit" and "Change Password" for quick access.`,
            },
        ],
    },
    {
        id:4,
        title: "My Contract",
        img: img4,
        features: [
            {
                label: "Branding: ",
                description: "Consistent logo and color-coded highlights.",
            },
            {
                label: "Layout: ",
                description: "Card-based design with clear hierarchy.",
            },
            {
                label: "Content: ",
                description: "Key contract details and renewal status upfront.",
            },
            {
                label: "Actionable: ",
                description: `CTAs like "Upload Meter Read" ensure easy interaction.`,
            },
        ],
    },
    {
        id:5,
        title: "Billing",
        img: img5,
        features: [
            {
                label: "Branding: ",
                description: "Consistent logo, blue highlights for CTAs, and clear payment status indicators.",
            },
            {
                label: "Layout: ",
                description: "Tabs for Billing History and Group Billing, with two-column design for details and visual data.",
            },
            {
                label: "Content: ",
                description: "Key billing details and payment status upfront for quick access.",
            },
            {
                label: "Actionable: ",
                description: 'Prominent "Pay" button, search/filter tools, and download icons for efficiency.',
            },
        ],
    },
    {
        id:6,
        title: "Payment",
        img: img6,
        features: [
            {
                label: "Branding: ",
                description: "Consistent blue accents, clear payment status indicators.",
            },
            {
                label: "Layout: ",
                description: "Segmented tabs, two-section design with account details and payment records.",
            },
            {
                label: "Content: ",
                description: "Key account info and payment records for easy access.",
            },
            {
                label: "Actionable: ",
                description: `"View Payment Plan" button, search/filter, multi-select checkboxes, and pagination.`,
            },
        ],
    },
    {
        id:7,
        title: "My Usage",
        img: img7,
        features: [
            {
                label: "Branding: ",
                description: `Consistent logo, gradient background, and blue accents for CTAs like "Download HH Data."`,
            },
            {
                label: "Layout: ",
                description: `Clean structure with MPAN, date filters, and action buttons grouped logically above the "Usage Trend" chart.`,
            },
            {
                label: "Content: ",
                description: "Key usage trends visualized through a line graph for quick insights over the selected period.",
            },
            {
                label: "Actionable: ",
                description: `Toggle between "Power Consumption" and "Spend Value(£)" with a prominent 'Download HH Data' button for exporting.`,
            },
        ],
    },
    {
        id:8,
        title: "Meter Readings",
        img: img8,
        features: [
            {
                label: "Branding: ",
                description: "Consistent logo placement and blue accents for interactive elements ensure a cohesive identity.",
            },
            {
                label: "Layout: ",
            },
            {
                label: "Submit Meter Reading: ",
                description: " Organized inputs for readings with an intuitive upload section.",
            },
            {
                label: "Previous Reading: ",
                description: "Tabular format for comparing past submissions with clear details.",
            },
            {
                label: "Content: ",
                description: "Key details like MPAN and address are upfront, with helper text aiding accurate submissions.",
            },
            {
                label: "Actionable: ",
                description: `Prominent "Reset" and "Submit" buttons, multimedia upload feature, and icons for viewing past uploads enhance usability.`,
            },
        ],
    },
];
