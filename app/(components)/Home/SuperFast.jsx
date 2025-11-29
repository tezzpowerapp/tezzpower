import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import Image from "next/image";
import LinearRounded from "../Component/Linear/LinearRounded";

const SuperFast = ({ section8, hid }) => {
  return (
    <Section
      sectionClass={`relative 3xl:px-[70px]  1xl:px-[50px] lg:px-[30px] md:px-[20px] ${
        hid === 1 ? "mt-[100px]" : "mt-[0px]"
      }`}
    >
      <MaxWidth customClass="max-w-[1596px] bg-[#1A2627] lg:bg-transparent rounded-[25px] w-full h-full relative z-40 order-1">
        <Image
          width={1000}
          height={500}
          alt="super_fast"
          className="w-full h-full lg:h-[400px] md:h-[200px]"
          src={`${process.env.NEXT_PUBLIC_PICTURE}/${section8?.image}`}
        />
      </MaxWidth>
      <LinearRounded customClass="top-[-30px] left-[-120px] " />
      <LinearRounded customClass="top-[-30px] right-[-120px] " />
    </Section>
  );
};

export default SuperFast;
