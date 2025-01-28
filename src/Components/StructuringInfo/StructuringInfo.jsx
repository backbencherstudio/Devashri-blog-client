import React from 'react';
import ia from "../../assets/structuring/ia 1.png"

const StructuringInfo = () => {
    return (
        <div className='mt-[60px] md:mt-[100px] lg:mt-[120px]'>
            <h1 className='text-[32px] md:text-[42px] lg:text-[48px] text-[#DD0101] font-black leading-[110%] tracking-[6px] md:tracking-[8px] lg:tracking-[12px] not-italic opacity-25 md:max-w-[21ch]'>STRUCTURING 
            THE INFORMATION</h1>
            <p className='mt-4 text-lg text-[#221429] md:text-xl lg:text-[24px] font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic mb-10 md:mb-12 lg:mb-14'>Streamlining content structure for an effortless experience</p>
            <p className='text-base md:text-xl lg:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic mb-6'>I aimed to highlight the core offerings of BacheloRite: affordable housing and bundled services for single tenants.</p>
            <ul className='list-decimal ml-10'>
               <li className='text-base md:text-xl lg:text-[24px] mb-6 font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Introducing intuitive filters for amenities and easy location selections ensures users can easily find suitable accommodations.</li>
                <li className='text-base md:text-xl lg:text-[24px] mb-6 font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Consolidating FAQs, tenant rights, and rental processes into a FAQs and contact us section builds trust and addresses common queries.</li>
                <li className='text-base md:text-xl lg:text-[24px] mb-6 font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Organized additional services (e.g., WiFi, cleaning, appliance rentals) into a dedicated Add Ons section to streamline navigation and enhance user accessibility.</li>
            </ul>
            <p className='text-base md:text-xl lg:text-[24px]  font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic mb-10 md:mb-12 lg:mb-14'>This structure ensures a seamless experience, keeping users engaged and focused on their housing needs.</p>
            <img src={ia} alt="" />
        </div>
    );
};

export default StructuringInfo;