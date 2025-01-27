import React from 'react';
import PersionalStories from '../PersonalStories/PersionalStories';
import img from "/list.png"

const AffinityIdeation = () => {

    const affinityIdeationData =
    {
        title: "AFFINITY MAPPING & IDEATION",
        subtitle: "Deriving Insights",
        points: [
            "During the ideation phase, we organized and analyzed the data gathered from stakeholder meetings, personas, and user stories using affinity mapping.",
            "This process allowed us to identify patterns, common themes, and key insights that would guide the design process.",
            "Through brainstorming sessions, we discovered several crucial elements that shaped our approach."
        ],
        img:img,
    }
    const userFlowData =
    {
        title: "USER FLOW",
        subtitle: "",
        points: [
            "To ensure the Luxe Events platform delivered an intuitive and seamless experience, we developed detailed user flow.",
            "This flow served as a blueprint for designing the application’s interface and interactions, highlighting how user would navigate the system to achieve their goals.",
        ],
        
    }

    return (
        <div>

            <PersionalStories data={affinityIdeationData}></PersionalStories>


            <div className="flex flex-col md:flex-row gap-6 justify-between lg:mt-[120px] md:mt-[100px] mt-[60px]">
                <div className='mb-6 md:mb-0 '>
                    <h1 className='text-[#DD0101] md:w-[246px] md:text-[24px] text-xl  font-normal leading-[110%] tracking-[.72px] md:tracking-[2.4px]'>USER FLOW</h1>
                </div>

                <div className="w-full max-w-[840px] text-[#221429]">
                    <ul className="list-disc ml-9 leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px]">
                        <li className="mb-3 md:mb-4 leading-[110%] md:text-[20px] lg:text-[24px]  ">
                            To ensure the Luxe Events platform delivered an intuitive and seamless experience, we developed detailed user flow.
                        </li>
                        <li className="mb-3 md:mb-4 leading-[110%]  md:text-[20px] lg:text-[24px] font-normal ">
                            This flow served as a blueprint for designing the application’s interface and interactions, highlighting how user would navigate the system to achieve their goals.
                        </li>
                    </ul>
                </div>
            </div>

            {/* user flow */}
            <img className='md:mt-14 mt-10' src={"/workflow.png"} alt="" />


            {/* the Solutions */}
        </div>
    );
};

export default AffinityIdeation;