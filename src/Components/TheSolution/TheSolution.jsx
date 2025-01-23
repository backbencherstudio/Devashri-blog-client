import React from 'react';

const TheSolution = () => {
  return (
    <div className="">
      {/* Title */}
      <h1 className="text-[#DD0101] text-[32px] md:text-[42px] lg:text-[48px] font-extrabold leading-[110%] lg:tracking-[12px] md:tracking-[10px] tracking-[6px] not-italic lg:mt-[120px] lg:mb-[80px] md:mb-[60px] mb-10 md:mt-[100px] md:w-[5ch] mt-[60px]  opacity-25  text-center md:text-left">
        THE 
        SOLUTION
      </h1>

      {/* Wireframes Section */}

      <div className="flex flex-col md:flex-row gap-6 justify-between lg:mt-[120px] md:mt-[100px] mt-[60px]">
        <div className='mb-6 md:mb-0 '>
          <h1 className='text-[#DD0101] md:w-[246px] md:text-[24px] text-xl  font-semibold leading-[110%] tracking-[.72px] md:tracking-[2.4px]'>WIREFRAMES</h1>
        </div>

        <div className="w-full max-w-[840px] mt-[]">
          <h1 className=" md:text-[22px] lg:text-[24px] font-medium leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] mb-4 md:mb-6">
          Structuring the Experience
          </h1>
          <ul className="list-disc ml-9 leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
            <li className="mb-3 md:mb-4 leading-[110%] md:text-[20px] lg:text-[24px]  ">
            Our approach to designing the Luxe Events platform began with creating low-fidelity wireframes, laying the foundation for a user-centric, efficient, and visually appealing interface.
            </li>
            <li className="mb-3 md:mb-4 leading-[110%]  md:text-[20px] lg:text-[24px] font-normal ">
            These wireframes acted as the structural blueprint of the application, helping us validate design ideas, iterate quickly, and align with stakeholder feedback before moving into high-fidelity prototypes.
            </li>
          </ul>
        </div>
      </div>

      {/* Early Sketches Section */}
      <h1 className="p-8 text-center md:py-14 py-10 text-[#DD0101] text-[24px]  leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
        Early Sketches: Laying the Foundation
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Image */}
        <img
          className="h-auto w-full lg:h-[814px] lg:w-1/2 object-cover"
          src="/solution/sol2.png"
          alt="Main Wireframe"
        />
        {/* Secondary Images */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <img
            className="h-auto w-full object-cover lg:h-1/2"
            src={"/solution/sol1.png"}
            alt="Sketch 1"
          />
          <img
            className="h-auto w-full object-cover lg:h-1/2"
            src={"/solution/sol3.png"}
            alt="Sketch 2"
          />
        </div>
      </div>


      {/* Low-Fidelity Wireframes */}
      <h1 className=" text-center md:py-14 py-10 text-[#DD0101] text-[24px] leading-[26.4px] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
        Low-Fidelity Wireframes: Structuring Core Features
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 mb-28">
        {/* Main Image */}
        <img
          className="h-auto w-full lg:h-[814px] lg:w-1/2 object-cover"
          src="/wireFrames/WIREFRAME3.png"
          alt="Main Wireframe"
        />
        {/* Secondary Images */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <img
            className="h-auto w-full object-cover lg:h-1/2"
            src={"/wireFrames/WIREFRAME1.png"}
            alt="Sketch 1"
          />
          <img
            className="h-auto w-full object-cover lg:h-1/2"
            src={"/wireFrames/WIREFRAME2.png"}
            alt="Sketch 2"
          />
        </div>
      </div>
    </div>
  );
};

export default TheSolution;
