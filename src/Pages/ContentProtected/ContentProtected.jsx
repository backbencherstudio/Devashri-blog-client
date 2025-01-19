import React from 'react';
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
        const protectedPasswordTWO = import.meta.env.VITE_REACT_APP_CACE_TWO;
        
        if (password === protectedPasswordONE) {
            const token = await new SignJWT({ password, role: 'caseStudyOne' })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime(EXPIRATION_TIME)
            .sign(SECRET_KEY);

            localStorage.setItem("accessTokenOne", token);
            navigate("/caseStudyOne");
          } else if (password === protectedPasswordTWO) {
            // Generate JWT
            const token = await new SignJWT({ password, role: 'caseStudyTwo' })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime(EXPIRATION_TIME)
            .sign(SECRET_KEY)

            localStorage.setItem("accessTokenTwo", token);
            navigate("/case-studies-two");
          } else {
            alert("Invalid Password");
          }
    }
    return (
        <div className="max-w-[1128px] mx-auto px-4">
            <div className="flex items-center justify-center h-screen">
                <div className="text-center p-6 rounded">
                    <PiLock size={120} className="mx-auto mb-4 text-[#6D6D6D]" />
                    <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl mt-12 font-semibold mb-2 text-[#2A2A2A]">
                        This content is protected.
                    </h1>
                    <p className="mb-4 text-base mt-6 sm:text-xs md:text-xl lg:text-2xl text-[#6D6D6D]">
                        To view, please enter the password.
                    </p>
                    <form onSubmit={handleLogIN} action="">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name='password'
                            className="border p-2 bg-white text-[#2A2A2A] rounded w-full mt-12 sm:w-[300px] md:w-[390px] h-[48px] mb-4"
                        />
                        <button type='submit' className="flex items-center mt-6 text-[#6D6D6D] mx-auto justify-center gap-2 px-4 py-2  rounded">
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
