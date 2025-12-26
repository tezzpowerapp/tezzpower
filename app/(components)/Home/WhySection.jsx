import React from "react";
import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import Image from "next/image";
import Linear from "../Component/Linear/Linear";

const WhySection = ({ section2 }) => {
  const why = [
    {
      id: 1,
      title: section2?.title1,
      text: section2?.text1,
    },
    {
      id: 2,
      title: section2?.title2,
      text: section2?.text2,
    },
    {
      id: 3,
      title: section2?.title3,
      text: section2?.text3,
    },
    {
      id: 4,
      title: section2?.title4,
      text: section2?.text4,
    },
    {
      id: 5,
      title: section2?.title5,
      text: section2?.text5,
    },
  ];

  return (
    <Section
      id="niyebiz"
      sectionClass=" pt-[171px] lg:pt-[100px] relative z-20"
    >
      <MaxWidth customClass="max-w-[1596px] relative z-20 3xl:px-[70px] 1xl:max-w-[1300px]  1xl:px-[60px] lg:px-[30px] md:px-[20px]">
        <div className="why-tezz-card ">
          <div className=" w-full h-full relative z-[60] py-[60px] px-[100px] 3xl:px-[70px] 3xl:py-[40px] lg:py-[20px] 1xl:px-[50px] lg:px-[20px] why-tezz-card_bg">
            <h2 className="font-['TTForsBold'] text-[40px] xl:text-[30px] text-white lg:text-center lg:hidden">
              {section2?.head_title}
            </h2>
            <div className="grid grid-cols-12 gap-[42px] xl:gap-[20px] mt-[32px] md:mt-[20px] items-center">
              <div className="col-span-6 lg:col-span-12">
                <h2 className="font-['TTForsBold'] text-[40px] xl:text-[30px] mb-[30px] text-white lg:text-center hidden lg:flex">
                  {section2?.head_title}
                </h2>
                <ul className="space-y-12 xl:space-y-6">
                  {why?.map((cur, i) => (
                    <li key={i} className="flex gap-[24px] xl:gap-[16px]">
                      <div className="flex-shrink-0 pt-1">
                        <Image
                          width={24}
                          height={24}
                          alt={cur?.title || "ildirim"}
                          src={"/site/ildirim.svg"}
                          className="lg:max-w-[15px]"
                        />
                      </div>

                      <div className="flex flex-col gap-[12px]">
                        <h3
                          className="font-['TTForsBold'] text-[#D1F843] text-[24px] xl:text-[18px]"
                          dangerouslySetInnerHTML={{ __html: `${cur?.title}` }}
                        />

                        <div
                          className="text-white text-[16px] xl:text-[14px]"
                          dangerouslySetInnerHTML={{ __html: `${cur?.text}` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-6 lg:col-span-12 lg:order-[-1]">
                <Image
                  width={1000}
                  height={563}
                  alt="battery"
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${section2?.image}`}
                  className="w-full h-[600px] 1xl:h-[500px] xl:h-[400px] object-contain lg:h-[300px] md:h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
      <Linear customClass="bottom-[-166px] left-[-60px] " />
    </Section>
  );
};

export default WhySection;
