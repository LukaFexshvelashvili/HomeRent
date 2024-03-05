import { useState } from "react";
import ProductBanner from "./ProductBanner";

export default function MyProducts() {
  const [choice, setChoice] = useState<number>(0);
  const choices: string[] = ["აქტიური", "დაბლოკილი", "ვადაგასული"];
  return (
    <>
      {" "}
      <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex px-7 py-5 flex-col gap-3">
        <h1>ჩემი განცხადებები</h1>
        <div className="flex gap-3 items-center">
          {choices.map((e: string, i: number) => (
            <button
              key={i}
              onClick={() => setChoice(i)}
              className={`px-4 py-2 transition-colors rounded-lg text-[14px] ${
                choice == i
                  ? "text-whiteMain bg-main"
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
          <ProductBanner />
          <ProductBanner />
          <ProductBanner />
        </div>
      </div>
    </>
  );
}