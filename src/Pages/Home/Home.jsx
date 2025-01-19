import React from 'react';
import img1 from "../../assets/Frame 1000003204.png"
import img2 from "../../assets/Frame 119.png"
import img3 from "../../assets/Frame 116.png"
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

let data = [
    {
        id:1,
        img: img1,
        title: "Luxe Events",
        subtitle: "UX/UI Design",
        heading: "Redefining the guest experience with seamless event scheduling",
        description: "Created a responsive web and mobile platform that elevates the luxury resort experience, ensuring guests enjoy effortless and elegant event planning that reflects the resort's exclusive offerings.",
        actionText: "Enter Password"
    },
    {
        id:2,
        img: img2,
        title: "Watt Wise",
        subtitle: "UI Design",
        heading: "Crafting a premium and intuitive portal for effortless energy management",
        description: "Designed a sleek and intuitive portal that elevates the experience of managing energy consumption, empowering users with effortless control and insight.",
        actionText: "Enter Password"
    },
    {
        id:3,
        img: img3,
        title: "BacheloRite",
        subtitle: "UX/UI Design",
        heading: "Streamlining bachelor-friendly housing with integrated rental and service conveniences",
        description: "Crafting a mobile app to effortlessly find ideal bachelor accommodations while subtly integrating lifestyle enhancements like furniture rentals and convenient services for a smoother daily experience.",
        actionText: "Read Case Study"
    },
]


const Home = () => {
   
    return (
        <div className='bg-[##F9F6F5]'>
        <div className='max-w-[1128px] mx-auto xl:pt-[300px] lg:pt-[250px] md:pt-[200px] pt-[120px]  px-4 2xl:px-0'>
            <div>
                <div className='w-full flex-col flex md:gap-6 gap-4'>
                    <div className='md:w-[100px] w-[60px] md:h-[8px] h-[5px] bg-[#DD0101] '></div>
                    <h1 className='text-[#2A2A2A] font-bold lg:text-[56px] md:text-[48px] text-[24px] md:leading-[67.2px] md:tracking-[2.8px] tracking-[2px]' >Hi, I'm<span className='hover:text-[#DD0101] duration-300 ml-[14px]'>Devashri Londhe</span></h1>
                    <h3 className="text-[#2A2A2A] lg:text-[56px] md:text-[48px] text-[24px] md:leading-[67.2px] md:tracking-[2.8px] tracking-[1.5px] ">
                        I <span className="highlight delay-1">design</span>,
                        <span className="highlight delay-2">paint</span>,
                        <span className="highlight delay-3">cook</span>,
                        <span className="highlight delay-4">travel</span> &
                        <span className="highlight delay-5">workout</span>.
                    </h3>


                    <p className='md:text-2xl text-base leading[40px] w-full md:tracking-[1.2px] tracking-[.20px]'>I’m a user experience designer based in Kuala Lumpur, Malaysia, with expertise in end-to-end UX/UI design for software products. I’m passionate about enhancing lives through design and continually seek to expand my knowledge. My experience in architecture and interior design enriches my approach to creating immersive and impactful user experiences.</p>
                </div>
                <div className='lg:mt-[200px] md:mt-[150px] mt-[100px]'>
                    <p className='text-[#6D6D6D] text-2xl uppercase '>Recent case Studies</p>
                    {
                        data.map((item, i) => (
                            <div className='md:mb-[104px] mb-[60px]' key={i} >
                                <div className='pt-8'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='mt-12 grid md:grid-cols-2 gap-6'>
                                    <div className='flex flex-col items-end'>
                                        <h3 className='text-[#DD0101] text-2xl'>{item.title}</h3>
                                        <p className='text-base text-[#2A2A2A]'>{item.subtitle}</p>
                                    </div>
                                    <div>
                                        <h1 className='text-[#2A2A2A] lg:text-5xl md:text-[42px] text-[24px] font-semibold md:leading-[52.8px] tracking-[.5px] md:tracking-[1.44px]'>{item.heading}</h1>
                                        <p className='md:text-2xl text-[16px] text-[#2A2A2A] mt-4 leading-[32px] md:tracking-[.72px] tracking-[.20px]'>{item.description}</p>
                                        <button className='mt-6 text-[#6D6D6D] md:text-2xl text-[18px] flex items-center gap-3'><Link  to={item.id === 2 && "/caseStudyOne" || item.id === 1 && "/case-studies-two" || item.id === 3 && "/bachelorRite"} className='leading'>{item.actionText}</Link>  <span> <FaArrowRightLong />
                                        </span></button>
                                    </div>
                                </div>
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