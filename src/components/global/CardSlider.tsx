import { Swiper } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card, { CardSkeleton, SeeMoreCard, TProductCard } from "./Card";
import { LeftArrowIcon } from "../../assets/icons/Icons";
import { memo, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

function CardSlider({
  uniqueId,
  products,
  link,
}: {
  uniqueId?: string | number;
  products: TProductCard[] | undefined;
  link?: string;
}) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [Loaded, setLoaded] = useState<boolean>(false);
  const seeMoreAdded = useRef<boolean>(false);
  const swiperClassName = `swiper-container-${uniqueId}`;

  useEffect(() => {
    if (!swiperInstance) {
      const newSwiperInstance = new Swiper(`.${swiperClassName}`, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: true,
        speed: 450,
        breakpoints: {
          1500: { spaceBetween: 20, slidesPerView: 4.8 },
          1330: { spaceBetween: 20, slidesPerView: 4.2 },
          1200: { spaceBetween: 15, slidesPerView: 4 },
          1100: { spaceBetween: 10, slidesPerView: 3.7 },
          1000: { spaceBetween: 10, slidesPerView: 3.4 },
          900: { spaceBetween: 10, slidesPerView: 3 },
          800: { spaceBetween: 10, slidesPerView: 2.6 },
          700: { spaceBetween: 10, slidesPerView: 2.2 },
          650: { spaceBetween: 10, slidesPerView: 2.2 },
          560: { spaceBetween: 10, slidesPerView: 2 },
          510: { spaceBetween: 10, slidesPerView: 1.8 },
          480: { spaceBetween: 10, slidesPerView: 1.7 },
          450: { spaceBetween: 10, slidesPerView: 1.6 },
          420: { spaceBetween: 10, slidesPerView: 1.5 },
          400: { spaceBetween: 10, slidesPerView: 1.4 },
          370: { spaceBetween: 10, slidesPerView: 1.3 },
          340: { spaceBetween: 10, slidesPerView: 1.2 },
          310: { spaceBetween: 8, slidesPerView: 1.1 },
          9: { spaceBetween: 8, slidesPerView: 1 },
        },
      });
      setSwiperInstance(newSwiperInstance);
    }
  }, [swiperInstance, swiperClassName]);
  useEffect(() => {
    if (products !== undefined) {
      setLoaded(true);
    }
  }, [products]);

  return (
    <div className="relative flex items-center">
      <div className={`swiper ${swiperClassName} w-full`}>
        <div className="swiper-wrapper">
          {Loaded ? (
            products && (
              <>
                {products.map((product: TProductCard, i: number) => {
                  if (
                    !seeMoreAdded.current &&
                    link &&
                    products &&
                    products.length !== 0
                  ) {
                    products.push({
                      id: -8,
                      estate_title: "SeeMore",
                      estate_active_image: "",
                      estate_city: "",
                      estate_address: "",
                      estate_exact_address: "",
                      estate_size: -8,
                      estate_price: -8,
                      estate_currency: -8,
                      estate_rooms: -8,
                      estate_vip: -8,
                      views: -8,
                      created_time: new Date(),
                    });
                    seeMoreAdded.current = true;
                  }

                  return product.estate_title !== "SeeMore" ? (
                    <SwiperSlide key={`${product.id}-${i}`}>
                      <Card autoWidth={true} product={product} />
                    </SwiperSlide>
                  ) : link ? (
                    <SwiperSlide key={`see-more-${uniqueId}`}>
                      <SeeMoreCard autoWidth={false} link={link} />
                    </SwiperSlide>
                  ) : null;
                })}
                {link && products.length == 0 && (
                  <SwiperSlide key={`see-more-${uniqueId}`}>
                    <SeeMoreCard autoWidth={false} link={link} />
                  </SwiperSlide>
                )}
              </>
            )
          ) : (
            <div className="flex gap-[20px]">
              <CardSkeleton autoWidth={false} />
              <CardSkeleton autoWidth={false} />
              <CardSkeleton autoWidth={false} />
              <CardSkeleton autoWidth={false} />
              <CardSkeleton autoWidth={false} />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="h-[50px] mobile:hidden aspect-square rounded-circle bg-whiteMain p-[15px] absolute z-[1] left-0 -translate-x-2/4 border-2 border-cardBorder transition-colors hover:bg-whiteHover"
      >
        <LeftArrowIcon className="h-full aspect-square" />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="h-[50px] mobile:hidden aspect-square rounded-circle bg-whiteMain p-[15px] absolute z-[1] right-0 translate-x-2/4 border-2 border-cardBorder transition-colors hover:bg-whiteHover"
      >
        <LeftArrowIcon className="h-full aspect-square rotate-180" />
      </button>
    </div>
  );
}

export default memo(CardSlider);
