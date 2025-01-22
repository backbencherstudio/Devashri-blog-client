import React from "react";

// const ProblemCard = () => {
//   return (
//     <div className="max-w-[1128px] mx-auto px-4 2xl:px-0">
//       <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-6 py-10">
//         {/* Title Section */}
//         <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[28px] sm:leading-[30px] tracking-[1.5px] md:tracking-[2.8px] text-[#DD0101]">
//           PROBLEM
//         </h1>

//         {/* Content Section */}
//         <div className="w-full md:w-[73%]">
//           {/* Intro Paragraph */}
//           <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-justify text-[#221429]">
//             How might we simplify access to inclusive housing and essential
//             services for single tenants?
//           </p>

//           {/* Problem Stats */}
//           <div className="space-y-10 mt-8 text-[#2A2A2A]">
//             {/* AS HIGH AS */}
//             <div>
//               <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
//                 As high as
//               </p>
//               <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-1">
//                 <h1 className="text-[32px] text-[#2A2A2A] sm:text-[40px] md:text-[42px] lg:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] text-left">
//                   82%
//                 </h1>
//                 <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#2A2A2A]  font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
//                   of single tenants face discrimination due to lifestyle biases.
//                 </p>
//               </div>
//             </div>

//             {/* NEARLY */}
//             <div>
//               <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
//                 Nearly
//               </p>
//               <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-1">
//                 <h1 className="text-[32px] text-[#2A2A2A] sm:text-[40px] md:text-[42px] lg:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] text-left">
//                   66%
//                 </h1>
//                 <p className=" text-[#2A2A2A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
//                   of single tenants pay extra rent to avoid landlord
//                   confrontations.
//                 </p>
//               </div>
//             </div>

//             {/* ONLY */}
//             <div>
//               <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
//                 Only
//               </p>
//               <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-1">
//                 <h1 className="text-[32px] text-[#2A2A2A] sm:text-[40px] md:text-[42px] lg:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] text-left">
//                   58%
//                 </h1>
//                 <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
//                   of tenants are willing to pay more for fair and inclusive
//                   housing.
//                 </p>
//               </div>
//             </div>

//             {/* WITH A CAGR */}
//             <div>
//               <p className=" text-[#2A2A2A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
//                 With a CAGR
//               </p>
//               <div className="flex text-[#2A2A2A] flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-1">
//                 <span className="text-[32px] text-[#2A2A2A] sm:text-[40px] md:text-[42px] lg:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] whitespace-nowrap text-left">
//                   18-20%
//                 </span>
//                 <p className=" text-[#2A2A2A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
//                   furniture rental market shows strong demand for flexibility.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


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
          <ul className="list-disc ml-12 tex-[#2A2A2A] lg:text-2xl md:text-lg text-base leading-[133%] tracking-[.72px]">
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
