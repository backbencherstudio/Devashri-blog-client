import React from 'react';

const Challenge = () => {
    return (
        <div className="max-w-[1128px] mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
                {/* Title Section */}
                <h1 className="active text-[20px] md:text-[28px] font-semibold leading-[30.8px] tracking-[2.8px]">THE CHALLENGE</h1>
                

                {/* Content Section */}
                <div className="w-full md:w-[73%]">
                    {/* Intro Paragraph */}
                    <p className="md:tracking-[0.1em] font-medium text-md md:text-lg lg:text-xl text-justify text-[#221429]">
                         Designing with Constraints: Turning Requirements into Intuitive Solutions
                    </p>

                    {/* Issues */}
                    <div className="space-y-8 mt-8 text-[#2A2A2A]">
                        {/* Underutilized Capacity */}
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">BRD-Driven Design:</p>
                            <ul className="space-y-2 md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>The design was based solely on the Business Requirement Document, with no user research, requiring precise interpretation of technical specs.</li>
                            </ul>
                        </div>

                        {/* Operational Inefficiencies */}
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Balancing Complexity and Simplicity:</p>
                            <ul className="space-y-2  md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>The portal had to integrate complex features like billing and meter readings while ensuring an intuitive user experience.</li>
                            </ul>
                        </div>

                        {/* Fragmented Guest Experience */}
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Light and Dark Mode:</p>
                            <ul className="space-y-2  md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>Designing for both themes without compromising readability, accessibility, or aesthetics.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Technical Constraints:</p>
                            <ul className="space-y-2  md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>Ensured scalability and seamless integration with backend systems while meeting compatibility requirements for browsers and devices.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Limited Feedback Loop:</p>
                            <ul className="space-y-2  md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>Created a user-friendly design based on internal reviews and alignment with stakeholders, without iterative user validation.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Closing Paragraph */}
                    <p className="md:text-[24px] text-center md:text-left font-medium leading-[26.4px] md:tracking-[2.4px] mt-8 md:mt-14">
                        These inefficiencies not only disrupted the guest experience but also hindered the resort's revenue potential and ability to maintain luxury service standards. A digital solution was crucial to streamline both guest engagement and operations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Challenge;