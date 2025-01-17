import React from 'react';

const SectionCategory = ({sectionCat, title, description, options}) => {
    return (
        <div className='text-[#2A2A2A]'>
            {/* section title */}
            <p>
                {sectionCat}
            </p>
            {/* section header */}
            <h1 className='text-6xl font-semibold mt-4 mb-6'>
                {title}
            </h1>

            {/* description */}
            <p className='text-2xl'>
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