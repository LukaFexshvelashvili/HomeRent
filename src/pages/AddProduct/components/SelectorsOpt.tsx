import { useDispatch, useSelector } from "react-redux";
import {
  updateDescription,
  updateTitle,
} from "../../../store/data/addProductSlice";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/store";
import { ActiveOffers, TOffer } from "../../../assets/lists/offers";
import OfferCard from "../../../components/global/OfferCard";

export function EstateTitle(props: {
  error?: boolean;
  setData?: Function;
  defData?: string;
}) {
  const [title, setTitle] = useState(props.defData ? props.defData : "");
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mobile:flex-col">
        <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
          განცხადების სათაური *
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
                if (!props.setData) {
                  if (e.target.value == "") {
                    dispatch(updateTitle(null));
                  } else {
                    dispatch(updateTitle(e.target.value));
                  }
                } else {
                  props.setData(e.target.value);
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
export function EstateDescription(props: {
  setData?: Function;
  defData?: string;
}) {
  const [description, setDescription] = useState(
    props.defData ? props.defData : ""
  );
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
                if (!props.setData) {
                  if (e.target.value == "") {
                    dispatch(updateDescription(null));
                  } else {
                    dispatch(updateDescription(e.target.value));
                  }
                } else {
                  props.setData(e.target.value);
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
          <OfferCard offerData={e} activeStatus={status} key={i} />
        ))}
      </div>
    </div>
  );
}
