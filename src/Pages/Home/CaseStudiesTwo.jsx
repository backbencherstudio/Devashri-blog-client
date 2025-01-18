import DesignProcess from "../../Components/CaseStudiesTwoComponet/DesignProcess/DesignProcess";
import TheFinalDesign from "../../Components/CaseStudiesTwoComponet/theFinalDesign/TheFinalDesign";
import Typography from "../../Components/CaseStudiesTwoComponet/typography/Typography";
import Challenge from "../../Components/Challenge/Challenge";
import Conclusion from "../../Components/Conclusion/Conclusion";
import ProblemCard from "../../Components/ProblemCard/ProblemCard";
import BriefSecOfCaseSec from "../../Components/sharedComponents/BriefSecOfCaseSec";
import CaseStuPictureSec from "../../Components/sharedComponents/CaseStuPictureSec";
import SectionCategory from "../../Components/sharedComponents/SectionCategory";
import img2 from '../../assets/Frame 119.png';
import Slider from "../../Components/Slider/Slider";


const conclusionData = [
    {
      section: "Conclusion",
      content:
        "The project successfully delivered a energy management platform tailored to utility users. It simplifies meter readings, usage tracking, and historical data analysis while enabling intuitive interaction through a user-friendly interface. Despite being BRD-driven, it managed to align with user expectations, though flexibility for unforeseen user needs was slightly constrained.",
    },
    {
      section: "What I Achieved From This Project",
      items: [
        "Designed a unified platform for energy usage and meter management.",
        "Simplified user tasks like submitting readings, analyzing trends, and accessing historical data in a structured format.",
        "Delivered actionable insights and seamless navigation for users to manage energy efficiently.",
      ],
    },
    {
      section: "What I Learned From This Project",
      items: [
        "User-Centric Design: Adapting complex data into visually engaging and intuitive components enhances usability.",
        "Feature Prioritization: Streamlining functionality such as toggles, upload features, and download options ensures a practical workflow.",
        "Limitation of BRD-Driven Design: While adhering to predefined requirements ensures alignment with initial goals, it may lack flexibility to address evolving user behaviors and needs.",
      ],
    },
    {
      section: "Opportunities For Enhancement",
      items: [
        "Introduce predictive analytics for energy consumption trends to provide proactive suggestions.",
        "Enhance visual storytelling by integrating dynamic charts and comparisons over time.",
        "Add personalization features like saved preferences for date ranges or commonly accessed tools.",
        "Revisit BRD-driven workflows by incorporating iterative testing cycles for continuous refinement.",
      ],
    },
  ];
  

const CaseStudiesTwo = () => {
    const sectionCat = "UXUI Design"
    const title = "Crafting a premium and intuitive portal for effortless energy management"
    const description = "Designed a sleek and intuitive portal that elevates the experience of managing energy consumption, empowering users with effortless control and insight."
    const options = {
        "events": "Watt Wise",
        "management": "Energy management portal",
        "research" : "UI Design"
    }

  //    brief section
    const briefObj = {
        paragraph : "Watt Wise is a customer-centric web portal designed to streamline energy management for commercial users. The platform simplifies account management, billing, and energy usage tracking while offering a seamless self-service experience. Built with advanced technology and intuitive UI/UX, the portal ensures secure access, quick information retrieval, and scalability for future integrations. Watt Wise empowers users with actionable insights, enhancing efficiency and control over their energy consumption through a robust, user-friendly solution.",
        briefHead : "BRIEF",
        role : "UI Designer ",
        duration : "2024 - Ongoing",
        tools : "Figma"
    }



    const iconData={
        leftName:"Luxe Events",
        rightName:"BachelorRite",
        leftLink:"/caseStudyOne",
        rightLink:"/caseSTudyThree"
    }

    return (
        <div>
            <div className='max-w-[1128px] mx-auto px-4 mt-48'>
                <hr className="w-[86px] border-0 border-t-[8px] mb-6 border-[#DD0101] " />

                {/* header section title, description, options */}
                <SectionCategory sectionCat={sectionCat} title = {title} description = {description} options= {options}/>

                {/* section picture */}
                <CaseStuPictureSec image={img2}/>
                
                {/* Brief Section */}
                <BriefSecOfCaseSec briefObj={briefObj}/>
            </div>

            <div className='bg-[#F2ECEB] mt-28'>
                {/* Problem card */}
                <Challenge/>
            </div>


            <DesignProcess></DesignProcess>
            <Typography></Typography>
            <TheFinalDesign></TheFinalDesign>
            <Conclusion conclusionData={conclusionData}></Conclusion>
            <Slider iconData={iconData} ></Slider>
        </div>
    );
};



export default CaseStudiesTwo;