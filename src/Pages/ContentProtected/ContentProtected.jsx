import React, { useEffect } from 'react';
import { PiLock } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';

const ContentProtected = () => {
    const navigate = useNavigate()

    const SECRET_KEY = new TextEncoder().encode(import.meta.env.VITE_SECRET_KEY);
    const EXPIRATION_TIME = '1h';

    const handleLogIN = async (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const protectedPasswordONE = import.meta.env.VITE_REACT_APP_CACE_ONE;

        if (password === protectedPasswordONE) {
            const token = await new SignJWT({ password, role: 'caseStudyOne' })
                .setProtectedHeader({ alg: 'HS256' })
                .setExpirationTime(EXPIRATION_TIME)
                .sign(SECRET_KEY);

            localStorage.setItem("accessTokenOne", token);
            navigate("/caseStudyOne");
        } else {
            alert("Invalid Password");
        }

    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])


    return (
        <div className="max-w-[1128px] mx-auto px-4 ">
            <div className="flex items-center justify-center translate-y-[25%] lg:translate-y-[20%]">
                <div className="text-center p-6 rounded">
                    <div className=''>
                        <PiLock className="mx-auto  text-[#6D6D6D]  md:w-[120px] md:h-[120px] w-[100px] h-[100px]" />
                    </div>
                    <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl mt-6 md:mt-10 lg:mt-12 font-semibold  text-[#2A2A2A] tracking-[.52px] md:tracking-[1px] lg:tracking-[1.44px]">
                        This content is protected.
                    </h1>
                    <p className="mb-2 text-base md:mt-6 mt-4  md:text-[22px] lg:text-2xl text-[#6D6D6D] tracking-[.32px] md:tracking-[.52px] lg:tracking-[.72px]">
                        To view, please enter the password.
                    </p>
                    <form onSubmit={handleLogIN} action="">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name='password'
                            className="border md:placeholder:text-lg placeholder:text-base  md:p-4 p-3 bg-white text-[#2A2A2A] rounded-[8px] w-full mt-6 md:mt-10 lg:mt-12 sm:w-[300px] md:w-[390px] mb-4 text-lg"
                        />


                        {/* <button type='submit' className="flex lg:text-2xl md:text-xl text-base items-center md:mt-6 mt-3  text-[#6D6D6D] mx-auto justify-center gap-2 px-4 py-2  rounded hover:text-[#2A2A2A]  hover:underline hover:font-[500]  ">
                                          <p>Read Case Study</p>
                                          <BsArrowRight />
                                      </button> */}

                        <button type='submit' className="mt-6 text-[#6D6D6D] hover:text-[#2A2A2A] md:text-2xl text-[18px] flex justify-center w-full items-center gap-4 tracking-[.72px] font-semibold group">
                            <div className=" leading-[133%] group-hover:tracking-[.66px]  hover:tracking-[0.66px] group-hover:underline group-hover:decoration-[1px] group-hover:underline-offset-2" >Read Case Study</div>
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContentProtected;
