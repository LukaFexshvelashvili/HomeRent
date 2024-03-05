import { useState } from "react";
import { InfoIcon } from "../../../assets/icons/Icons";

export default function Settings() {
  const [activeColor, setActiveColor] = useState<number>(0);
  const [darkMode, setdarkMode] = useState<boolean>(false);
  const [security, setSecurity] = useState<boolean>(false);
  const colors = ["#3A86FF", "#C727FF", "#A6E81B"];
  return (
    <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex px-7 py-5 flex-col gap-3">
      <h2 className="text-textHeadCard mb-2 font-mainBold">ვიზუალი</h2>
      <div className="flex items-center justify-between">
        <p className=" text-textDesc mr-3 text-[14px] ">ღამის რეჟიმი</p>
        <div
          onClick={() => setdarkMode((state) => !state)}
          className={`h-[18px] w-[36px] outline-2 outline outline-main rounded-[4px] relative cursor-pointer duration-150 transition-colors ${
            darkMode ? "bg-main" : "bg-transparent"
          }`}
        >
          <div
            className={`h-full aspect-square bg-main rounded border-2  transition-all ${
              darkMode ? " border-whiteMain" : "border-buttonBgLast"
            } ${darkMode && "translate-x-full"} `}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className=" text-textDesc mr-4 text-[14px] ">
          მთავარი ფერის დაყენება
        </p>
        <div className="flex items-center gap-2">
          {colors.map((e: string, i: number) => (
            <div
              key={i}
              className={`h-6 aspect-square rounded-lg p-1 flex justify-center items-center cursor-pointer`}
              style={{ backgroundColor: e }}
              onClick={() => setActiveColor(i)}
            >
              {activeColor === i && (
                <div className="h-full aspect-square border-2 border-white rounded-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-textHeadCard mb-2 font-mainBold mt-6">უსაფრთხოება</h2>
      <div className="flex items-center justify-between relative">
        <div className="group text-textDesc mr-3 text-[14px]  flex items-center ">
          დამატებით უსაფრთხოება{" "}
          <InfoIcon className="h-[18px] aspect-square [&>path]:fill-textDesc ml-2" />
          <div className=" transition-all opacity-0 invisible bg-whiteMain rounded-xl absolute w-[300px] p-3 text-[12px] text-center shadow-cardShadow top-7 left-0 group-hover:visible group-hover:opacity-100">
            დამატებითი უსაფრთხოება გულისხმობს სესიებთან ერთად IP ADDRESS ის
            შენახვას რათა სხვა მოწყობილობიდან გაუთვალისწინებელი ავტორიზაცია
            თავიდან ავიცილოთ
          </div>
        </div>
        <div
          onClick={() => setSecurity((state) => !state)}
          className={`h-[18px] w-[36px] outline-2 outline outline-main rounded-[4px] relative cursor-pointer duration-150 transition-colors ${
            security ? "bg-main" : "bg-transparent"
          }`}
        >
          <div
            className={`h-full aspect-square bg-main rounded border-2  transition-all ${
              security ? " border-whiteMain" : "border-buttonBgLast"
            } ${security && "translate-x-full"} `}
          ></div>
        </div>
      </div>
      <p className="text-[14px] text-main cursor-pointer">პაროლის შეცვლა</p>
      <p className="text-[14px] text-main cursor-pointer">
        სხვა მოწყობილობების გაგდება
      </p>
    </div>
  );
}
