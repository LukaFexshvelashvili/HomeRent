import { Swiper } from "swiper";
import Card from "../../../components/global/Card";
import "swiper/css";
import "swiper/css/pagination";
import { LeftArrowIcon } from "../../../assets/icons/Icons";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
export default function CardSlider() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  useEffect(() => {
    if (!swiperInstance) {
      const newSwiperInstance = new Swiper(".swiper-container", {
        modules: [Navigation],
        slidesPerView: 4.5,
        spaceBetween: 25,
        rewind: true,
        navigation: true,
      });
      setSwiperInstance(newSwiperInstance);
    }
  }, [swiperInstance, setSwiperInstance]);
  return (
    <div className="relative flex items-center">
      <div className="swiper swiper-container">
        <div className="swiper-wrapper">
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card />
          </SwiperSlide>
        </div>
      </div>
      <button
        onClick={() => swiperInstance.slideNext()}
        className="h-16 aspect-square rounded-circle bg-whiteMain p-5 absolute z-[1] left-0 -translate-x-2/4 shadow-slideNavShadow"
      >
        <LeftArrowIcon className="h-full aspect-square" />{" "}
      </button>{" "}
      <button
        onClick={() => swiperInstance.slideNext()}
        className="h-16 aspect-square rounded-circle bg-whiteMain p-5 absolute z-[1] right-0 translate-x-2/4 shadow-slideNavShadow"
      >
        <LeftArrowIcon className="h-full aspect-square rotate-180" />{" "}
      </button>
    </div>
  );
}
