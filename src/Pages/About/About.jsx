import React from 'react';

const About = () => {
    return (
        <div className='max-w-[1128px] mx-auto px-4 mt-12 md:mt-52'>
            {/* show image in right */}
            <div className='flex '>
                <p className='w-1/2'></p>
                <img className=' w-1/2' src="/devosri.png" alt="" />
            </div>

            <div className='-mt-7 md:-mt-14'>
                <h1 className='text-[17px] md:text-[35px] lg:text-[50px] font-semibold  md:leading-[57.6px] tracking-[1.12px] text-[#2A2A2A] md:mb-4'>Hi there, I’m Devashri.</h1>
                <h2 className='text-[20px] md:text-[27px] font-medium  md:leading-[40px] tracking-[1.28px] mb-10'>I am a user experience designer currently based in Kuala Lumpur, Malaysia.</h2>

                <p className='text-[17px] md:text-[24px] font-normal md:leading-[40px] tracking-[1.2px] md:mb-6'>My most recent work involved designing user-centric solutions in the hospitality and energy management industries for <span className='text-[#DD0101] font-bold'>Centralogic.</span> I also contributed to flagship projects like HRMS and CRM systems, ensuring a balance between user needs and business goals. My approach emphasizes crafting seamless and engaging interfaces, leveraging my expertise in UX/UI design for software products. Prior to this, I honed my design sensibilities through five years of experience in architecture and interior design, where I cultivated a deep appreciation for form, function, and spatial harmony—a perspective that continues to enhance my work today.</p>
                <p className="text-[17px] md:text-[24px] font-normal md:leading-[40px] tracking-[1.2px] mb-6">
                    I graduated from <span className="font-bold text-red-500">Nagpur University in India</span> with a 
                    <span className="font-bold"> Bachelor of Architecture.</span> During my five years in the industry, I developed a strong foundation in design thinking, which became a key part of my approach to problem-solving. Later, I pursued a 
                    <span className="font-bold"> Professional Bootcamp in UX/UI Design</span> from <span className="font-bold text-red-500">Designboat UI/UX School in India</span>, where I honed my skills in user-centered design.
                </p>

                <p className='text-[17px] md:text-[24px] font-normal md:leading-[40px] tracking-[1.2px] mb-6'>The skills I developed in architecture, such as spatial awareness, problem-solving, and a keen eye for detail, have greatly enhanced my UX/UI design work. I applied these architectural principles alongside my UX/UI training in both classroom project and at Centralogic, merging form, function, and user-centered design to create impactful experiences.</p>
                <p className='text-[17px] md:text-[24px] font-normal md:leading-[40px] tracking-[1.2px] mb-14 '>Born and raised in <span className='text-[#DD0101] font-bold'>India</span>, I’ve always been inspired by vibrant cultures, and that energy reflects in my designs. Outside of work, I’m a traveler with an insatiable curiosity, a hobbyist chef exploring culinary adventures, and an artist who finds solace in painting. You might also catch me breaking a sweat during a workout session or soaking in new experiences across Malaysia.</p>

                <button className='mb-20 md:mb-48 border-[#DD0101] border-2 text-[#DD0101] font-semibold px-6 py-2 rounded-md'>Download Resume</button>
            </div>
        </div>
    );
};

export default About;