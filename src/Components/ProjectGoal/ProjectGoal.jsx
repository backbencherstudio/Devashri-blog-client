import React from 'react';

const ProjectGoal = () => {
  return (
    <div className="">
      <p className="active font-extrabold text-5xl opacity-15 text-center">PROJECT GOALS</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-1">
        {/* Headers */}
        <div className="bg-white py-3 px-6 border-l-4 border-[#2A2A2A] flex items-center justify-center text-center">
          <h1 className="font-bold text-center">Goal</h1>
        </div>
        <div className="bg-white py-3 px-6 flex items-center justify-center text-center sm:col-span-1">
        <h1 className="font-bold text-center">Desired Outcome</h1>
        </div>
        <div className="bg-white py-3 px-6 flex items-center justify-center text-center sm:col-span-1">
        <h1 className="font-bold text-center">Anticipated Outcome</h1>
        </div>

        {/* Row 1 */}
        <div className="bg-white py-3 px-6 border-l-4 border-[#FF3364]">
          Digitize Activity Booking for Guests and Staff
        </div>
        <div className="bg-white py-3 px-6">
          <ul className="list-disc">
            <li>Guests can easily browse, book, and manage activities through a user-friendly platform.</li>
            <li>Real-time data ensures smooth event tracking and management.</li>
            <li>Eliminates manual processes for seamless communication and reduced errors.</li>
          </ul>
        </div>
        <div className="bg-white py-3 px-6">
          <ul className="list-disc">
            <li>Guests gain a hassle-free booking experience.</li>
            <li>Staff manages schedules efficiently with real-time insights.</li>
            <li>Manual errors and delays are significantly minimized.</li>
          </ul>
        </div>

        {/* Row 2 */}
        <div className="bg-white py-3 px-6 border-l-4 border-[#FDC334]">
          Ensure Effortless Event Planning and Management
        </div>
        <div className="bg-white py-3 px-6">
          <ul className="list-disc">
            <li>Simplify scheduling for resort admins and guest services.</li>
            <li>Create a personalized and seamless booking flow for guests.</li>
            <li>Offer tailored activity recommendations to enhance the luxury experience.</li>
          </ul>
        </div>
        <div className="bg-white py-3 px-6">
          <ul className="list-disc">
            <li>Admins handle scheduling with ease and efficiency.</li>
            <li>Guests enjoy a frictionless booking journey with relevant, curated suggestions.</li>
          </ul>
        </div>

        {/* Row 3 */}
        <div className="bg-white py-3 px-6 border-l-4 border-[#2198F6]">
          Create a Scalable Solution for Multiple Resorts
        </div>
        <div className="bg-white py-3 px-6">
          <ul className="list-disc">
            <li>Design a platform that can scale across multiple resorts.</li>
            <li>Ensure it adapts to unique guest preferences and resort-specific offerings.</li>
            <li>Maintain consistent service quality across locations.</li>
          </ul>
        </div>
        <div className="bg-white py-3 px-6">
          <ul className="list-disc">
            <li>Platform scales effortlessly to new resorts.</li>
            <li>Customizable features adapt to individual resort needs while ensuring uniform quality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectGoal;
