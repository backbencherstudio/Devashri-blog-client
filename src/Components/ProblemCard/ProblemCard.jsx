import React from "react";

const ProblemCard = () => {
  return (
    <div className="max-w-[1128px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
        {/* Title Section */}
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[28px] sm:leading-[30px] tracking-[1.5px] md:tracking-[2.8px] text-[#DD0101]">
          PROBLEM
        </h1>

        {/* Content Section */}
        <div className="w-full md:w-[73%]">
          {/* Intro Paragraph */}
          <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-justify text-[#221429]">
            How might we simplify access to inclusive housing and essential
            services for single tenants?
          </p>

          {/* Problem Stats */}
          <div className="space-y-10 mt-8 text-[#2A2A2A]">
            {/* AS HIGH AS */}
            <div>
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
                As high as
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-4">
                <h1 className="text-[36px] text-[#2A2A2A] sm:text-[40px] md:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] text-left">
                  82%
                </h1>
                <p className="text-[16px] text-[#2A2A2A] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
                  of single tenants face discrimination due to lifestyle biases.
                </p>
              </div>
            </div>

            {/* NEARLY */}
            <div>
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
                Nearly
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-4">
                <h1 className="text-[36px] text-[#2A2A2A] sm:text-[40px] md:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] text-left">
                  66%
                </h1>
                <p className="text-[16px] text-[#2A2A2A] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
                  of single tenants pay extra rent to avoid landlord
                  confrontations.
                </p>
              </div>
            </div>

            {/* ONLY */}
            <div>
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
                Only
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-4">
                <h1 className="text-[36px] sm:text-[40px] md:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] text-left">
                  58%
                </h1>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
                  of tenants are willing to pay more for fair and inclusive
                  housing.
                </p>
              </div>
            </div>

            {/* WITH A CAGR */}
            <div>
              <p className="text-[16px] text-[#2A2A2A] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] opacity-80">
                With a CAGR
              </p>
              <div className="flex text-[#2A2A2A] flex-col sm:flex-row items-start sm:items-end sm:space-x-4 mt-4">
                <span className="text-[36px] sm:text-[40px] md:text-[48px] font-semibold leading-[42px] sm:leading-[46px] md:leading-[52.8px] tracking-[1.44px] whitespace-nowrap text-left">
                  18-20%
                </span>
                <p className="text-[16px] text-[#2A2A2A] sm:text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[32px] tracking-[0.72px] mt-2 sm:mt-0">
                  furniture rental market shows strong demand for flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
