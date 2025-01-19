import React from 'react';
import userpersonaImg from '../../assets/userpersona/Group 40.png'

const UserPersona = () => {
    return (
        <div className='mb-28'>
            <h1 className='text-[28px] text-center md:text-left font-semibold leading-[30.8px] tracking-[2.8px] not-italic mt-28 text-[#DD0101]'>USER PERSONA</h1>

            <div className='mt-6 '>

                <div className='lg:flex border-2 bg-[#F2ECEB] rounded-3xl md:rounded-none lg:rounded-r-3xl'>
                    {/* User Persona details */}
                    <div className='md:w-11/12 p-8 lg:w-4/5'>
                        <h1 className='text-[32px] text-[#221429] font-semibold leading-[35.2px] tracking-[3.2px] not-italic'>Rahul Verma</h1>
                        <p className='text-[16px] font-normal leading-[17.6px] text-[#6D6D6D] not-italic'>27 YEARS   |   BENGALURU, INDIA   |   SOFTWARE DEVELOPER</p>
                        
                        <hr className='bg-[#D4D4D4] my-6'/>

                        {/* background */}
                        <div>
                            <h1 className='text-[24px] mb-4 text-[#2A2A2A] font-medium leading-[26.4px] tracking-[2.4px] not-italic'>Background</h1>
                            <p className='text-[18px] text-[#2A2A2A] font-normal leading-[21.6px] not-italic'>Rahul has been living away from his family for 5 years, facing challenges finding affordable rentals with basic amenities. He often encounters discrimination from landlords due to his bachelor status and limited options on online platforms.</p>
                        </div>

                        <hr className='bg-[#D4D4D4] my-6'/>

                        {/* Goal and Frustrations */}
                        <div className=' text-[#2A2A2A]'>
                            <div className='md:flex gap-8'>
                                <div>
                                    <h1 className='text-[24px] mb-4 font-medium leading-[26.4px] tracking-[2.4px] not-italic'>Goals</h1>
                                    <ul className='list-disc ml-8'>
                                        <li>Find affordable housing with necessary amenities (WiFi, kitchen, geyser).</li>
                                        <li>Streamline the rental search and avoid lengthy negotiations with landlords.</li>
                                        <li>Secure rental agreements that align with his lifestyle needs.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h1 className='text-[24px] mb-4 font-medium leading-[26.4px] tracking-[2.4px] not-italic'>Frustrations</h1>
                                    <ul className='list-disc  ml-8'>
                                        <li>High rent charges due to bachelor status.</li>
                                        <li>Lack of transparency and clear communication from landlords.</li>
                                        <li>Limited housing options that cater to single tenants.</li>
                                        <li>Time-consuming process of finding a suitable place.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>

                                {/* oppurtunity */}
                            <div className=''>
                                <h1 className='text-[24px] mb-4 font-medium leading-[26.4px] tracking-[2.4px] not-italic'>Opportunities</h1>
                                    <ul className='list-disc ml-8'>
                                        <li>Create a platform dedicated to simplifying the rental experience for single tenants.</li>
                                        <li>Offer bundled services (e.g., WiFi, cleaning) to reduce additional costs.</li>
                                        <li>Develop transparent listings with clear terms and amenities.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* user image */}
                    <div className="flex justify-center items-center">
                        <div className="relative inline-block">
                            <img className="rounded-3xl md:rounded-r-3xl " src={userpersonaImg} alt="" />

                            <p className="absolute text-center p-6 bottom-4 lg:bottom-0 left-4 text-white text-[16px] font-semibold italic leading-[26.4px] tracking-[2.4px]">
                                “Finding a decent place shouldn’t feel like a battle just because I’m a bachelor.”
                            </p>
                        </div>
                    </div>

             
                </div>



            </div>
        </div>
    );
};

export default UserPersona;