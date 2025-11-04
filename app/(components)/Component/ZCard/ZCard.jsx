// components/ZCard.js

import Image from "next/image";
import React from "react";

const ZCard = ({ children, className }) => {
  return (
    // Ana konteyner - ARTIQ bg-white BURADA DEYİL. Bu sadəcə bir çərçivədir.
    <div
      className={` h-[690px] bg-[#EFEFEF] ${className} relative rounded-[20px]`}
    >
      <Image
        fill
        alt="z"
        src={"/site/z_word_text.svg"}
        className="w-full h-full mix-blend-color-dodge"
      />
      <div className="relative z-10 ">{children}</div>
    </div>
  );
};

export default ZCard;
