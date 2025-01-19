import React from 'react';

const UxChallenge = () => {
    return (
        <div className="flex py-12 flex-col md:flex-row max-w-[1128px] mx-auto px-4 gap-8 md:gap-16">
            {/* UX Challenge Heading */}
            <h1 className="text-[24px] sm:text-[28px] text-center md:text-left font-semibold leading-[30.8px] mb-6 tracking-[2.8px] not-italic text-[#DD0101]">
                UX CHALLENGE
            </h1>

            {/* UX Challenge Content */}
            <div className="flex-1">
                <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-[26.4px] md:tracking-[2.4px] not-italic mb-6">
                    How might we simplify the rental process for single tenants and improve transparency?
                </h1>
                <ul className="ml-7 list-decimal pl-5 space-y-4 text-[16px] sm:text-[18px] leading-[22px] md:leading-[24px] text-[#333]">
                    <li className='md:text-[24px] font-normal leading-[32px] tracking-[0.72px] not-italic'>Design should be intuitive and easy to navigate for tech-savvy professionals.</li>
                    <li className='md:text-[24px] font-normal leading-[32px] tracking-[0.72px] not-italic'>Design should clearly highlight amenities and rental terms to ensure transparency.</li>
                    <li className='md:text-[24px] font-normal leading-[32px] tracking-[0.72px] not-italic'>Design should address common frustrations (e.g., lack of available rentals for single tenants).</li>
                    <li className='md:text-[24px] font-normal leading-[32px] tracking-[0.72px] not-italic'>Design should provide clear, accessible filters to help users find affordable and suitable housing quickly.</li>
                    <li className='md:text-[24px] font-normal leading-[32px] tracking-[0.72px] not-italic'>Design should allow users to seamlessly view and access bundled services (e.g., WiFi, cleaning).</li>
                </ul>
            </div>
        </div>
    );
};

export default UxChallenge;
