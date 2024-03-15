import { useState } from "react";
import image1 from "../../../assets/images/products/productExample/1.webp";
import image2 from "../../../assets/images/products/productExample/2.webp";
import image3 from "../../../assets/images/products/productExample/3.webp";
import image4 from "../../../assets/images/products/productExample/4.jpg";
import { LeftArrowIcon } from "../../../assets/icons/Icons";

export default function ImageSlider() {
  const [slider, setSlider] = useState<number>(0);
  const imageList = [image1, image2, image3, image4];

  const sliderNext = () => {
    if (slider == imageList.length - 1) {
      setSlider(0);
    } else {
      setSlider((state) => state + 1);
    }
  };
  const sliderPrev = () => {
    if (slider == 0) {
      setSlider(imageList.length - 1);
    } else {
      setSlider((state) => state - 1);
    }
  };
  return (
    <div className="flex-[1.3] bg-whiteMain rounded-block relative flex items-center justify-center  shadow-sectionShadow">
      <div className="slider-shade absolute h-full w-full left-0 top-0 z-[2] rounded-b-block"></div>
      <div className="flex items-center gap-4 absolute bottom-3 z-[3] mobileSmall:gap-3">
        {imageList.map((item: string, i: number) => (
          <div
            key={i}
            onClick={() => setSlider(i)}
            className={`h-[40px] mobileSmall:h-[32px] aspect-video rounded-[5px] outline outline-[2px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.35)] overflow-hidden cursor-pointer ${
              slider == i ? "outline-main" : "outline-whiteMain"
            }`}
          >
            <img
              src={item}
              className=" h-full w-full object-cover rounded-[5px]"
              alt="Product Image"
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden h-full w-full rounded-block z-[1] min-h-[500px] small:min-h-[400px] mobile:min-h-[300px] mobileSmall:min-h-[200px]">
        <img
          src={imageList[slider]}
          className="absolute top-0 left-0 h-full w-full object-cover"
          alt="Product Image"
        />
      </div>
      <button
        onClick={() => sliderPrev()}
        className="mobile:hidden h-16 aspect-square rounded-circle bg-whiteMain p-5 absolute z-[5] left-0 -translate-x-1/4 shadow-slideNavShadow"
      >
        <LeftArrowIcon className="h-full aspect-square" />{" "}
      </button>{" "}
      <button
        onClick={() => sliderNext()}
        className="mobile:hidden h-16 aspect-square rounded-circle bg-whiteMain p-5 absolute z-[5] right-0 translate-x-1/4 shadow-slideNavShadow"
      >
        <LeftArrowIcon className="h-full aspect-square rotate-180" />{" "}
      </button>
    </div>
  );
}
