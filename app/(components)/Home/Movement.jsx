import React from "react";
import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import LinearRounded from "../Component/Linear/LinearRounded";
import Linear from "../Component/Linear/Linear";

const Movement = ({ section5, hid }) => {
  return (
    <Section
      sectionClass={`relative 3xl:px-[70px] 1xl:px-[50px] lg:px-[30px] md:px-[20px] ${
        hid === 1 ? "mt-[100px]" : "mt-[0px]"
      }`}
    >
      <div className="movement_section  max-w-[1596px] m-auto">
        <div className="movement_section_bg">
          <MaxWidth customClass="max-w-[1596px]">
            <div className="p-[56px] 1xl:p-[40px] lg:p-[20px]">
              <h3 className="text-white text-[40px] lg:text-[25px] font-['TTForsBold'] 1xl:text-[30px] md:text-[20px] sm:text-[16px] text-center">
                {section5?.head_title}
              </h3>
              <ul className="grid grid-cols-12 gap-[40px] xl:gap-[20px] mt-[40px] xl:mt-[20px]">
                <div className="col-span-6 lg:col-span-12 movement_card_big">
                  <div className="movement_card flex flex-col gap-[16px] p-[24px] md:p-[14px] sm:p-[12px] rounded-[24px] border border-[#1A2627]">
                    <h3 className="text-[#D1F843] text-[24px] 1xl:text-[26px] xl:text-[22px] md:text-[18px] sm:text-[16px] font-['TTForsBold']">
                      {section5?.title1}
                    </h3>
                    <div
                      className="text-white text-[16px] xl:text-[13px] sm:text-[11px] font-['TTForsMedium']"
                      dangerouslySetInnerHTML={{ __html: `${section5?.text1}` }}
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-12 movement_card_big">
                  <div className="movement_card flex flex-col gap-[16px] p-[24px] md:p-[14px] sm:p-[12px] rounded-[24px] border border-[#1A2627]">
                    <h3 className="text-[#D1F843] text-[24px]  1xl:text-[26px] xl:text-[22px] md:text-[18px] sm:text-[16px] font-['TTForsBold']">
                      {section5?.title2}
                    </h3>
                    <div
                      className="text-white text-[16px] xl:text-[13px] sm:text-[11px] font-['TTForsMedium']"
                      dangerouslySetInnerHTML={{ __html: `${section5?.text2}` }}
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-12 movement_card_big">
                  <div className="movement_card flex flex-col gap-[16px] p-[24px] md:p-[14px] sm:p-[12px] rounded-[24px] border border-[#1A2627]">
                    <h3 className="text-[#D1F843] text-[24px]  1xl:text-[26px]  xl:text-[22px] md:text-[18px] sm:text-[16px] font-['TTForsBold']">
                      {section5?.title3}
                    </h3>
                    <div
                      className="text-white text-[16px] xl:text-[13px] sm:text-[11px] font-['TTForsMedium']"
                      dangerouslySetInnerHTML={{ __html: `${section5?.text3}` }}
                    />
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-12 movement_card_big">
                  <div className="movement_card flex flex-col gap-[16px] p-[24px] md:p-[14px] sm:p-[12px] rounded-[24px] border border-[#1A2627]">
                    <h3 className="text-[#D1F843] text-[24px]  1xl:text-[26px] xl:text-[22px] md:text-[18px] sm:text-[16px]  font-['TTForsBold']">
                      {section5?.title4}
                    </h3>
                    <div
                      className="text-white text-[16px] xl:text-[13px] sm:text-[11px] font-['TTForsMedium']"
                      dangerouslySetInnerHTML={{ __html: `${section5?.text4}` }}
                    />
                  </div>
                </div>
              </ul>
            </div>
          </MaxWidth>
        </div>
      </div>
      <Linear customClass="left-[70px] bottom-[-300px] rotate-[20deg]" />
      <LinearRounded customClass="bottom-[-113px] left-[-50px] " />
      <LinearRounded customClass="bottom-[-113px] right-[-50px] " />
    </Section>
  );
};

export default Movement;
