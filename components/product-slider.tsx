"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { ProductCard } from "@/components/product-card";

import { Product } from "@/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProductSliderProps {
  products: Product[];
}

export const ProductSlider = ({ products }: ProductSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1440: { slidesPerView: 5, spaceBetween: 30 },
      }}
      pagination={{ clickable: true }}
      className="productSlider h-100 mx-auto max-w-90 md:max-w-lg lg:max-w-200 xl:max-w-352.5"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
