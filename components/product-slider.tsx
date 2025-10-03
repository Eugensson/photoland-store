"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { ProductCard } from "@/components/product-card";

import { productList } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ProductSlider = () => {
  const newProduct = productList.filter((product) => product.isNew);

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
        1440: { slidesPerView: 5, spaceBetween: 30 },
      }}
      pagination={{ clickable: true }}
      className="productSlider h-100 mx-auto max-w-90 md:max-w-lg xl:max-w-352.5"
    >
      {newProduct.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
