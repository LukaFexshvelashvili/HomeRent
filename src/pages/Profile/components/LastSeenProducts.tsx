import { DateIcon, LoginEyeIcon } from "../../../assets/icons/Icons";

import productImage from "../../../assets/images/estates/2.jpeg";

export default function LastSeenProducts() {
  return (
    <>
      {" "}
      <div className=" rounded-section text-textHead shadow-sectionShadow bg-whiteMain relative flex px-7 py-5 flex-col gap-3 mobile:px-3">
        <h1 className="mobileSmall:text-[14px]">ბოლოს ნანახი განცხადებები</h1>

        <input
          type="text"
          placeholder="მოძებნა  ( ID ან სათაური )"
          className=" text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive"
        />
      </div>
      <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex  py-2 flex-col gap-3">
        <p className="px-4 text-[13px] text-textDesc my-1">სულ 3 განცხადება</p>
        <div className="flex flex-col">
          <BasicBanner />
          <BasicBanner />
          <BasicBanner />
        </div>
      </div>
    </>
  );
}

function BasicBanner() {
  return (
    <div className=" w-full border-t-[2px] border-lineBg py-5 px-4 flex items-center smallXl:flex-col">
      <div className="w-[160px] h-[90px] rounded-lg bg-whiteLoad relative overflow-hidden smallXl:w-[100%] smallXl:aspect-video smallXl:h-auto">
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2]"></div>
        <img
          src={productImage}
          className="absolute h-full w-full object-cover  top-0 left-0"
        />
      </div>
      <div className="flex flex-col ml-3 h-full relative smallXl:w-full smallXl:mt-3 smallXl:h-auto">
        <h3 className="text-[15px] mb-[2px] text-textHeadBlack ">
          იყიდება 5 ოთახიანი ბინა
        </h3>
        <p className="text-[13px] text-textDesc">
          ადგილი:{" "}
          <span className="text-[13px] text-textHeadBlack">
            თბილისი, ვაშლიჯვარი
          </span>
        </p>
        <p className="text-[13px] text-textDesc">
          ოთახები: <span className="text-[13px] text-textHeadBlack">5</span>
        </p>
        <p className="text-[13px] text-textDesc">
          ფართი: <span className="text-[13px] text-textHeadBlack">100 მ²</span>
        </p>
        <div className="flex items-center gap-5 mt-auto smallXl:mt-3 mobileSmall:flex-wrap ">
          <p className="flex items-center text-[13px] text-textDesc gap-1">
            <LoginEyeIcon className="h-4 aspect-square [&>path]:fill-textDesc" />{" "}
            2 234
          </p>
          <p className="flex items-center text-[13px] text-textDesc gap-1">
            <DateIcon className="h-4 aspect-square [&>path]:fill-textDesc" /> 2
            23 იან 24, 14:54
          </p>
          <p className="text-[13px] text-textDesc">ID - 18495519</p>
        </div>
      </div>
    </div>
  );
}
