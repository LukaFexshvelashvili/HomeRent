import {
  FilterFrameIcon,
  FilterHomeIcon,
  FilterPlaceIcon,
  SearchIcon,
} from "../../../assets/icons/Icons";

export default function SearchInput() {
  return (
    <div className="w-10/12 h-[50px] rounded-normal flex  items-center mx-auto border-2 border-whiteLoad my-10">
      <div className="flex items-center gap-4 w-[20%] text-textPlaceholder h-full px-3 border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad ">
        <FilterHomeIcon className=" h-[17px] [&>path]:fill-navIcon" />{" "}
        <p className="w-[150px] text-[15px]">ბინა</p>
      </div>
      <div className="flex items-center gap-4 w-[20%] text-textPlaceholder h-full px-3 border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad ">
        <FilterPlaceIcon className=" h-[17px] [&>path]:fill-navIcon" />{" "}
        <p className="w-[150px] text-[15px]">მდებარეობა</p>
      </div>
      <div className="flex items-center gap-4 w-[20%] text-textPlaceholder h-full px-3 border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad ">
        <FilterFrameIcon className=" h-[17px] [&>path]:fill-navIcon" />{" "}
        <p className="w-[150px] text-[15px]">ფართი</p>
      </div>{" "}
      <div className="flex items-center gap-4 w-[20%] text-textPlaceholder h-full px-3 border-r-2 border-whiteLoad cursor-pointer transition-colors hover:bg-whiteLoad ">
        <FilterPlaceIcon className=" h-[17px] [&>path]:fill-navIcon" />{" "}
        <p className="w-[150px] text-[15px]">ფასი</p>
      </div>
      <button className="h-full w-[20%] text-[15px] rounded-r-normal text-whiteMain bg-main flex items-center justify-center tracking-widest  transition-colors hover:bg-mainHover">
        <SearchIcon className=" h-[17px] [&>path]:fill-whiteMain mr-3" />{" "}
        მოძებნა
      </button>
    </div>
  );
}
