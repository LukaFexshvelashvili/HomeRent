import {
  EditIcon,
  LoginEyeCloseIcon,
  LoginEyeIcon,
  TrashIcon,
} from "../../../assets/icons/Icons";

import productImage from "../../../assets/images/estates/2.jpeg";
export default function ProductBanner() {
  return (
    <div className=" w-full border-t-[2px] border-lineBg py-5 px-4 flex items-center">
      <div className="w-[160px] h-[90px] rounded-lg bg-whiteLoad relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2]"></div>
        <img
          src={productImage}
          className="absolute h-full w-full object-cover  top-0 left-0"
        />
      </div>
      <div className="flex flex-col ml-3 h-full relative">
        <h3 className="text-[15px] mb-[2px] text-textHeadBlack">
          იყიდება 5 ოთახიანი ბინა
        </h3>
        <p className="text-[13px] text-textDesc">
          განახლდა:{" "}
          <span className="text-[13px] text-textHeadBlack">1-27-2024</span>
        </p>
        <p className="text-[13px] text-textDesc">
          ვადა:{" "}
          <span className="text-[13px] text-textHeadBlack">3-27-2024</span>
        </p>
        <div className="flex items-center gap-5 mt-auto">
          <p className="flex items-center text-[13px] text-textDesc gap-1">
            <LoginEyeIcon className="h-4 aspect-square [&>path]:fill-textDesc" />{" "}
            2 234
          </p>
          <p className="text-[13px] text-textDesc">ID - 18495519</p>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <button className="bg-purpleClear text-purpleI h-[35px] w-[180px] rounded-md text-[13px] font-mainBold tracking-wide transition-colors hover:bg-purpleHover">
          ნახვების გაზრდა
        </button>
        <button className="bg-orangeClear text-orangeI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-orangeHover flex justify-center items-center">
          <EditIcon className="h-full aspect-square" />
        </button>
        <button className="bg-mainClear text-blueI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-blueHover flex justify-center items-center">
          <LoginEyeCloseIcon className="h-full aspect-square [&>path]:stroke-blueI" />
        </button>
        <button className="bg-redClear text-redI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-redHover flex justify-center items-center">
          <TrashIcon className="h-full aspect-square" />
        </button>
      </div>
    </div>
  );
}
