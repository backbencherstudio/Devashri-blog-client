import React from 'react';

const ProjectGoal = () => {
  return (
    <div className="">
      <p className="active text-[48px] font-black leading-[52.8px] tracking-[9.6px] text-center opacity-25">PROJECT GOALS</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-1">
        {/* Headers */}
        <div className="bg-white py-3 px-6 border-l-4 border-[#2A2A2A] flex items-center justify-center text-center">
          <h1 className="text-center text-[24px] font-semibold leading-[26.4px] tracking-[2.4px]">Goal</h1>
        </div>
        <div className="bg-white py-3 px-6 flex items-center justify-center text-center sm:col-span-1">
        <h1 className="text-center text-[24px] font-semibold leading-[26.4px] tracking-[2.4px]">Desired Outcome</h1>
        </div>
        <div className="bg-white py-3 px-6 flex items-center justify-center text-center sm:col-span-1">
        <h1 className="text-center text-[24px] font-semibold leading-[26.4px] tracking-[2.4px]">Anticipated Outcome</h1>
        </div>

        {/* Row 1 */}
        <div className="bg-white py-3 px-6 border-l-4 border-[#FF3364] text-[20px] font-medium leading-[24px] tracking-[0.6px]">
          <p className='p-6'>Digitize Activity Booking for Guests and Staff</p>
        </div>
        <div className="bg-white py-3 px-6 text-[20px] font-normal leading-[24px] tracking-[0.6px]">
          <ul className="list-disc p-6">
          <li className="pb-4">
              Guests can easily <span className="font-bold">browse, book, and manage activities</span> through a user-friendly platform.
          </li>
          <li className="pb-4">
              <span className="font-bold">Real-time data</span> ensures smooth event tracking and management.
          </li>
          <li>
              <span className="font-bold">Eliminates manual processes</span> for seamless communication and reduced errors.
          </li>

          </ul>
        </div>
        <div className="bg-white py-3 px-6 text-[20px] font-normal leading-[24px] tracking-[0.6px]">
          <ul className="list-disc p-6">
          <li className="pb-4">
              Guests gain a <span className="font-bold">hassle-free booking experience.</span>
          </li>
          <li className="pb-4">
              Staff manages schedules efficiently with <span className="font-bold">real-time insights.</span>
          </li>
          <li>
              Manual errors and delays are significantly minimized.
          </li>

          </ul>
        </div>

        {/* Row 2 */}
        <div className="bg-white py-3 px-6 border-l-4 text-[20px] font-medium leading-[24px] tracking-[0.6px] border-[#FDC334]">
          <p className='p-6'>
            Ensure Effortless Event Planning and Management
          </p>
        </div>
        <div className="bg-white py-3 px-6 text-[20px] font-normal leading-[24px] tracking-[0.6px]">
          <ul className="list-disc p-6">
            <li  className='pb-4'>Simplify scheduling for resort admins and guest services.</li>
            <li className="pb-4">
                Create a <span className="font-bold">personalized and seamless booking flow</span> for guests.
            </li>
            <li>
                Offer tailored activity recommendations to enhance the <span className="font-bold">luxury experience.</span>
            </li>

          </ul>
        </div>
        <div className="bg-white py-3 px-6 text-[20px] font-normal leading-[24px] tracking-[0.6px]">
          <ul className="list-disc p-6">
          <li className="pb-4">
              Admins handle scheduling with <span className="font-bold">ease and efficiency.</span>
          </li>
          <li>
              Guests enjoy a <span className="font-bold">frictionless booking journey</span> with relevant, curated suggestions.
          </li>

          </ul>
        </div>

        {/* Row 3 */}
        <div className="bg-white py-3 px-6 border-l-4 text-[20px] font-medium leading-[24px] tracking-[0.6px] border-[#2198F6]">
        <p className='p-6'>
            Create a Scalable Solution for Multiple Resorts
        </p>
        </div>
        <div className="bg-white py-3 px-6 text-[20px] font-normal leading-[24px] tracking-[0.6px]">
          <ul className="list-disc p-6">
          <li className="pb-4">
              Design a platform that can <span className="font-bold">scale across multiple resorts.</span>
          </li>
          <li className="pb-4">
              Ensure it adapts to <span className="font-bold">unique guest preferences</span> and resort-specific offerings.
          </li>
          <li>
              Maintain <span className="font-bold">consistent service quality</span> across locations.
          </li>

          </ul>
        </div>
        <div className="bg-white py-3 px-6 text-[20px] font-normal leading-[24px] tracking-[0.6px]">
          <ul className="list-disc p-6">
          <li className="pb-4">
                Platform scales effortlessly to new resorts.
            </li>
            <li className="pb-4">
                Customizable features adapt to <span className="font-bold">individual resort needs</span> while ensuring <span className="font-bold">uniform quality.</span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectGoal;
