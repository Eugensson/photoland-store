"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { mainSliderData } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export const MainSlider = () => {
  return (
    <Swiper
      loop
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="mainSlider h-full max-w-lg lg:max-w-none bg-primary xl:bg-mainSlider xl:bg-no-repeat rounded-lg overflow-hidden drop-shadow-2xl"
    >
      {mainSliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="h-full p-5 md:p-15 flex flex-col lg:flex-row">
            <div className="w-full lg:flex-1">
              <p className="mb-1 text-center lg:text-left uppercase">
                {slide.pretitle}
              </p>
              <div className="mb-8 xl:mb-20 text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left">
                <p>{slide.titlePart1}</p>
                <p>{slide.titlePart2}</p>
                <p>{slide.titlePart3}</p>
              </div>
              <button type="button" className="btn btn-accent mx-auto lg:mx-0">
                {slide.buttonText}
              </button>
            </div>
            <div className="flex-1">
              <Image
                src={slide.image}
                alt="camera"
                className="xl:absolute xl:-right-16 xl:-bottom-12"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
