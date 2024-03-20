import { useRef, useState } from "react";
import { DropDownIcon } from "../../assets/icons/Icons";
import Card from "../../components/global/Card";
import {
  PriceSlider,
  SelectNumbers,
  SelectType,
  SizeSlider,
} from "./components/Filters";

export default function Search() {
  return (
    <main className="flex  gap-5 mediumSmallXl:flex-col">
      <FiltersSection />
      <ResponsiveFiltersSection />
      <section className="flex-[3]  rounded-normal">
        <p className="text-Asmall text-textDesc tracking-wider font-mainBold m-3 mt-0">
          ნაპოვნია 12 შედეგი
        </p>
        <div className="flex flex-wrap justify-between gap-y-7 large:justify-center large:gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex items-center  justify-center gap-4 mt-5">
          <button className="h-[32px] aspect-square  text-[15px]  text-buttonText bg-main rounded-md flex items-center justify-center">
            1
          </button>
          <button className="h-[32px] aspect-square  text-[15px]  text-main bg-whiteLoad rounded-md flex items-center justify-center transition-colors hover:bg-mainClear">
            2
          </button>
          <button className="h-[32px] aspect-square  text-[15px]  text-main bg-whiteLoad rounded-md flex items-center justify-center transition-colors hover:bg-mainClear">
            3
          </button>
        </div>
      </section>
    </main>
  );
}

