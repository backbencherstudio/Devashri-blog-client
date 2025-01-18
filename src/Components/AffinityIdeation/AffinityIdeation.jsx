import React from 'react';

const AffinityIdeation = () => {
    return (
        <div>

            <div className="flex flex-col md:flex-row gap-6">
            {/* Affinity Mapping Text */}
                <h1 className="text-[20px] md:text-[24px] font-normal md:leading-[110%] md:tracking-[2.4px] not-italic text-[#DD0101] md:w-1/3">
                    AFFINITY MAPPING & IDEATION
                </h1>

                {/* Deriving Insights Section */}
                <div className="md:w-full">
                    <h1 className="text-[20px] md:text-[24px] font-medium md:leading-[110%] md:tracking-[2.4px] not-italic mb-6">
                    Deriving Insights
                    </h1>
                    <ul className="list-disc ml-8">
                        <li className="mb-4 md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic">
                            During the ideation phase, we organized and analyzed the data gathered from stakeholder meetings, personas, and user stories using affinity mapping.
                        </li>
                        <li className="mb-4 md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic">
                            This process allowed us to identify patterns, common themes, and key insights that would guide the design process.
                        </li>
                        <li className="mb-4 md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic">
                            Through brainstorming sessions, we discovered several crucial elements that shaped our approach.
                        </li>
                    </ul>
                    <img className="mt-10 w-full object-contain" src={"/list.png"} alt="" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-28">
            {/* Affinity Mapping Text */}
                <h1 className="text-[20px] md:text-[24px] font-normal leading-[110%] tracking-[2.4px] not-italic text-[#DD0101] md:w-1/3">
                    USER FLOW
                </h1>

                {/* Deriving Insights Section */}
                <div className="md:w-full">
                    <ul className="list-disc ml-8">
                        <li className="mb-4 md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic">
                            During the ideation phase, we organized and analyzed the data gathered from stakeholder meetings, personas, and user stories using affinity mapping.
                        </li>
                        <li className="mb-4 md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic">
                            This process allowed us to identify patterns, common themes, and key insights that would guide the design process.
                        </li>
                        <li className="mb-4 md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic">
                            Through brainstorming sessions, we discovered several crucial elements that shaped our approach.
                        </li>
                    </ul>
                </div>
            </div>


            {/* user flow */} 
            <img className='mt-14' src={"/workflow.png"} alt="" />


            {/* the Solutions */}
        </div>
    );
};

export default AffinityIdeation;