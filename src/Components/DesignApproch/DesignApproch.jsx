import React from 'react';

const DesignApproch = () => {
    return (
        <div className=''>
            <h1 className='text-[#DD0101] text-center lg:mt-[120px] md:mt-[100px] mt-[60px] lg:mb-[80px] md:mb-[60px] mb-[40px] text-[24px] md:text-[28px] font-semibold leading-[110%] lg:tracking-[2.8px] md:tracking-[1.4px] tracking-[.72px]'>DESIGN APPROACH</h1>

            <div className='md:flex md:gap-6'>
                <div className='mb-6 md:mb-0'>
                <h1 className='text-[#DD0101] lg:w-[20ch] md:w-[16ch]  md:text-[24px] text-xl  font-normal md:leading-[110%] tracking-[.72px] md:tracking-[2.4px]'>RESEARCH AND DISCOVERY</h1>
                </div>

                <div className='leading-[133%]  '>
                    <p className='mb-6 leading-[110%] text-[#221429]  md:text-[20px] lg:text-[24px] font-normal md:tracking-[1.2px] tracking-[.72px] lg:tracking-[2.4px]'>Understanding the ecosystem</p>
                    <p className='mb-10 leading-[110%] text-[#221429] md:text-[20px] lg:text-[24px] font-medium  md:tracking-[1.2px] tracking-[.72px] lg:tracking-[2.4px]'>To kickstart the design process, we conducted in-depth stakeholder meetings to gain a deeper understanding of the resort’s ecosystem.</p>
                    <p className='mb-6  leading-[133%] text-[#2A2A2A] md:text-[20px] lg:text-[24px] font-normal  tracking-[.72px]'><span className='font-medium'>Limited feedback loop</span> meant we relied on stakeholders for insights into <span className='font-medium'>staff</span> and guest challenges.</p>
                    <p className='mb-6  leading-[133%] text-[#2A2A2A] md:text-[20px] lg:text-[24px] font-normal  tracking-[.72px]'>Identified <span className='font-medium'>pain points, user needs,</span> and <span className='font-medium'>inefficiencies</span> caused by manual processes.</p>
                    <p className='mb-6  leading-[133%] text-[#2A2A2A] md:text-[20px] lg:text-[24px] font-normal  tracking-[.72px]'>Gathered key information on <span className='font-medium'>operational hurdles</span> and areas for improvement.</p>
                </div>
            </div>
        </div>
    );
};

export default DesignApproch;