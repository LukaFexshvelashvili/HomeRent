import { useMemo, useState } from "react";
import {
  FilterFrameIcon,
  FilterHomeIcon,
  FilterPlaceIcon,
  MoneyIcon,
  PopupCloseIcon,
} from "../../../assets/icons/Icons";
import { RealEstateTypes } from "../../Search/components/FiltersArray";
import { cities } from "../../../assets/lists/cities";
import { InputPriceSlider, InputSizeSlider } from "./SearchComponents";

type TPriceGet = {
  start: number;
  end: number;
  currency: number;
};

export default function SearchInput() {
  const [inputSelect, setInputSelect] = useState<null | number>(null);
  const [getType, setGetType] = useState<null | string>(null);
  const [getCity, setGetCity] = useState<null | string>(null);
  const [getSize, setGetSize] = useState<null | number[]>(null);
  const [getPrices, setGetPrices] = useState<null | TPriceGet>(null);

  return (
    <div className="w-10/12 h-[45px]  my-10 mx-auto">
      <div className="relative  rounded-normal flex  items-center h-full w-full border-2 border-whiteLoad">
        <div className="flex items-center w-[20%] text-textDesc h-full border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad relative">
          <div
            onClick={() => setInputSelect(1)}
            className="flex h-full items-center gap-3  px-6 "
          >
            <FilterHomeIcon className=" h-[16px] [&>path]:fill-navIcon" />{" "}
            <p className="w-[150px] text-[14px] font-mainMedium">
              {getType ? getType : "ბინა"}
            </p>
          </div>
          {getType && (
            <button
              onClick={() => setGetType(null)}
              className="h-[20px] aspect-square absolute right-2 flex justify-center items-center p-1 z-10"
            >
              <PopupCloseIcon className=" [&>path]:fill-[rgba(0,0,0,0.2)]" />
            </button>
          )}
        </div>
        <div className="flex items-center w-[20%] text-textDesc h-full border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad relative">
          <div
            onClick={() => setInputSelect(2)}
            className="flex h-full items-center gap-3  px-6 "
          >
            <FilterPlaceIcon className=" h-[16px] [&>path]:fill-navIcon" />{" "}
            <p className="w-[150px] text-[14px] font-mainMedium">
              {getCity ? getCity : "მდებარეობა"}
            </p>
          </div>
          {getCity && (
            <button
              onClick={() => setGetCity(null)}
              className="h-[20px] aspect-square absolute right-2 flex justify-center items-center p-1 z-10"
            >
              <PopupCloseIcon className=" [&>path]:fill-[rgba(0,0,0,0.2)]" />
            </button>
          )}
        </div>
        <div className="flex items-center w-[20%] text-textDesc h-full border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad relative">
          <div
            onClick={() => setInputSelect(3)}
            className="flex h-full items-center gap-3  px-6 "
          >
            <FilterFrameIcon className=" h-[16px] [&>path]:fill-navIcon" />{" "}
            <p className="w-[150px] text-[14px] font-mainMedium">
              {getSize ? `${getSize[0]} მ² - ${getSize[1]} მ²` : "ფართი"}
            </p>
          </div>
          {getSize && (
            <button
              onClick={() => setGetSize(null)}
              className="h-[20px] aspect-square absolute right-2 flex justify-center items-center p-1 z-10"
            >
              <PopupCloseIcon className=" [&>path]:fill-[rgba(0,0,0,0.2)]" />
            </button>
          )}
        </div>
        <div className="flex items-center w-[20%] text-textDesc h-full border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad relative">
          <div
            onClick={() => setInputSelect(4)}
            className="flex h-full items-center gap-3  px-6 "
          >
            <MoneyIcon className=" h-[18px] [&>path]:fill-navIcon" />{" "}
            <p className="w-[150px] text-[14px] font-mainMedium">
              {getPrices
                ? `${getPrices.start}${getPrices.currency == 0 ? "$" : "₾"} - ${
                    getPrices.end
                  }${getPrices.currency == 0 ? "$" : "₾"}`
                : "ფასი"}
            </p>
          </div>
          {getPrices && (
            <button
              onClick={() => setGetPrices(null)}
              className="h-[20px] aspect-square absolute right-2 flex justify-center items-center p-1 z-10"
            >
              <PopupCloseIcon className=" [&>path]:fill-[rgba(0,0,0,0.2)]" />
            </button>
          )}
        </div>
        <button className="h-full w-[20%] text-[14px] font-mainMedium rounded-r-normal text-whiteMain bg-main flex items-center justify-center tracking-widest  transition-colors hover:bg-mainHover">
          მოძებნა
        </button>
        {inputSelect && (
          <div className="fixed left-2/4 -translate-x-2/4 bg-whiteMain rounded-section shadow-sectionShadow p-4 w-[80%] mx-auto z-20">
            <button
              onClick={() => setInputSelect(null)}
              className="h-[26px] aspect-square  absolute top-3 right-3 flex justify-center items-center p-1"
            >
              <PopupCloseIcon className=" [&>path]:fill-[rgba(0,0,0,0.2)]" />
            </button>
            {inputSelect == 1 && (
              <>
                <p className="text-textHead text-[14px]">
                  აირჩიეთ უძრავი ქონების ტიპი
                </p>
                <SelectType setData={setGetType} closeWindow={setInputSelect} />
              </>
            )}
            {inputSelect == 2 && (
              <>
                <p className="text-textHead text-[14px]">აირჩიეთ ქალაქი</p>
                <SelectCity setData={setGetCity} closeWindow={setInputSelect} />
              </>
            )}
            {inputSelect == 3 && (
              <>
                <p className="text-textHead text-[14px]">აირჩიეთ ფართის ზომა</p>
                <InputSizeSlider
                  setData={setGetSize}
                  closeWindow={setInputSelect}
                />
              </>
            )}

            {inputSelect == 4 && (
              <>
                <p className="text-textHead text-[14px]">
                  აირჩიეთ ფასის ინტერვალი
                </p>
                <InputPriceSlider
                  setData={setGetPrices}
                  closeWindow={setInputSelect}
                />
              </>
            )}
          </div>
        )}
      </div>
      {inputSelect && (
        <div
          onClick={() => setInputSelect(null)}
          className="fixed h-full w-full aspect-square bg-blackFade top-0 left-0 z-10 "
        ></div>
      )}
    </div>
  );
}

