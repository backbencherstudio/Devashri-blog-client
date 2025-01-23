import React, { useState, useEffect } from 'react';
import img2 from "../../assets/Frame 119.png"
import img3 from "../../assets/Frame 116.png"
import img1 from "../../assets/bg.png"
import img4 from "../../assets/LaptopMockup.png"
import img5 from "../../assets/home1.gif"


import { Link } from 'react-router-dom';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

let data = [
    {
        id: 1,
        img1: img1,
        img2: img4,
        img3: img5,
        title: "Luxe Events",
        subtitle: "UX/UI Design",
        heading: "Redefining the guest experience with seamless event scheduling",
        description: "Created a responsive web and mobile platform that elevates the luxury resort experience, ensuring guests enjoy effortless and elegant event planning that reflects the resort's exclusive offerings.",
        actionText: "Enter Password"
    },
    {
        id: 2,
        img: img2,
        title: "Watt Wise",
        subtitle: "UI Design",
        heading: "Crafting a premium and intuitive portal for effortless energy management",
        description: "Designed a sleek and intuitive portal that elevates the experience of managing energy consumption, empowering users with effortless control and insight.",
        actionText: "Enter Password"
    },
    {
        id: 3,
        img: img3,
        title: "BacheloRite",
        subtitle: "UX/UI Design",
        heading: "Streamlining bachelor-friendly housing with integrated rental and service conveniences",
        description: "Crafting a mobile app to effortlessly find ideal bachelor accommodations while subtly integrating lifestyle enhancements like furniture rentals and convenient services for a smoother daily experience.",
        actionText: "Read Case Study"
    },
]


const Home = () => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const words = [
        { text: 'design,', color: 'text-[#DD0101]' },
        { text: 'paint,', color: 'text-[#DD0101]' },
        { text: 'cook,', color: 'text-[#DD0101]' },
        { text: 'travel', color: 'text-[#DD0101]' },
        { text: '&', color: 'text-[#2A2A2A]', skipAnimation: true },
        { text: 'workout.', color: 'text-[#DD0101]' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => {
                // Skip the '&' symbol index
                if (prevIndex === 3) return 5; // Skip from 'travel' to 'workout'
                if (prevIndex === words.length - 1) return 0;
                return prevIndex + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[##F9F6F5]'>
            <div className='max-w-[1128px] mx-auto  px-4 2xl:px-0'>
                <div>
                    <div className='w-full flex-col flex responsive-padding-home'>
                        <div className='md:w-[100px] w-[60px] md:h-[8px] lg:mb-6 md:mb-4  mb-2 h-[5px] bg-[#DD0101]'></div>
                        <div className="flex flex-col items-start">
                            <h1 className='text-[#2A2A2A] font-bold lg:mb-6 md:mb-4 mb-2 leading-[120%] responsive-textH1 ' >Hi, I'm <Link to={"/about"}><span className='hover:text-[#DD0101] duration-300 ml-[14px]'>Devashri Londhe</span></Link> </h1>
                            <div className=" text-[#2A2A2A] leading-[120%] md:mb-4 mb-2 lg:mb-6 responsive-textH1">
                                <span>I </span>
                                {words.map((word, index) => (
                                    <span
                                        key={word.text}
                                        className={`transition-all duration-500 ${word.skipAnimation
                                            ? word.color
                                            : index === currentWordIndex
                                                ? `${word.color} opacity-100 font-medium`
                                                : ' font-normal'
                                            }`}
                                    >
                                        {word.text}{' '}
                                    </span>
                                ))}
                            </div>
                            <p className=' lg:responsive-textH5 md:text-[18px] leading-[166%] text-base md:tracking-[1.2px] tracking-[.8px] -mb-[8px]'>I’m a user experience designer based in Kuala Lumpur,Malaysia,with expertise in end-to-end UX/ UI design for software products. I’m passionate about enhancing lives through design and continually seek to expand my knowledge. My experience in architecture and interior design enriches my approach to creating immersive and impactful user experiences.</p>
                        </div>
                    </div>
                    <div className=' '>
                        <p className='text-[#6D6D6D] text-2xl leading-none uppercase mb-8 lg:tracking-[3.6px] md:tracking-[2.3px] tracking-[1.6px]'>Recent case Studies</p>
                        {
                            data.map((item, i) => (
                                <div className={`${i === 2 ? "lg:mb-[200px] md:mb-[150px] mb-[100px] " : "md:mb-[104px]  mb-[60px]"} `} >
                                    <Link to={item.id === 2 && "/protectedTwo" || item.id === 1 && "/protected" || item.id === 3 && "/bachelorRite"} key={i} >
                                        <div className=''>

                                            {item.id === 1 && <div>
                                                <div className="relative w-full  bg-cover bg-center "
                                                    style={{ backgroundImage: `url(${data[0]?.img1})`, padding: "clamp(24px, 3vw, 48px) clamp(50px, 10vw, 150px)", }} >
                                                    <div className='relative '>
                                                        <img src={data[0]?.img2} className='' alt="" />
                                                        <img className='absolute top-0 left-0  w-[85%] translate-x-[9%] translate-y-[6%]' src={data[0]?.img3} alt="" />
                                                    </div>
                                                    {/* <img src={data[0].img2} className="" alt="" /> */}
                                                </div>
                                            </div>}
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='mt-12 flex flex-col lg:flex-row items-start justify-end ms-auto w-full gap-6 '>
                                            <div className='flex flex-col gap-3 items-start lg:items-end shrink-0'>
                                                <h3 className='text-[#DD0101] text-2xl leading-[90%] md:tracking-[2.4px] tracking-[1.4px]'>{item.title}</h3>
                                                <p className='text-base text-[#2A2A2A] leading-[110%]  md:tracking-[1.6px]'>{item.subtitle}</p>
                                            </div>
                                            <div className='w-[696px]'>
                                                <h1 className='text-[#2A2A2A] lg:text-5xl md:text-[42px] text-[24px] font-semibold leading-[120%] tracking-[.5px] md:tracking-[1.44px]'>{item.heading}</h1>
                                                <p className='md:text-2xl text-[16px] text-[#2A2A2A] mt-4 leading-[120%] md:tracking-[.72px] tracking-[.20px]'>{item.description}</p>
                                                <button className="mt-6 text-[#6D6D6D] hover:text-[#2A2A2A] md:text-2xl text-[18px] flex items-center gap-4 tracking-[.72px] font-semibold group">
                                                    <div className="leading-[133%] group-hover:tracking-[.66px]  hover:tracking-[0.66px] group-hover:underline group-hover:decoration-[1px] group-hover:underline-offset-2">{item.actionText}</div>
                                                    <span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="30"
                                                            height="16"
                                                            viewBox="0 0 31 16"
                                                            fill="none"
                                                            className="fill-current text-[#6D6D6D] group-hover:text-[#2A2A2A]"
                                                        >
                                                            <path d="M30.7071 8.96101C31.0976 8.57049 31.0976 7.93732 30.7071 7.5468L24.3431 1.18284C23.9526 0.792314 23.3195 0.792314 22.9289 1.18284C22.5384 1.57336 22.5384 2.20653 22.9289 2.59705L28.5858 8.25391L22.9289 13.9108C22.5384 14.3013 22.5384 14.9344 22.9289 15.325C23.3195 15.7155 23.9526 15.7155 24.3431 15.325L30.7071 8.96101ZM0 9.25391H30V7.25391H0V9.25391Z" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;