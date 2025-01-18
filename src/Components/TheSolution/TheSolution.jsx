import React from 'react';

const TheSolution = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h1 className="text-[#DD0101] text-[38px] md:text-[48px] font-extrabold leading-[110%] tracking-[12px] not-italic my-28 opacity-25 text-center md:text-left">
        THE <br />
        SOLUTION
      </h1>

      {/* Wireframes Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <h1 className="text-[24px] text-[#DD0101] font-semibold leading-[110%] tracking-[2.4px] not-italic text-center md:text-left">
          WIREFRAMES
        </h1>
        <div>
          <h1 className="text-[24px] font-medium leading-[110%] md:tracking-[2.4px] not-italic mb-6 text-center md:text-left">
            Structuring the Experience
          </h1>
          <ul className="md:text-[24px] font-normal leading-[110%] md:tracking-[2.4px] not-italic list-disc pl-8">
            <li className="mb-4">
              Our approach to designing the Luxe Events platform began with creating low-fidelity wireframes, laying the foundation for a user-centric, efficient, and visually appealing interface.
            </li>
            <li>
              These wireframes acted as the structural blueprint of the application, helping us validate design ideas, iterate quickly, and align with stakeholder feedback before moving into high-fidelity prototypes.
            </li>
          </ul>
        </div>
      </div>

      {/* Early Sketches Section */}
      <h1 className="p-8 text-center py-14 text-[#DD0101] text-[24px]  leading-[110%] md:tracking-[2.4px]">
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
      <h1 className="p-8 text-center py-14 text-[#DD0101] text-[24px] leading-[110%] md:tracking-[2.4px]">
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
