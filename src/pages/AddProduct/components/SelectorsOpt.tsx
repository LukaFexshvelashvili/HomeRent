import { useDispatch, useSelector } from "react-redux";
import {
  updateDescription,
  updateTitle,
  updateVip,
} from "../../../store/data/addProductSlice";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/store";
import { ActiveOffers, TOffer } from "../../../assets/lists/offers";

export function EstateTitle(props: { error: boolean }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mobile:flex-col">
        <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
          განცხადების სათაური
        </p>{" "}
        <span className="text-Asmall text-textDescCard ">
          (მაქსიმალური სიგრძე: 30)
        </span>
      </div>
      {title == "" && props.error && (
        <div className=" rounded-xl text-pinkI bg-pinkClear py-3 px-4 text-sm tracking-wider mt-2 text-center">
          {" "}
          სავალდებულოა შეავსოთ სათაურის ველი
        </div>
      )}
      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center mobile:pl-0 ">
        <div className="inputBl relative flex items-center">
          <input
            type="text"
            className="AddProductInputTitle"
            placeholder="მაგ: იყიდება ბინა ზღვასთან"
            max={30}
            maxLength={30}
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= 30) {
                setTitle(e.target.value);
                if (e.target.value == "") {
                  dispatch(updateTitle(null));
                } else {
                  dispatch(updateTitle(e.target.value));
                }
              }
            }}
          />
          <div className="absolute right-3 text-textHead text-[12px] font-mainRegular tracking-wider ">
            {30 - title.length}
          </div>
        </div>
      </div>
    </div>
  );
}
export function EstateDescription() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mobile:flex-col">
        <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
          განცხადების აღწერა
        </p>{" "}
        <span className="text-Asmall text-textDescCard ">
          (მაქსიმალური სიგრძე: 600)
        </span>
      </div>

      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center mobile:pl-0">
        <div className="inputBl relative flex items-center">
          <textarea
            className="AddProductInputTitle textareaInput"
            placeholder="განცხადების აღწერა"
            value={description}
            onChange={(e) => {
              if (e.target.value.length <= 600) {
                setDescription(e.target.value);
                if (e.target.value == "") {
                  dispatch(updateDescription(null));
                } else {
                  dispatch(updateDescription(e.target.value));
                }
              }
            }}
          ></textarea>
          <div className="absolute right-3 bottom-2 text-textHead text-[12px] font-mainRegular tracking-wider ">
            {600 - description.length}
          </div>
        </div>
      </div>
    </div>
  );
}
export function EstateOption() {
  const vipStatus = useSelector(
    (store: RootState) => store.addProduct.estateVip
  );
  const [status, setStatus] = useState<number>(vipStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    setStatus(vipStatus);
  }, [vipStatus]);
  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        შეთავაზება
      </p>
      <div className="flex items-center justify-center gap-5 mt-8 flex-wrap">
        {ActiveOffers.map((e: TOffer, i: number) => (
          <div
            key={i}
            className=" h-[350px] w-[260px] rounded-section flex justify-between p-3 relative items-center flex-col"
            style={{ backgroundColor: e.secondColor }}
          >
            <div
              className="absolute h-[30px] w-[120px] rounded-normal font-mainBold text-buttonText flex items-center justify-center text-Asmall tracking-wider top-0 -translate-y-1/4"
              style={{ backgroundColor: e.mainColor }}
            >
              {e.name}
            </div>
            <div
              className="flex flex-col mt-7
            "
            >
              {e.benefits.map((item: string, index: number) => (
                <div key={index} className="flex flex-col">
                  <p className="text-[13px] tracking-normal font-mainBold text-textDesc text-center">
                    {item}
                  </p>
                  <div
                    className="h-[2px] w-[30px] rounded-md  mx-auto my-2"
                    style={{ backgroundColor: e.lineColor }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p
                className="text-Asmall font-mainBold text-center"
                style={{ color: e.mainColor }}
              >
                {e.price !== 0
                  ? `1 დღე - ${
                      e.sale ? (e.price - e.sale).toFixed(2) : e.price
                    }₾`
                  : "უფასო"}
                {e.sale ? (
                  <span className="  line-through opacity-30 ml-2">
                    {e.price.toFixed(2)}₾
                  </span>
                ) : null}
              </p>
              <button
                className="h-[36px] w-full rounded-md text-Asmall font-mainBold tracking-wider transition-colors"
                style={{
                  backgroundColor: status == e.status ? "#FFFFFF" : e.mainColor,
                  color: status == e.status ? e.mainColor : "#FFFFFF",
                }}
                onClick={() => dispatch(updateVip(e.status))}
              >
                {status == e.status ? "არჩეული" : "არჩევა"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
