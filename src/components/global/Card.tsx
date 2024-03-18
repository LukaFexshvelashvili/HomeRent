import { useState } from "react";
import {
  BookmarkIcon,
  RoomIcon,
  SquareFrameIcon,
} from "../../assets/icons/Icons";
import CardPhoto from "../../assets/images/estates/card.jpg";

export default function Card(props: { autoWidth?: boolean }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div
      className={`h-auto   ${
        props.autoWidth ? "w-full" : "w-[290px]"
      } bg-whiteMain border-2 border-cardBorder rounded-normal p-3 pb-14 relative`}
    >
      <div className="w-full h-[200px] rounded-normal bg-whiteLoad relative overflow-hidden">
        <div className="absolute h-[25px] w-[60px] select-none bg-redI rounded-md flex items-center justify-center text-Asmaller font-mainBold text-buttonText tracking-wider cursor-default top-2 right-2 z-[3]">
          VIP+
        </div>
        <img
          src={CardPhoto}
          className="absolute h-full w-full object-cover top-0 left-0 select-none"
          alt="estate-photo"
          loading="lazy"
        />
        <div className="absolute bottom-2 left-2 flex items center gap-2">
          <div className="bg-cardInfoBg backdrop-blur-[2px] rounded-[3px] flex justify-center items-center px-2 py-[6px] text-WhiteFade font-mainSemiBold text-sm">
            <RoomIcon className="h-[18px] mr-3 [&>path]:fill-WhiteFade" /> 3
          </div>
          <div className="bg-cardInfoBg backdrop-blur-[2px] rounded-[3px] flex justify-center items-center px-2 py-[6px] text-WhiteFade font-mainSemiBold text-sm">
            <SquareFrameIcon className="h-[18px] mr-3 [&>path]:stroke-WhiteFade" />{" "}
            92მ²
          </div>
        </div>
      </div>
      <div className="flex flex-col py-1">
        <h2 className="text-textHeadCard font-mainBold  text-[16px]">
          ვაკე რეზიდენსი
        </h2>
        <p className="text-textDescCard text-[14px] font-mainMedium mt-[2px]">
          თბილისი, ყიფშიძის ქ. 1
        </p>
      </div>
      <div className="flex items-center mt-2 bottom-3 w-full absolute left-0 px-3">
        <div className="bg-mainClear text-main w-[120px] h-[30px] flex justify-center items-center rounded-md">
          32 700$
        </div>
        <p className="text-textDescCard text-Asmall mx-3 ">მ² - 352$</p>
        <button
          onClick={() => setFavorite((state) => !state)}
          className="p-[5px] rounded-md absolute right-3"
        >
          <BookmarkIcon
            className={`h-[20px]  transition-all   ${
              favorite
                ? "fill-orangeI [&>path]:stroke-orangeI"
                : "fill-transparent [&>path]:stroke-navIcon"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
