import React from 'react';

const Conclusion = ({ conclusionData }) => {

    console.log(conclusionData)


    return (
        <div className="max-w-[1128px] mx-auto px-4 ">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[40px] lg:gap-[98px] lg:my-[200px] md:my-[150px] my-[100px]">
                <h1 className="text-2xl lg:text-[28px] font-semibold lg:leading-[30.8px] tracking-[1px] lg:tracking-[2.8px] text-[#DD0101]">
                    Conclusion
                </h1>
                <div>
                    {conclusionData.map((section, index) => (
                        <div key={index} className={` `}>
                            <h1 className={ ` ${index === 0 && "hidden"} text-[#DD0101] mb-4 md:mb-6 lg:mb-8 text-[22px] md:text-[24px] lg:text-[28px] font-medium leading-[26px] sm:leading-[28px] lg:leading-[30.8px] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.8px] mt-[56px]`}>
                                {section.section}
                            </h1>
                            {section.content && (
                                <p className="lgtext-2xl md:text-[20px] text-[16px] font-medium lg:tracking-[2.4px] md:traking-[1.4px] tracking-[.7px] md:leading-[26.4px]">
                                    {section.content}
                                </p>
                            )}
                            {section.items && (
                                <ul className="text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[22px] md:leading-[24px] lg:leading-[26.4px] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] list-disc">
                                    {section.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="ml-9 py-2 md:py-3 lg:py-6"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Conclusion;