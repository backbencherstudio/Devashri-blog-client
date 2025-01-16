import React, { useState } from 'react';
import logo from "../assets/Layer 5.png"
import { NavLink, useSearchParams } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

    let [open,setOpen] = useState(false)

    return (
        <div>
           <div className='max-w-[1128px] mx-auto mt-[72px] px-4 2xl:px-0'>
                <div className='flex justify-between items-center'>
                    <div className='flex w-[56px]'>
                         <img src={logo} alt="" />
                          </div>
                    <div>
                        <ul className='font-medium text-[#2A2A2A] text-[20px] hidden md:flex  uppercase gap-12'>
                        
                            <li><NavLink to={"/"}>HOME</NavLink></li>
                            <li><NavLink to={"/about"}>about</NavLink></li>
                            <li><NavLink to={"/playground"}>playground</NavLink></li>
                            <li><NavLink to={"/resume"}>resume</NavLink></li>
                        </ul>
                        <button onClick={() => setOpen(!open)}>
                        {open ? <IoMdClose className='text-2xl md:hidden block' /> : <CiMenuFries className='md:hidden block text-2xl'/> }
                        </button>
                    </div>
                </div>
                <div>
                    {open ? <div>
                        <ul className='font-medium text-[#2A2A2A] text-[20px] flex flex-col gap-3 md:hidden  uppercase  w-[220px] min-h-screen bg-zinc-50 z-30 fixed top-0 pt-[72px] p-4 '>      
                            <li><NavLink to={"/"}>HOME</NavLink></li>
                            <li><NavLink to={"/about"}>about</NavLink></li>
                            <li><NavLink to={"/playground"}>playground</NavLink></li>
                            <li><NavLink to={"/resume"}>resume</NavLink></li>
                        </ul>
                    </div>:""}
                </div>
           </div>
        </div>
    );
};

export default NavBar;