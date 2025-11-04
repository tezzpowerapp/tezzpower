import Image from "next/image";
import HeadText from "../Component/HeadText/HeadText";
import MaxWidth from "../Component/MaxWidth/MaxWidth";
import Section from "../Component/Section/Section";

const WhyWork = ({ section3 }) => {
  const cards = [
    {
      id: 1,
      text: section3?.title1,
      img: `${process.env.NEXT_PUBLIC_PICTURE}/${section3?.image}`,
    },
    {
      id: 1,
      text: section3?.title2,
      img: `${process.env.NEXT_PUBLIC_PICTURE}/${section3?.image2}`,
    },
    {
      id: 1,
      text: section3?.title3,
      img: `${process.env.NEXT_PUBLIC_PICTURE}/${section3?.image3}`,
    },
  ];

  return (
    <Section
      id="neceisleyir"
      sectionClass="pt-[150px] pb-[100px] md:pb-[50px] lg:pt-[50px]"
    >
      <MaxWidth customClass="max-w-[1596px] 3xl:px-[70px] 1xl:px-[50px] lg:px-[30px] md:px-[5px]">
        <HeadText text={`${section3?.head_title}`} />
        <ul className="grid grid-cols-12 gap-[24px] mt-[32px] lg:gap-[10px]">
          {cards?.map((cur, i) => (
            <li
              key={i}
              className="col-span-4 bg_linear border border-[#1D2C2F] rounded-[20px] flex flex-col items-center justify-center gap-[16px] lg:gap-[5px] p-[30px] lg:p-[5px]"
            >
              <Image
                width={80}
                height={80}
                className="object-cover lg:w-[56px] lg:h-[56px] lg:object-contain lg:mb-[10px]"
                alt={cur?.text}
                src={cur?.img}
              />
              <div className="flex flex-col gap-1">
                <div
                  className="text-white text-[24px] text-center 1xl:text-[20px] xl:text-[17px] lg:text-[12px]"
                  dangerouslySetInnerHTML={{ __html: `${cur?.text}` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </MaxWidth>
    </Section>
  );
};

export default WhyWork;
