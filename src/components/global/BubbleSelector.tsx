import { useEffect, useMemo, useState } from "react";

export default function BubbleSelector(props: {
  itemList: any[];
  setData?: Function;
}) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const items = useMemo(() => [...props.itemList], []);
  useEffect(() => {
    if (props.setData) {
      props.setData(activeItem);
    }
  }, [activeItem]);

  return (
    <div className="relative flex gap-3 flex-wrap justify-end w-full mobile:justify-center">
      {items.map((e: string, i: number) => (
        <button
          className={` border-2 border-main rounded-2xl px-4 py-2 cursor-pointer tracking-wide text-[14px] transition-colors ${
            activeItem === e
              ? "bg-main text-buttonText "
              : "bg-mainClear text-main "
          }`}
          onClick={() => {
            if (activeItem == e) {
              setActiveItem(null);
            } else {
              setActiveItem(e);
            }
          }}
          key={i}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
