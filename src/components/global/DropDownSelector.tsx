import { useMemo, useState } from "react";
import { DropDownIcon } from "../../assets/icons/Icons";

export default function DropDownSelector() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const items = useMemo(() => [], []);
  return (
    <div className="relative">
      <button
        onClick={() => setOpenDialog((state) => !state)}
        className="bg-main flex items-center px-4 justify-center py-[8px] rounded-lg text-whiteMain tracking-widest font-mainMedium text-Asmall"
      >
        მთავარი ტექსტი
        <DropDownIcon className="h-[12px] aspect-square flex items-center justify-center ml-4  [&>path]:fill-WhiteFade" />
      </button>
      <div
        className={` w-[150px] absolute shadow-cardShadow bg-whiteMain rounded-lg top-[45px] overflow-hidden transition-all  ${
          openDialog ? "opacity-100 visible" : "invisible opacity-0"
        }`}
      >
        <button
          onClick={() => {
            setOpenDialog(false);
          }}
          className={`h-[40px] w-full flex justify-center items-center text-textHead transition-colors hover:bg-whiteHover ${
            activeItem == "" && "bg-whiteHover"
          }`}
        >
          ₾ ლარი
        </button>
        <button
          onClick={() => {
            setOpenDialog(false);
            setActiveItem(null);
          }}
          className={`h-[40px] w-full flex justify-center items-center text-textHead transition-colors hover:bg-whiteHover ${
            activeItem == "" && "bg-whiteHover"
          }`}
        >
          $ დოლარი
        </button>
      </div>
    </div>
  );
}
