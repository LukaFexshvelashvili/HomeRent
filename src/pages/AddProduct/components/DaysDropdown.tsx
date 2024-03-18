import { useState } from "react";
import { DropDownIcon } from "../../../assets/icons/Icons";
import { TOffer } from "../../../assets/lists/offers";

export default function DaysDropdown({
  offerData,
  value,
  setValue,
}: {
  offerData: TOffer;
  value: number;
  setValue: Function;
}) {
  const SelectValues = [1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 30];
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex items-center justify-between font-mainBold rounded-lg py-2 px-3 mt-5"
      style={{ backgroundColor: offerData.secondColor }}
    >
      <p className="text-Asmall " style={{ color: offerData.mainColor }}>
        {" "}
        1 დღე - {offerData.price}₾
      </p>
      <div className="relative">
        <button
          onClick={() => setOpen((state) => !state)}
          className="h-[34px] w-[120px] text-Asmall rounded-md flex justify-between items-center px-4 text-buttonText"
          style={{ backgroundColor: offerData.mainColor }}
        >
          {value} დღე
          <DropDownIcon className="h-2" />
        </button>
        {open && (
          <div className="absolute w-full h-[150px] rounded-lg top-[40px] bg-whiteMain shadow-sectionShadow flex flex-col overflow-y-auto">
            {SelectValues.map((e: number) => (
              <button
                key={e}
                onClick={() => {
                  setValue(e);
                  setOpen(false);
                }}
                className="text-sm py-[6px] text-textDesc transition-colors hover:bg-whiteHover"
              >
                {e} დღე
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
