import React from 'react';
import { PiLock } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

const ContentProtected = () => {
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
                    <input
                        type="text"
                        placeholder="Enter Password"
                        className="border p-2 bg-white text-[#2A2A2A] rounded w-full mt-12 sm:w-[300px] md:w-[390px] h-[48px] mb-4"
                    />
                    <button className="flex items-center mt-6 text-[#6D6D6D] mx-auto justify-center gap-2 px-4 py-2  rounded">
                        <p>Read Case Study</p>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentProtected;
