import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ImageLoaderIcon,
  RoomIcon,
  SquareFrameIcon,
} from "../../../assets/icons/Icons";
import { ActiveOffers, TOffer } from "../../../assets/lists/offers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import numeral from "numeral";
import { updateVip } from "../../../store/data/addProductSlice";
import DaysDropdown from "./DaysDropdown";
import { submitProduct } from "./Selectors";

export default function EstateConfirm(props: {
  setShowError: Function;
  setAlertBlock: Function;
  setUploadStatus: Function;
}) {
  const data = useSelector((state: RootState) => state.addProduct);
  const dispatch = useDispatch();
  const vipStatus = useSelector(
    (store: RootState) => store.addProduct.estateVip
  );
  const [activeOffer, setActiveOffer] = useState<number>(vipStatus);
  const [selectedDays, setSelectedDays] = useState<number>(1);

  useEffect(() => {
    setActiveOffer(vipStatus);
  }, [vipStatus]);

  let offerData = ActiveOffers.filter((item) => item.id == activeOffer)[0];
  let sendAddress = {
    city: data.estateCity,
    address: data.estateAddress,
    exactAddress: data.estateExactAddress,
  };
  return (
    <>
      <div className="p-4">
        <div className=" flex flex-col items-center justify-center">
          <CardExample
            rooms={data.estateRooms}
            image={data.estateActiveImage}
            price={data.estatePrice}
            size={data.estateSize}
            currency={data.estateCurrency}
            address={sendAddress}
          />
          <p className=" text-Asmall text-textDesc mt-3">ბარათის ვიზუალი</p>
        </div>
        <div className="flex gap-2 items-center mt-5">
          {ActiveOffers.map((e: TOffer, i: number) => (
            <div
              key={i}
              onClick={() => dispatch(updateVip(e.id))}
              className="text-Asmall h-[30px] w-[80px] flex items-center justify-center cursor-pointer rounded-md transition-colors"
              style={{
                backgroundColor:
                  activeOffer == e.id ? e.mainColor : e.secondColor,
                color: activeOffer == e.id ? "#FFFFFF" : e.mainColor,
              }}
            >
              {e.name}
            </div>
          ))}
        </div>
        {offerData.status !== 0 && (
          <DaysDropdown
            offerData={offerData}
            value={selectedDays}
            setValue={setSelectedDays}
          />
        )}
        <div className="flex justify-between mt-6">
          <p className="text-Asmall text-textDesc font-mainMedium">სტატუსი</p>

          <p className="text-Asmall" style={{ color: offerData.mainColor }}>
            {offerData.name}
          </p>
        </div>
        {offerData.status !== 0 && (
          <>
            <div className="h-1 w-[50px] rounded-md bg-mainClear mx-auto my-2"></div>

            <div className="flex items-center justify-between font-mainBold rounded-lg mt-1">
              <p className=" text-textDesc font-mainMedium">ფასი</p>

              <p className=" text-main">{offerData.price * selectedDays}₾</p>
            </div>
          </>
        )}
        <button
          onClick={() => {
            submitProduct(
              data,
              props.setShowError,
              props.setUploadStatus,
              props.setAlertBlock
            );
          }}
          className="h-[42px] w-full rounded-md bg-main text-buttonText tracking-wider text-[15px] transition-colors mt-3 hover:bg-mainHover"
        >
          გამოქვეყნება
        </button>
      </div>
    </>
  );
}
export function CardExample(props: {
  autoWidth?: boolean;
  image?: string | null;
  price?: number | null;
  size?: number | null;
  rooms?: number | null;
  currency: number;
  address: {
    city: string | null;
    address: string | null;
    exactAddress: string | null;
  };
}) {
  const getSizePrice = () => {
    if (props.size && props.size > 0 && props.price && props.price > 0) {
      let calc = props.size > 0 && props.price > 0 && props.price / props.size;
      return calc && Math.floor(calc);
    } else {
      return 0;
    }
  };
  return (
    <div
      className={`h-auto   ${
        props.autoWidth ? "w-full" : "w-[290px]"
      } bg-whiteMain border-2 border-cardBorder rounded-normal p-3 pb-14 relative medium:w-[260px]`}
    >
      <div className="w-full h-[240px] medium:h-[200px] rounded-normal bg-whiteLoad relative overflow-hidden flex justify-center items-center">
        <div className="absolute h-[25px] w-[60px]  select-none bg-redI rounded-md flex items-center justify-center text-Asmaller font-mainBold text-buttonText tracking-wider cursor-default top-2 right-2 z-[3]">
          VIP+
        </div>
        {props.image ? (
          <img
            src={props.image}
            className="absolute h-full w-full object-cover top-0 left-0 select-none"
            alt="estate-photo"
          />
        ) : (
          <ImageLoaderIcon className="h-[100px] [&>path]:fill-[var(--skeleton6)]" />
        )}
        <div className="absolute bottom-2 left-2 flex items center gap-2">
          <div className="bg-cardInfoBg backdrop-blur-[2px] rounded-[3px] flex justify-center items-center px-2 py-[6px] text-WhiteFade font-mainSemiBold text-sm">
            <RoomIcon className="h-[18px] mr-3 [&>path]:fill-WhiteFade" />{" "}
            {props.rooms && props.rooms}
          </div>
          <div className="bg-cardInfoBg backdrop-blur-[2px] rounded-[3px] flex justify-center items-center px-2 py-[6px] text-WhiteFade font-mainSemiBold text-sm">
            <SquareFrameIcon className="h-[18px] mr-3 [&>path]:stroke-WhiteFade" />{" "}
            92მ²
          </div>
        </div>
      </div>
      <div className="flex flex-col py-1">
        <h2 className="text-textHeadCard font-mainBold">ვაკე რეზიდენსი</h2>
        <p className="text-textDescCard text-Asmall font-mainRegular">
          {props.address.city &&
            props.address.city +
              `${props.address.address ? ", " + props.address.address : ""}`}
        </p>
      </div>
      <div className="flex items-center mt-2 bottom-3 w-full absolute left-0 px-3">
        <div className="bg-mainClear text-main w-[120px] h-[30px] flex justify-center items-center rounded-lg">
          {props.price &&
            numeral(Math.floor(props.price)).format("0,0").replace(/,/g, " ")}
          {props.currency == 0 ? "$" : props.currency == 1 && "₾"}
        </div>
        <p className="text-textDescCard text-Asmall mx-3 ">
          მ² - {getSizePrice()}
          {props.currency == 0 ? "$" : props.currency == 1 && "₾"}
        </p>
        <button className="p-[5px] rounded-md absolute right-3">
          <BookmarkIcon
            className={`h-[20px]  transition-all [&>path]:stroke-navIcon`}
          />
        </button>
      </div>
    </div>
  );
}
