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

    return (
        <div>
            <div className='max-w-[1128px] mx-auto px-4 mt-48'>
                <hr className="w-[100px] border-0 border-t-[8px] mb-6 border-[#DD0101] " />

                {/* header section title, description, options */}
                <SectionCategory sectionCat={sectionCat} title = {title} description = {description} options= {options}/>

                {/* section picture */}
                <CaseStuPictureSec image={imageForCaseStudy}/>
                
                {/* Brief Section */}
                <BriefSecOfCaseSec briefObj={briefObj}/>
            </div>

            <div className='bg-[#F2ECEB] mt-28'>
                {/* Problem card */}
                <ProblemCard/>
            </div>

            <div className='max-w-[1128px] mx-auto px-4 mt-32'>
                <ProjectGoal/>
                <DesignApproch/>

            </div>

            <img className='w-full' src={Frame1} alt="" />

            <div className='max-w-[1128px] mx-auto px-4 py-28'>
                <PersionalStories/>

                <PersonalStoriesCard/>

                <AffinityIdeation/>

                <TheSolution/>

                <FinalDesign/>
            </div>

        </div>
    );
};

export default CaseStudiesOne;