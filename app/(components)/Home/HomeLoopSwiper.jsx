// Fayl adı: components/InfiniteMarquee.js (məsələn)

import React from "react";
import Image from "next/image";

const InfiniteMarquee = ({ section2 }) => {
  const items = [
    section2?.title1,
    section2?.title2,
    section2?.title3,
    section2?.title4,
    section2?.title5,
  ];

  const repeatedItems = Array(5).fill(items).flat();

  const renderMarqueeContent = (keyPrefix) =>
    repeatedItems.map((text, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="flex-shrink-0 flex items-center gap-6 mx-8"
      >
        <span className="text-white text-[16px] font-semibold whitespace-nowrap">
          {text}
        </span>
        <div className="flex items-center gap-2">
          <Image src="/site/ildirim.svg" alt="icon" width={20} height={20} />
          <Image src="/site/ildirim.svg" alt="icon" width={20} height={20} />
          <Image src="/site/ildirim.svg" alt="icon" width={20} height={20} />
        </div>
      </div>
    ));

  return (
    <div className="bg-[#0f1a25] py-[32px] mt-[50px] mb-[100px] md:mb-[50px] overflow-hidden z-50 relative">
      <div className="marquee-container flex">
        <div className="marquee-content flex">
          {renderMarqueeContent("original")}
        </div>
        <div className="marquee-content flex" aria-hidden="true">
          {renderMarqueeContent("clone")}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
