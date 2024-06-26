import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setShare } from "../../store/data/popupsSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SharePopup() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>("");
  const shareData = useSelector((store: RootState) => store.popups.share);

  return (
    <div className="fixed w-full h-full top-0 left-0 z-30 flex justify-center items-center">
      <div
        onClick={() => {
          dispatch(setShare({ show: false, link: "" }));
        }}
        className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5]"
      >
        {" "}
      </div>
      <div className=" w-[90%] max-w-[650px]  rounded-section bg-whiteMain p-5 relative z-10">
        <div className="w-[90%] max-w-[550px] mx-auto">
          <h2 className="text-main font-mainBold text-center text-[18px]  mb-4">
            გაზიარება
          </h2>
          <p className="text-textDesc  text-center text-[14px] mt-2">
            ლინკის გაზიარება: ( {shareData.link} )
          </p>

          <div className="flex gap-3 justify-center mt-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareData.link);
                setMessage("ლინკი წარმატებით დაკოპირდა");
              }}
              className="flex justify-center items-center h-[40px] aspect-square rounded-lg bg-main transition-colors hover:bg-mainHover "
            >
              <CopyIcon className=" h-[18px] aspect-square" />
            </button>
            <Link
              to={
                "https://www.facebook.com/sharer/sharer.php?u=" + shareData.link
              }
              target="_blank"
            >
              <button
                onClick={() => {
                  setMessage("");
                }}
                className="flex justify-center items-center h-[40px] aspect-square rounded-lg bg-main transition-colors hover:bg-mainHover "
              >
                <FacebookIcon className=" h-[18px] aspect-square" />
              </button>
            </Link>
            <Link
              to={"http://twitter.com/share?url=" + shareData.link}
              target="_blank"
            >
              <button
                onClick={() => {
                  setMessage("");
                }}
                className="flex justify-center items-center h-[40px] aspect-square rounded-lg bg-main transition-colors hover:bg-mainHover "
              >
                <TwitterIcon className=" h-[18px] aspect-square" />
              </button>
            </Link>{" "}
          </div>
          {message !== "" ? (
            <div className="max-w-full mt-4 w-full h-auto p-3 rounded-lg bg-greenClear text-greenI border-2 border-greenI  flex justify-center items-center text-center text-[14px] tracking-wider font-mainSemiBold">
              {message}
            </div>
          ) : null}
          <div className="flex gap-3 justify-center mt-6">
            <button
              onClick={() => {
                dispatch(setShare({ show: false, link: "" }));
              }}
              className=" bg-mainClear text-[14px] h-[35px] w-[200px] text-main tracking-wider rounded-md block transition-colors hover:bg-mainClearHover"
            >
              დახურვა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export const CopyIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 480" {...props}>
    <path
      fill="var(--buttonText)"
      d="M299 5v43H43v299H0V48q0-18 12.5-30.5T43 5h256zm64 86q17 0 29.5 12.5T405 133v299q0 18-12.5 30.5T363 475H128q-18 0-30.5-12.5T85 432V133q0-17 12.5-29.5T128 91h235zm0 341V133H128v299h235z"
    ></path>
  </svg>
);
export const FacebookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="var(--buttonText)"
      d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.962.962 0 0 1-.975.974h-1.937a.961.961 0 0 1-.963-.974"
    ></path>
  </svg>
);
export const TwitterIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fill="var(--buttonText)"
      d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
    ></path>
  </svg>
);
export const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
    <g
      fill="none"
      stroke="var(--buttonText)"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path>
      <path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z"></path>
      <path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0"></path>
    </g>
  </svg>
);
