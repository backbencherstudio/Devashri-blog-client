import React from 'react';
import Slider from '../../../Components/Slider/Slider';
import Conclusion from '../../../Components/Conclusion/Conclusion';
import FinalDesignforRite from '../../../Components/FinalDesign/FinalDesignforRite';
import TypographyForRite from '../../../Components/BachelorRite/typography/TypographyForRite';
import WireFrames from '../../../Components/BachelorRite/WireFrames/WireFrames';

const BachelorRite = () => {



    return (
        <div>
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