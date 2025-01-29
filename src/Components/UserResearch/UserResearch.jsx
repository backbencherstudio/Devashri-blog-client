import React from 'react';
import imageResearch from '../../assets/research/SURVEY INSIGHTS 1.png'
import frame1 from '../../assets/qualititiveInterviews/Frame 44 (1).png'
import frame2 from '../../assets/qualititiveInterviews/Frame 441.png'
import frame3 from '../../assets/qualititiveInterviews/Frame 44 (3).png'
import frame4 from '../../assets/qualititiveInterviews/Frame 44 (4).png'
import frame5 from '../../assets/qualititiveInterviews/Frame 44.png'

const UserResearch = () => {
    return (
        <div className="lg:mb-[120px] md:mb-[100px] mb-[60px]">
                        {/* Title Section */}
                        <h1 className="md:text-[24px] text-[20px] lg:text-[28px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.5px] lg:tracking-[2.8px] text-[#DD0101]">
                        USER RESEARCH
                        </h1>

                        {/* user Researcher */}
                    <div className="md:flex gap-6 mt-4">
                        {/* Title Section */}
                        <div className="md:max-w-[264px]">

                        <h1 className="lg:text-[24px] md:text-xl text-[18px] font-normal leading-[110%]  md:tracking-[1.4px] lg:tracking-[2.4px] tracking-[.72px] not-italic text-[#DD0101]">
                        QUANTITATIVE INTERVIEW 
                        </h1>
                        </div>
        
                        {/* Content Section */}
                        <div className="w-full lg:w-[74.5%]">
                        {/* Intro Paragraph */}
                        <p className="font-medium lg:mb-14 md:mb-10 mb-8 mt-6 md:mt-0 text-[18px] md:text-[20px] lg:text-[24px] leading-[110%]   text-[#221429] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
                        A total of 56 responses were gathered through a 10-question survey to identify patterns and preferences among single tenants.
                        </p>
        
                        <div className=" lg:text-[24px] md:text-[20px] text-[18px] ">
                            <p className='  leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Demographics:</span> 50% are aged 26-30, and 60.7% are male, dominating the survey pool</p>
                            <p className='  leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Accommodation Search:</span>42.6% rely on agents or personal networks; 40.8% use online platforms.</p>
                            <p className=' leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Basic Needs:</span> Geysers (71.4%), WiFi (66.1%), and equipped kitchens (62.5%) are top priorities.</p>
                            <p className=' leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic mb-6'><span className='font-medium'>Monthly Expenses:</span> 53.6% spend ₹5,000–₹10,000 on household needs, besides rent.</p>
                            <p className=' leading-[133%] tracking-[.36px] md:tracking-[0.72px] not-italic '><span className='font-medium'>Rental Experience:</span> 94.6% have lived away from home, highlighting familiarity with rental challenges.</p>
        
                            <img className='mt-14' src={imageResearch} alt="" />
                        </div>
                        </div>
                    </div>


                        {/* QUALITATIVE INTERVIEWS  */}
                    <div className="md:flex gap-6 lg:mt-[120px] md:mt-[100px] mt-[60px]">
                        {/* Title Section */}
                       <div className="md:max-w-[264px]" >
                       <h1 className="text-[24px] font-normal leading-[26.4px] tracking-[2.4px] not-italic text-[#DD0101]">
                       QUALITATIVE INTERVIEWS  
                        </h1>
                       </div>
        
                        {/* Content Section */}
                        <div className="w-full lg:w-[74.5%]">
                        {/* Intro Paragraph */}
                        <p className="font-medium mb-14 mt-6 md:mt-0 md:text-[20px] text-[18px] lg:text-[24px] leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] text-[#221429]">
                        To uncover pain points and challenges faced by single tenants, I conducted interviews with 10 bachelors living away from their families. The goal was to dive into their experiences, emotions, and expectations while renting apartments. Through these conversations, I gained meaningful insights into the problems they face during their rental journey.
                        </p>
        
                        <div className="w-full lg:space-y-10 md:space-y-8 space-y-6">
                            <div className='flex items-center mb-10 md:gap-8 gap-6 lg:gap-10'>
                                <img className='w-[120px] h-[120px]' src={frame5} alt="" />
                                <div className='w-full  md:text-[18px] lg:text-[20px] text-base leading-[110%]'>
                                    <p>“Finding a rented apartment was a nightmare. Most landlords were reluctant to rent to a bachelor like me, asking endless questions about my lifestyle and habits.”</p>
                                    <p className='font-medium mt-2'>-Rahul, 26, Software Developer, Bengaluru</p>
                                </div>
                            </div>
                            <div className='flex items-center  md:gap-8 gap-6 lg:gap-10'>
                                <img className='w-[120px] h-[120px]' src={frame1} alt="" />
                                <div className='w-full md:text-[18px] lg:text-[20px] text-base leading-[110%]'>
                                    <p>“The biggest issue for me was the lack of an equipped kitchen. I couldn’t cook my meals, which led to higher expenses on food delivery.”</p>
                                    <p className='font-medium mt-2'>-Sneha, 28, Marketing Executive, Pune</p>
                                </div>
                            </div>
                            <div className='flex items-center   md:gap-8 gap-6 lg:gap-10'>
                                <img className='w-[120px] h-[120px]' src={frame2} alt="" />
                                <div className='w-full md:text-[18px] lg:text-[20px] text-base leading-[110%]'>
                                    <p>“Apart from rent, I spend a significant amount on additional services like housekeeping, Wi-Fi, and appliances, which aren’t included in most rental agreements.”</p>
                                    <p className='font-medium mt-2'>-Meera, 24, Content Creator, Hyderabad</p>
                                </div>
                            </div>
                            <div className='flex items-center mb-10 md:gap-8 gap-6 lg:gap-10'>
                                <img className='w-[120px] h-[120px]' src={frame3} alt="" />
                                <div className='w-full md:text-[18px] lg:text-[20px] text-base leading-[110%]'>
                                    <p>“I’m paying almost 20% more for rent just to avoid unnecessary interrogations from landlords and nosy neighbors.”</p>
                                    <p className='font-medium mt-2'>-Ankit, 30, Consultant, Delhi</p>
                                </div>
                            </div>
                            
                            <div className='flex items-center  md:gap-8 gap-6 lg:gap-10'>
                                <img className='w-[120px] h-[120px]' src={frame4} alt="" />
                                <div className='w-full md:text-[18px] lg:text-[20px] text-base leading-[110%]'>
                                    <p>“The place I live now is close to my office, but it doesn’t have the basic amenities I need, like a geyser or parking. I had to compromise because I couldn’t find better options.”</p>
                                    <p className='font-medium mt-2'>-Karan, 27, Analyst, Mumbai</p>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>




                    </div>
    );
};

export default UserResearch;