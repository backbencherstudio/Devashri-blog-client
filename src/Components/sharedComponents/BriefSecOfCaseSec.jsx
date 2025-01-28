import React from 'react';

const BriefSecOfCaseSec = ({briefObj}) => {
    return (
       <div>
         <div className="flex flex-col md:flex-row justify-between mt-20 xl:mt-[200px] gap-6 md:gap-0 lg:mt-[150px] md:mt-[100px]  ">
    {/* Title */}
    <div className="text-[22px] md:text-[28px] font-semibold tracking-[2.8px] text-[#DD0101] ">
        <h1>{briefObj.briefHead}</h1>
    </div>

    {/* Description */}
    <div className='flex md:flex-row flex-col md:w-[74.5%]  gap-6 md:gap-4 lg:gap-0  justify-between'>
    <div className="md:max-w-[408px]  text-justify text-base md:text-xl lg:text-2xl tracking-[.32px] md:tracking-[.52px] lg:tracking-[.72px]  text-[#2A2A2A] md:text-left">
        <p>{briefObj.paragraph}</p>
    </div> 

    {/* Card */}
    <div className="bg-[#F2ECEB] pt-6 pl-6 lg:w-[264px]  text-base md:text-xl lg:text-2xl">
        {/* Role */}
        <div className="mb-12">
            <h1 className="text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4">Role</h1>
            <p className="bg-[#F2ECEB] text-[#2A2A2A] md:w-[12ch]">{briefObj.role}</p>
        </div>

        {/* Duration */}
        <div className="mb-12">
            <h1 className="text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4">DURATION</h1>
            <p className="bg-[#F2ECEB] text-[#2A2A2A]">{briefObj.duration}</p>
        </div>

        {/* Tools */}
        <div className='mb-12'>
            <h1 className="text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4">TOOLS</h1>
            <p className="bg-[#F2ECEB] text-[#2A2A2A]">{briefObj.tools}</p>
        </div>
    </div>
    </div>
    
</div>

       </div>

    );
};

export default BriefSecOfCaseSec;