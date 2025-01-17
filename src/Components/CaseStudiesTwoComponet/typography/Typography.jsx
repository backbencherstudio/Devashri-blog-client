import React from 'react';

const Typography = () => {
    return (
        <div className='pb-[200px]'>
             <div className="max-w-[1128px] mx-auto px-4 2xl:px-0 ">
      <div className=" bg-[#F2ECEB] p-[144px]">
        <h1 className="text-[#DD0101] tracking-[2.8px] text-[28px] uppercase font-semibold ">
          Typography
        </h1>
        <p className="text-[#2A2A2A] mt-12 traking-[.72px] text-2xl">
          Inter is a clean, modern sans-serif typeface optimized for digital
          interfaces. Its excellent legibility and versatile styles make it
          ideal for creating professional, user-friendly designs, perfectly
          aligning with the Watt Wise portal's sleek aesthetic.
        </p>

        <div className="mt-[142px] flex  gap-8 text-[#2A2A2A] font-inter">
          <div className="text-center md:text-left">
            <p className="text-[112px] font-bold leading-[123.2px]">Aa</p>
            <h2 className="mt-4 text-[32px] font-semibold leading-[38.4px]">Inter Bold</h2>
            <p className="text-2xl mt-2  leading-[32px]">for headings</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-5xl font-medium">Aa</p>
            <h2 className="mt-2 text-lg font-bold text-gray-800">Inter Medium</h2>
            <p className="text-gray-600">for buttons</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-5xl font-light">Aa Aa</p>
            <h2 className="mt-2 text-lg font-bold text-gray-800">
              Inter Regular & Light
            </h2>
            <p className="text-gray-600">for body copy</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Typography;