"use client";
import React, { useRef, useState } from "react";
import Section from "../Component/Section/Section";
import MaxWidth from "../Component/MaxWidth/MaxWidth";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper-in CSS stillərini import edirik
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

const Station = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // ADDIM 3: Pagination elementinə kliklədikdə işə düşəcək funksiya.
  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <Section>
      <MaxWidth customClass="max-w-[1596px] 3xl:px-[70px] 1xl:px-[50px] lg:px-[30px] md:px-[20px]">
        <div className="h-[690px] xl:h-[600px] lg:h-full bg-[#EFEFEF] relative rounded-[20px]">
          <Image
            fill
            alt="z"
            src={"/site/z_word_text.svg"}
            className=" mix-blend-multiply lg:hidden"
          />
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="mySwiper h-full"
          >
            {data?.map((slide, i) => (
              <SwiperSlide key={slide?.id || i}>
                <div className="flex flex-col justify-center h-full ">
                  <div className=" h-full w-full rounded-[20px] grid grid-cols-12 gap-[30px] lg:gap-0">
                    <div className="col-span-8 h-full lg:col-span-12">
                      <div className="h-full flex flex-col justify-center lg:items-center py-[100px] px-[95px] 1xl:px-[50px] xl:px-[25px] xl:pt-[50px] xl:pb-[30px] lg:pb-[60px] lg:pt-[20px]">
                        <div className="mb-[70px] xl:mb-[30px]">
                          <span className="bg-[#D1F843] text-[16px] font-['TTForsMedium'] py-[11px] px-[16px] rounded-[8px] text-[#0F1822]">
                            {slide?.label}
                          </span>
                        </div>
                        <div className="flex flex-col lg:items-center">
                          <div
                            className="text-[#14212E] text-[72px] 1xl:text-[50px] xl:text-[35px]  font-['TTForsBold']"
                            dangerouslySetInnerHTML={{
                              __html: `${slide?.title}`,
                            }}
                          />

                          <h3 className="text-[#14212E] text-[40px] xl:text-[20px] font-['TTForsBold'] mb-[20px] lg:mb-[10px]">
                            {slide?.title2}
                          </h3>
                          <div
                            className="scroll-container text-[#14212E] text-[16px] lg:text-[14px]  h-[150px] overflow-y-scroll lg:text-center"
                            dangerouslySetInnerHTML={{
                              __html: `${slide?.text}`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 lg:col-span-12 flex items-center justify-center lg:order-[-1] lg:pt-[40px] lg:pb-0">
                      <Image
                        width={1000}
                        height={500}
                        alt={slide?.label}
                        src={`${process.env.NEXT_PUBLIC_PICTURE}/${slide?.image}`}
                        className="object-contain h-[500px] lg:h-[350px]  "
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="  absolute bottom-[0px] left-[60px] xl:left-0 lg:bottom-[-50px] lg:translate-x-[-70%] lg:left-[50%] md:bottom-[-85px]  z-40">
            <div className="flex items-center gap-2  mb-[60px] xl:mb-[100px] ml-[30px]  w-full ">
              {data?.map((_, index) => (
                <span
                  onClick={() => handlePaginationClick(index)}
                  key={index}
                  className={`h-[10px]  transition-all duration-300 skew-x-[-30deg] cursor-pointer  ${
                    activeIndex === index
                      ? "bg-zinc-800 w-[45px] "
                      : "bg-zinc-300 w-[25px]  "
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </MaxWidth>
    </Section>
  );
};

export default Station;
