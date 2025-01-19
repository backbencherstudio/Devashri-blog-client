import React from 'react';
import Slider from '../../../Components/Slider/Slider';
import Conclusion from '../../../Components/Conclusion/Conclusion';
import FinalDesignforRite from '../../../Components/FinalDesign/FinalDesignforRite';
import img3 from '../../../assets/Frame 116.png';
import SectionCategory from '../../../Components/sharedComponents/SectionCategory';
import CaseStuPictureSec from '../../../Components/sharedComponents/CaseStuPictureSec';
import BriefSecOfCaseSec from '../../../Components/sharedComponents/BriefSecOfCaseSec';
import ProblemCard from '../../../Components/ProblemCard/ProblemCard';

const BachelorRite = () => {
  const sectionCat = "UXUI Design"
  const title = "Streamlining bachelor-friendly housing with integrated rental and service conveniences"
  const description = "Crafting a mobile app to effortlessly find ideal bachelor accommodations while subtly integrating lifestyle enhancements like furniture rentals and convenient services for a smoother daily experience."
  const options = {
      "events": "BacheloRite",
      "management": "Classroom Project",
      "research" : "Property rental application",
      "res" : "UX Research & UI Design"
  }

//    brief section
  const briefObj = {
      paragraph : "Luxe Events is a B2B2C platform designed to connect luxury resort guests with exclusive event offerings while streamlining operations for resort staff. The platform enables guests to seamlessly discover, book, and manage activities during their stay, offering a personalized and intuitive experience. For resort staff, it simplifies event scheduling, tracking, and guest communication, replacing manual processes with a unified digital solution. Luxe Events elevates the guest experience while driving operational efficiency and scalability for resorts.",

      briefHead : "BRIEF",
      role : "UX/UI Designer",
      duration : "Dec 2023 - Ongoing",
      tools : "Figma"
  }


    return (
        <div>
            <div className='max-w-[1128px] mx-auto px-4 mt-48'>
                  <hr className="w-[86px] border-0 border-t-[8px] mb-6 border-[#DD0101] " />

                  {/* header section title, description, options */}
                  <SectionCategory sectionCat={sectionCat} title = {title} description = {description} options= {options}/>

                  {/* section picture */}
                  <CaseStuPictureSec image={img3}/>
                  
                  {/* Brief Section */}
                  <BriefSecOfCaseSec briefObj={briefObj}/>
            </div>

            <div className='bg-[#F2ECEB] mt-28'>
                {/* Problem card */}
                <ProblemCard />
            </div>

            <div>
                

            </div>
                <FinalDesignforRite></FinalDesignforRite>
                <Conclusion conclusionData={conclusionData}></Conclusion>
                <Slider iconData={iconData}></Slider>
        </div>
    );
};

export default BachelorRite;



const iconData={
    leftName:"Watt Wise",
    rightName:"Luxe Events",
    leftLink:"/caseStudyOne",
    rightLink:"/case-studies-two"
}
const conclusionData = [
    {
      section: "Conclusion",
      content:
        "The project introduced a comprehensive platform tailored to single tenants, simplifying rental searches, enhancing communication, and integrating essential services. This solution focuses on providing tenants with transparency, convenience, and tailored support for their unique living needs.",
    },
    {
      section: "What I Achieved From This Project",
      items: [
        "Designed an intuitive platform that catered to the needs of bachelors and single tenants.",
        "Incorporated features for simplified rental processes and bundled services like WiFi, cleaning, and appliance rentals.",
        "Helped bridge the gap between architectural research methodologies and UX/UI design principles, leveraging transferable skills.",
      ],
    },
    {
      section: "What I Learned From This Project",
      items: [
        "User-Centric Design: Understanding user pain points and creating personas helped prioritize solutions that directly addressed bachelor-specific challenges.",
        "Cross-Disciplinary Insights: Research processes in architecture and UX design share a common focus on user needs and spatial understanding, fostering my transition between fields.",
        "Balancing Features: Ensuring the app remained feature-rich yet intuitive highlighted the importance of usability in complex interfaces.",
      ],
    },
    {
      section: "Opportunities For Enhancement",
      items: [
        "Flatmate Integration: Adding features to connect tenants with potential flatmates and a Splitwise-style tool for sharing consolidated rent and expenses.",
        "ECommunity Building: Implementing a platform to allow tenants to connect, discuss, share suggestions, and build a sense of community within the app.",
      ],
    },
  ];