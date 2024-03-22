import { useState } from "react";
import ProductBanner from "./ProductBanner";
import Buypopup from "./Buypopup";

export default function MyProducts() {
  const [popbuy, setPopbuy] = useState<{ id: null | number }>({ id: null });
  const [choice, setChoice] = useState<number>(0);
  const choices: string[] = ["აქტიური", "დაბლოკილი", "ვადაგასული"];
  return (
    <>
      {" "}
      {popbuy.id && <Buypopup setPopbuy={setPopbuy} />}
      <div className=" rounded-section text-textHead shadow-sectionShadow bg-whiteMain relative flex px-7 py-5 flex-col gap-3  mobile:px-3">
        <h1 className="mobileSmall:text-[14px]">ჩემი განცხადებები</h1>
        <div className="flex gap-3 items-center flex-wrap mobile:justify-center">
          {choices.map((e: string, i: number) => (
            <button
              key={i}
              onClick={() => setChoice(i)}
              className={`px-4 py-2 transition-colors rounded-lg text-[14px]  ${
                choice == i
                  ? "text-buttonText bg-main"
                  : "text-main bg-mainClear"
              }`}
            >
              {e}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="მოძებნა  ( ID ან სათაური )"
          className=" text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive"
        />
      </div>
      <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex  py-2 flex-col gap-3">
        <p className="px-4 text-[13px] text-textDesc my-1">სულ 3 განცხადება</p>
        <div className="flex flex-col">
          <ProductBanner setPopbuy={setPopbuy} />
          <ProductBanner setPopbuy={setPopbuy} />
          <ProductBanner setPopbuy={setPopbuy} />
        </div>
      </div>
    </>
  );
}
