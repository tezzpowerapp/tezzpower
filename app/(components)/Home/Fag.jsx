"use client";
import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import Image from "next/image";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Fag = ({ section9, order_now }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="suallar"
      sectionClass="pt-[150px] pb-[150px] lg:pt-[80px] lg:pb-[80px] 3xl:px-[70px] 1xl:px-[50px] lg:px-[30px] md:px-[20px]"
    >
      <MaxWidth customClass="max-w-[1596px] bg-[#EFEFEF] rounded-[24px] py-[60px] lg:py-[20px]">
        <div className="flex justify-center items-center gap-[24px]">
          <span className="lg:hidden">
            <Image
              width={40}
              height={53}
              alt="lightening"
              src={"/site/lightening.svg"}
              className="lg:max-w-[20px]"
            />
          </span>
          <h3 className="text-[40px] lg:text-[32px] md:text-[25px] lg:text-center text-[#0F1822] font-['TTForsBold']">
            {order_now}
          </h3>
          <span className="lg:hidden">
            <Image
              width={40}
              height={53}
              alt="lightening"
              src={"/site/lightening.svg"}
              className="lg:max-w-[20px]"
            />
          </span>
        </div>
        <div className="px-[100px] py-[40px] lg:py-[20px] lg:px-[40px] md:px-[20px]">
          {section9?.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left py-5 lg:py-2"
              >
                <h3 className="text-[#0F1822] text-[24px] lg:text-[18px] md:text-[16px] font-['TTForsBold'] md:pr-[15px]">
                  {item?.question}
                </h3>
                <div className="flex-shrink-0 w-[38px] h-[38px] text-[20px] bg-[#BBF843] rounded-[8px] flex items-center justify-center">
                  {openIndex === index ? (
                    <FiMinus className="text-zinc-800" />
                  ) : (
                    <FiPlus className="text-zinc-800" />
                  )}
                </div>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className="text-[#0F1822] text-[16px] lg:text-[16px] font-['TTForsMedium'] pb-5 pr-10"
                    dangerouslySetInnerHTML={{ __html: `${item?.reply}` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </Section>
  );
};

export default Fag;
