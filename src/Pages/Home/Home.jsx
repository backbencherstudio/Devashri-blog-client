import React,{useState,useEffect} from 'react';
import img2 from "../../assets/Frame 119.png"
import img3 from "../../assets/Frame 116.png"
import img1 from "../../assets/bg.png"
import img4 from "../../assets/LaptopMockup.png"
import img5 from "../../assets/home1.gif"


import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

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
        { text: 'design', color: 'text-[#DD0101]' },
        { text: 'paint', color: 'text-[#DD0101]' },
        { text: 'cook', color: 'text-[#DD0101]' },
        { text: 'travel', color: 'text-[#DD0101]' },
        { text: '&', color: 'text-[#2A2A2A]' },
        { text: 'workout', color: 'text-[#DD0101]' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[##F9F6F5]'>
            <div className='max-w-[1128px] mx-auto  px-4 2xl:px-0'>
                <div>
                    <div className='w-full flex-col flex xl:gap-6 lg:gap-6 md:gap-4 gap-3 responsive-padding'>
                        <div className='md:w-[100px] w-[60px] md:h-[8px] h-[5px] bg-[#DD0101] mt-2'></div>
                        <h1 className='text-[#2A2A2A] font-bold  md:text-[36px] lg:text-[42px] xl:text-[48px] text-[24px] md:leading-[67.2px] md:tracking-[2.8px] tracking-[1.5px] responsive-textH1' >Hi, I'm <Link to={"/about"}><span className='hover:text-[#DD0101] duration-300 ml-[14px]'>Devashri Londhe</span></Link> </h1>
                            <div className=" text-[#2A2A2A]  responsive-textH1">
                                <span>I </span>
                                {words.map((word, index) => (
                                    <span
                                        key={word.text}
                                        className={`transition-all duration-500 ${index === currentWordIndex ? word.color: 'text-[#2A2A2A] '
                                            }`}
                                    >
                                        {word.text}
                                        {index < words.length - 1 && <span>, </span>}
                                        {index === words.length - 1 && '.'}
                                    </span>
                                ))}
                            </div>


                        <p className=' lg:responsive-textH5 md:text-[18px] text-base md:leading-[30px] leading- md:tracking-[.3px] tracking-[.8px]'>I’m a user experience designer based in Kuala Lumpur,Malaysia,with expertise in end-to-end UX/ UI design for software products. I’m passionate about enhancing lives through design and continually seek to expand my knowledge. My experience in architecture and interior design enriches my approach to creating immersive and impactful user experiences.</p>
                    </div>
                    <div className=' '>
                        <p className='text-[#6D6D6D] text-2xl uppercase '>Recent case Studies</p>
                        {
                            data.map((item, i) => (
                                <div className='md:mb-[104px] mb-[60px]' >
                                    <Link to={item.id === 2 && "/protectedTwo" || item.id === 1 && "/protected" || item.id === 3 && "/bachelorRite"} key={i} >
                                        <div className='pt-8'>

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
                                        <div className='mt-12 grid md:grid-cols-2 gap-6'>
                                            <div className='flex flex-col items-end'>
                                                <h3 className='text-[#DD0101] text-2xl'>{item.title}</h3>
                                                <p className='text-base text-[#2A2A2A]'>{item.subtitle}</p>
                                            </div>
                                            <div>
                                                <h1 className='text-[#2A2A2A] lg:text-5xl md:text-[42px] text-[24px] font-semibold md:leading-[52.8px] tracking-[.5px] md:tracking-[1.44px]'>{item.heading}</h1>
                                                <p className='md:text-2xl text-[16px] text-[#2A2A2A] mt-4 leading-[32px] md:tracking-[.72px] tracking-[.20px]'>{item.description}</p>
                                                <button className='mt-6 text-[#6D6D6D] md:text-2xl text-[18px] flex items-center gap-3 hover:text-[#2A2A2A]'><div className='leading  hover:underline hover:font-[500] '>{item.actionText}</div>  <span> <FaArrowRightLong />
                                                </span></button>
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