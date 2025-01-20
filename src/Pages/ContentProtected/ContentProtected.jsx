import React,{useEffect} from 'react';
import { PiLock } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { SignJWT } from 'jose';

const ContentProtected = () => {
    const navigate = useNavigate()

    const SECRET_KEY = new TextEncoder().encode(import.meta.env.VITE_SECRET_KEY);
    const EXPIRATION_TIME = '1h';

    const handleLogIN=async(e)=>{
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

        useEffect(()=>{
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      },[])


    return (
        <div className="max-w-[1128px] mx-auto px-4 ">
            <div className="flex items-center justify-center translate-y-[30%]">
                <div className="text-center p-6 rounded">
                    <PiLock  className="mx-auto  text-[#6D6D6D] text-[80px] md:text-[100px] lg:text-[120px]" />
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
                            className="border p-2 bg-white text-[#2A2A2A] rounded w-full mt-6 md:mt-10 lg:mt-12 sm:w-[300px] md:w-[390px] h-[48px] mb-4"
                        />
                        
                      
                        <button type='submit' className="flex items-center md:mt-6 text-[#6D6D6D] mx-auto justify-center gap-2 px-4 py-2  rounded">
                            <p>Read Case Study</p>
                            <BsArrowRight />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContentProtected;
