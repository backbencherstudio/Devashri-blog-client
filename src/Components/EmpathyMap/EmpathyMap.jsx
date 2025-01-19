import React from 'react';
import empathyMap from "../../assets/empathyMap/empathyMap.jpg"
import Ellipse from "../../assets/empathyMap/Ellipse 24.png"

const EmpathyMap = () => {
    return (
        <div>
            <h1 className='text-[28px] text-center md:text-left font-semibold leading-[30.8px] mb-6 tracking-[2.8px] not-italic text-[#DD0101]'>EMPATHY MAP</h1>
            <div className="relative inline-block">
                <img src={empathyMap} alt="Empathy Map" />

                <img
                    className="absolute inset-0 m-auto w-[88px] h-[88px] md:w-[164px] md:h-[164px] lg:w-[226px] lg:h-[226px]"
                    src={Ellipse}
                    alt="Ellipse"
                />
            </div>

        </div>
    );
};

export default EmpathyMap;