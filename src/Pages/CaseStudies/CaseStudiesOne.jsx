import React from 'react';
import SectionCategory from '../../Components/sharedComponents/SectionCategory';
import CaseStuPictureSec from '../../Components/sharedComponents/CaseStuPictureSec';

const CaseStudiesOne = () => {
    const sectionCat = "UXUI Design"
    const title = "Redefining the guest experience with seamless event scheduling"
    const description = "Created a responsive web and mobile platform that elevates the luxury resort experience, ensuring guests enjoy effortless and elegant event planning that reflects the resort's exclusive offerings."
    const options = {
        "events": "Luxe Events",
        "management": "Hospitality Management Solution",
        "research" : "UX Research & UI Design"
    }
    return (
        <div className='max-w-[1120px] mx-auto px-4'>
            <hr class="w-[100px] border-0 border-t-[8px] mb-6 border-[#DD0101] " />

            {/* header section title, description, options */}
            <SectionCategory sectionCat={sectionCat} title = {title} description = {description} options= {options}/>

            {/* section picture */}
            <CaseStuPictureSec/>
        </div>
    );
};

export default CaseStudiesOne;