import React, { useState, useRef, useEffect, } from 'react';
import logo from "../assets/Layer 5.png"
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // Scrolling Down - Hide Navbar
                setShowNavbar(false);
            } else {
                // Scrolling Up - Show Navbar
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='max-w-[1128px] mx-auto pt-[92px]  px-4 2xl:px-0'>
                <div className={`fixed  top-0 left-0 w-full z-50 bg-[#F9F6F5] transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className='max-w-[1128px] mx-auto px-4 2xl:px-0  mt-8 mb-4 '>
                        <div className='flex justify-between items-center h-full '>
                            <Link to={"/"} className='flex w-[56px]'>
                                <img src={logo} alt="logo" />
                            </Link>
                            <div className='flex'>
                                <ul className='font-medium text-[#2A2A2A] text-[20px] hidden md:flex uppercase gap-12'>
                                    <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/"}>HOME</NavLink></li>
                                    <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/about"}>about</NavLink></li>
                                    <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/playground"}>playground</NavLink></li>
                                    <li className='hover:text-[#DD0101] duration-500 transition-all '>
                                        <a href="https://drive.google.com/file/d/1WS7BvELMfcFdXZii-b_XoBcJmwco3Xjp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                            Resume
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    ref={menuButtonRef}
                                    onClick={() => setOpen(!open)}
                                    className="md:hidden block"
                                >
                                    {open ? "" : <CiMenuFries className='text-2xl' />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='flex justify-between items-center'>
                    <Link to={"/"} className='flex w-[56px]'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className='flex'>
                        <ul className='font-medium text-[#2A2A2A] text-[20px] hidden md:flex uppercase gap-12'>
                            <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/"}>HOME</NavLink></li>
                            <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/about"}>about</NavLink></li>
                            <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/playground"}>playground</NavLink></li>
                             <li className='hover:text-[#DD0101] duration-500 transition-all '>
                                <a href="https://drive.google.com/file/d/1WS7BvELMfcFdXZii-b_XoBcJmwco3Xjp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                        <button
                            ref={menuButtonRef}
                            onClick={() => setOpen(!open)}
                            className="md:hidden block"
                        >
                            {open ? "" : <CiMenuFries className='text-2xl' />}
                        </button>
                    </div>
                </div> */}
                {/* Sidebar with overlay */}
                <div className={`md:hidden fixed z-50 inset-0 bg-black/50 transition-all duration-700 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div
                        ref={sidebarRef}
                        className={`uppercase w-[220px] min-h-screen bg-zinc-50 fixed top-0 left-0 pt-[36px] p-4 transition-transform duration-700 ease-out ${open ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        <div className='flex items-center justify-between border-b border-[#DD0101] pb-4'>
                            <Link to={"/"}>
                                <img src={logo || "/placeholder.svg"} className='w-[36px]' alt="logo" />
                            </Link>
                            <div>
                                <IoMdClose
                                    onClick={() => setOpen(false)}
                                    className='text-2xl cursor-pointer hover:text-[#DD0101] transition-all'
                                />
                            </div>
                        </div>
                        <ul className='font-medium text-[#2A2A2A] text-base flex flex-col gap-3 mt-6'>
                            <li><NavLink to={"/"}>HOME</NavLink></li>
                            <li><NavLink to={"/about"}>about</NavLink></li>
                            <li><NavLink to={"/playground"}>playground</NavLink></li>
                            <li>
                                <a href="https://drive.google.com/file/d/1WS7BvELMfcFdXZii-b_XoBcJmwco3Xjp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NavBar;

{/* <div className='fixed top-0 left-0 w-full z-50 bg-[#F9F6F5] transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full'>
<div className='max-w-[1128px] mx-auto px-4 2xl:px-0  h-[72px]'>
<div className='flex justify-between items-center h-full'>
      <Link to={"/"} className='flex w-[56px]'>
          <img src={logo} alt="logo" />
      </Link>
      <div className='flex'>
          <ul className='font-medium text-[#2A2A2A] text-[20px] hidden md:flex uppercase gap-12'>
              <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/"}>HOME</NavLink></li>
              <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/about"}>about</NavLink></li>
              <li className='hover:text-[#DD0101] duration-500 transition-all '><NavLink to={"/playground"}>playground</NavLink></li>
               <li className='hover:text-[#DD0101] duration-500 transition-all '>
                  <a href="https://drive.google.com/file/d/1WS7BvELMfcFdXZii-b_XoBcJmwco3Xjp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      Resume
                  </a>
              </li>
          </ul>
          <button
              ref={menuButtonRef}
              onClick={() => setOpen(!open)}
              className="md:hidden block"
          >
              {open ? "" : <CiMenuFries className='text-2xl' />}
          </button>
      </div>
  </div>
</div>
  </div> */}