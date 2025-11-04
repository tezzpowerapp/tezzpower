import Link from "next/link";
import React from "react";

const MyButton = ({ href, text }) => {
  return (
    <Link
      target="_blank"
      href={`${href}`}
      className="bg-[#D1F843] text-[#0F1822] flex items-center justify-center text-[14px] lg:text-[12px] py-[12px] px-[38px] lg:px-[20px] lg:py-[6px] md:px-[10px] rounded-lg font-['TTForsMedium']"
    >
      {text}
    </Link>
  );
};

export default MyButton;
