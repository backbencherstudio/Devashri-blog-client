import React from 'react';
import ia from "../../assets/structuring/ia.png"

const StructuringInfo = () => {
    return (
        <div className='mt-28 mb-28'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[48px] text-[#DD0101] font-black lg:leading-[52.8px] tracking-[12px] not-italic opacity-25'>STRUCTURING <br />
            THE INFORMATION</h1>
            <p className='mt-4 md:text-[24px] font-medium leading-[26.4px] tracking-[2.4px] not-italic mb-14'>Streamlining content structure for an effortless experience</p>
            <p className='md:text-[24px] font-normal leading-[32px] tracking-[0.72px] not-italic mb-6'>I aimed to highlight the core offerings of BacheloRite: affordable housing and bundled services for single tenants.</p>
            <ul className='list-decimal ml-10'>
               <li className='md:text-[24px] mb-6 font-normal leading-[32px] tracking-[0.72px] not-italic'>Introducing intuitive filters for amenities and easy location selections ensures users can easily find suitable accommodations.</li>
                <li className='md:text-[24px] mb-6 font-normal leading-[32px] tracking-[0.72px] not-italic'>Consolidating FAQs, tenant rights, and rental processes into a FAQs and contact us section builds trust and addresses common queries.</li>
                <li className='md:text-[24px] mb-6 font-normal leading-[32px] tracking-[0.72px] not-italic'>Organized additional services (e.g., WiFi, cleaning, appliance rentals) into a dedicated Add Ons section to streamline navigation and enhance user accessibility.</li>
            </ul>
            <p className='md:text-[24px] mb-6 font-normal leading-[32px] tracking-[0.72px] not-italic'>This structure ensures a seamless experience, keeping users engaged and focused on their housing needs.</p>
            <img src={ia} alt="" />
        </div>
    );
};

export default StructuringInfo;