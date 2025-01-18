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
        <div className='bg-[#f9f6f5] my-[200px]'>
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0'>
                <div className='lg:mb-[120px] md:mb-[100px] mb-[60px]'>
                    <h3 className='md:text-[28px] text-2xl font-semibold md:tracking-[2.8px] tracking-[1.2px] text-center text-[#DD0101]'>THE FINAL DESIGN</h3>
                    <h1 className='lg:text-[48px] md:text-[36px] text-[32px] font-semibold md:tracking-[1.44px] tracking-[.72px] text-center'>Empowering Smarter Energy Management</h1>
                </div>
                <div className='flex flex-col'>
                    <div className='grid grid-cols-7'>
                        <div className='col-span-4'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='col-span-3'>
                            <div className='flex mb-[40px]'>
                                <div>logo</div>
                                <h3>Login</h3>
                            </div>
                            <div className=''>
                                <h2 className='font-bold'>Branding: <span className='font-normal'> Gradient background, logo consistency, and clear brand identity.</span></h2>
        
                                </div>
                            <div>
                                <h2 className='font-bold'>Minimal Design:<span className='font-normal'> Simple, labeled input fields for clarity.</span></h2>                             
                                </div>
                            <div>
                                <h2 className='font-bold'>CTA Focus: <span className='font-normal'> Prominent "Login" button for visibility.</span></h2>                               
                                </div>
                            <div>
                                <h2 className='font-bold'>Usability: <span className='font-normal'> "Remember Me" checkbox and "Forgot Password" link for convenience.</span></h2>           
                                </div>
                            <div>
                                <h2 className='font-bold'> Accessibility: <span className='font-normal'> High contrast, large buttons, and structured layout for ease of use.</span></h2>                               
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheFinalDesign;

const sections = [
    {
        title: "Login",
        img: img1,
        features: [
            {
                label: "Branding",
                description: "Gradient background, logo consistency, and clear brand identity.",
            },
            {
                label: "Minimal Design",
                description: "Simple, labeled input fields for clarity.",
            },
            {
                label: "CTA Focus",
                description: "Prominent 'Login' button for visibility.",
            },
            {
                label: "Usability",
                description: "'Remember Me' checkbox and 'Forgot Password' link for convenience.",
            },
            {
                label: "Accessibility",
                description: "High contrast, large buttons, and structured layout for ease of use.",
            },
        ],
    },
    {
        title: "Dashboard",
        img: img2,
        features: [
            {
                label: "Grid-Based Layout",
                description: "Clear organization of information into distinct sections.",
            },
            {
                label: "Key Info Display",
                description: "Account details, payments, and usage statistics.",
            },
            {
                label: "Actionable Buttons",
                description: "Intuitive CTAs like 'Pay Now' and 'View My Usage' for quick actions.",
            },
            {
                label: "User Section",
                description: "Highlights key notifications and alerts.",
            },
            {
                label: "Service Options",
                description: "Easy access to FAQs, quotes, and service requests.",
            },
            {
                label: "Clean Layout",
                description: "Visual spacing, clear sections, and clean typography for enhanced readability.",
            },
        ],
    },
];
