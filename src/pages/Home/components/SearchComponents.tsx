import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { currencyConvertor } from "../../../components/convertors/convertors";
import { projectDealTypes } from "../../../assets/lists/productAddons";
import { RealEstateTypes } from "../../Search/components/FiltersArray";

export function InputSizeSlider(props: {
  setData: Function;
  closeWindow: Function;
  toFull?: boolean;
}) {
  const [PricesPercentages, setPricesPercentages] = useState<number[]>([
    0, 100,
  ]);
  const [Prices, setPrices] = useState<number[]>([0, 0]);
  const priceDistance = [10, 500000];
  const priceGap = 5;
  useEffect(() => {
    setPrices([
      Math.floor((priceDistance[1] / 100) * PricesPercentages[0]),
      Math.floor((priceDistance[1] / 100) * PricesPercentages[1]),
    ]);
  }, [PricesPercentages]);

  return (
    <div
      className={`flex flex-col items-center relative  mx-auto ${
        props.toFull ? "w-full max-w-[900px]" : "w-10/12"
      }`}
    >
      <ReactSlider
        className="horizontal-slider w-full mt-4 flex items-center h-3"
        thumbClassName="example-thumb thumbSlider"
        trackClassName="example-track bg-whiteLoad h-[5px] rounded-md"
        defaultValue={[PricesPercentages[0], PricesPercentages[1]]}
        value={[PricesPercentages[0], PricesPercentages[1]]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        onChange={(state) => setPricesPercentages(state)}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={2}
      />
      <div className="flex items-center gap-6 mt-4 mobile:flex-wrap">
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput px-3 outline-none transition-colors text-textHeadCard focus:bg-LoginInputActive text-[15px]"
            onChange={(e) => {
              if (
                e.target.valueAsNumber <= priceDistance[1] &&
                e.target.valueAsNumber >= priceDistance[0] &&
                e.target.valueAsNumber - priceGap < Prices[1]
              ) {
                setPricesPercentages([
                  e.target.valueAsNumber / (priceDistance[1] / 100),
                  PricesPercentages[1],
                ]);
              }
              setPrices([
                e.target.value == ""
                  ? 0
                  : Math.floor(e.target.valueAsNumber) < 0
                  ? 0
                  : Math.floor(e.target.valueAsNumber),
                Prices[1],
              ]);
            }}
            onBlur={(e) => {
              if (
                e.target.valueAsNumber - priceGap > Prices[1] ||
                e.target.valueAsNumber > priceDistance[1]
              ) {
                setPrices([
                  (priceDistance[1] / 100) * PricesPercentages[0],
                  (priceDistance[1] / 100) * PricesPercentages[1],
                ]);
              }
            }}
            value={Prices[0]}
          />
          <p className="text-Asmall ml-2 text-textDesc">მ² -დან</p>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput px-3 outline-none text-textHeadCard transition-colors focus:bg-LoginInputActive text-[15px]"
            onChange={(e) => {
              setPrices([
                Prices[0],
                e.target.value == ""
                  ? 0
                  : Math.floor(e.target.valueAsNumber) < 0
                  ? 0
                  : Math.floor(e.target.valueAsNumber),
              ]);
              if (
                e.target.valueAsNumber <= priceDistance[1] &&
                e.target.valueAsNumber >= priceDistance[0] &&
                e.target.valueAsNumber - priceGap > Prices[0]
              ) {
                setPricesPercentages([
                  PricesPercentages[0],

                  e.target.valueAsNumber / (priceDistance[1] / 100),
                ]);
              }
            }}
            onBlur={(e) => {
              if (
                e.target.valueAsNumber - priceGap < Prices[0] ||
                e.target.valueAsNumber > priceDistance[1]
              ) {
                setPrices([
                  (priceDistance[1] / 100) * PricesPercentages[0],
                  (priceDistance[1] / 100) * PricesPercentages[1],
                ]);
              }
            }}
            value={Prices[1]}
          />
          <p className="text-Asmall ml-2 text-textDesc">მ² -მდე</p>
        </div>
      </div>
      <button
        onClick={() => {
          props.setData([Prices[0], Prices[1]]);
          props.closeWindow(null);
        }}
        className="my-1 mt-6 rounded-md bg-main px-8 py-2 text-buttonText tracking-wider transition-colors hover:bg-mainHover"
      >
        დადასტურება
      </button>
    </div>
  );
}
export function InputPriceSlider(props: {
  setData: Function;
  closeWindow: Function;
  toFull?: boolean;
}) {
  const [PricesPercentages, setPricesPercentages] = useState<number[]>([
    0, 100,
  ]);
  const [Prices, setPrices] = useState<number[]>([0, 0]);
  const [currency, setCurrency] = useState<number>(0);
  const priceDistance = [0, 1000000];
  const priceGap = 5000;
  useEffect(() => {
    setPrices([
      Math.floor((priceDistance[1] / 100) * PricesPercentages[0]),
      Math.floor((priceDistance[1] / 100) * PricesPercentages[1]),
    ]);
  }, [PricesPercentages]);

  const changeCurrency = (newCurrency: number) => {
    setCurrency(newCurrency);
    setPrices([
      currencyConvertor(Prices[0], currency),
      currencyConvertor(Prices[1], currency),
    ]);
  };
  return (
    <div
      className={`flex flex-col items-center relative  mx-auto ${
        props.toFull ? "w-full max-w-[900px]" : "w-10/12"
      }`}
    >
      <div
        onClick={() => changeCurrency(currency == 0 ? 1 : 0)}
        className={`h-[30px] w-[70px] flex items-center absolute select-none ${
          props.toFull ? "mt-2" : ""
        }  top-0 right-0 outline outline-2 -outline-offset-2 outline-borderCol1 rounded-lg  text-textDescCard cursor-pointer`}
      >
        <div
          className={`flex-1 transition-all h-full flex items-center justify-center font-mainRegular ${
            currency == 0 ? "" : "text-buttonText bg-main rounded-lg relative"
          } `}
        >
          ₾
        </div>
        <div
          className={`flex-1 transition-all h-full flex items-center justify-center font-mainRegular ${
            currency == 0 ? "text-buttonText bg-main rounded-lg relative" : ""
          }`}
        >
          $
        </div>
      </div>
      <ReactSlider
        className="horizontal-slider w-full mt-[50px] flex items-center h-3"
        thumbClassName="example-thumb thumbSlider"
        trackClassName="example-track bg-whiteLoad h-[5px] rounded-md"
        defaultValue={[PricesPercentages[0], PricesPercentages[1]]}
        value={[PricesPercentages[0], PricesPercentages[1]]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        onChange={(state) => setPricesPercentages(state)}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={5}
      />
      <div className="flex items-center gap-6 mt-4 mobileTab:flex-wrap ">
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput px-3 outline-none transition-colors text-textHeadCard focus:bg-LoginInputActive text-[15px]"
            onChange={(e) => {
              if (
                e.target.valueAsNumber <= priceDistance[1] &&
                e.target.valueAsNumber >= priceDistance[0] &&
                e.target.valueAsNumber - priceGap < Prices[1]
              ) {
                setPricesPercentages([
                  e.target.valueAsNumber / (priceDistance[1] / 100),
                  PricesPercentages[1],
                ]);
              }
              setPrices([
                e.target.value == ""
                  ? 0
                  : Math.floor(e.target.valueAsNumber) < 0
                  ? 0
                  : Math.floor(e.target.valueAsNumber),
                Prices[1],
              ]);
            }}
            onBlur={(e) => {
              if (
                e.target.valueAsNumber - priceGap > Prices[1] ||
                e.target.valueAsNumber > priceDistance[1]
              ) {
                setPrices([
                  (priceDistance[1] / 100) * PricesPercentages[0],
                  (priceDistance[1] / 100) * PricesPercentages[1],
                ]);
              }
            }}
            value={Prices[0]}
          />
          <p className="text-Asmall ml-2 text-textDesc">
            {currency == 0 ? "$" : "₾"} -დან
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput px-3 outline-none transition-colors text-textHeadCard focus:bg-LoginInputActive text-[15px]"
            onChange={(e) => {
              setPrices([
                Prices[0],
                e.target.value == ""
                  ? 0
                  : Math.floor(e.target.valueAsNumber) < 0
                  ? 0
                  : Math.floor(e.target.valueAsNumber),
              ]);
              if (
                e.target.valueAsNumber <= priceDistance[1] &&
                e.target.valueAsNumber >= priceDistance[0] &&
                e.target.valueAsNumber - priceGap > Prices[0]
              ) {
                setPricesPercentages([
                  PricesPercentages[0],

                  e.target.valueAsNumber / (priceDistance[1] / 100),
                ]);
              }
            }}
            onBlur={(e) => {
              if (
                e.target.valueAsNumber - priceGap < Prices[0] ||
                e.target.valueAsNumber > priceDistance[1]
              ) {
                setPrices([
                  (priceDistance[1] / 100) * PricesPercentages[0],
                  (priceDistance[1] / 100) * PricesPercentages[1],
                ]);
              }
            }}
            value={Prices[1]}
          />
          <p className="text-Asmall ml-2 text-textDesc">
            {currency == 0 ? "$" : "₾"} -მდე
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          props.setData({
            start: Prices[0],
            end: Prices[1],
            currency: currency,
          });
          props.closeWindow(null);
        }}
        className="my-1 mt-6 rounded-md bg-main px-8 py-2 text-buttonText tracking-wider transition-colors hover:bg-mainHover"
      >
        დადასტურება
      </button>
    </div>
  );
}
export function ProjectDealSelectorSearch(props: { setData: Function }) {
  const [active, setActive] = useState<null | number>(null);

  return (
    <>
      {projectDealTypes.map((e: string, i: number) => (
        <button
          key={i}
          onClick={() => {
            if (active == i) {
              props.setData(null);

              setActive(null);
            } else {
              props.setData(i);
              setActive(i);
            }
          }}
          className={`  p-2 px-4 rounded-xl transition-colors ${
            active == i ? "bg-main" : "bg-mainClear"
          }`}
        >
          <p
            className={`text-Asmall tracking-wide ${
              active == i ? "text-buttonText" : "text-main"
            }`}
          >
            {e}
          </p>
        </button>
      ))}
    </>
  );
}

// export function ProjectTypeSelectorSearch(props: { setData: Function }) {
//   const [active, setActive] = useState<null | number>(null);

//   return (
//     <>
//     <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center">
//         {RealEstateTypes.map((e, i) => (
//           <button
//           key={i}
//           onClick={() => {
//             if (active == i) {
//               props.setData(null);

//               setActive(null);
//             } else {
//               props.setData(i);
//               setActive(i);
//             }
//           }}
//             className={`  p-2 px-4 rounded-xl transition-colors ${
//               active == i ? "bg-main" : "bg-mainClear"
//             }`}
//           >
//             <e.icon
//               className={` h-[24px] aspect-square ${
//                 active == i && "[&>path]:fill-buttonText"
//               } `}
//             />
//             <p
//               className={`text-Asmall ml-7 tracking-wide ${
//                 active == i ? "text-buttonText" : "text-main"
//               }`}
//             >
//               {e.name}
//             </p>
//           </button>
//         ))}
//       </div>

//     </>
//   );
// }
