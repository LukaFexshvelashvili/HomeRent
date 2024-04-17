import { useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";
import { RealEstateTypes, TRealEstateTypes } from "./FiltersArray";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { deleteParams, updateParams } from "../../../hooks/routerHooks";

export function SelectNumbers(props: {
  name?: string;
  setData?: Function;
  setDataDispatch?: Function;
  changeParams?: boolean;
  engName?: string;
}) {
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const [active, setActive] = useState(-1);
  const Length = [0, 1, 2, 3, 4, 5, 6, 7, 7];
  useEffect(() => {
    if (props.setDataDispatch) {
      dispatch(props.setDataDispatch(active));
    }
  }, [active]);
  const changeProps = (newActive: number) => {
    if (props.engName && props.changeParams && active !== newActive) {
      let newProp: any = {};
      newProp[props.engName] = newActive;
      updateParams(params, setParams, newProp);
      setActive(newActive);
    } else if (props.engName && props.changeParams && active == newActive) {
      deleteParams(params, setParams, props.engName);
      setActive(-1);
    } else {
      setActive(newActive);
    }
  };

  useEffect(() => {
    if (props.engName) {
      const searchType = params.get(props.engName);
      if (searchType) {
        setActive(parseInt(searchType));
      }
    }
  }, []);
  return (
    <div className="flex flex-col items-center">
      {props.name && (
        <p className=" text-textHead tracking-wider font-mainBold  mb-4">
          {props.name}
        </p>
      )}
      <div className="flex gap-3 flex-wrap justify-center">
        {Length.map((e, i) => (
          <button
            key={i}
            onClick={() => changeProps(i)}
            className={` h-[36px] text-[15px] aspect-square rounded-circle flex justify-center items-center transition-colors ${
              active == i ? "bg-main text-buttonText" : "bg-mainClear text-main"
            }`}
          >
            {Length.length - 1 !== i ? e : `${e}+`}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SelectType() {
  const [active, setActive] = useState<null | number>(null);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const searchType = params.get("type");
    if (searchType) {
      setActive(parseInt(searchType));
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className=" text-textHead tracking-wider font-mainBold ">ტიპი</p>
      <div className="flex gap-3 flex-wrap justify-center mt-4">
        {RealEstateTypes.map((e, i) => (
          <button
            key={i}
            onClick={() => {
              if (active == i) {
                setActive(null);
                deleteParams(params, setParams, "type");
              } else {
                setActive(i);
                updateParams(params, setParams, { type: i });
              }
            }}
            className={`  p-2 px-4 rounded-xl transition-colors ${
              active == i ? "bg-main" : "bg-mainClear"
            }`}
          >
            <e.icon
              className={` h-[24px] aspect-square ${
                active == i && "[&>path]:fill-buttonText"
              } `}
            />
            <p
              className={`text-Asmall ml-7 tracking-wide ${
                active == i ? "text-buttonText" : "text-main"
              }`}
            >
              {e.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export function PriceSlider(props: { setData?: Function }) {
  const [params, setParams] = useSearchParams();
  const startCounting = useRef<boolean>(false);

  useEffect(() => {
    const searchPrices = params.get("prices");
    if (searchPrices) {
      const getSearchPrices = JSON.parse(searchPrices);
      setPrices([getSearchPrices.start, getSearchPrices.end]);
      setPricesPercentages([
        getSearchPrices.start / (priceDistance[1] / 100),
        getSearchPrices.end / (priceDistance[1] / 100),
      ]);
    }
  }, []);

  const [PricesPercentages, setPricesPercentages] = useState<number[]>([
    0, 100,
  ]);
  const [Prices, setPrices] = useState<number[]>([0, 0]);
  const priceDistance = [20000, 80000];
  const priceGap = 5000;
  useEffect(() => {
    if (startCounting.current) {
      setPrices([
        Math.floor((priceDistance[1] / 100) * PricesPercentages[0]),
        Math.floor((priceDistance[1] / 100) * PricesPercentages[1]),
      ]);
      updateParams(params, setParams, {
        prices: JSON.stringify({
          start: Math.floor((priceDistance[1] / 100) * PricesPercentages[0]),
          end: Math.floor((priceDistance[1] / 100) * PricesPercentages[1]),
          currency: 0,
        }),
      });

      if (props.setData) {
        props.setData([Prices[0], Prices[1]]);
      }
    }
  }, [PricesPercentages]);
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto">
      <p className=" text-textHead tracking-wider font-mainBold ">ფასი</p>
      <div className="h-[30px] w-[70px] flex items-center absolute top-0 right-0 outline outline-2 -outline-offset-2 outline-borderCol1 rounded-lg text-textDescCard cursor-pointer">
        <div className="flex-1 h-full flex items-center justify-center">₾</div>
        <div className="flex-1 h-full flex items-center justify-center text-buttonText bg-main rounded-lg relative">
          $
        </div>
      </div>
      <ReactSlider
        className="horizontal-slider w-full mt-6 flex items-center h-3"
        thumbClassName="example-thumb thumbSlider"
        trackClassName="example-track bg-whiteLoad h-[5px] rounded-md"
        defaultValue={[PricesPercentages[0], PricesPercentages[1]]}
        value={[PricesPercentages[0], PricesPercentages[1]]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        onChange={(state) => {
          setPricesPercentages(state);
          startCounting.current = true;
        }}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={10}
      />
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput text-textHeadCard px-3 outline-none transition-colors focus:bg-LoginInputActive text-[15px]"
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
          <p className="text-Asmall ml-2 text-textDesc">$ -დან</p>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput text-textHeadCard px-3 outline-none transition-colors focus:bg-LoginInputActive text-[15px]"
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
          <p className="text-Asmall ml-2 text-textDesc">$ -მდე</p>
        </div>
      </div>
    </div>
  );
}
export function SizeSlider(props: { setData?: Function }) {
  const [params, setParams] = useSearchParams();
  const startCounting = useRef<boolean>(false);

  useEffect(() => {
    const searchSizes = params.get("sizes");

    if (searchSizes) {
      const getSearchSizes = JSON.parse(searchSizes);
      setPrices([getSearchSizes[0], getSearchSizes[1]]);
      setPricesPercentages([
        getSearchSizes[0] / (priceDistance[1] / 100),
        getSearchSizes[1] / (priceDistance[1] / 100),
      ]);
    }
  }, []);
  const [PricesPercentages, setPricesPercentages] = useState<number[]>([
    0, 100,
  ]);
  const [Prices, setPrices] = useState<number[]>([0, 0]);
  const priceDistance = [50, 500];
  const priceGap = 5;
  useEffect(() => {
    if (startCounting.current) {
      setPrices([
        Math.floor((priceDistance[1] / 100) * PricesPercentages[0]),
        Math.floor((priceDistance[1] / 100) * PricesPercentages[1]),
      ]);

      updateParams(params, setParams, {
        sizes: JSON.stringify([
          Math.floor((priceDistance[1] / 100) * PricesPercentages[0]),
          Math.floor((priceDistance[1] / 100) * PricesPercentages[1]),
        ]),
      });
      if (props.setData) {
        props.setData([Prices[0], Prices[1]]);
      }
    }
  }, [PricesPercentages]);
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto">
      <p className=" text-textHead tracking-wider font-mainBold ">
        კვადრატულობა
      </p>

      <ReactSlider
        className="horizontal-slider w-full mt-4 flex items-center h-3"
        thumbClassName="example-thumb thumbSlider"
        trackClassName="example-track bg-whiteLoad h-[5px] rounded-md"
        defaultValue={[PricesPercentages[0], PricesPercentages[1]]}
        value={[PricesPercentages[0], PricesPercentages[1]]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        onChange={(state) => {
          setPricesPercentages(state);
          startCounting.current = true;
        }}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={10}
      />
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center">
          <input
            type="number"
            className="h-[30px] w-[100px] rounded-md bg-LoginInput text-textHeadCard px-3 outline-none transition-colors focus:bg-LoginInputActive text-[15px]"
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
            className="h-[30px] w-[100px] rounded-md bg-LoginInput  text-textHeadCard px-3 outline-none transition-colors focus:bg-LoginInputActive text-[15px]"
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
    </div>
  );
}
