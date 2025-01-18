import React from 'react';
import { MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft  } from "react-icons/md";
import { Link } from 'react-router-dom';


const Slider = ({iconData}) => {
    return (
        <div className='max-w-[1128px] mx-auto 2xl:px-0 px-4 mb-[120px]'>
            <div>
                <h1 className='text-center uppercase font-[900] lg:text-[48px] md:text-[36px] text-2xl lg:tracking-[12px] md:tracking-[8px] tracking-[4px] mb-[72px]'>More Projects</h1>

                <div className='flex justify-between font-semibold text-2xl leading-[32px] tracking-[.72px] text-[#2A2A2A]'>
                    <Link to={iconData.leftLink} className='flex gap-4 items-center'><span className='text-[#DD0101]'><MdKeyboardDoubleArrowLeft /> 
                    </span><span>{iconData.leftName}</span></Link>
                    <Link to={iconData.rightLink} className='flex gap-4 items-center'><span>{iconData.rightName}</span><span className='text-[#DD0101]' ><MdKeyboardDoubleArrowRight />
                    </span></Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;