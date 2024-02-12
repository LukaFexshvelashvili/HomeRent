import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Card from "../../../components/global/Card";
import "swiper/css";
import { LeftArrowIcon } from "../../../assets/icons/Icons";
export default function CardSlider() {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        className=" pb-10 pt-2 items-center flex "
        rewind
      >
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
        <SlideButtons />
      </Swiper>
    </div>
  );
}
function SlideButtons() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="h-16 aspect-square rounded-circle bg-whiteMain p-5 absolute z-[1] left-3 shadow-slideNavShadow"
      >
        <LeftArrowIcon className="h-full aspect-square" />{" "}
      </button>{" "}
      <button
        onClick={() => swiper.slideNext()}
        className="h-16 aspect-square rounded-circle bg-whiteMain p-5 absolute z-[1] right-3 shadow-slideNavShadow"
      >
        <LeftArrowIcon className="h-full aspect-square rotate-180" />{" "}
      </button>
    </>
  );
}
