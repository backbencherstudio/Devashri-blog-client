import React from "react";

const ProblemCardRite = () => {
  return (
    <div className="max-w-[1128px] mx-auto px-4 2xl:px-0">
      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-6 md:py-12 py-8">
        {/* Title Section */}
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[110%] sm:leading-[30px] tracking-[1.5px] md:tracking-[2.8px] text-[#DD0101]">
          PROBLEM
        </h1>

        {/* Content Section */}
        <div className="w-full lg:w-[74.5%] ">
          {/* Intro Paragraph */}
          <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] tracking-[.72px] md:tracking-[1.4px] lg:tracking-[2.4px] lg:text-[24px] leading-[110%] md:leading-[32px] text-justify text-[#221429]">
            How might we simplify access to inclusive housing and essential
            services for single tenants?
          </p>

          {/* Problem Stats */}
          <div className="lg:space-y-10 space-y-6 lg:mt-[56px] md:mt-[46px] mt-[36px] text-[#2A2A2A]">
            {/* AS HIGH AS */}
            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] opacity-80">
                As high as
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 lg:mt-1">
                <h1 className="opacity-80 text-[32px] text-[#2A2A2A] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.44px] text-left">
                  82%
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-2xl text-[#2A2A2A]  font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] mt-2 sm:mt-0">
                  of single tenants face discrimination due to lifestyle biases.
                </p>
              </div>
            </div>

            {/* NEARLY */}
            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] opacity-80">
                Nearly
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 lg:mt-1">
                <h1 className="opacity-80  text-[32px] text-[#2A2A2A] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.44px] text-left">
                  66%
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-2xl text-[#2A2A2A]  font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] mt-2 sm:mt-0">
                  of single tenants pay extra rent to avoid landlord
                  confrontations.
                </p>
              </div>
            </div>

            {/* ONLY */}
            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] opacity-80">
                Only
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-end sm:space-x-4 lg:mt-1">
                <h1 className="opacity-80 text-[32px] text-[#2A2A2A] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.44px] text-left">
                  58%
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-2xl text-[#2A2A2A]  font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] mt-2 sm:mt-0">
                  of tenants are willing to pay more for fair and inclusive
                  housing.
                </p>
              </div>
            </div>

            {/* WITH A CAGR */}
            <div>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] opacity-80">
                With a CAGR
              </p>
              <div className="flex text-[#2A2A2A] flex-col sm:flex-row items-start sm:items-end sm:space-x-4 lg:mt-1">
                <span className="opacity-80 text-[32px] text-[#2A2A2A] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[110%] tracking-[.72px] md:tracking-[1.44px] whitespace-nowrap text-left">
                  18-20%
                </span>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-2xl text-[#2A2A2A]  font-normal leading-[133%] tracking-[.36px] md:tracking-[0.72px] mt-2 sm:mt-0">
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

export default ProblemCardRite;