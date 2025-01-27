import React from 'react';

const Conclusion = ({ conclusionData, isNoteVisible }) => {



    return (
        <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 ">
            <div className=" flex flex-col md:flex-row gap-6 md:gap-[40px] lg:gap-[98px] lg:mb-[200px] md:mb-[150px] mb-[100px]">
                <h1 className="max-w-[190px] uppercase text-2xl leading-[110%] lg:text-[28px] font-semibold lg:leading-[30.8px] tracking-[1px] md:tracking-[1.6px] lg:tracking-[2.8px] text-[#DD0101]">
                CONCLUSION
                </h1>
                <div className='max-w-[840px]'>
                    {conclusionData.map((section, index) => (
                        <div key={index} >
                            <h1 className={ ` ${index === 0 && "hidden"} uppercase mb-8 w-full text-[#DD0101] text-[22px] md:text-[24px] lg:text-[28px] font-medium leading-[110%]   tracking-[1px] md:tracking-[1.6px] lg:tracking-[2px] xl:tracking-[2.8px] mt-[56px]`}>
                                {section.section}
                            </h1>
                            {section.content && (
                                <p className="lg:text-2xl text-[#221429] md:text-[20px] text-[16px] font-medium lg:tracking-[2.4px] md:traking-[1.4px] tracking-[.7px] leading-[110%] ">
                                    {section.content}
                                </p>
                            )}
                            {section.items && (
                                <ul className="text-[16px] text-[#221429] md:text-[20px] lg:text-[24px] font-normal leading-[22px] md:leading-[24px] lg:leading-[26.4px] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] list-disc">
                                    {section.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className={`ml-9 pb-6 last:pb-0`}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {/* Note section with conditional rendering */}
                    {isNoteVisible && (
                        <div>
                            <h1 className='w-full text-[#DD0101] text-[22px] md:text-[24px] lg:text-[28px] font-[500] leading-[110%] tracking-[1px] md:tracking-[1.6px] lg:tracking-[2px] xl:tracking-[2.8px] mt-[56px]'>
                                Note:
                            </h1>
                            <p className="lg:text-2xl text-[#221429] md:text-[20px] text-[16px] font-medium lg:tracking-[2.4px] md:traking-[1.4px] tracking-[.7px]">
                                This design is a reflection of the work completed during my time at the company and has likely undergone further iterations post my involvement.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Conclusion;