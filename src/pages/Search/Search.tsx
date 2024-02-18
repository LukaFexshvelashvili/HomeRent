import ReactSlider from "react-slider";
import { DropDownIcon } from "../../assets/icons/Icons";
import Card from "../../components/global/Card";

export default function Search() {
  return (
    <main className="flex  gap-5">
      <section className="flex-[1.5] bg-whiteMain rounded-normal shadow-sectionShadow">
        <div className="px-4 py-3">
          <p className="text-Asmall text-textDesc tracking-wider font-mainBold">
            ფილტრები
          </p>
          <div className="flex flex-col gap-7 pt-5">
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
            <div className="flex flex-col items-center relative w-10/12 mx-auto">
              <p className=" text-textHead tracking-wider font-mainBold ">
                ფასი
              </p>
              <div className="h-[35px] w-[80px] flex items-center absolute top-0 right-0 outline outline-2 -outline-offset-2 outline-borderCol1 rounded-lg text-textDescCard cursor-pointer">
                <div className="flex-1 h-full flex items-center justify-center">
                  ₾
                </div>
                <div className="flex-1 h-full flex items-center justify-center text-whiteMain bg-main rounded-lg relative">
                  $
                </div>
              </div>
              <ReactSlider
                className="horizontal-slider w-full mt-6 flex items-center h-3"
                thumbClassName="example-thumb thumbSlider"
                trackClassName="example-track bg-whiteLoad h-[5px] rounded-md"
                defaultValue={[0, 200]}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                pearling
                minDistance={10}
              />

              <div className="flex items-center"></div>
            </div>
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
      </section>
    </main>
  );
}
