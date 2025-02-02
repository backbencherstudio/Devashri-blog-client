import React, { useEffect } from 'react';
import Slider from '../../../Components/Slider/Slider';
import Conclusion from '../../../Components/Conclusion/Conclusion';
import FinalDesignforRite from '../../../Components/FinalDesign/FinalDesignforRite';
import TypographyForRite from '../../../Components/BachelorRite/typography/TypographyForRite';
import WireFrames from '../../../Components/BachelorRite/WireFrames/WireFrames';
import img3 from '../../../assets/Frame 116.png';
import SectionCategory from '../../../Components/sharedComponents/SectionCategory';
import CaseStuPictureSec from '../../../Components/sharedComponents/CaseStuPictureSec';
import BriefSecOfCaseSec from '../../../Components/sharedComponents/BriefSecOfCaseSec';
import ProblemCard from '../../../Components/ProblemCard/ProblemCard';
import CompetitiveAnalysis from '../../../Components/CompetitiveAnalysis/CompetitiveAnalysis';
import UserResearch from '../../../Components/UserResearch/UserResearch';
import InsightsField from '../../../Components/InsightsField/InsightsField';
import UserPersona from '../../../Components/UserPersona/UserPersona';
import EmpathyMap from '../../../Components/EmpathyMap/EmpathyMap';
import UxChallenge from '../../../Components/UxChallenge/UxChallenge';
import UserFlow from '../../../Components/UserFlow/UserFlow';
import StructuringInfo from '../../../Components/StructuringInfo/StructuringInfo';
import ProblemCardRite from '../../../Components/ProblemCard/ProblemCardRite';

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
      paragraph : "BacheloRite is a B2B2C platform that connects bachelors with landlords and service providers for a seamless living experience. The app offers bachelor-friendly accommodations alongside flexible rental options for furniture, appliances, and electronics. It also integrates essential services like housekeeping, cooking, etc. BacheloRite simplifies managing daily living needs through a unified, efficient solution.",

      briefHead : "BRIEF",
      role : "UX/UI Designer",
      duration : "Feb - May 2023",
      tools : "Figma, Photoshop, Miro"
  }

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
},[])

const iconData={
  leftName:"Watt Wise",
  rightName:"Luxe Events",
  leftLink:"/case-studies-two",
  rightLink:"/caseStudyOne"
}

    return (
        <div>
            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 '>

                  {/* header section title, description, options */}
                  <SectionCategory sectionCat={sectionCat} title = {title} description = {description} options= {options}/>

                  {/* section picture */}
                  <CaseStuPictureSec image={img3} animationUsed={false}/>
                  
                  {/* Brief Section */}
                  <BriefSecOfCaseSec briefObj={briefObj}/>
            </div>

            <div className='bg-[#F2ECEB] lg:mt-[120px] md:mt-[100px] mt-[60px]'>
                {/* Problem card */}
                <ProblemCardRite/>
            </div>

            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 lg:mt-[120px] md:mt-[100px] mt-[60px]'>
                <CompetitiveAnalysis />
                <UserResearch/>
                <InsightsField/>
                <UserPersona/>
                <EmpathyMap/>
            </div>
            
            <div className='bg-[#F2ECEB] mt-[60px] md:mt-[100px] lg:mt[120px]'>
              <UxChallenge/> 
            </div>

            <div className='max-w-[1128px] mx-auto px-4 2xl:px-0 mt-[60px] md:mt-[100px] lg:mt[120px]'>
              <UserFlow/>
              <StructuringInfo/>
            </div>


            <div>
                

            </div>
                <WireFrames></WireFrames>
                <TypographyForRite></TypographyForRite>
                <FinalDesignforRite></FinalDesignforRite>
                <Conclusion conclusionData={conclusionData}></Conclusion>
                <Slider iconData={iconData}></Slider>
        </div>
    );
};

export default BachelorRite;




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
        [<span className="font-[500]">User-Centric Design:</span>, " Understanding user pain points and creating personas helped prioritize solutions that directly addressed bachelor-specific challenges."],
        [<span className="font-[500]">Cross-Disciplinary Insights:</span>, " Research processes in architecture and UX design share a common focus on user needs and spatial understanding, fostering my transition between fields."],
        [<span className="font-[500]">Balancing Features:</span>, " Ensuring the app remained feature-rich yet intuitive highlighted the importance of usability in complex interfaces."],
      ],
    },
    {
      section: "Opportunities For Enhancement",
      items: [
        [<span className="font-[500]">Flatmate Integration:</span>, " Adding features to connect tenants with potential flatmates and a Splitwise-style tool for sharing consolidated rent and expenses."],
        [<span className="font-[500]">Community Building:</span>, " Implementing a platform to allow tenants to connect, discuss, share suggestions, and build a sense of community within the app."],
      ],
    },
  ];