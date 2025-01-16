import React from 'react';
import img1 from "../../assets/Frame 1000003204.png"

const Home = () => {
    return (
        <div className='max-w-[1128px] mx-auto pt-[300px] px-4 2xl:px-0'>
            <div>
                <div className='w-full flex-col flex gap-6'>
                    <div className='w-[100px] h-[5px] bg-[#DD0101] '></div>
                    <h1 className='text-[#2A2A2A] font-bold text-[56px] leading-[67.2px] ' >Hi, I'm <span className='hover:text-[#DD0101]'>Devashri Londhe</span></h1>
                    <h3 className='text-[#2A2A2A]  text-[56px]  leading-[67.2px]'>I design, paint, cook, travel & workout.</h3>
                    <p className='text-2xl leading[40px] w-full'>I’m a user experience designer based in Kuala Lumpur, Malaysia, with expertise in end-to-end UX/UI design for software products. I’m passionate about enhancing lives through design and continually seek to expand my knowledge. My experience in architecture and interior design enriches my approach to creating immersive and impactful user experiences.</p>
                </div>
                <div className='mt-[200px]'>
                    <p className='text-[#6D6D6D] text-2xl uppercase '>Recent case Studies</p>
                    <div className='py-6'>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;