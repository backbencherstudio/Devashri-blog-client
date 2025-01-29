import React from "react";

const ProblemCard = () => {
  const problems = [
    {
      category: "Underutilized Capacity",
      issues: [
        "Limited visibility and accessibility of events resulted in low booking rates, leaving many activities underbooked.",
        "Guests frequently missed opportunities to participate in events, diminishing their overall resort experience.",
      ],
    },
    {
      category: "Operational Inefficiencies",
      issues: [
        "Pen-and-paper scheduling systems created logistical chaos for staff, making it difficult to coordinate activities and track bookings.",
        "Mismanagement and errors, such as double bookings, led to frustration for both staff and guests.",
      ],
    },
    {
      category: "Fragmented Guest Experience",
      issues: [
        "The absence of a centralized platform made it challenging for guests to explore events suited to their preferences.",
        "Ineffective communication systems hindered guests’ ability to modify, manage, or stay updated on their bookings.",
      ],
    },
  ];

  const summary = 
    "These inefficiencies not only disrupted the guest experience but also hindered the resort's revenue potential and ability to maintain luxury service standards. A digital solution was crucial to streamline both guest engagement and operations.";

  return (
    <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 py-12">
     <div className="flex md:flex-row flex-col gap-6 xl:gap-[150px] lg:gap-[115px] md:gap-[80px]">
     <h2 className=" font-semibold lg:text-[28px] text-2xl lg:tracking-[2.8px] md:tracking-[1.4px] tracking-[.72px] mb-6 text-[#DD0101] leading-[110%]">PROBLEM</h2>
      <div>
      <p className="text-[#221429] xl:text-2xl font-medium lg:text-[22px] md:text-lg text-base lg:mb-[56px] md:mb-[46px] mb-[36px] leading-[110%] lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px]" >
        Despite offering an array of exclusive activities, the resort faced significant challenges in managing event bookings and ensuring a seamless guest experience. The reliance on manual processes led to:
      </p>
      {problems.map((problem, index) => (
        <div key={index} className="mb-10">
          <h3 className="font-semibold text-[#2A2A2A] lg:text-2xl md:text-xl text-lg mb-2 opacity-80 leading-[133%] tracking-[.72px]">{problem.category}</h3>
          <ul className="list-disc ml-12 text-[#2A2A2A] lg:text-2xl md:text-lg text-base leading-[133%] tracking-[.72px]">
            {problem.issues.map((issue, i) => (
              <li key={i} className="my-2">{issue}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-[#221429] xl:text-2xl font-medium lg:text-[22px] md:text-lg text-base leading-[110%] lg:tracking-[2.4px] md:tracking-[1.4px] tracking-[.72px]">
        {summary}
      </p>
      </div>
     </div>
    </div>
  );
};

// export default ProblemSection;

export default ProblemCard;
