import React from 'react';
import img1 from "../../../assets/case-studies-2/Login GIF.png"
import img2 from "../../../assets/case-studies-2/Dashboard GIF.png"
import img3 from "../../../assets/case-studies-2/My Account GIF.png"
import img4 from "../../../assets/case-studies-2/My Contract GIF.png"
import img5 from "../../../assets/case-studies-2/Billing GIF.png"
import img6 from "../../../assets/case-studies-2/Payment GIF.png"
import img7 from "../../../assets/case-studies-2/My Usage GIF.png"
import img8 from "../../../assets/case-studies-2/Meter Reading GIF.png"

const TheFinalDesign = () => {
    return (
        <div className='bg-[#f9f6f5] lg:mt-[200px] md:mt-[150px] mt-[100px]'>
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0'>
                <div className='lg:mb-[120px] md:mb-[100px] mb-[60px]'>
                    <h3 className='md:text-[28px] text-2xl font-semibold md:tracking-[2.8px] tracking-[1.2px] text-center text-[#DD0101]'>THE FINAL DESIGN</h3>
                    <h1 className='lg:text-[48px] md:text-[36px] text-2xl font-semibold md:tracking-[1.44px] tracking-[.72px] text-center mt-3  lg:mt-4'>Empowering Smarter Energy Management</h1>
                </div>
                <div className='flex flex-col lg:gap-[200px] md:gap-[150px] gap-[100px]'>
                    {sections.map((item,i) => (
                        <div key={i} className='grid md:grid-cols-5  lg:gap-6 gap-4'>
                        <div className={`md:col-span-3 md:mt-[80px] ${i % 2 == 1 && "md:order-1 md:mt-0"}`}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={`md:col-span-2  ${i % 2 == 1 && "md:mt-[80px]"}`}>
                            <div className='flex md:mb-[40px] mb-[20px] mt-6 md:mt-0 gap-6 items-center'>
                                <div className='h-4 w-4 bg-[#DD0101]  rotate-45'></div>
                                <h3 className='text-2xl font-semibold tracking-[.72px] text-[#2A2A2A]'>{item.title}</h3>
                            </div>
                          <div className='font-medium xl:text-2xl lg:text-[18px] md:text-[15px] text-base tracking-[.6px] lg:leading-[28px] '>
                          <div className=''>
                                <h2 className=''>{item.features[0]?.label} <span className='font-normal'> {item.features[0].description}</span></h2>
        
                                </div>
                            <div className=''>
                                <h2 className=''>{item.features[1]?.label}<span className='font-normal'>{item.features[1]?.description} </span></h2>                             
                                </div>
                            <div className=''> 
                                <h2 className=''>{item.features[2]?.label} <span className='font-normal'> {item.features[2]?.description}</span></h2>                               
                                </div>
                            <div className=''>
                                <h2 className=''>{item.features[3]?.label} <span className='font-normal'>{item.features[3]?.description} </span></h2>           
                                </div>
                            <div className=''>
                                <h2 className=''> {item.features[4]?.label} <span className='font-normal'> {item?.features[4]?.description}</span></h2>                               
                                </div>
                            <div className=''>
                                <h2 className=''> {item.features[5]?.label } <span className='font-normal'> {item?.features[5]?.description}</span></h2>                               
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

// const sections = [
//     {
//         title: "Login",
//         img: img1,
//         features: [
//             {
//                 label: "Branding",
//                 description: "Gradient background, logo consistency, and clear brand identity.",
//             },
//             {
//                 label: "Minimal Design",
//                 description: "Simple, labeled input fields for clarity.",
//             },
//             {
//                 label: "CTA Focus",
//                 description: "Prominent 'Login' button for visibility.",
//             },
//             {
//                 label: "Usability",
//                 description: "'Remember Me' checkbox and 'Forgot Password' link for convenience.",
//             },
//             {
//                 label: "Accessibility",
//                 description: "High contrast, large buttons, and structured layout for ease of use.",
//             },
//         ],
//     },
//     {
//         title: "Dashboard",
//         img: img2,
//         features: [
//             {
//                 label: "Grid-Based Layout",
//                 description: "Clear organization of information into distinct sections.",
//             },
//             {
//                 label: "Key Info Display",
//                 description: "Account details, payments, and usage statistics.",
//             },
//             {
//                 label: "Actionable Buttons",
//                 description: "Intuitive CTAs like 'Pay Now' and 'View My Usage' for quick actions.",
//             },
//             {
//                 label: "Alerts Section",
//                 description: "Highlights key notifications and alerts.",
//             },
//             {
//                 label: "Service Options",
//                 description: "Easy access to FAQs, quotes, and service requests.",
//             },
//             {
//                 label: "Calming Visuals",
//                 description: "Soft gradients and clean typography enhance readability.",
//             },
//         ],
//     },
// ];

const sections = [
    {
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
                description: "Prominent 'Login' button for visibility.",
            },
            {
                label: "Usability: ",
                description: "'Remember Me' checkbox and 'Forgot Password' link for convenience.",
            },
            {
                label: "Accessibility: ",
                description: "High contrast, large buttons, and structured layout for ease of use.",
            },
        ],
    },
    {
        title: "Dashboard",
        img: img2,
        features: [
            {
                label: "Grid-Based Layout: ",
                description: "Clear organization of information into distinct sections.",
            },
            {
                label: "Key Info Display: ",
                description: "Account details, payments, and usage statistics.",
            },
            {
                label: "Actionable Buttons: ",
                description: "Intuitive CTAs like 'Pay Now' and 'View My Usage' for quick actions.",
            },
            {
                label: "Alerts Section: ",
                description: "Highlights key notifications and alerts.",
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
                description: "Clear CTAs like 'Edit' and 'Change Password' for quick access.",
            },
        ],
    },
    {
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
                description: "CTAs like 'Upload Meter Read' ensure easy interaction.",
            },
        ],
    },
    {
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
                description: "Prominent 'Pay' button, search/filter tools, and download icons for efficiency.",
            },
        ],
    },
    {
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
                description: "'View Payment Plan' button, search/filter, multi-select checkboxes, and pagination.",
            },
        ],
    },
    {
        title: "My Usage",
        img: img7,
        features: [
            {
                label: "Branding: ",
                description: "Consistent logo, gradient background, and blue accents for CTAs like 'Download HH Data.'",
            },
            {
                label: "Layout: ",
                description: "Clean structure with MPAN, date filters, and action buttons grouped logically above the 'Usage Trend' chart.",
            },
            {
                label: "Content: ",
                description: "Key usage trends visualized through a line graph for quick insights over the selected period.",
            },
            {
                label: "Actionable: ",
                description: "Toggle between 'Power Consumption' and 'Spend Value(£)' with a prominent 'Download HH Data' button for exporting.",
            },
        ],
    },
    {
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
                description: "Submit Meter Reading: Organized inputs for readings with an intuitive upload section.",
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
                description: "Prominent 'Reset' and 'Submit' buttons, multimedia upload feature, and icons for viewing past uploads enhance usability.",
            },
        ],
    },
];
