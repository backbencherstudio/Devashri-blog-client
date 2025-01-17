import React from 'react';

const PersionalStories = () => {
    return (
        <div className='flex gap-6'>
            <h1 className='text-[#DD0101] text-2xl font-normal leading-[1.1] tracking-[2.4px]'>PERSONAS & USER STORIES</h1>

            <div>
                <h1 className='text-2xl font-medium leading-[1.1] tracking-[2.4px] mb-6'>Building for every role.</h1>
                <ul className='list-disc pl-7'>
                    <li className='mb-4'>The design process for Luxe Events centered around identifying five key personas integral to the platform’s success. </li>
                    <li className='mb-4'>These personas represented different roles involved in the event booking process at the resort, each with unique needs and goals.</li>
                    <li className='mb-4'>Each persona’s needs and goals were translated into user stories, which informed the design and prioritized feature development.</li>
                </ul>
            </div>
        </div>
    );
};

export default PersionalStories;