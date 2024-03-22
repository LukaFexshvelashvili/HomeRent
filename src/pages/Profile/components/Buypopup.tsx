import { useState } from "react";
import { ActiveOffers, TOffer } from "../../../assets/lists/offers";
import DaysDropdown from "../../AddProduct/components/DaysDropdown";
import { PopupCloseIcon } from "../../../assets/icons/Icons";

export default function Buypopup(props: { setPopbuy: Function }) {
  const [status, setStatus] = useState<number>(0);
  const [selectedDays, setSelectedDays] = useState<number>(1);

  let offerData = ActiveOffers.filter((item) => item.status == status)[0];

  return (
    <div className="fixed w-full h-full top-0 left-0 z-10 flex justify-center items-center">
      <div
        onClick={() => props.setPopbuy({ id: null })}
        className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5]"
      >
        {" "}
      </div>
      <div className=" w-[650px] rounded-section bg-whiteMain p-5 relative z-10">
        <button
          onClick={() => props.setPopbuy({ id: null })}
          className="h-[30px] aspect-square  absolute top-3 right-3 flex justify-center items-center p-1"
        >
          <PopupCloseIcon className=" [&>path]:fill-[rgba(0,0,0,0.2)]" />
        </button>
        <div className="w-[550px] mx-auto">
          <h2 className="text-main font-mainBold text-center text-[18px] ">
            VIP ყიდვა
          </h2>
          <p className="text-textDesc  text-center text-[14px] mt-2">
            სტატუსის გაძლიერება განცხადებაზე #18495518
          </p>
          <div className="flex items-center justify-between gap-5 mt-8">
            {ActiveOffers.map(
              (e: TOffer, i: number) =>
                e.status !== 0 && (
                  <div
                    key={i}
                    className=" h-[350px] w-[260px] rounded-section flex justify-between p-3 relative items-center flex-col"
                    style={{ backgroundColor: e.secondColor }}
                  >
                    <div
                      className="absolute h-[30px] w-[120px] rounded-normal font-mainBold text-whiteMain flex items-center justify-center text-Asmall tracking-wider top-0 -translate-y-1/4"
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
                        {e.price !== 0 ? `1 დღე - ${e.price}₾` : "უფასო"}
                      </p>
                      <button
                        className="h-[32px] w-full rounded-md text-Asmall font-mainBold tracking-wider transition-colors "
                        style={{
                          backgroundColor:
                            status == e.status ? "#FFFFFF" : e.mainColor,
                          color: status == e.status ? e.mainColor : "#FFFFFF",
                        }}
                        onClick={() =>
                          e.status !== status
                            ? setStatus(e.status)
                            : setStatus(0)
                        }
                      >
                        {status == e.status ? "არჩეული" : "არჩევა"}
                      </button>
                    </div>
                  </div>
                )
            )}
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
          <button className="block h-[34px] w-[180px] rounded-md bg-main text-buttonText text-[14px] tracking-wider transition-colors hover:bg-mainHover ml-auto mt-5">
            გადახდა
          </button>
        </div>
      </div>
    </div>
  );
}
