import React, { useEffect } from 'react';
import SectionCategory from '../../Components/sharedComponents/SectionCategory';
import imageForCaseStudy from '../../assets/Frame 1000003204.png';
import CaseStuPictureSec from '../../Components/sharedComponents/CaseStuPictureSec';
import BriefSecOfCaseSec from '../../Components/sharedComponents/BriefSecOfCaseSec';
import ProblemCard from '../../Components/ProblemCard/ProblemCard';
import ProjectGoal from '../../Components/ProjectGoal/ProjectGoal';
import DesignApproch from '../../Components/DesignApproch/DesignApproch';
import Frame1 from '../../assets/Frame1.png'
import PersionalStories from '../../Components/PersonalStories/PersionalStories';
import PersonalStoriesCard from '../../Components/PersonalStories/PersonalStoriesCard';
import AffinityIdeation from '../../Components/AffinityIdeation/AffinityIdeation';
import TheSolution from '../../Components/TheSolution/TheSolution';
import FinalDesign from '../../Components/FinalDesign/FinalDesign';
import WebToolResortStuff from '../../Components/WebToolResortStuff/WebToolResortStuff';
import Conclusion from '../../Components/Conclusion/Conclusion';
import Slider from '../../Components/Slider/Slider';

const conclusionData = [
  {
    section: "Conclusion",
    content:
      "The Luxe Events project aimed to create an innovative platform that enhances the resort experience by simplifying event bookings and streamlining operational workflows. It focuses on delivering a seamless, user-friendly solution for both guests and resort staff, improving efficiency, personalization, and guest satisfaction.",
  },
  {
    section: "WHAT I ACHIEVED FROM THIS PROJECT",
    items: [
      [
        "Designed a ",
        <span className="font-[500]">user-centric platform</span>,
        " addressing the needs of guests and staff at luxury resorts."
      ],
      [
        "Incorporated ",
        <span className="font-[500]">real-time booking management</span>,
        ", ",
        <span className="font-[500]">activity tracking</span>,
        ", and ",
        <span className="font-[500]">personalized recommendations</span>,
        " to enhance user engagement."
      ],
      [
        "Worked closely with ",
        <span className="font-[500]">stakeholders</span>,
        " to understand and gather requirements, playing a ",
        <span className="font-[500]">client-facing role</span>,
        " and ensuring alignment with business objectives."
      ],
      [
        "Contributed to the iterative design process, focusing on ",
        <span className="font-[500]">continuous improvement</span>,
        " and adapting the platform to evolving user needs."
      ],
    ],
  },
  {
    section: "What I Learned From This Project",
    items: [
      [
        <span className="font-[500]">Client Interaction:</span>,
        " Extensive engagement with stakeholders helped me refine requirements and create solutions that aligned with business goals."
      ],
      [
        <span className="font-[500]">Cross-Functional Collaboration:</span>,
        " Collaborated with diverse teams to ensure design and functionality met operational needs."
      ],
      [
        <span className="font-[500]">Iterative Design:</span>,
        " Through continuous iterations, I gained insights into balancing user experience and technical constraints in a dynamic project environment."
      ],
    ],
  },
  {
    section: "Opportunities For Enhancement",
    items: [
      [
        <span className="font-[500]">Guest Personalization:</span>,
        " Further enhancing personalized recommendations based on past behavior and preferences."
      ],
      [
        <span className="font-[500]">Staff Efficiency:</span>,
        " Adding more administrative features to streamline internal communication and event management."
      ],
      [
        <span className="font-[500]">Scalability:</span>,
        " Expanding the platform to support multiple resorts and diverse activity types."
      ],
    ],
  },
  
];



const CaseStudiesOne = () => {

  // section header data
  const sectionCat = "UXUI Design"
  const title = "Redefining the guest experience with seamless event scheduling"
  const description = "Created a responsive web and mobile platform that elevates the luxury resort experience, ensuring guests enjoy effortless and elegant event planning that reflects the resort's exclusive offerings."
  const options = {
    "events": "Luxe Events",
    "management": "Hospitality Management Solution",
    "research": "UX Research & UI Design"
  }

  //    brief section
  const briefObj = {
    paragraph: "Luxe Events is a B2B2C platform designed to connect luxury resort guests with exclusive event offerings while streamlining operations for resort staff. The platform enables guests to seamlessly discover, book, and manage activities during their stay, offering a personalized and intuitive experience. For resort staff, it simplifies event scheduling, tracking, and guest communication, replacing manual processes with a unified digital solution. Luxe Events elevates the guest experience while driving operational efficiency and scalability for resorts.",

    briefHead: "BRIEF",
    role: "UX/UI Designer",
    duration: "Dec 2023 - Ongoing",
    tools: "Figma"
  }

  const personalStoriesData = 
    {
      title: "PERSONAS & USER STORIES",
      subtitle: "Building for every role.",
      points: [
        "The design process for Luxe Events centered around identifying five key personas integral to the platform’s success.",
        "These personas represented different roles involved in the event booking process at the resort, each with unique needs and goals.",
        "Each persona’s needs and goals were translated into user stories, which informed the design and prioritized feature development."
      ]
    }
 


  //slider section

    const iconData={
      leftName:"Watt Wise",
      rightName:"BacheloRite",
      leftLink:"/case-studies-two",
      rightLink:"/bachelorRite"
  }


  return (
    <div>
      <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 '>
        
        {/* header section title, description, options */}
        <SectionCategory sectionCat={sectionCat} title={title} description={description} options={options} />

        {/* section picture */}
        <CaseStuPictureSec animationUsed={true} />

        {/* Brief Section */}
        <BriefSecOfCaseSec briefObj={briefObj} />
      </div>

      <div className='bg-[#F2ECEB] lg:mt-[120px] md:mt-[100px] mt-[60px]'>
        {/* Problem card */}
        <ProblemCard />
      </div>

      <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 '>
        <ProjectGoal/>
        <DesignApproch/>

      </div>

      <div className='lg:mt-[80px] md:mt-[70px] mt-[40px]'>
        <img className='w-full' src={Frame1} alt="" />
      </div>

      <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 lg:pt-[120px] md:pt[100px] pt-[60px]'>
        <PersionalStories data={personalStoriesData} />

        <PersonalStoriesCard />

        <AffinityIdeation  />
       

        <TheSolution />

        <FinalDesign />
      </div>

      <WebToolResortStuff/>

      <Conclusion conclusionData={conclusionData} />

      <Slider iconData={iconData} />
    </div>
  );
};

export default CaseStudiesOne;

