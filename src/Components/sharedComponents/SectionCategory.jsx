import React from 'react';

const SectionCategory = ({sectionCat, title, description, options}) => {
    return (
        <div className="text-[#2A2A2A] ">
            {/* Section Title */}
            <p className="text-[14px] sm:text-[16px] font-normal">
                {sectionCat}
            </p>

            {/* Section Header */}
            <h1 className="text-[20px] sm:text-[36px] md:text-[56px] font-semibold leading-[28px] sm:leading-[42px] md:leading-[67.2px] tracking-[0.84px] sm:tracking-[1.68px] mt-4 mb-6">
                {title}
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-[20px] sm:leading-[28px] md:leading-[32px] tracking-[0.48px] sm:tracking-[0.72px]">
                {description}
            </p>

            {/* Options */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6 text-md">
                <span className="text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-[20px] sm:leading-[28px] md:leading-[32px] tracking-[0.48px] sm:tracking-[0.72px]">
                    {options.events}
                </span>

                {/* Option 1 */}
                <div className="flex items-center mt-3 sm:mt-0">
                    <span className="mx-4 sm:mx-8">&bull;</span>
                    <span className="text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-[20px] sm:leading-[28px] md:leading-[32px] tracking-[0.48px] sm:tracking-[0.72px]">
                        {options.management}
                    </span>
                </div>

                {/* Option 2 */}
                <div className="flex items-center mt-3 sm:mt-0">
                    <span className="mx-4 sm:mx-8">&bull;</span>
                    <span className="text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-[20px] sm:leading-[28px] md:leading-[32px] tracking-[0.48px] sm:tracking-[0.72px]">
                        {options.research}
                    </span>
                </div>

                {/* Optional Fourth Option */}
                {options.res ? (
                    <div className="flex items-center mt-3 sm:mt-0">
                        <span className="mx-4 sm:mx-8">&bull;</span>
                        <span className="text-[14px] sm:text-[18px] md:text-[24px] font-normal leading-[20px] sm:leading-[28px] md:leading-[32px] tracking-[0.48px] sm:tracking-[0.72px]">
                            {options.res}
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default SectionCategory;
