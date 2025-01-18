import React from 'react';
import adminPage from "/adminPage.png"
const WebToolResortStuff = () => {
    return (
        <div className='bg-[#F2ECEB] w-full'>
            <div className='pt-12 md:pt-24 text-center pb-12 max-w-[1128px] mx-auto'>
                <h1 className='text-[20px] md:text-[32px] font-semibold leading-[38.4px] md:tracking-[3.2px] text-[#DD0101]'>WEB TOOLS FOR RESORT STAFF</h1>
                <p className='mt-10 mb-24 p-4 md:p-0 md:text-[24px] font-normal leading-[26.4px] md:tracking-[2.4px]'>Luxe Events provides real-time booking management and performance insights for Super Admins, Resort Admins, Concierges, and Guides. Intuitive dashboards enable staff to track engagement, monitor attendance, and make data-driven decisions for seamless operations and enhanced guest experiences.</p>
                <div className="relative w-full max-w-[900.421px] h-auto flex-shrink-0 mb-12 mx-auto">
                    {/* Laptop Mockup */}
                    <img
                        src="/LaptopMockup.png"
                        alt="Laptop Mockup"
                        className="inset-0 w-full h-auto object-cover z-10"
                    />

                    {/* GIF Inside Frame */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <img
                            src={adminPage}
                            alt="Laptop GIF"
                            className="w-[86%] sm:w-[80%] mb-4 md:w-[87%] lg:w-[780px] lg:h-[680px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebToolResortStuff;