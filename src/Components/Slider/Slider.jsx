import React from 'react';
import { MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft  } from "react-icons/md";
import { Link } from 'react-router-dom';


const Slider = ({iconData}) => {
    return (
        <div className='max-w-[1128px] mx-auto 2xl:px-0 px-4 lg:mb-[120px] mb-[80px]'>
            <div>
                <h1 className='text-[#221429] text-center uppercase font-[900] lg:text-[48px] md:text-[36px] text-2xl lg:tracking-[12px] md:tracking-[8px] leading-[110%] tracking-[4px] lg:mb-[72px] md:mb-[56px] mb-[42px]'>More Projects</h1>

                <div className='flex justify-between font-semibold md:text-xl lg:text-2xl text-[18px] leading-[133%] md:tracking-[.72px] tracking-[.52px] text-[#2A2A2A] group'>
                    <Link to={iconData.leftLink} className='flex leading-[133%]  hover:-translate-x-[1px] duration-300 hover:underline hover:text-[#DD0101] md:gap-4 gap-2 items-center'><span className='text-[#DD0101]'><MdKeyboardDoubleArrowLeft className='' /> 
                    </span><span className='' >{iconData.leftName}</span></Link>
                    <Link to={iconData.rightLink} className='flex leading-[133%] hover:translate-x-[1px] hover:underline hover:text-[#DD0101] md:gap-4 gap-2 items-center duration-300'><span className=''>{iconData.rightName}</span><span className='text-[#DD0101]' ><MdKeyboardDoubleArrowRight />
                    </span></Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;