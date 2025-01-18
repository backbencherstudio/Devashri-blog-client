import React from 'react';

const ProblemCard = () => {
    return (
        <div className="max-w-[1128px] mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
                {/* Title Section */}
                <h1 className="active text-[20px] md:text-[28px] font-semibold leading-[30.8px] tracking-[2.8px]">PROBLEM</h1>
                

                {/* Content Section */}
                <div className="w-full md:w-[73%]">
                    {/* Intro Paragraph */}
                    <p className="md:tracking-[0.1em] font-medium text-md md:text-lg lg:text-xl text-justify text-[#221429]">
                        Despite offering an array of exclusive activities, the resort faced significant challenges in managing event bookings and ensuring a seamless guest experience. The reliance on manual processes led to:
                    </p>

                    {/* Issues */}
                    <div className="space-y-8 mt-8 text-[#2A2A2A]">
                        {/* Underutilized Capacity */}
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Underutilized Capacity</p>
                            <ul className="list-disc pl-6 md:pl-10 space-y-2 md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>Limited visibility and accessibility of events resulted in low booking rates, leaving many activities under booked.</li>
                                <li>Guests frequently missed opportunities to participate in events, diminishing their overall resort experience.</li>
                            </ul>
                        </div>

                        {/* Operational Inefficiencies */}
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Operational Inefficiencies</p>
                            <ul className="list-disc pl-6 md:pl-10 space-y-2  md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>Pen-and-paper scheduling systems created logistical chaos for staff, making it difficult to coordinate activities and track bookings.</li>
                                <li>Mismanagement and errors, such as double bookings, led to frustration for both staff and guests.</li>
                            </ul>
                        </div>

                        {/* Fragmented Guest Experience */}
                        <div>
                            <p className="text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[0.72px] opacity-80 mb-2">Fragmented Guest Experience</p>
                            <ul className="list-disc pl-6 md:pl-10 space-y-2  md:text-[24px] md:font-normal md:leading-[32px] md:tracking-[0.72px]">
                                <li>The absence of a centralized platform made it challenging for guests to explore events suited to their preferences.</li>
                                <li>Ineffective communication systems hindered guests' ability to modify, manage, or stay updated on their bookings.</li>
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

export default ProblemCard;