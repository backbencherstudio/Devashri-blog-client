import React from 'react';
import FinalDesignCard from '../sharedComponents/finalDesignCard';
import {finaDesignData} from '../../finalDesignData/finalDesignData'
const FinalDesign = ({ data }) => {
  return (
    <div className="text-center">
      {/* Title Section */}
      <h1 className="lg:text-[28px] md:text-[26px] text-2xl font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] not-italic text-[#DD0101] mb-4">
        THE FINAL DESIGN
      </h1>
      <h1 className="lg:mb-[120px] md:mb-[100px] mb-[60px] mb: text-[38px] md:text-[48px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1px] lg:tracking-[1.44px] not-italic">
        Redefining Luxury Event Planning
      </h1>



    <div>
       {finaDesignData.map((data, index) => (
              <FinalDesignCard key={index} data={data} position={index % 2 === 0 ? "right" : "left"}/>
        ))}
    </div>

    </div>
  );
};

export default FinalDesign;
