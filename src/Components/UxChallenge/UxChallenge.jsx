import React from 'react';

const UxChallenge = () => {
    return (
        <div className="flex md:py-12 py-8 flex-col md:flex-row max-w-[1128px] mx-auto px-4 2xl:px-0 gap-8 md:gap-[42px] lg:gap-[62px]">
            {/* UX Challenge Heading */}
            <h1 className="  text-[24px] md:text-[26px] lg:text-[28px]  font-semibold leading-[110%]] mb-6 tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.8px]  text-[#DD0101]">
            UX CHALLENGE
            </h1>

            {/* UX Challenge Content */}
            <div className="flex-1 max-w-[840px]">
                <h1 className= "text-[18px] text-[#221429] sm:text-[22px] lg:text-[24px] font-medium leading-[110%] tracking-[1.2px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic mb-[36px] md:mb-[46px] lg:mb-[56px]">
                    How might we simplify the rental process for single tenants and improve transparency?
                </h1>
                <ul className="ml-7 list-decimal pl-5 space-y-6 text-[16px] sm:text-[18px] leading-[22px] md:leading-[24px] text-[#2A2A2A]">
                    <li className='md:text-[20px] text-base lg:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Design should be intuitive and easy to navigate for tech-savvy professionals.</li>
                    <li className='md:text-[20px] text-base lg:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Design should clearly highlight amenities and rental terms to ensure transparency.</li>
                    <li className='md:text-[20px] text-base lg:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Design should address common frustrations (e.g., lack of available rentals for single tenants).</li>
                    <li className='md:text-[20px] text-base lg:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Design should provide clear, accessible filters to help users find affordable and suitable housing quickly.</li>
                    <li className='md:text-[20px] text-base lg:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic'>Design should allow users to seamlessly view and access bundled services (e.g., WiFi, cleaning).</li>
                </ul>
            </div>
        </div>
    );
};

export default UxChallenge;
