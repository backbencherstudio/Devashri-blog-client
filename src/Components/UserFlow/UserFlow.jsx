import React from 'react';
import research from "../../assets/UserFLow/Research - Designboat - Frame .png"

const UserFlow = () => {
    return (
        <div>
            <h1 className="text-[24px] sm:text-[28px] text-center md:text-left font-semibold leading-[30.8px] mb-6 tracking-[2.8px] not-italic text-[#DD0101]">
            USER FLOW
            </h1>
            <img src={research} alt="" />
        </div>
    );
};

export default UserFlow;