import { memo, useEffect, useRef, useState } from "react";
import { LeftArrowIcon } from "../../../assets/icons/Icons";
import { AdBannerProductSlider } from "../../../components/global/AdComponents";

function ImageSlider(props: { productData: any }) {
  const [slider, setSlider] = useState<number>(0);

  const imageList = useRef(JSON.parse(props.productData.estate_images));

  const sliderNext = () => {
    if (slider == imageList.current.length - 1) {
      setSlider(0);
    } else {
      setSlider((state) => state + 1);
    }
  };
  const sliderPrev = () => {
    if (slider == 0) {
      setSlider(imageList.current.length - 1);
    } else {
      setSlider((state) => state - 1);
    }
  };
  if (Math.floor(Math.random() * 15) == 4) {
    if (
      props.productData.estate_images.length > 1 &&
      !imageList.current.includes("AD")
    ) {
      imageList.current.splice(1, 0, "AD");
    }
  }
  useEffect(() => {
    setSlider(0);
  }, [props.productData]);

  return (
    <div className="flex-[1.3] bg-whiteMain rounded-block relative flex items-center justify-center  shadow-sectionShadow max-h-[450px]">
      <div className="slider-shade absolute h-full w-full left-0 top-0 z-[2] rounded-b-block"></div>
      <div className="flex items-center gap-4 absolute bottom-3 z-[3] mobileSmall:gap-3">
        {imageList.current.map((item: string, i: number) => (
          <div
            key={i}
            onClick={() => setSlider(i)}
            className={`h-[40px] mobileSmall:h-[32px] aspect-video rounded-[5px] outline outline-[2px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.35)] overflow-hidden cursor-pointer ${
              slider == i ? "outline-main" : "outline-whiteMain"
            }`}
          >
            {item !== "AD" ? (
              <img
                src={"http://localhost/HomeRentServer/" + item}
                className=" h-full w-full object-cover rounded-[5px]"
                alt="Product Image"
              />
            ) : (
              <div className="h-full w-full bg-whiteLoad flex justify-center items-center">
                AD
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden h-full w-full rounded-block z-[1] medium:min-h-[500px] small:min-h-[400px] mobile:min-h-[300px] mobileSmall:min-h-[200px]">
        {imageList.current[slider] !== "AD" ? (
          <img
            src={"http://localhost/HomeRentServer/" + imageList.current[slider]}
            className="absolute top-0 left-0 h-full w-full object-cover"
            alt="Product Image"
          />
        ) : (
          <AdBannerProductSlider />
        )}
      </div>
      {imageList.current.length !== 1 && (
        <>
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
        </>
      )}
    </div>
  );
}
export default memo(ImageSlider);
