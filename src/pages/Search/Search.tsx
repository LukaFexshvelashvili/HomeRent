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
    <main className="flex  gap-5">
      <section className="flex-[1.5] bg-whiteMain rounded-[18px] shadow-sectionShadow">
        <div className="px-4 py-3 pb-12">
          <p className="text-Asmall text-textDesc tracking-wider font-mainBold">
            ფილტრები
          </p>
          <div className="flex flex-col gap-9 pt-5">
            <div className="flex flex-col items-center">
              <p className=" text-textHead tracking-wider font-mainBold ">
                ადგილმდებარეობა
              </p>
              <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-whiteMain tracking-widest mt-3 font-mainMedium text-Asmall">
                თბილისი{" "}
                <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className=" text-textHead tracking-wider font-mainBold ">
                მდგომარეობა
              </p>
              <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-whiteMain tracking-widest mt-3 font-mainMedium text-Asmall">
                ახალი გარემონტებული{" "}
                <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className=" text-textHead tracking-wider font-mainBold ">
                პროექტის ტიპი
              </p>
              <button className="bg-main flex items-center px-6 py-[6px] rounded-lg text-whiteMain tracking-widest mt-3 font-mainMedium text-Asmall">
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
      <section className="flex-[3] rounded-normal">
        <p className="text-Asmall text-textDesc tracking-wider font-mainBold m-3 mt-0">
          ნაპოვნია 12 შედეგი
        </p>
        <div className="flex flex-wrap justify-between gap-y-7">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex items-center  justify-center gap-4 mt-5">
          <button className="h-[32px] aspect-square  text-[15px]  text-whiteMain bg-main rounded-md flex items-center justify-center">
            1
          </button>
          <button className="h-[32px] aspect-square  text-[15px]  text-main bg-white rounded-md flex items-center justify-center transition-colors hover:bg-mainClear">
            2
          </button>
          <button className="h-[32px] aspect-square  text-[15px]  text-main bg-white rounded-md flex items-center justify-center transition-colors hover:bg-mainClear">
            3
          </button>
        </div>
      </section>
    </main>
  );
}
