import { Swiper } from "swiper";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";
import { LeftArrowIcon } from "../../assets/icons/Icons";
import { Navigation } from "swiper/modules";
import { memo, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
function CardSlider(props: { uniqueId?: string | number }) {
  const rand = Math.floor(Math.random() * 999999);
  const rand2 = Math.floor(Math.random() * 999);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  useEffect(() => {
    if (!swiperInstance) {
      const newSwiperInstance = new Swiper(
        `.A${rand}${
          props.uniqueId ? props.uniqueId : Math.floor(Math.random() * 999)
        }${rand2}`,
        {
          modules: [Navigation],
          slidesPerView: 4.8,
          spaceBetween: 20,
          navigation: true,
          speed: 450,
          breakpoints: {
            1500: {
              spaceBetween: 20,
              slidesPerView: 4.8,
            },
            1330: {
              spaceBetween: 20,
              slidesPerView: 4.2,
            },
            1200: {
              spaceBetween: 15,
              slidesPerView: 4,
            },
            1100: {
              spaceBetween: 10,
              slidesPerView: 3.7,
            },
            1000: {
              spaceBetween: 10,
              slidesPerView: 3.4,
            },
            900: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            800: {
              spaceBetween: 10,
              slidesPerView: 2.6,
            },
            700: {
              spaceBetween: 10,
              slidesPerView: 2.2,
            },
            650: {
              spaceBetween: 10,
              slidesPerView: 2.2,
            },
            560: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            510: {
              spaceBetween: 10,
              slidesPerView: 1.8,
            },
            480: {
              spaceBetween: 10,
              slidesPerView: 1.7,
            },
            450: {
              spaceBetween: 10,
              slidesPerView: 1.6,
            },
            420: {
              spaceBetween: 10,
              slidesPerView: 1.5,
            },
            400: {
              spaceBetween: 10,
              slidesPerView: 1.4,
            },
            370: {
              spaceBetween: 10,
              slidesPerView: 1.3,
            },
            340: {
              spaceBetween: 10,
              slidesPerView: 1.2,
            },
            310: {
              spaceBetween: 8,
              slidesPerView: 1.1,
            },
            9: {
              spaceBetween: 8,
              slidesPerView: 1,
            },
          },
        }
      );
      setSwiperInstance(newSwiperInstance);
    }
  }, [swiperInstance, setSwiperInstance]);

  return (
    <div className="relative flex items-center">
      <div
        className={`swiper swiper-container A${rand}${props.uniqueId}${rand2}`}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Card autoWidth={true} />
          </SwiperSlide>
        </div>
      </div>
      <button
        onClick={() => swiperInstance.slidePrev()}
        className="h-14 mobile:hidden aspect-square rounded-circle bg-whiteMain p-[18px] absolute z-[1] left-0 -translate-x-2/4 shadow-slideNavShadow transition-colors hover:bg-whiteHover"
      >
        <LeftArrowIcon className="h-full aspect-square" />{" "}
      </button>{" "}
      <button
        onClick={() => swiperInstance.slideNext()}
        className="h-14 mobile:hidden aspect-square rounded-circle bg-whiteMain p-[18px] absolute z-[1] right-0 translate-x-2/4 shadow-slideNavShadow transition-colors hover:bg-whiteHover"
      >
        <LeftArrowIcon className="h-full aspect-square rotate-180" />{" "}
      </button>
    </div>
  );
}
export default CardSlider;
