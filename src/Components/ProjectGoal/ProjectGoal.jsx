import React from 'react';

const ProjectGoal = () => {
  return (
    <div className="lg:mt-[120px] md:mt-[100px] mt-[60px]">
      <p className="active text-2xl md:text-[36px] lg:text-[48px] font-black leading-[110%] lg:tracking-[9.6px] md:tracking-[6px] tracking-[3px]  opacity-25">PROJECT GOALS</p>

      <div className="lg:mt-[80px] md:mt-[56px] text-[#2A2A2A] mt-[40px] grid grid-cols-3 gap-1 marker:text-[14px]">
        {/* Headers */}
        <div className="bg-white  border-l-4 border-[#2A2A2A] flex items-center justify-center text-center">
          <h1 className="text-center lg:py-6 md:py-4 py-2  lg:text-[24px] md:text-[20px] text-[18px] font-medium leading-[110%] lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px]">Goal</h1>
        </div>
        <div className="bg-white   flex items-center justify-center text-center ">
        <h1 className="text-center lg:py-6 md:py-4 py-2 text-[18px] lg:text-[24px] md:text-[20px] font-medium leading-[110%] lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px]">Desired Outcome</h1>
        </div>
        <div className="bg-white  flex items-center justify-center text-center ">
        <h1 className="text-center lg:py-6 md:py-4 py-2 text-[18px] lg:text-[24px] md:text-[20px] font-medium leading-[110%] lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px]">Anticipated Outcome</h1>
        </div>

        {/* Row 1 */}
        <div className="bg-white  border-l-4 border-[#FF3364]  lg:text-[20px] md:text-[18px] text-[16px] font-medium leading-[120%] md:tracking-[0.6px] tracking-[0.36px]">
          <p className='lg:p-6 md:p-4 p-2'>Digitize Activity Booking for Guests and Staff</p>
        </div>
        <div className="bg-white lg:text-[20px] md:text-[16px] text-[14px] lg:p-6 md:p-4 p-2 font-normal leading-[120%]  md:tracking-[0.6px] tracking-[0.36px]">
          <ul className="list-disc lg:ml-8 md:ml-6 ml-4">
          <li className="md:pb-4 pb-2">
              Guests can easily <span className="font-medium">browse, book, and manage activities</span> through a user-friendly platform.
          </li>
          <li className="md:pb-4 pb-2">
              <span className="font-medium">Real-time data</span> ensures smooth event tracking and management.
          </li>
          <li>
              <span className="font-medium">Eliminates manual processes</span> for seamless communication and reduced errors.
          </li>

          </ul>
        </div>
        <div className="bg-white lg:text-[20px] md:text-[16px] text-[14px] lg:p-6 md:p-4 p-2 font-normal leading-[120%]  md:tracking-[0.6px] tracking-[0.36px]">
          <ul className="list-disc lg:ml-8 md:ml-6 ml-4">
          <li className="md:pb-4 pb-2">
              Guests gain a <span className="font-medium">hassle-free booking experience.</span>
          </li>
          <li className="pb-4">
              Staff manages schedules efficiently with <span className="font-medium">real-time insights.</span>
          </li>
          <li>
              Manual errors and delays are significantly minimized.
          </li>

          </ul>
        </div>

        {/* Row 2 */}
        <div className="bg-white lg:p-6 md:p-4 p-2 border-l-4   md:text-[20px] lg:text-[24px] text-[18px] font-medium leading-[120%] md:tracking-[0.6px] tracking-[0.36px]  border-[#FDC334]">
          <p className=''>
            Ensure Effortless Event Planning and Management
          </p>
        </div>
        <div className="bg-white lg:text-[20px] md:text-[16px] text-[14px] lg:p-6 md:p-4 p-2 font-normal leading-[120%]  md:tracking-[0.6px] tracking-[0.36px]">
          <ul className="list-disc lg:ml-8 md:ml-6 ml-4">
            <li  className='pb-4'>Simplify scheduling for resort admins and guest services.</li>
            <li className="pb-4">
                Create a <span className="font-medium">personalized and seamless booking flow</span> for guests.
            </li>
            <li>
                Offer tailored activity recommendations to enhance the <span className="font-medium">luxury experience.</span>
            </li>

          </ul>
        </div>
        <div className="bg-white lg:text-[20px] md:text-[16px] text-[14px] lg:p-6 md:p-4 p-2 font-normal leading-[120%]  md:tracking-[0.6px] tracking-[0.36px]">
          <ul className="list-disc lg:ml-8 md:ml-6 ml-4">
          <li className="md:pb-4 pb-2">
              Admins handle scheduling with <span className="font-medium">ease and efficiency.</span>
          </li>
          <li>
              Guests enjoy a <span className="font-medium">frictionless booking journey</span> with relevant, curated suggestions.
          </li>

          </ul>
        </div>

        {/* Row 3 */}
        <div className="bg-white lg:p-6 md:p-4 p-2 border-l-4   md:text-[20px] lg:text-[24px] text-[18px] font-medium leading-[120%] md:tracking-[0.6px] tracking-[0.36px]  border-[#2198F6]">
        <p className=''>
            Create a Scalable Solution for Multiple Resorts
        </p>
        </div>
        <div className="bg-white lg:text-[20px] md:text-[16px] text-[14px] lg:p-6 md:p-4 p-2 font-normal leading-[120%]  md:tracking-[0.6px] tracking-[0.36px]">
          <ul className="list-disc lg:ml-8 md:ml-6 ml-4">
          <li className="md:pb-4 pb-2">
              Design a platform that can <span className="font-medium">scale across multiple resorts.</span>
          </li>
          <li className="pb-4">
              Ensure it adapts to <span className="font-medium">unique guest preferences</span> and resort-specific offerings.
          </li>
          <li>
              Maintain <span className="font-medium">consistent service quality</span> across locations.
          </li>

          </ul>
        </div>
        <div className="bg-white lg:text-[20px] md:text-[16px] text-[14px] lg:p-6 md:p-4 p-2 font-normal leading-[120%]  md:tracking-[0.6px] tracking-[0.36px]">
          <ul className="list-disc lg:ml-8 md:ml-6 ml-4">
          <li className="md:pb-4 pb-2">
                Platform scales effortlessly to new resorts.
            </li>
            <li className="pb-4">
                Customizable features adapt to <span className="font-medium">individual resort needs</span> while ensuring <span className="font-medium">uniform quality.</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectGoal;
