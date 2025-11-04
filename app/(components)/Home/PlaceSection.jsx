import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import Linear from "../Component/Linear/Linear";
import LinearRounded from "../Component/Linear/LinearRounded";
import Image from "next/image";

const PlaceSection = ({ section4 }) => {
  return (
    <Section sectionClass=" relative 3xl:px-[70px]  1xl:px-[50px] lg:px-[30px] md:px-[20px]">
      <div className=" place_section pt-[150px] max-w-[1596px] m-auto  ">
        <div className=" place_section_bg">
          <MaxWidth customClass="max-w-[1596px]">
            <div className="p-[60px] xl:p-[30px] md:p-[20px]">
              <h2
                className="text-white text-[40px] 1xl:text-[30px] xl:text-[25px] lg:text-[20px] font-['TTForsBold'] text-center"
                dangerouslySetInnerHTML={{ __html: `${section4?.head_title}` }}
              />

              <ul className="grid grid-cols-12 gap-[35px] 1xl:gap-[20px] mt-[52px] md:mt-[25px]">
                <li className="col-span-3 lg:col-span-6 md:col-span-12 top_place ">
                  <div className="place_card1 ">
                    <div className="place_card2">
                      <div className="flex flex-col gap-[20px] p-[24px]">
                        <h3 className="text-[#D1F843] text-[32px] font-['TTForsBold']">
                          {section4?.number1}
                        </h3>
                        <div
                          className="text-white text-[20px] xl:text-[16px] font-['TTForsMedium']"
                          dangerouslySetInnerHTML={{
                            __html: `${section4?.title1}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-span-3 lg:col-span-6 md:col-span-12 top_place">
                  <div className="place_card1">
                    <div className="place_card2">
                      <div className="flex flex-col gap-[20px] p-[24px]">
                        <h3 className="text-[#D1F843] text-[32px]  font-['TTForsBold']">
                          {section4?.number2}
                        </h3>
                        <div
                          className="text-white text-[20px] xl:text-[16px] font-['TTForsMedium']"
                          dangerouslySetInnerHTML={{
                            __html: `${section4?.title2}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-span-3 lg:col-span-6 md:col-span-12 top_place">
                  <div className="place_card1">
                    <div className="place_card2">
                      <div className="flex flex-col gap-[20px] p-[24px]">
                        <h3 className="text-[#D1F843] text-[32px]  font-['TTForsBold']">
                          {section4?.number3}
                        </h3>
                        <div
                          className="text-white text-[20px] xl:text-[16px] font-['TTForsMedium']"
                          dangerouslySetInnerHTML={{
                            __html: `${section4?.title3}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-span-3 lg:col-span-6 md:col-span-12 top_place">
                  <div className="place_card1">
                    <div className="place_card2">
                      <div className="flex flex-col gap-[20px] p-[24px]">
                        <h3 className="text-[#D1F843] text-[32px] font-['TTForsBold']">
                          {section4?.number4}
                        </h3>
                        <div
                          className="text-white text-[20px] xl:text-[16px] font-['TTForsMedium']"
                          dangerouslySetInnerHTML={{
                            __html: `${section4?.title4}`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <p className="text-[#fff]  text-[14px] mt-[40px] flex items-center gap-[10px]">
                <span className="lg:hidden">
                  <Image
                    width={14}
                    height={14}
                    alt="star"
                    src={"/imgs/star.svg"}
                  />
                </span>
                {section4?.text}
              </p>
            </div>
          </MaxWidth>
        </div>
      </div>
      <Linear customClass="right-[-50px] top-[-300px]" />
      <LinearRounded customClass="top-[-113px] left-[10px] " />
      <LinearRounded customClass="bottom-[-113px] left-[10px] " />
      <LinearRounded customClass="top-[-130px] right-[-12px] " />
      <LinearRounded customClass="bottom-[-134px] right-[-6px] " />
    </Section>
  );
};

export default PlaceSection;
