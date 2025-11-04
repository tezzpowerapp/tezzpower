import Image from "next/image";
import React from "react";

const LinearRounded = ({ customClass = "" }) => {
  return (
    <span className={`absolute ${customClass} z-0`}>
      <Image
        width={120}
        height={500}
        alt="linear-rounded"
        src={"/site/linear_rounded_pic2.svg"}
        className="w-full h-full "
      />
    </span>
  );
};

export default LinearRounded;
