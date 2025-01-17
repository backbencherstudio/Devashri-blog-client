import React from 'react';
import { rolesData } from "../../roleData/roleData";

const PersonalStoriesCard = () => {
  console.log(rolesData);
  return (
    <div className="py-24">
      <div className="space-y-8">
        {rolesData.map((role) => (
          <div 
            key={role.id} 
            className="flex flex-col md:flex-row h-auto md:h-[394px] gap-6 md:gap-12"
          >
            {/* Image Section */}
            <img 
              className="w-full md:w-[263px] h-auto md:h-full object-cover" 
              src={role.image} 
              alt="" 
            />

            {/* Text Section */}
            <div className="flex flex-col justify-end h-auto md:h-full">
              <h1 className="text-[20px] text-[#2A2A2A] font-semibold leading-[22px] not-italic">
                Role:
              </h1>
              <p className="text-[20px] leading-[22px] not-italic mb-4">{role.role}</p>

              <h1 className="text-[20px] text-[#2A2A2A] font-semibold leading-[22px] not-italic">
                Goal:
              </h1>
              <p className="text-[20px] leading-[22px] not-italic mb-4">{role.goal}</p>

              <h1 className="text-[20px] text-[#2A2A2A] font-semibold leading-[22px] not-italic">
                User Story:
              </h1>
              <p className="text-[20px] leading-[22px] not-italic mb-4">{role.user_story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalStoriesCard;
