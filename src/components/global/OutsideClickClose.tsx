import { ReactElement, useEffect, useRef } from "react";

export function OutsideClickClose({
  activePop,
  children,
  setActivePop,
}: {
  activePop: boolean;
  children: ReactElement;
  setActivePop: Function;
}) {
  const popupBlock = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        popupBlock.current &&
        !popupBlock.current.contains(event.target) &&
        activePop == true
      ) {
        setActivePop(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    if (activePop == false) {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupBlock, activePop]);
  return <div ref={popupBlock}>{children}</div>;
}
