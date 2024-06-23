import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Apartment from "../../../assets/images/estates/1.webp";
import banner1 from "../../../assets/images/estates/banner1.png";
import banner2 from "../../../assets/images/estates/banner2.png";
import banner3 from "../../../assets/images/estates/banner3.png";
import { Link } from "react-router-dom";

export default function MainSlider() {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      effect={"fade"}
      pagination={{ clickable: true }}
      rewind
      autoplay={{ delay: 6000 }}
    >
      <SwiperSlide>
        <MainSliderCard
          image={banner1}
          head=""
          desc=""
          link=""
          linkWhole="/AddProduct"
          button={false}
          opacity={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSliderCard
          image={banner2}
          head=""
          desc=""
          link=""
          linkWhole="/"
          button={false}
          opacity={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSliderCard
          image={banner3}
          head=""
          desc=""
          link=""
          linkWhole="/AdsMake"
          button={false}
          opacity={false}
        />
      </SwiperSlide>
    </Swiper>
  );
}
type TMainSliderCard = {
  image: string;
  head: string;
  desc: string;
  link: string;
  opacity: boolean;
  button: boolean;
  linkWhole?: string;
};
function MainSliderCard(props: TMainSliderCard) {
  return (
    <div
      className={`w-full h-[380px] mobile:h-[280px] mobileSmall:h-[200px] rounded-[25px] mobile:rounded-[15px] mobileSmall:rounded-[10px]  overflow-hidden relative`}
    >
      {props.linkWhole ? (
        <Link to={props.linkWhole}>
          <img
            src={props.image}
            alt="Apartment"
            className=" z-[1] absolute h-full w-full object-cover top-0 left-0"
          />
          {props.opacity ? (
            <div className=" bg-gradient-to-t from-sliderFadeStart to-sliderFadeEnd z-[2] absolute h-full w-full object-cover top-0 left-0"></div>
          ) : null}
          <div className="w-full flex justify-between z-30 absolute bottom-8 mobileSmall:bottom-3 px-6 mobile:px-3 items-end">
            <div className="flex flex-col gap-1   ">
              <h1 className=" text-sliderHead text-[18px] mobile:text-[16px] mobileSmall:text-[15px]  ">
                {props.head}
              </h1>
              <h3 className=" text-sliderDesc text-[14px] mobile:text-[12px] mobileSmall:text-[12px]">
                {props.desc}
              </h3>
            </div>
            {props.button ? (
              <button className="DefButton relative z-30 mobile:text-[11px] mobileSmall:hidden text-buttonText">
                სრულად ნახვა
              </button>
            ) : null}
          </div>
        </Link>
      ) : (
        <>
          <img
            src={props.image}
            alt="Apartment"
            className=" z-[1] absolute h-full w-full object-cover top-0 left-0"
          />
          {props.opacity ? (
            <div className=" bg-gradient-to-t from-sliderFadeStart to-sliderFadeEnd z-[2] absolute h-full w-full object-cover top-0 left-0"></div>
          ) : null}
          <div className="w-full flex justify-between z-30 absolute bottom-8 mobileSmall:bottom-3 px-6 mobile:px-3 items-end">
            <div className="flex flex-col gap-1   ">
              <h1 className=" text-sliderHead text-[18px] mobile:text-[16px] mobileSmall:text-[15px]  ">
                {props.head}
              </h1>
              <h3 className=" text-sliderDesc text-[14px] mobile:text-[12px] mobileSmall:text-[12px]">
                {props.desc}
              </h3>
            </div>
            {props.button ? (
              <button className="DefButton relative z-30 mobile:text-[11px] mobileSmall:hidden text-buttonText">
                სრულად ნახვა
              </button>
            ) : null}
          </div>
        </>
      )}
      {/* <button className="DefButton hidden mobileSmall:block z-30 mobile:text-[11px] top-2 absolute right-2">
        სრულად ნახვა
      </button> */}
    </div>
  );
}