function ResponsiveFiltersSection() {
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  return (
    <section className="hidden mobile:block shadow-none ">
      <div className={`overflow-hidden`}>
        <button
          onClick={() => setOpenFilters((state) => !state)}
          className="h-[40px] w-[220px] text-[14px]  bg-main rounded-[5px] text-buttonText tracking-wider font-mainMedium relative flex items-center justify-center"
        >
          <div className="flex flex-col h-[25px] aspect-square justify-center items-center gap-1 absolute left-4">
            <span className="h-[2px] rounded-md w-10/12 bg-buttonText block"></span>
            <span className="h-[2px] rounded-md w-8/12 bg-buttonText block"></span>
            <span className="h-[2px] rounded-md w-4/12 bg-buttonText block"></span>
          </div>
          ფილტრები
        </button>
        <div
          className={`responsiveFilters  mobile  pb-[30px] rounded-[20px] h-3/4  top-1/4 shadow-sectionShadow fixed z-[5] bg-whiteMain left-0  w-full overflow-y-scroll transition-transform duration-300 ${
            openFilters ? "translate-y-0" : "translate-y-full"
          } `}
        >
          <div className="flex sticky top-0 items-center justify-center py-3 h-[50px] translate-y-[-2px] bg-whiteMain z-20">
            <div className=" h-[6px] w-[100px] rounded-md  bg-lineBg mx-auto "></div>
            <button
              onClick={() => setOpenFilters(false)}
              className={` h-[45px] absolute aspect-square gap-[6px] top-5  right-5 justify-center p-[10px] flex flex-col z-[5] transition-colors rounded-lg  bg-whiteBgLow `}
            >
              <span
                className={`transition-transform block h-[2px] rounded-md w-full bg-blackMain ${" rotate-45 translate-y-[8px]"}  `}
              ></span>
              <span
                className={`transition-transform  block h-[2px] rounded-md w-8/12 bg-blackMain ${" scale-x-0"}  `}
              ></span>
              <span
                className={`transition-transform  block h-[2px] rounded-md w-4/12 bg-blackMain ${" -rotate-45 -translate-y-[8px] w-full"}  `}
              ></span>
            </button>
          </div>

          <div className="content_container">
            <div className="flex flex-col gap-9 pt-5">
              <div className="flex flex-col items-center">
                <p className=" text-textHead tracking-wider font-mainBold ">
                  ადგილმდებარეობა
                </p>
                <button className="bg-main flex items-center px-6 py-[6px]  rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
                  თბილისი{" "}
                  <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
                </button>
              </div>
              <div className="flex flex-col items-center">
                <p className=" text-textHead tracking-wider font-mainBold ">
                  მდგომარეობა
                </p>
                <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
                  ახალი გარემონტებული{" "}
                  <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
                </button>
              </div>
              <div className="flex flex-col items-center">
                <p className=" text-textHead tracking-wider font-mainBold ">
                  პროექტის ტიპი
                </p>
                <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
                  არასტანდარტული{" "}
                  <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
                </button>
              </div>
              <PriceSlider />
              <SizeSlider />
              <SelectType />
              <SelectNumbers name="ოთახები" />
              <SelectNumbers name="საძინებლები" />
              <SelectNumbers name="სველი წერტილი" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FiltersSection() {
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const filtersBlock = useRef<null | HTMLDivElement>(null);

  return (
    <section className=" mobile:hidden flex-[1.5] large:flex-[2] bg-whiteMain mediumSmallXl:rounded-[10px] rounded-[18px] shadow-sectionShadow mediumSmallXl:shadow-none">
      <div
        className={`hidden mediumSmallXl:flex flex-col transition-all duration-300 overflow-hidden `}
        style={{
          maxHeight: openFilters
            ? filtersBlock
              ? filtersBlock.current?.offsetHeight
              : 1500
            : 55,
        }}
      >
        <button
          onClick={() => setOpenFilters((state) => !state)}
          className="h-[55px] min-h-[55px] w-full bg-main rounded-[10px] text-buttonText tracking-wider font-mainMedium relative flex items-center justify-center"
        >
          <div className="flex flex-col h-[30px] aspect-square justify-center items-center gap-1 absolute left-5">
            <span className="h-[2px] rounded-md w-10/12 bg-buttonText block"></span>
            <span className="h-[2px] rounded-md w-8/12 bg-buttonText block"></span>
            <span className="h-[2px] rounded-md w-4/12 bg-buttonText block"></span>
          </div>
          ფილტრები
        </button>
        <div className=" px-4 py-3 pb-12" ref={filtersBlock}>
          <div className="flex flex-col gap-9 pt-5">
            <div className="flex flex-col items-center">
              <p className=" text-textHead tracking-wider font-mainBold ">
                ადგილმდებარეობა
              </p>
              <button className="bg-main flex items-center px-6 py-[6px]  rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
                თბილისი{" "}
                <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className=" text-textHead tracking-wider font-mainBold ">
                მდგომარეობა
              </p>
              <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
                ახალი გარემონტებული{" "}
                <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className=" text-textHead tracking-wider font-mainBold ">
                პროექტის ტიპი
              </p>
              <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
                არასტანდარტული{" "}
                <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
              </button>
            </div>
            <PriceSlider />
            <SizeSlider />
            <SelectType />
            <SelectNumbers name="ოთახები" />
            <SelectNumbers name="საძინებლები" />
            <SelectNumbers name="სველი წერტილი" />
          </div>
        </div>
      </div>
      <div className="mediumSmallXl:hidden px-4 py-3 pb-12">
        <p className="text-Asmall text-textDesc tracking-wider font-mainBold">
          ფილტრები
        </p>
        <div className="flex flex-col gap-9 pt-5">
          <div className="flex flex-col items-center">
            <p className=" text-textHead tracking-wider font-mainBold ">
              ადგილმდებარეობა
            </p>
            <button className="bg-main flex items-center px-6 py-[6px]  rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
              თბილისი{" "}
              <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-textHead tracking-wider font-mainBold ">
              მდგომარეობა
            </p>
            <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
              ახალი გარემონტებული{" "}
              <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-textHead tracking-wider font-mainBold ">
              პროექტის ტიპი
            </p>
            <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-buttonText tracking-widest mt-3 font-mainMedium text-Asmall">
              არასტანდარტული{" "}
              <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
            </button>
          </div>
          <PriceSlider />
          <SizeSlider />
          <SelectType />
          <SelectNumbers name="ოთახები" />
          <SelectNumbers name="საძინებლები" />
          <SelectNumbers name="სველი წერტილი" />
        </div>
      </div>
    </section>
  );
}
