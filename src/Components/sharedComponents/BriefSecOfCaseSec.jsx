import React from 'react';

const BriefSecOfCaseSec = ({briefObj}) => {
    return (
        <div className="flex flex-col md:flex-row mt-24 md:mt-48 gap-12 md:gap-16 lg:gap-40 justify-between">
    {/* Title */}
    <div className="w-full md:w-[40%] lg:w-[408px] text-[#DD0101] font-semibold text-center md:text-left">
        <h1>{briefObj.briefHead}</h1>
    </div>

    {/* Description */}
    <div className="w-full md:w-[30%] lg:w-[264px] text-[#2A2A2A] text-center md:text-left">
        <p>{briefObj.paragraph}</p>
    </div>

    {/* Card */}
    <div className="bg-[#F2ECEB] pt-6 pl-6 w-full md:w-[30%] lg:w-[264px]">
        {/* Role */}
        <div className="mb-12">
            <h1 className="text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4">Role</h1>
            <p className="bg-[#F2ECEB]">{briefObj.role}</p>
        </div>

        {/* Duration */}
        <div className="mb-12">
            <h1 className="text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4">DURATION</h1>
            <p className="bg-[#F2ECEB]">{briefObj.duration}</p>
        </div>

        {/* Tools */}
        <div>
            <h1 className="text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4">TOOLS</h1>
            <p className="bg-[#F2ECEB]">{briefObj.tools}</p>
        </div>
    </div>
</div>

    );
};

export default BriefSecOfCaseSec;