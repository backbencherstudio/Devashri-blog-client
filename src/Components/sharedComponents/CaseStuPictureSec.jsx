import React from 'react';
import img1 from "../../assets/bg.png"
import img4 from "../../assets/LaptopMockup.png"
import img5 from "../../assets/home1.gif"

const CaseStuPictureSec = ({ image = "", animationUsed }) => {

    return (
        <div className=''>
            {animationUsed && <div>
                <div className="relative w-full  bg-cover bg-center "
                    style={{ backgroundImage: `url(${img1})`, padding: "clamp(24px, 3vw, 48px) clamp(50px, 10vw, 150px)", }} >
                    <div className='relative '>
                        <img src={img4} className='' alt="" />
                        <img className='absolute top-0 left-0  w-[85%] translate-x-[9%] translate-y-[6%]' src={img5} alt="" />
                    </div>
                    {/* <img src={data[0].img2} className="" alt="" /> */}
                </div>
            </div>}
            {image && <img src={image} alt="Case Studies Picture" />}
        </div>
    );
};

export default CaseStuPictureSec;