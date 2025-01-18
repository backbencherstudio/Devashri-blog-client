import React from 'react';

const SectionCategory = ({sectionCat, title, description, options}) => {
    return (
        <div className='text-[#2A2A2A]'>
            {/* section title */}
            <p className='text-[16px]'>
                {sectionCat}
            </p>
            {/* section header */}
            <h1 className='text-[56px] font-semibold leading-[67.2px] tracking-[1.68px] mt-4 mb-6'>
                {title}
            </h1>

            {/* description */}
            <p className='text-[24px] font-normal leading-[32px] tracking-[0.72px]'>
                {description}
            </p>

            {/* manage options */}
            <div className="flex items-center md:space-x-2 mt-6 text-md">
                <span className=''>{options.events}</span>
                
                <div className="flex items-center">
                    <span className="mx-8 mr-8">&bull;</span> 
                    <span>{options.management}</span>
                </div>
                <div className="flex items-center">
                    <span className="mx-8">&bull;</span> 
                    <span>{options.research}</span>
                </div>
            </div>

        </div>
    );
};

export default SectionCategory;