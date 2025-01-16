import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <div className='max-w-[1128px] mx-auto px-4 2xl-0'>
                <div className='bg-[#221429] md:py-[91px] py-[60px] px-4'>
                    <div className='flex flex-col text-white md:gap-5 gap-3'>
                        <h1 className='font-[700] md:text-[40px] text-[36px] text-center'>Let's Connect</h1>
                        <h3 className='md:text-2xl text-[20px] text-center'>Get in touch for opportunities or just to say hello!</h3>
                        <a
                            href="mailto:devashrilondhe@gmail.com"
                            className='text-[#DD0101] md:text-2xl text-[20px] tracking-[2.4px] font-[600] text-center underline'
                        >
                            devashrilondhe@gmail.com
                        </a>
                    </div>
                </div>
                <div className='py-[72px]'>
                    <div className='flex md:gap-[120px] gap-[32px] underline text-[20px] tracking-[2px] text-[#2A2A2A] font-[600] justify-center '>
                        <a href="https://www.linkedin.com/in/devashri-londhe-795532133/" target='_blank' className='hover:text-[#DD0101]  duration-300' >Linkdin</a>
                        <a href="https://dribbble.com/devashril_05" target="_blank" className='hover:text-[#DD0101] duration-300'>Dribble</a>
                        <a href="https://www.behance.net/devashrilondhedesign" target="_blank" className='hover:text-[#DD0101] duration-300'>Behance</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;