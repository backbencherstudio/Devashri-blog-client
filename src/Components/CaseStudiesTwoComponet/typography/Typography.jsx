import React from 'react';

const Typography = () => {

    const typographyExamples = [
        {

            sampleText: "Aa",
            style: "Inter Bold",
            description: "for headings",
            className: "text-5xl font-bold", // Tailwind classes for styling
        },
        {
            sampleText: "Aa",
            style: "Inter Medium",
            description: "for buttons",
            className: "text-5xl font-medium", // Tailwind classes for styling
        },
        {
            sampleText: "Aa",
            sampleTextTwo: "Aa",
            style: "Inter Regular & Light",
            description: "for body copy",
            className: "text-5xl font-light", // Tailwind classes for styling
        },
    ];

    return (
        <div className='pb-[200px]'>
            <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 ">
                <div className=" bg-[#F2ECEB] 2xl:p-[144px] xl:p-[120px] lg:p-[100px] md:p-[80px] p-[50px]">
                    <h1 className="text-[#DD0101] md:tracking-[2.8px] md:text-[28px] tracking-[1px] text-2xl uppercase font-semibold ">
                        Typography
                    </h1>
                    <p className="text-[#2A2A2A] lg:mt-12 md:mt-10 mt-6 traking-[.72px] lg:text-2xl md:text-[22px] text-[18px]">
                        Inter is a clean, modern sans-serif typeface optimized for digital
                        interfaces. Its excellent legibility and versatile styles make it
                        ideal for creating professional, user-friendly designs, perfectly
                        aligning with the Watt Wise portal's sleek aesthetic.
                    </p>

                    <div className="2xl:mt-[142px] xl:mt-[120px] lg:mt-[100px] md:mt-[80px] mt-[60px] flex md:flex-row flex-col gap-6 2xl:gap-[92px] xl:gap-[82px] lg:gap-[72px] md:gap-[22px] text-[#2A2A2A] font-inter justify-evenly">
                        {
                            typographyExamples.map((item, i) => (
                                <div className="text-center ">
                                    <p className={`xl:text-[112px] lg:text-[90px] md:text-[60px] text-[52px] ${i === 0 ? "font-[700]" : i === 1 ? "font-[500]" : "font-[400]"} `}>{item.sampleText} <span className='font-[300]'>{item?.sampleTextTwo}</span></p>
                                    <h2 className="xl:mt-4 mt-2 xl:text-[32px] text-[26px] font-semibold xl:leading-[38.4px]">{item.style}</h2>
                                    <p className="xl:text-2xl  lg:text-[22px] text-[20px]  lg:mt-2  leading-[32px]">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
                <ColorPalette></ColorPalette>
        </div>
    );
};

export default Typography;




const colors = [
    {
        titleOne: "App C",
        titleTwo: "olors",
        light: [
            { label: "Primary", color: "#025ACC", percentage: "100%" },
            { label: "Secondary", color: "#15C753", percentage: "100%" },
        ],
        dark: [
            { label: "Primary", color: "#DE7842", percentage: "100%" },
        ],
    },
    {
        titleOne: "App Bac",
        titleTwo: "kground",
        light: [
            { label: "Primary - Bg", color: "#A6C8EC", percentage: "100%" },
            { label: "Secondary - Bg", color: "#BFE2DF", percentage: "100%" },
        ],
        dark: [
            { label: "Primary - Bg", color: "#1F2128", percentage: "100%" },
        ],
    },
    {
        titleOne: "Fill C",
        titleTwo: "olors",
        light: [
            { label: "Primary - Fill", color: "#BADBFF", percentage: "100%" },
            { label: "Secondary - Fill", color: "#DAE9FC", percentage: "100%" },
            { label: "Tertiary - Fill", color: "#FFFFFF", percentage: "100%" },
        ],
        dark: [
            { label: "Primary - Fill", color: "#261F1C", percentage: "100%" },
            { label: "Secondary - Fill", color: "#2D2827", percentage: "100%" },
        ],
    },
    {
        titleOne: "Label ",
        titleTwo: "/ Text",
        light: [
            { label: "Primary - Label", color: "#333333", percentage: "100%" },
            { label: "Secondary - Label", color: "#6B7280", percentage: "100%" },
        ],
        dark: [
            { label: "Primary - Label", color: "#FFFFFF", percentage: "100%" },
            { label: "Secondary - Label", color: "#E5E7EB", percentage: "100%" },
        ],
    },
];

const ColorPalette = () => {
    return (
        <div className="max-w-[1332px] mx-auto">
        {/* Left and Right Columns: Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 min-h-screen">
          {/* Left Column: White Background */}
          <div className="bg-white">
            <div className="max-w-[666px] mx-auto">
              {colors.map((group, index) => (
                <div key={index} className="mb-8 flex flex-col md:items-end">
                  <h2 className="text-2xl font-[500] tracking-[2.4px] text-[#2A2A2A] pt-16">
                    {group.titleOne}
                  </h2>
                  <div className="xl:pr-12 lg:pr-4 pr-4  flex flex-wrap gap-3 lg:gap-4 mt-8">
                    {group.light.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="xl:px-[15px] lg:px-[8px] px-[5px] lg:py-3 md:py-2 border rounded-[8px] border-[#80868B]">
                          <div
                            className="lg:w-[128px] lg:h-[128px] md:w-[80px] h-[80px] mx-auto rounded-[8px] border border-gray-300"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <div className="text-[#2A2A2A] lg:text-base text-sm">
                            <p className="lg:my-[7px] md:my-[3px] my-[7px] ">{item.label}</p>
                            <div className="flex justify-between gap-2">
                              <p className="">{item.color}</p>
                              <p className="">{item.percentage}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          {/* Right Column: Black Background */}
          <div className="bg-black">
            <div className="max-w-[666px] mx-auto">
              {colors.map((group, index) => (
                <div key={index} className="mb-8 flex flex-col items-start">
                  <h2 className="text-2xl font-[500] tracking-[2.4px] pt-16 text-white">
                    {group.titleTwo}
                  </h2>
                  <div className="xl:pl-12 pl-4 flex flex-wrap gap-3 lg:gap-4 mt-8">
                    {group.dark.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                      <div className="xl:px-[15px] lg:px-[8px] px-[5px] lg:py-3 md:py-2 border rounded-[8px] border-[#80868B]">
                        <div
                          className="lg:w-[128px] lg:h-[128px] md:w-[80px] h-[80px] mx-auto rounded-[8px] border border-gray-300"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div className="text-white lg:text-base text-sm">
                          <p className="lg:my-[7px] md:my-[3px] my-[7px] ">{item.label}</p>
                          <div className="flex justify-between gap-2">
                            <p className="">{item.color}</p>
                            <p className="">{item.percentage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    );
};


