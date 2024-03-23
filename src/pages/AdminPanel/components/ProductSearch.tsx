import { DateIcon, LoginEyeIcon } from "../../../assets/icons/Icons";

import productImage from "../../../assets/images/estates/2.jpeg";
export default function ProductSearch() {
  return (
    <div>
      <p className=" text-textHead">განცხადებების მართვა</p>
      <input
        type="text"
        placeholder="მოძებნა   (ID, ტელეფონით, სიტყვით)"
        className=" text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive my-3"
      />
      <div className="flex flex-col gap-3">
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
      </div>
    </div>
  );
}

function ProductBanner() {
  return (
    <div className=" w-full border-t-[2px] border-lineBg py-5 flex items-center small:flex-col">
      <div className="w-[160px] h-[90px] rounded-lg bg-whiteLoad relative overflow-hidden small:w-[100%] small:aspect-video small:h-auto">
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2]"></div>
        <img
          src={productImage}
          className="absolute h-full w-full object-cover  top-0 left-0"
        />
      </div>
      <div className="flex flex-col ml-3 h-full relative small:w-full small:mt-3 small:h-auto">
        <h3 className="text-[15px] mb-[2px] text-textHeadBlack">
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
        <div className="flex items-center gap-5 mt-auto small:mt-2">
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
      <div className="flex items-center gap-3 ml-auto mediumSmallXl:flex-wrap mediumSmallXl:justify-end small:justify-start small:w-full small:mt-5">
        <button className="bg-pinkClear font-mainBold tracking-wider text-pinkI text-[12px] h-[28px] w-[120px] rounded-md transition-colors hover:bg-pinkHover">
          დაბლოკვა
        </button>
        <button className="bg-redClear font-mainBold tracking-wider text-redI text-[12px] h-[28px] w-[100px] rounded-md transition-colors hover:bg-redHover">
          წაშლა
        </button>
      </div>
    </div>
  );
}
