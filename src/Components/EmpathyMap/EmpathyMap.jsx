import React from 'react';
import empathyMap from "../../assets/empathyMap/Group 42.png"


const EmpathyMap = () => {
    return (
        <div>
            <h1 className='text-[28px] text-center md:text-left font-semibold leading-[30.8px] mb-6 tracking-[2.8px] not-italic text-[#DD0101]'>EMPATHY MAP</h1>
            <div className="relative inline-block">
                <img src={empathyMap} alt="Empathy Map" />

              
            </div>

        </div>
    );
};

export default EmpathyMap;