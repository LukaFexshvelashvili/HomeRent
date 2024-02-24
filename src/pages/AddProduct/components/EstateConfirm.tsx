import { useState } from "react";
import {
  BookmarkIcon,
  DropDownIcon,
  ImageLoaderIcon,
  RoomIcon,
  SquareFrameIcon,
} from "../../../assets/icons/Icons";
import { ActiveOffers, TOffer } from "../../../assets/lists/offers";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import numeral from "numeral";
export default function EstateConfirm() {
  const data = useSelector((state: RootState) => state.addProduct);
  const [activeOffer, setActiveOffer] = useState(0);
  let offerData = ActiveOffers.filter((item) => item.id == activeOffer)[0];

  return (
    <div className="p-4">
      <div className=" flex flex-col items-center justify-center">
        <CardExample
          rooms={data.estateRooms}
          image={data.estateActiveImage}
          price={data.estatePrice}
          size={data.estateSize}
        />
        <p className=" text-Asmall text-textDesc mt-3">ბარათის ვიზუალი</p>
      </div>
      <div className="flex gap-2 items-center mt-5">
        {ActiveOffers.map((e: TOffer, i: number) => (
          <div
            key={i}
            onClick={() => setActiveOffer(e.id)}
            className="text-Asmall h-[30px] w-[80px] flex items-center justify-center cursor-pointer rounded-md transition-colors"
            style={{
              backgroundColor:
                activeOffer == e.id ? e.mainColor : e.secondColor,
              color: activeOffer == e.id ? "#FFFFFF" : e.mainColor,
            }}
          >
            {e.name}
          </div>
        ))}
      </div>
      {offerData.status !== 0 && (
        <div
          className="flex items-center justify-between font-mainBold rounded-lg py-2 px-3 mt-5"
          style={{ backgroundColor: offerData.secondColor }}
        >
          <p className="text-Asmall" style={{ color: offerData.mainColor }}>
            {" "}
            1 დღე - {offerData.price}₾
          </p>
          <div className="">
            <button
              className="h-[34px] w-[120px] text-Asmall rounded-md text-whiteMain flex justify-between items-center px-4"
              style={{ backgroundColor: offerData.mainColor }}
            >
              1 დღე
              <DropDownIcon className="h-2" />
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-6">
        <p className="text-Asmall text-textDesc">სტატუსი</p>

        <p className="text-Asmall" style={{ color: offerData.mainColor }}>
          {offerData.name}
        </p>
      </div>
      {offerData.status !== 0 && (
        <div className="flex items-center justify-between font-mainBold rounded-lg mt-1">
          <p className=" text-textDesc">ფასი</p>

          <p className=" text-main">{offerData.price}₾</p>
        </div>
      )}
      <button className="h-[42px] w-full rounded-md bg-main text-whiteMain tracking-wider text-[15px] transition-colors mt-3 hover:bg-mainHover">
        გამოქვეყნება
      </button>
    </div>
  );
}
export function CardExample(props: {
  autoWidth?: boolean;
  image?: string | null;
  price?: number | null;
  size?: number | null;
  rooms?: number | null;
}) {
  const getSizePrice = () => {
    if (props.size && props.size > 0 && props.price && props.price > 0) {
      let calc = props.size > 0 && props.price > 0 && props.price / props.size;
      return calc;
    } else {
      return 0;
    }
  };
  return (
    <div
      className={`h-auto   ${
        props.autoWidth ? "w-full" : "w-[290px]"
      } bg-whiteMain border-2 border-[#F3F3F3] rounded-normal p-3 pb-14 relative`}
    >
      <div className="w-full h-[240px] rounded-normal bg-whiteLoad relative overflow-hidden flex justify-center items-center">
        <div className="absolute h-[25px] w-[60px] select-none bg-redI rounded-md flex items-center justify-center text-Asmaller font-mainBold text-whiteMain tracking-wider cursor-default top-2 right-2 z-[3]">
          VIP+
        </div>
        {props.image ? (
          <img
            src={props.image}
            className="absolute h-full w-full object-cover top-0 left-0 select-none"
            alt="estate-photo"
          />
        ) : (
          <ImageLoaderIcon className="h-[100px]" />
        )}
        <div className="absolute bottom-2 left-2 flex items center gap-2">
          <div className="bg-cardInfoBg backdrop-blur-[2px] rounded-[3px] flex justify-center items-center px-2 py-[6px] text-WhiteFade font-mainSemiBold text-sm">
            <RoomIcon className="h-[18px] mr-3 [&>path]:fill-WhiteFade" />{" "}
            {props.rooms && props.rooms}
          </div>
          <div className="bg-cardInfoBg backdrop-blur-[2px] rounded-[3px] flex justify-center items-center px-2 py-[6px] text-WhiteFade font-mainSemiBold text-sm">
            <SquareFrameIcon className="h-[18px] mr-3 [&>path]:stroke-WhiteFade" />{" "}
            92მ²
          </div>
        </div>
      </div>
      <div className="flex flex-col py-1">
        <h2 className="text-textHeadCard font-mainBold">ვაკე რეზიდენსი</h2>
        <p className="text-textDescCard text-Asmall font-mainRegular">
          თბილისი, ყიფშიძის ქ. 1
        </p>
      </div>
      <div className="flex items-center mt-2 bottom-3 w-full absolute left-0 px-3">
        <div className="bg-mainClear text-main w-[120px] h-[30px] flex justify-center items-center rounded-lg">
          {numeral(props.price).format("0,0").replace(/,/g, " ")}$
        </div>
        <p className="text-textDescCard text-Asmall mx-3 ">
          მ² - {getSizePrice()}$
        </p>
        <button className="p-[5px] rounded-md absolute right-3">
          <BookmarkIcon
            className={`h-[20px]  transition-all  
                : "fill-transparent [&>path]:stroke-navIcon"
            `}
          />
        </button>
      </div>
    </div>
  );
}
