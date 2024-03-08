import { useNavigate } from "react-router-dom";

export default function Maclerconditions() {
  const navigate = useNavigate();
  const conditions = [
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
    "უძრავი ქონებას არ ადევს გადამეტებული ფასი",
  ];
  return (
    <main className="min-h-screen mt-[30px]">
      <div className="bg-whiteMain rounded-section shadow-sectionShadow p-7 px-[50px] relative">
        <button
          onClick={() => navigate(-1)}
          className="bg-maclerMainClear flex items-center py-2 px-5 text-[14px] gap-4 text-maclerMain rounded-lg tracking-wider font-mainBold"
        >
          <BackIcon /> უკან
        </button>
        <h1 className="text-[18px] text-maclerMain text-center  font-mainBold">
          მაკლერის სერვისის კრიტერიუმები
        </h1>
        <div className="flex items-start mt-[30px]">
          <div className="flex-1">
            <div className="flex flex-col gap-4 my-5  text-[14px]">
              {conditions.map((e: string, i: number) => (
                <div key={i} className="flex items-center text-textDesc gap-3">
                  <div className="h-[14px] aspect-square rounded-circle border-2 border-maclerMain"></div>{" "}
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <InfoIcon />
          </div>
        </div>
      </div>
    </main>
  );
}
const BackIcon = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999997 8.73205C-0.333336 7.96225 -0.333333 6.03775 1 5.26795L8.5 0.937821C9.83334 0.168021 11.5 1.13027 11.5 2.66987V11.3301C11.5 12.8697 9.83333 13.832 8.5 13.0622L0.999997 8.73205Z"
      fill="#3DBE00"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="294"
    height="294"
    viewBox="0 0 294 294"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_65_1076)">
      <mask
        id="mask0_65_1076"
        maskUnits="userSpaceOnUse"
        x="24"
        y="-132"
        width="413"
        height="396"
      >
        <rect
          x="170.657"
          y="-132"
          width="336"
          height="240"
          transform="rotate(37.6669 170.657 -132)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_65_1076)">
        <circle cx="147" cy="147" r="147" fill="#3DBE00" fillOpacity="0.3" />
      </g>
      <circle cx="147" cy="147" r="147" fill="#3DBE00" fillOpacity="0.1" />
      <rect x="137" y="106" width="20" height="110" rx="4" fill="#3DBE00" />
      <rect x="137" y="78" width="20" height="20" rx="4" fill="#3DBE00" />
    </g>
    <defs>
      <clipPath id="clip0_65_1076">
        <rect width="294" height="294" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
