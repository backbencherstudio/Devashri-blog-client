import React from 'react';
import FinalDesignCard from '../sharedComponents/finalDesignCard';
import {finaDesignData} from '../../finalDesignData/finalDesignData'
const FinalDesign = ({ data }) => {
  return (
    <div className="text-center">
      {/* Title Section */}
      <h1 className="text-[28px] font-semibold leading-[110%] tracking-[2.8px] not-italic text-[#DD0101] mb-4">
        THE FINAL DESIGN
      </h1>
      <h1 className="mb-32 text-[38px] md:text-[48px] font-semibold leading-[110%] tracking-[1.44px] not-italic">
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
