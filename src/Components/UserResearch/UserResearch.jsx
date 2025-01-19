import React from 'react';
import imageResearch from '../../assets/research/SURVEY INSIGHTS 1.png'
import frame1 from '../../assets/qualititiveInterviews/Frame 44 (1).png'
import frame2 from '../../assets/qualititiveInterviews/Frame 44 (2).png'
import frame3 from '../../assets/qualititiveInterviews/Frame 44 (3).png'
import frame4 from '../../assets/qualititiveInterviews/Frame 44 (4).png'
import frame5 from '../../assets/qualititiveInterviews/Frame 44.png'

const UserResearch = () => {
    return (
        <div className="mb-28">
                        {/* Title Section */}
                        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[28px] sm:leading-[30px] tracking-[1.5px] md:tracking-[2.8px] text-[#DD0101]">
                        USER RESEARCH
                        </h1>

                        {/* user Researcher */}
                    <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
                        {/* Title Section */}
                        <h1 className="text-[24px] font-normal leading-[26.4px] tracking-[2.4px] not-italic text-[#DD0101]">
                        QUANTITATIVE INTERVIEW 
                        </h1>
        
                        {/* Content Section */}
                        <div className="w-full md:w-[73%]">
                        {/* Intro Paragraph */}
                        <p className="font-medium mb-14 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-justify text-[#221429]">
                            A total of 56 responses were gathered through a 10-question survey to identify patterns and preferences among single tenants.
                        </p>
        
                        <div className="w-full md:w-[73%] mb-14">
                            <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Demographics:</span>  50% are aged 26-30, and 60.7% are male, dominating the survey pool</p>
                            <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Accommodation Search:</span> 42.6% rely on agents or personal networks; 40.8% use online platforms.</p>
                            <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Basic Needs:</span> Geysers (71.4%), WiFi (66.1%), and equipped kitchens (62.5%) are top priorities.</p>
                            <p className='md:text-[24px]  leading-[32px] tracking-[0.72px] not-italic '><span className='font-medium'>Rental Experience:</span> 94.6% have lived away from home, highlighting familiarity with rental challenges.</p>
        
                            <img className='mt-14' src={imageResearch} alt="" />
                        </div>
                        </div>
                    </div>


                        {/* QUALITATIVE INTERVIEWS  */}
                    <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
                        {/* Title Section */}
                        <h1 className="text-[24px] font-normal leading-[26.4px] tracking-[2.4px] not-italic text-[#DD0101]">
                        QUANTITATIVE INTERVIEW 
                        </h1>
        
                        {/* Content Section */}
                        <div className="w-full md:w-[73%]">
                        {/* Intro Paragraph */}
                        <p className="font-medium mb-14 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-justify text-[#221429]">
                        To uncover pain points and challenges faced by single tenants, I conducted interviews with 10 bachelors living away from their families. The goal was to dive into their experiences, emotions, and expectations while renting apartments. Through these conversations, I gained meaningful insights into the problems they face during their rental journey.
                        </p>
        
                        <div className="w-full  mb-14">
                            <div className='flex items-center mb-10 gap-10'>
                                <img className='w-28 h-28' src={frame5} alt="" />
                                <div className='w-full'>
                                    <p>“Finding a rented apartment was a nightmare. Most landlords were reluctant to rent to a bachelor like me, asking endless questions about my lifestyle and habits.”</p>
                                    <p className='font-semibold'>-Rahul, 26, Software Developer, Bengaluru</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-10 gap-10'>
                                <img className='w-28 h-28' src={frame1} alt="" />
                                <div className='w-full'>
                                    <p>“Finding a rented apartment was a nightmare. Most landlords were reluctant to rent to a bachelor like me, asking endless questions about my lifestyle and habits.”</p>
                                    <p className='font-semibold'>-Rahul, 26, Software Developer, Bengaluru</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-10 gap-10'>
                                <img className='w-28 h-28' src={frame2} alt="" />
                                <div className='w-full'>
                                    <p>“Finding a rented apartment was a nightmare. Most landlords were reluctant to rent to a bachelor like me, asking endless questions about my lifestyle and habits.”</p>
                                    <p className='font-semibold'>-Rahul, 26, Software Developer, Bengaluru</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-10 gap-10'>
                                <img className='w-28 h-28' src={frame3} alt="" />
                                <div className='w-full'>
                                    <p>“Finding a rented apartment was a nightmare. Most landlords were reluctant to rent to a bachelor like me, asking endless questions about my lifestyle and habits.”</p>
                                    <p className='font-semibold'>-Rahul, 26, Software Developer, Bengaluru</p>
                                </div>
                            </div>
                            
                            <div className='flex items-center mb-10 gap-10'>
                                <img className='w-28 h-28' src={frame4} alt="" />
                                <div className='w-full'>
                                    <p>“Finding a rented apartment was a nightmare. Most landlords were reluctant to rent to a bachelor like me, asking endless questions about my lifestyle and habits.”</p>
                                    <p className='font-semibold'>-Rahul, 26, Software Developer, Bengaluru</p>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>




                    </div>
    );
};

export default UserResearch;