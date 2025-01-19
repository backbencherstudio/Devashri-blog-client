import React from 'react';
import img1 from "../../../assets/bachelorRite/wire-frames/Current Booking .png"
import img2 from "../../../assets/bachelorRite/wire-frames/Property - Add Ons Pop Up.png"
import img3 from "../../../assets/bachelorRite/wire-frames/Enter City.png"
import img4 from "../../../assets/bachelorRite/wire-frames/Property Listings.png"
import img5 from "../../../assets/bachelorRite/wire-frames/Summary & Confirmation.png"
import img6 from "../../../assets/bachelorRite/wire-frames/Forget Password 11.png"
import img7 from "../../../assets/bachelorRite/wire-frames/Sign Up.png"
import img8 from "../../../assets/bachelorRite/wire-frames/Splash Screen.png"
import img9 from "../../../assets/bachelorRite/wire-frames/Login.png"
import img10 from "../../../assets/bachelorRite/wire-frames/Forget Password 11.png"
import img11 from "../../../assets/bachelorRite/wire-frames/KYC Verification.png"
import img12 from "../../../assets/bachelorRite/wire-frames/Home Page.png"
import img13 from "../../../assets/bachelorRite/wire-frames/Forget Password 12.png"
import img14 from "../../../assets/bachelorRite/wire-frames/Rent a Product Listing.png"
import img15 from "../../../assets/bachelorRite/wire-frames/Book a Service.png"

import Marquee from "react-fast-marquee";



const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
];


const WireFrames = () => {
    return (
        <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 mt-[120px] overflow-hidden'>
            <div>
                <h1 className='text-[48px] text-[#DD0101] font-black leading-[52.8px] tracking-[12px] opacity-25'>Wire <br /> Frames</h1>
                <div className='flex flex-col gap-6 mt-4 lg:text-[24px] md:text-[20px] text-[18px] font-normal lg:leading-[26.4px] leading-[25px] lg:tracking-[2.4px] tracking-[.72px] md:tracking-[1.2px]  text-[#221429]'>
                    <p>After finalizing the information architecture, we progressed to wireframe development and visual design, addressing the identified pain points and opportunities for our personas.</p>
                    <p>A seamless onboarding experience was prioritized, followed by a dynamic homepage showcasing the selected city, area, top-picked properties, post-COVID measures, and engaging blogs under "Life at BacheloRite."</p>
                    <p>The apartment exploration and booking flow was designed to be intuitive, alongside a "Pay Rent" feature for easy monthly payments of consolidated packages, ensuring a user-friendly and streamlined experience for single tenants.</p>
                </div>
            </div>
            <div className='mt-[56px]'>
                <div className="space-y-10">
                    <MarqueeRow direction="left" rowImages={images.slice(0, 5)} />
                    <MarqueeRow direction="right" rowImages={images.slice(5, 10)} />
                    <MarqueeRow direction="left" rowImages={images.slice(10, 15)} />
                </div>
            </div>
        </div>
    );
};

export default WireFrames;

const MarqueeRow = ({ rowImages,direction }) => {
    return (
<Marquee gradient={false} direction={direction} speed={50} pauseOnHover={true}>
  {rowImages.map((image, index) => (
    <div
      key={index}
      className="flex-shrink-0 md:mx-5 mx-2"
    >
      <img
        src={image}
        alt={`Wireframe ${index + 1}`}
        className="w-[150px] h-[300px] sm:w-[200px] sm:h-[400px] md:w-[222.409px] md:h-[480.479px] rounded-lg"
      />
    </div>
  ))}
</Marquee>
    );
};
