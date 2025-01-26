import React from 'react';
import adminPage from "/adminPage.png"
const WebToolResortStuff = () => {
    return (
        <div className='bg-[#F2ECEB] w-full lg:py-[104px] md:py-[80px] py-[50px] lg:mb-[120px] md:mb-[100px] mb-[80px]'>
            <div className=' text-center max-w-[1128px] mx-auto 2xl:px-0 px-4'>
                <h1 className='text-[24px] md:text-[28px] lg:text-[32px] lg:mb-10 md:mb-8 mb-6 font-semibold leading-[120%] lg:tracking-[3.2px] md:tracking-[2px] tracking-[1px]  text-[#DD0101]'>WEB TOOLS FOR RESORT STAFF</h1>
                <p className=' lg:text-2xl md:text-[20px] text-[16px] font-normal leading-[110%] lg:tracking-[2.4px] md:traking-[1.4px] tracking-[.7px] '>Luxe Events provides <span className='font-[500]'>real-time booking management</span>  and <span className='font-[500]'> performance insights</span> for <span className='font-[500]'>Super Admins, Resort Admins, Concierges, and Guides.</span>  Intuitive dashboards enable staff to track engagement, monitor attendance, and make data-driven decisions for seamless operations and enhanced guest experiences.</p>
                <div className='lg:pt-[104px] md:pt-[80px] pt-[50px]'>
                    <img src="/web-tools.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WebToolResortStuff;