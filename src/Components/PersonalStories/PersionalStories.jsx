import React from 'react';

const PersionalStories = ({data}) => {
    
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className='mb-6 md:max-w-[264px] md:mb-0 '>
                <h1 className='text-[#DD0101] lg:w-[18ch]  md:text-[24px] text-xl  font-normal leading-[110%] tracking-[.72px] md:tracking-[2.4px]'>{data.title}</h1>
                </div>

            <div className="w-full max-w-[840px]">
                {data.subtitle && <h1 className=" md:text-[22px] lg:text-[24px] font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] mb-4 md:mb-6">
                    {data.subtitle}
                </h1>}
                <ul className="list-disc ml-9 leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
                    <li className="mb-3 md:mb-4 leading-[110%] md:text-[20px] lg:text-[24px]  ">
                       {data.points[0]}
                    </li>
                    <li className="mb-3 md:mb-4 leading-[110%]  md:text-[20px] lg:text-[24px] font-normal ">
                    {data.points[1]}
                    </li>
                    {data.points[2] && <li className="mb-3 md:mb-4 leading-[110%]  md:text-[20px] lg:text-[24px] font-normal  ">
                    {data.points[2]}
                    </li>}
                </ul>
                {data.img && <img className="mt-10 w-full object-contain " src={data.img} alt="" />}
            </div>
        </div>
    );
};

export default PersionalStories;
