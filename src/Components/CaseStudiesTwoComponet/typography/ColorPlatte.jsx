const colors = [
    {
        titleOne: "App C",
        titleTwo: "olors",
        fullTitle: "App Colors",
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
        fullTitle: "App Background",
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
        fullTitle: "Fill Colors",
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
        fullTitle: "Label / Text",
        light: [
            { label: "Primary - Label", color: "#333333", percentage: "100%" },
            { label: "Secondary - Label", color: "#6B7280", percentage: "100%" },
        ],
        dark: [
            { label: "Primary - Label", color: "#FFFFFF", percentage: "100%" },
            { label: "Secondary - Label", color: "#E5E7EB", percentage: "100%" },
        ],
    },
    {
        titleOne: "Sepa",
        titleTwo: "rator",
        fullTitle: "Separator",
        light: [
            { label: "Separator - Light", color: "#E4E3E3", percentage: "100%" },
        ],
        dark: [
            { label: "Primary - Label", color: "#FFFFFF", percentage: "100%" },
        ],
    },
    {
        titleOne: "Functio",
        titleTwo: "nal Color",
        fullTitle: "Functional Color",
        light: [
            { label: "Success", color: "#52C41A", percentage: "100%" },
            { label: "Warning", color: "#F0D752", percentage: "100%" },
        ],
        dark: [
            { label: "Warning", color: "#FAAD14", percentage: "100%" },
            { label: "Alert", color: "#FF4D4F", percentage: "100%" },
        ],
    },
];

const ColorPalette = () => {




    return (
        <div className="max-w-[1332px] mx-auto ">
            <div>
                <h1 className="lg:text-5xl md:text-[42px] text-[32px]  text-[#DD0101] text-center font-[900] lg:tracking-[9.6px] md:tracking-[4px] tracking-[2px] opacity-25 md:mb-[80px] mb-[40px] lg:mt-[200px] md:mt-[150px] mt-[80px]">
                    Color System
                    </h1>
            </div>        {/* Left and Right Columns: Responsive Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 min-h-screen">
                {/* Left Column: White Background */}
                <div className="bg-white md:pt-16 pt-12">
                    <div className="max-w-[666px] mx-auto px-4 md:px-0  ">
                        {colors.map((group, index) => (
                            <div key={index} className="md:mb-[56px] mb-16 flex flex-col md:items-end">
                                <h2 className="text-2xl hidden md:block font-[500] md:tracking-[2.4px] tracking-[1.2px] leading-[110%] text-[#2A2A2A] ">
                                    { group.titleOne}
                                </h2>
                                    <h2 className="md:hidden text-2xl font-[500] md:tracking-[2.4px] tracking-[1.2px] leading-[110%] text-[#2A2A2A] ">
                                        {group.fullTitle}
                                    </h2>
                                <div className="xl:pr-12 lg:pr-4 pr-4 pl-4 md:pl-0  flex flex-wrap md:gap-3 gap-4 lg:gap-6 xl:gap-8 mt-8">
                                    {group.light.map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="xl:px-[15px] lg:px-[8px] md:px-[5px] px-[15px]  lg:py-3 md:py-2 py-3 border rounded-[8px] border-[#80868B]">
                                                <div
                                                    className="lg:w-[128px] lg:h-[128px] md:w-[80px] md:h-[80px] w-[100px] h-[100px] mx-auto rounded-[8px] border border-gray-300"
                                                    style={{ backgroundColor: item.color }}
                                                ></div>
                                                <div className="text-[#2A2A2A] lg:text-base text-sm ">
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
                <div className="bg-black md:pt-16 pb-2 pt-12">
                    <div className="max-w-[666px] mx-auto px-4 md:px-0">
                        {colors.map((group, index) => (
                            <div key={index} className="md:mb-[56px] mb-16 flex flex-col items-start">
                                <h2 className="text-2xl hidden md:block font-[500] md:tracking-[2.4px] tracking-[1.2px] leading-[110%] text-white ">
                                    { group.titleTwo}
                                </h2>
                                    <h2 className="md:hidden text-2xl font-[500] md:tracking-[2.4px] tracking-[1.2px] leading-[110%] text-white ">
                                        {group.fullTitle}
                                    </h2>
                                <div className="xl:pl-12 lg:pl-4 pl-4  flex flex-wrap md:gap-3 gap-4 lg:gap-6 xl:gap-8 mt-8">
                                    {group.dark.map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="xl:px-[15px] lg:px-[8px] md:px-[5px] px-[15px]  lg:py-3 md:py-2 py-3 border rounded-[8px] border-[#80868B]">
                                                <div
                                                    className="lg:w-[128px] lg:h-[128px] md:w-[80px] md:h-[80px] w-[100px] h-[100px] mx-auto rounded-[8px] border border-gray-300"
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


export default ColorPalette;