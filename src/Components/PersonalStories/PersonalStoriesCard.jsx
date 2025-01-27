import React from 'react';
import { rolesData } from "../../roleData/roleData";
import img1 from "/people/Frame1.png"
import img2 from "/people/Frame2.png"
import img3 from "/people/Frame3.png"
import img4 from "/people/Frame4.png"
import img5 from "/people/Frame5.png"

const data = [
  {
    img: img1,
    guest: "// Guest",
    name: "Jessica Tim",
    age: "30 years",
    location: "California",
  },
  {
    img: img2,
    guest: "// Guide",
    name: "James Anderson",
    age: "35 Years",
    location: "Texas",
  },
  {
    img: img3,
    guest: "// Concierge",
    name: "Michael Davis",
    age: "40 Years",
    location: "Miami, FL",
  },
  {
    img: img4,
    guest: "// Resort Admin",
    name: "David Clark",
    age: "42 Years",
    location: "New York, NY",
  },
  {
    img: img5,
    guest: "// Super Admin",
    name: "Chris Brown",
    age: "48 Years",
    location: "Chicago, IL",
  },
];

const PersonalStoriesCard = () => {
  return (
    <div className="lg:mb-[120px] md:mb-[100px] mb-[60px]">
      <div className="space-y-8">

        {rolesData.map((role) => (
          <div
            key={role.id}
            className="flex flex-col md:flex-row h-auto  gap-6 md:gap-8 lg:gap-12"
          >
            {/* Image Section */}
            {/* <img
              className="w-full md:w-[294px] h-auto md:h-full object-cover"
              src={role.image}
              alt=""
            /> */}
            <div>
              <div className="relative w-[292px]">
                <div >
                  <img src={role.image} className="block  h-auto" alt="" />
                </div>
                <div className="absolute bottom-10  -right-1/2 -translate-x-[35%] transform  origin-bottom-right ">
                  <p className="text-[20px]  -rotate-90 w-40 h-20"> {role.designation}</p>
                </div>
              </div>

              <div className='max-w-[263px] text-[#2A2A2A]'>
                <h1 className='border-b py-2 lg:text-[32px] md:text-[28px] text-2xl font-medium leading-[120%]'>{role.name}</h1>
                <div className='flex gap-6 lg::text-[20px] md:text-[18px] text-base  items-center leading-[110%] mt-2'>
                  <div className=''>{role.age}</div>
                  <div className='w-[1px] h-[22px] bg-[#D4D4D4]'></div>
                  <div className=' '>{role.country}</div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div>
              <div className="flex lg:text-[20px] md:text-[18px] text-base md:max-w-[786px] flex-col mt-6 md:mt-0 justify-end h-auto md:h-full ">
                <h1 className="  text-[#2A2A2A] font-semibold leading-[110%]  not-italic">
                  Role:
                </h1>
                <p className=" not-italic mb-4 leading-[110%]">{role.role}</p>

                <h1 className=" text-[#2A2A2A] leading-[110%] font-semibold  not-italic">
                  Goal:
                </h1>
                <p className=" not-italic leading-[110%] mb-10">{role.goal}</p>

                <h1 className="text-[#2A2A2A] leading-[110%] font-semibold  not-italic">
                  User Story:
                </h1>
                <p className=" not-italic  leading-[110%]">{role.user_story}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalStoriesCard;
