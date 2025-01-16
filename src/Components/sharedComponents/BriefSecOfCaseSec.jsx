import React from 'react';

const BriefSecOfCaseSec = ({briefObj}) => {
    return (
        <div className='flex mt-48 gap-40 justify-between h-[380px]'>
            {/* title */}
            <div className='w-[408] text-[#DD0101] font-semibold'>
                <h1>{briefObj.briefHead}</h1>
            </div>
            {/* description */}
            <div className='w-[264px] text-[#2A2A2A]'>
                <p>{briefObj.paragraph}</p>
            </div>
            {/* card */}
            <div className='bg-[#F2ECEB] pt-6 pl-6 w-[264px]'>
                <div className='mb-12'>
                    <h1 className='text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4'>Role</h1>
                    <p className='bg-[#F2ECEB] '>{briefObj.role}</p>
                </div>
                <div className='mb-12'>
                    <h1 className='text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4'>DURATION</h1>
                    <p className='bg-[#F2ECEB] '>{briefObj.duration}</p>
                </div>
                <div>
                    <h1 className='text-[#DD0101] bg-[#F2ECEB] font-semibold pb-4'>TOOLS</h1>
                    <p className='bg-[#F2ECEB] '>{briefObj.tools}</p>
                </div>
            </div>
        </div>
    );
};

export default BriefSecOfCaseSec;