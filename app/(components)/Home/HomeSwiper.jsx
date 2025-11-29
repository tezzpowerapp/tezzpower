"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
const HomeSwiper = ({ data }) => {
  const titlesArray = Object.keys(data)
    .filter((key) => key.startsWith("title"))
    .map((key) => ({ title: data[key] }));

  return (
    <div className="my-[10rem]">
      <Swiper
        loop={true}
        freeMode={true}
        slidesPerView="auto"
        centeredSlides={true}
        allowTouchMove={false}
        speed={8000}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {titlesArray?.map((cur, i) => (
          <SwiperSlide key={i}>
            <h2 className="text-white text-[5rem]">{cur?.title}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
