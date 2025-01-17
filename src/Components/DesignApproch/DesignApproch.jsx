import React from 'react';

const DesignApproch = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-[#DD0101] text-center text-[28px] font-medium my-28'>DESIGN APPROACH</h1>

            <div className='flex gap-6'>
                <h1 className='text-[#DD0101] text-[24px]'>RESEARCH AND DISCOVERY</h1>

                <div className='text-left'>
                    <p className='mb-6 tracking-wider'>Understanding the ecosystem</p>
                    <p className='mb-10 font-medium tracking-wider'>To kickstart the design process, we conducted in-depth stakeholder meetings to gain a deeper understanding of the resort’s ecosystem.</p>
                    <p className='mb-6'><span className='font-medium'>Limited feedback loop</span> meant we relied on stakeholders for insights into <span className='font-medium'>staff</span> and guest challenges.</p>
                    <p className='mb-6'>Identified <span className='font-medium'>pain points, user needs,</span> and <span className='font-medium'>inefficiencies</span> caused by manual processes.</p>
                    <p className='mb-6'>Gathered key information on <span className='font-medium'>operational hurdles</span> and areas for improvement.</p>
                </div>
            </div>
        </div>
    );
};

export default DesignApproch;