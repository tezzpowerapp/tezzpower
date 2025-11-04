import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import Image from "next/image";

const Fear = ({ section6 }) => {
  return (
    <Section sectionClass="py-[158px]  lg:py-[100px] rounded-[30px] 3xl:px-[70px] 1xl:px-[50px] lg:px-[30px] md:px-[20px]">
      <MaxWidth customClass="max-w-[1596px] rounded-[30px] overflow-hidden">
        <div
          className="relative h-[634px] xl:h-[500px] sm:h-full rounded-[30px] qorxu_pic md:overflow-hidden group sm:!bg-none"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_PICTURE}/${section6?.image})`,
          }}
        >
          <Image
            width={10000}
            height={634}
            className="object-cover rounded-[30px] h-full] hidden sm:flex"
            alt="baterya"
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${section6?.mobile_image}`}
          />
          <div className="w-[650px] xl:w-[430px] h-[320px]  xl:h-[230px]  transtion1 absolute bottom-0 left-0 fear_css  rounded-bl-[30px] sm:hidden">
            <Image
              width={1000}
              height={1000}
              alt="linear"
              src={"/linear3.png"}
              className="absolute bottom-[-20px] left-0 w-full h-full object-cover"
            />
            <div className="w-full h-full  absolute left-2 top-[0px] py-[40px] px-[30px]">
              <h3
                className="text-white font-['TTForsBold'] text-[40px] mb-[16px] 1xl:text-[30px] xl:text-[20px] "
                dangerouslySetInnerHTML={{ __html: `${section6?.title}` }}
              />
              <div
                className="text-[#DFDFDF] text-[16px] pr-[70px] xl:max-w-[600px] lg:max-w-full xl:text-[13px]"
                dangerouslySetInnerHTML={{ __html: `${section6?.text}` }}
              />
            </div>
          </div>
          <div className="absolute bottom-[0px] md:bottom-[-60px] w-[381px] md:w-full   overflow-hidden h-auto hidden sm:flex">
            <Image
              width={393}
              height={202}
              alt="batareya_linear"
              src={"/site/svg/linear_bg.png"}
              className="w-[381px] h-full object-cover"
            />
            <div className="absolute top-[20px] px-[20px] left-0 md:px-[10px]">
              <h3
                className="text-white font-['TTForsBold'] text-[40px] mb-[8px] 1xl:text-[30px] xl:text-[20px] md:text-[16px]"
                dangerouslySetInnerHTML={{ __html: `${section6?.title}` }}
              />
              <div
                className="text-[#DFDFDF] text-[16px] w-[90%]  xl:text-[13px]"
                dangerouslySetInnerHTML={{ __html: `${section6?.text}` }}
              />
            </div>
          </div>
        </div>
      </MaxWidth>
    </Section>
  );
};

export default Fear;
