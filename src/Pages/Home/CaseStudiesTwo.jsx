import DesignProcess from "../../Components/CaseStudiesTwoComponet/DesignProcess/DesignProcess";
import TheFinalDesign from "../../Components/CaseStudiesTwoComponet/theFinalDesign/TheFinalDesign";
import Typography from "../../Components/CaseStudiesTwoComponet/typography/Typography";
import Conclusion from "../../Components/Conclusion/Conclusion";


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
    return (
        <div>
            <DesignProcess></DesignProcess>
            <Typography></Typography>
            <TheFinalDesign></TheFinalDesign>
            <Conclusion conclusionData={conclusionData}></Conclusion>
        </div>
    );
};



export default CaseStudiesTwo;