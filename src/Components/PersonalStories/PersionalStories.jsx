import React from 'react';

const PersionalStories = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <h1 className="text-[#DD0101] w-full md:w-[30%] text-[20px] md:text-[24px] font-normal leading-[24px] md:leading-[26.4px] tracking-[1.2px] md:tracking-[2.4px] text-center md:text-left">
                PERSONAS & USER STORIES
            </h1>

            <div className="w-full md:w-[70%]">
                <h1 className="text-[18px] md:text-[24px] font-medium leading-[22px] md:leading-[26.4px] tracking-[1.2px] md:tracking-[2.4px] mb-4 md:mb-6">
                    Building for every role.
                </h1>
                <ul className="list-disc pl-5 md:pl-7">
                    <li className="mb-3 md:mb-4 text-[16px] md:text-[24px] font-normal leading-[20px] md:leading-[26.4px] tracking-[1.2px] md:tracking-[2.4px]">
                        The design process for Luxe Events centered around identifying five key personas integral to the platform’s success.
                    </li>
                    <li className="mb-3 md:mb-4 text-[16px] md:text-[24px] font-normal leading-[20px] md:leading-[26.4px] tracking-[1.2px] md:tracking-[2.4px]">
                        These personas represented different roles involved in the event booking process at the resort, each with unique needs and goals.
                    </li>
                    <li className="mb-3 md:mb-4 text-[16px] md:text-[24px] font-normal leading-[20px] md:leading-[26.4px] tracking-[1.2px] md:tracking-[2.4px]">
                        Each persona’s needs and goals were translated into user stories, which informed the design and prioritized feature development.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersionalStories;
