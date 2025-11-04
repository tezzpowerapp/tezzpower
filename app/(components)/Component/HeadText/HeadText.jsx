import React from "react";

const HeadText = ({ text }) => {
  return (
    <h3
      className={`text-white text-[40px] xl:text-[30px] font-['TTForsBold'] text-center`}
    >
      {text}
    </h3>
  );
};

export default HeadText;
