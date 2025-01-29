import React from 'react';
import userpersonaImg from '../../assets/userpersona/Group 40.png'

const UserPersona = () => {
    return (
        <div className='lg:mb-[120px] md:mb-[100px] mb-[60px]'>
            <h1 className='lg:text-[28px] md:text-[26px] text-2xl font-semibold leading-[110%] md:tracking-[2.8px] tracking-[1.4px] not-italic mt-[60px] md:mt-[100px] lg:mt-[120px] text-[#DD0101]'>USER PERSONA</h1>

            <div className='mt-6 '>
                <div className=''>
                <div className='flex flex-col lg:flex-row  border-[.5px] border-[#DD0101] bg-[#F2ECEB] rounded-[24px] lg:gap-8 md:gap-6 overflow-hidden'>
                    {/* User Persona details */}
                    <div className='lg:ml-8 px-6  lg:px-0 lg:order-1 order-2 lg:py-8 pt-0 pb-8 relative md:-top-[48px] lg:top-0 lg:max-w-[58.30%] max-w-full'>
                        <h1 className='lg:text-[32px] md:text-[28px] text-2xl text-[#221429] font-semibold leading-[110%] lg:tracking-[3.2px] md:tracking-[2px] tracking-[1px] not-italic mt-6 md:mt-0'>Rahul Verma</h1>
                        <p className='text-[16px] mt-2 font-normal leading-[110%] text-[#6D6D6D] not-italic'>27 YEARS <span className='mx-1'> | </span>  BENGALURU, INDIA <span className='mx-1'> | </span>  SOFTWARE DEVELOPER</p>
                        
                        {/* <hr className='bg-[#D4D4D4] h-[1px] '/> */}
                        <div className='w-full h-[1px] bg-[#D4D4D4] my-6'></div>
                        {/* background */}
                        <div>
                            <h1 className=' md:text-xl text-lg lg:text-[24px] mb-4 text-[#2A2A2A] font-medium leading-[110%] md:tracking-[1.4px] tracking-[.72px] lg:tracking-[2.4px] not-italic'>Background</h1>
                            <p className='md:text-[18px]  text-[#2A2A2A] leading-[120%] not-italic'>Rahul has been living away from his family for 5 years, facing challenges finding affordable rentals with basic amenities. He often encounters discrimination from landlords due to his bachelor status and limited options on online platforms.</p>
                        </div>

                        <div className='w-full h-[1px] bg-[#D4D4D4] my-6'></div>

                        {/* Goal and Frustrations */}
                        <div className=' text-[#2A2A2A]'>
                            <div className='md:flex md:gap-6 lg:gap-8'>
                                <div>
                                    <h1 className='md:text-xl text-lg lg:text-[24px] mb-4 font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic'>Goals</h1>
                                    <ul className='list-disc marker:text-[14px] md:text-lg text-base leading-[120%] ml-10'>
                                        <li className='leading-[120%]'>Find affordable housing with necessary amenities (WiFi, kitchen, geyser).</li>
                                        <li className='leading-[120%]'>Streamline the rental search and avoid lengthy negotiations with landlords.</li>
                                        <li className='leading-[120%]'>Secure rental agreements that align with his lifestyle needs.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h1 className='md:text-xl text-lg lg:text-[24px] mb-4 font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic mt-4 md:mt-0'>Frustrations</h1>
                                    <ul className='list-disc md:text-lg  marker:text-[14px] text-base leading-[120%] md:ml-8 ml-10'>
                                        <li className='leading-[120%]'>High rent charges due to bachelor status.</li>
                                        <li className='leading-[120%]'>Lack of transparency and clear communication from landlords.</li>
                                        <li className='leading-[120%]'>Limited housing options that cater to single tenants.</li>
                                        <li className='leading-[120%]'>Time-consuming process of finding a suitable place.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                {/* oppurtunity */}
                            <div className='lg:mt-8 md:mt-6 mt-4'>
                                <h1 className='md:text-xl text-lg lg:text-[24px]  mb-4 font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic'>Opportunities</h1>
                                    <ul className='list-disc md:text-lg text-base marker:text-[14px] leading-[120%] ml-10'>
                                        <li className='leading-[120%]'>Create a platform dedicated to simplifying the rental experience for single tenants.</li>
                                        <li className='leading-[120%]'>Offer bundled services (e.g., WiFi, cleaning) to reduce additional costs.</li>
                                        <li className='leading-[120%]'>Develop transparent listings with clear terms and amenities.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* user image */}
                    <div className="flex order-1 lg:order-2 w-full justify-end">
                        <div className="relative lg:w-full lg:h-full overflow-hidden">
                            <img className=" lg:w-full lg:h-full object-fit" src={userpersonaImg} alt="" />

                            <p className="absolute text-center  bottom-4 lg:bottom-8 lg:left-6  text-white lg:text-2xl md:text-lg text-2xl font-semibold italic leading-[110%] md:tracking-[1.4px] tracking-[.72px] lg:tracking-[2.4px]">
                                “Finding a decent place shouldn’t feel like a battle just because I’m a bachelor.”
                            </p>
                        </div>
                    </div>

             
                </div>
                </div>



            </div>
        </div>
    );
};

export default UserPersona;