import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            //   behavior: 'smooth'
        });
    }, [])
    return (
        <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 lg:mb-[200px] md:mb-[150px] mb-[100px]'>
            {/* Main container with auto-adjusting height */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 dynamic-margin'>
                {/* Left empty column on desktop */}
                <div className=' order-1 flex h-full w-full items-end mt-[5px]'>
                    <h1 className='leading-[102%] xl:responsive-textH1-About1 responsive-textH1-About2  font-semibold text-[#2A2A2A]' >
                        Hi there, I'm Devashri.
                    </h1>
                </div>

                {/* Image container that adapts to viewport */}
                <div className='md:order-2 flex justify-center md:justify-end'>
                    <img
                        className='w-auto h-auto  object-contain'
                        src="/devosri.png"
                        alt="Devosri"
                    />
                </div>

            </div>

            {/* Text content that fills remaining space */}
            <div className='mt-4 '>


                <h2 className='lg:mb-10 md:mb-8 text-[#2A2A2A] mb-6 text-[16px] md:text-[24px] lg:text-[32px] tracking-[1.28px] leading-[125%] font-medium' style={{
                    fontSize: 'clamp(20px, 2.5vw, 32px)', // Dynamic font size for 32px text
                }}>
                    I am a user experience designer currently based in Kuala Lumpur,Malaysia.
                </h2>

                <div className='space-y-4 md:space-y-6'>
                    <p className='text-base md:text-[20px] text-[#2A2A2A] leading-[166%] lg:text-2xl md:tracking-[1.2px] tracking-[.72px]'>
                        My most recent work involved designing user-centric solutions in the hospitality and energy management industries for <span className='text-[#DD0101] font-semibold'>Centralogic.</span> I also contributed to flagship projects like HRMS and CRM systems, ensuring a balance between user needs and business goals. My approach emphasizes crafting seamless and engaging interfaces, leveraging my expertise in UX/UI design for software products. Prior to this, I honed my design sensibilities through five years of experience in architecture and interior design, where I cultivated a deep appreciation for form, function, and spatial harmony—a perspective that continues to enhance my work today.
                    </p>

                    <p className="text-base text-[#2A2A2A] md:text-[20px] leading-[166%] lg:text-2xl md:tracking-[1.2px] tracking-[.72px]">
                        I graduated from <span className="font-semibold text-[#DD0101]">Nagpur University in India</span> with a
                        <span className="font-[600] text-[#2A2A2A]"> Bachelor of Architecture.</span> During my five years in the industry, I developed a strong foundation in design thinking, which became a key part of my approach to problem-solving. Later, I pursued a
                        <span className="font-[600]"> Professional Bootcamp in UX/UI Design</span> from <span className="font-semibold text-[#DD0101] ">Designboat UI/UX School in India</span>, where I honed my skills in user-centered design.
                    </p>

                    <p className='text-base text-[#2A2A2A] md:text-[20px] leading-[166%] lg:text-2xl md:tracking-[1.2px] tracking-[.72px]'>
                        The skills I developed in architecture, such as spatial awareness, problem-solving, and a keen eye for detail, have greatly enhanced my UX/UI design work. I applied these architectural principles alongside my UX/UI training in both classroom project and at Centralogic, merging form, function, and user-centered design to create impactful experiences.
                    </p>

                    <p className='text-base text-[#2A2A2A ] md:text-[20px] leading-[166%] lg:text-2xl md:tracking-[1.2px] tracking-[.72px]'>
                        Born and raised in <span className='text-[#DD0101] font-semibold'>India</span>, I've always been inspired by vibrant cultures, and that energy reflects in my designs. Outside of work, I'm a traveler with an insatiable curiosity, a hobbyist chef exploring culinary adventures, and an artist who finds solace in painting. You might also catch me breaking a sweat during a workout session or soaking in new experiences across Malaysia.
                    </p>
                </div>

                <a href="https://drive.google.com/file/d/1WS7BvELMfcFdXZii-b_XoBcJmwco3Xjp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className='lg:mt-[56px] md:mt-[46px] mt-[32px] border-[#DD0101] border bg-white hover:bg-rose-100/80 text-[#DD0101] font-medium px-6 py-[10px] rounded-[8px] text-2xl tracking-[.1px] leading-[120%]' style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.12)' }}>
                        Download Resume
                </button>
                </a>
            </div>
        </div>
    );
};

export default About;