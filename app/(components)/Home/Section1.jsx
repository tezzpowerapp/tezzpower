import React from "react";
import Section from "../Component/Section/Section";
import Image from "next/image";

const Section1 = ({ sldier }) => {
  return (
    <Section className="bg-[#0D1C22] ">
      <div
        className=" items-center relative h-[800px] image_slider sm:hidden"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_PICTURE}/${sldier?.image})`,
        }}
      >
        <div className=" w-full h-full">
          <div className="bg-[--bgColor] w-[950px] 17xl:w-[1210px] 3xl:w-[900px] h-full 1xl:w-[750px] xl:w-[600px]  sm:hidden flex  clip_path">
            <div className="flex justify-center flex-col pl-[70px] xl:pl-[20px]">
              <h1
                className="text-white text-[64px] 1xl:text-[40px] xl:text-[30px] md:text-[35px] sm:text-[20px] font-['TTForsBold']  lg:px-[24px]"
                dangerouslySetInnerHTML={{ __html: `${sldier?.title1}` }}
              />
              <h2 className="text-white text-[32px] xl:text-[20px] mb-[24px] lg:px-[24px] lg:top-[40px]">
                {sldier?.title2}
              </h2>
              <div
                className="text-gray-300 text-[16px]  lg:px-[24px] lg:text-[13px] lg:top-[50px] 20xl:w-[80%] 1xl:w-[80%] "
                dangerouslySetInnerHTML={{ __html: `${sldier?.text}` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden sm:flex relative  h-[600px] image_slider21 justify-end"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_PICTURE}/${sldier?.image})`,
        }}
      >
        <div className="w-full   mobile-slider backdrop-blur-xl absolute bottom-[-226px]   flex overflow-hidden  justify-end items-end">
          <Image
            width={1000}
            height={1000}
            alt="sldier1"
            src={"/imgs/slider1_bg.svg"}
            className="   w-full h-full object-cover "
          />
          <div className="flex flex-col absolute top-[20px] left-0 px-[20px]">
            <h2
              className="text-white text-[25px]  font-['TTForsBold']  "
              dangerouslySetInnerHTML={{ __html: `${sldier?.title1}` }}
            />
            <h3 className="text-white text-[16px] pt-[20px]">
              {sldier?.title2}
            </h3>
            <div
              className="text-gray-300 text-[16px]  pt-[30px]"
              dangerouslySetInnerHTML={{ __html: `${sldier?.text}` }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section1;

// <div className=" h-full flex items-center relative z-10  left-[156px]  lg:left-0 lg:px-[0px] lg:mt-[0px] ">
//         <span className="bg-[--bgColor] w-[750px] 3xl:w-[700px] h-[101%]  1xl:w-[600px] xl:w-[500px]  md:hidden   absolute top-0 left-0 clip_path"></span>

//         <div className=" z-10 w-full h-full  relative top-[-70px] 1xl:left-[-100px] xl:left-[-120px] lg:left-0 flex justify-center items-start slider_flex flex-col">
//           <div className="w-full absolute lg:top-0  mobile-slider pb-[100px] lg:pb-[13px] hidden lg:flex">
//             <Image
//               width={1000}
//               height={1000}
//               alt="sldier1"
//               src={"/imgs/slider1_bg.svg"}
//               className=" backdrop-blur-xl "
//             />
//           </div>

//           <h1
//             className="text-white text-[64px] 1xl:text-[40px] xl:text-[30px] md:text-[35px] sm:text-[20px] font-['TTForsBold'] z-40 lg:relative lg:top-[30px] lg:px-[24px]"
//             dangerouslySetInnerHTML={{ __html: `${sldier?.title1}` }}
//           />
//           <h2 className="text-white text-[32px] xl:text-[20px] mb-[24px] z-40 lg:relative lg:px-[24px] lg:top-[40px]">
//             {sldier?.title2}
//           </h2>
//           <div
//             className="text-gray-300 text-[16px] z-40 lg:relative lg:px-[24px] lg:text-[13px] lg:top-[50px] 20xl:w-[80%] 1xl:w-[80%] lg:w-full"
//             dangerouslySetInnerHTML={{ __html: `${sldier?.text}` }}
//           />
//         </div>
//       </div>
