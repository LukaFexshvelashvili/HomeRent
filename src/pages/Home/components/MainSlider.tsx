import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
import Apartment from "../../../assets/images/estates/1.jpg";

export default function MainSlider() {
  return (
    <Swiper
      modules={[EffectFade, Pagination]}
      effect={"fade"}
      pagination={{ clickable: true }}
      rewind
    >
      <SwiperSlide>
        <MainSliderCard
          image={Apartment}
          head="არქი ჯგუფი"
          desc="12 კორპუსიანი ახალ აშენებული კომპლექტი"
          link=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSliderCard
          image={Apartment}
          head="არქი ჯგუფი2"
          desc="12 კორპუსიანი ახალ აშენებული კომპლექტი"
          link=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSliderCard
          image={Apartment}
          head="არქი ჯგუფი3"
          desc="12 კორპუსიანი ახალ აშენებული კომპლექტი"
          link=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <MainSliderCard
          image={Apartment}
          head="არქი ჯგუფი4"
          desc="12 კორპუსიანი ახალ აშენებული კომპლექტი"
          link=""
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
};
function MainSliderCard(props: TMainSliderCard) {
  return (
    <div className={`w-full h-[380px] rounded-[25px] overflow-hidden relative`}>
      <img
        src={props.image}
        alt="Apartment"
        className=" z-[1] absolute h-full w-full object-cover top-0 left-0"
      />
      <div className=" bg-gradient-to-t from-sliderFadeStart to-sliderFadeEnd z-[2] absolute h-full w-full object-cover top-0 left-0"></div>
      <div className="w-full flex justify-between z-[3] absolute bottom-6 px-8 items-end">
        <div className="flex flex-col gap-1">
          <h1 className=" text-sliderHead text-ABig">{props.head}</h1>
          <h3 className=" text-sliderDesc ">{props.desc}</h3>
        </div>
        <button className="DefButton">სრულად ნახვა</button>
      </div>
    </div>
  );
}