function SelectCity(props: { setData: Function; closeWindow: Function }) {
  const [search, setSearch] = useState("");

  const citiesAPI = useMemo(
    () =>
      cities.subLocs
        .map((item) => item.name.ka)
        .filter((item: string) => item.includes(search)),
    [search]
  );

  return (
    <>
      <input
        type="text"
        placeholder="მოძებნა"
        className="mt-6 text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive my-3"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="flex flex-col flex-wrap gap-x-10 h-[400px] overflow-x-scroll mt-6 gap-y-2">
        {citiesAPI &&
          citiesAPI.map((e: string, i: number) => (
            <div
              onClick={() => {
                props.setData(e);
                props.closeWindow(null);
              }}
              className=" h-[26px] cursor-pointer transition-colors px-2 min-w-[150px] rounded-md hover:bg-whiteHover"
              key={i}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}

function SelectType(props: { setData: Function; closeWindow: Function }) {
  const [active, setActive] = useState(-1);
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 flex-wrap justify-center mt-4">
        {RealEstateTypes.map(
          (
            e: { icon: (props: any) => JSX.Element; name: string },
            i: number
          ) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                props.setData(e.name);
                props.closeWindow(null);
              }}
              className={`  p-2 px-4 rounded-xl transition-colors ${
                active == i ? "bg-main" : "bg-mainClear"
              }`}
            >
              <e.icon
                className={` h-[24px] aspect-square ${
                  active == i && "[&>path]:fill-whiteMain"
                } `}
              />
              <p
                className={`text-Asmall ml-7 tracking-wide ${
                  active == i ? "text-whiteMain" : "text-main"
                }`}
              >
                {e.name}
              </p>
            </button>
          )
        )}
      </div>
    </div>
  );
}
