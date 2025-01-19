import React from 'react';
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
        "The Luxe Events project aimed to create an innovative platform that enhances the guest experience by simplifying event booking and streamlining operational workflows. It focused on delivering a seamless, user-friendly solution for both guests and resort staff, improving efficiency, personalization, and guest satisfaction.",
    },
    {
      section: "What I Achieved From This Project",
      items: [
        "Designed a user-centric platform addressing the needs of guests and staff at luxury resorts.",
        "Incorporated real-time booking management, activity tracking, and personalized recommendations to enhance user engagement.",
        "Worked closely with stakeholders to understand and gather requirements, aligning client-facing and internal team objectives.",
        "Contributed to the iterative design process, focusing on continuous improvement and adapting the platform to evolving user needs.",
      ],
    },
    {
      section: "What I Learned From This Project",
      items: [
        "Client Interaction: Extensive engagement with stakeholders refined my ability to analyze user needs and contribute to tailored solutions, ensuring seamless collaboration between the needs of guests and staff at luxury resorts.",
        "Cross-Functional Collaboration: Collaborated with diverse teams to ensure design and functionality met operational needs.",
        "Iterative Design: Through continuous iteration, I gained insights into balancing user experience and technical constraints in a dynamic project environment.",
      ],
    },
    {
      section: "Opportunities For Enhancement",
      items: [
        "Guest Personalization: Further enhancing personalized recommendations based on guest behavior and preferences.",
        "Staff Efficiency: Adding new administrative features to streamline internal communications and event management.",
        "Scalability: Expanding the platform to support multiple resorts and diverse activity types.",
      ],
    },
    {
      section: "Note",
      content:
        "This design is a reflection of the work completed during my time on the project. As likely company-sensitive iterations past my involvement.",
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
        "research" : "UX Research & UI Design"
    }

//    brief section
    const briefObj = {
        paragraph : "Luxe Events is a B2B2C platform designed to connect luxury resort guests with exclusive event offerings while streamlining operations for resort staff. The platform enables guests to seamlessly discover, book, and manage activities during their stay, offering a personalized and intuitive experience. For resort staff, it simplifies event scheduling, tracking, and guest communication, replacing manual processes with a unified digital solution. Luxe Events elevates the guest experience while driving operational efficiency and scalability for resorts.",

        briefHead : "BRIEF",
        role : "UX/UI Designer",
        duration : "Dec 2023 - Ongoing",
        tools : "Figma"
    }

    //slider section

    const iconData={
      leftName:"Watt Wise",
      rightName:"BacheloRite",
      leftLink:"/caseSTudyThree",
      rightLink:"/case-studies-two"
  }

    return (
        <div>
            <div className='max-w-[1128px] mx-auto px-4 mt-48'>
                <hr className="w-[86px] border-0 border-t-[8px] mb-6 border-[#DD0101] " />

                {/* header section title, description, options */}
                <SectionCategory sectionCat={sectionCat} title = {title} description = {description} options= {options}/>

                {/* section picture */}
                <CaseStuPictureSec image={imageForCaseStudy}/>
                
                {/* Brief Section */}
                <BriefSecOfCaseSec briefObj={briefObj}/>
            </div>

            <div className='bg-[#F2ECEB] mt-28'>
                {/* Problem card */}
                <ProblemCard />
            </div>

            <div className='max-w-[1128px] mx-auto px-4 mt-32'>
                {/* <ProjectGoal/> */}
                {/* <DesignApproch/> */}

            </div>

            <img className='w-full' src={Frame1} alt="" />

            <div className='max-w-[1128px] mx-auto px-4 py-28'>
                <PersionalStories/>

                <PersonalStoriesCard/>

                <AffinityIdeation/>

                <TheSolution/>
                
                <FinalDesign/>
            </div>

            {/* <WebToolResortStuff/> */}

            <Conclusion conclusionData={conclusionData}  />

            <Slider iconData={iconData} />
        </div>
    );
};

export default CaseStudiesOne;

