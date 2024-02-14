import { Swiper } from "swiper";
import Card from "../../../components/global/Card";
import "swiper/css";
import "swiper/css/pagination";
import { LeftArrowIcon } from "../../../assets/icons/Icons";
import { Navigation } from "swiper/modules";
import { memo, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
function CardSlider(props: { uniqueId: string | number }) {
  const rand = Math.floor(Math.random() * 999999);
  const rand2 = Math.floor(Math.random() * 999);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  useEffect(() => {
    if (!swiperInstance) {
      const newSwiperInstance = new Swiper(
        `.A${rand}${props.uniqueId}${rand2}`,
        {
          modules: [Navigation],
          slidesPerView: 4.5,
          spaceBetween: 25,
          navigation: true,
          speed: 600,
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
        onClick={() => swiperInstance.slidePrev()}
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
export default memo(CardSlider);
