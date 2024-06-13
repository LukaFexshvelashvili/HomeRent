export default function HoverTitle(props: { title: string; top?: true }) {
  return (
    <div
      className={`tracking-widest font-mainMedium pointer-events-none absolute text-center bg-bodyBg rounded-md px-2 py-1 text-[12px] text-blackMain left-[50%] translate-x-[-50%] ${
        props.top ? "top-[-35px]" : "bottom-[-35px]"
      } z-[3] transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 border-2 border-whiteLoad`}
    >
      {props.title}
    </div>
  );
}
