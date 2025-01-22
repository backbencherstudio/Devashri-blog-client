import React from 'react';

const PersionalStories = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className='mb-6 max-w-[264px] md:mb-0 '>
                <h1 className='text-[#DD0101] lg:w-[18ch]  md:text-[24px] text-xl  font-normal md:leading-[110%] tracking-[.72px] md:tracking-[2.4px]'>PERSONAS & USER STORIES</h1>
                </div>

            <div className="w-full max-w-[840px]">
                <h1 className="text-[20px] md:text-[24px] font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] mb-4 md:mb-6">
                    Building for every role.
                </h1>
                <ul className="list-disc ml-9 leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
                    <li className="mb-3 md:mb-4 leading-[110%] text-[16px] md:text-[24px]  ">
                        The design process for Luxe Events centered around identifying five key personas integral to the platform’s success.
                    </li>
                    <li className="mb-3 md:mb-4 leading-[110%] text-[16px] md:text-[24px] font-normal ">
                        These personas represented different roles involved in the event booking process at the resort, each with unique needs and goals.
                    </li>
                    <li className="mb-3 md:mb-4 leading-[110%] text-[16px] md:text-[24px] font-normal  ">
                        Each persona’s needs and goals were translated into user stories, which informed the design and prioritized feature development.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersionalStories;
