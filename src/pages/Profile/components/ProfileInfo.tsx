import { useSelector } from "react-redux";
import { Tuser } from "../../../store/data/userSlice";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosCall from "../../../hooks/axiosCall";
import { ActiveOffers } from "../../../assets/lists/offers";

type TuserInfo = {
  title: string;
  value: string;
};

type TuserCardInfoPayments = {
  id: number;
  before_pay: number;
  price: number;
  payment_date: string;
  payment_for: string;
  status: number;
  success: number;
};
type TuserCardInfo = {
  products_count: number;
  user_money: number;
  total_payed: number;
  payments: TuserCardInfoPayments[];
};
export default function ProfileInfo() {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const [data, setData] = useState<null | TuserCardInfo>(null);
  if (user.isLogged == false) {
    navigate("/Login");
  }
  if (user.isLogged == null) {
    return null;
  }
  useEffect(() => {
    axiosCall
      .get("user/info", { withCredentials: true })
      .then((res) => setData(res.data));
  }, []);

  const userInfo: TuserInfo[] = [
    { title: "სახელი", value: user.name },
    { title: "გვარი", value: user.surname },
    { title: "მეილი", value: user.mail?.slice(0, 6) + "***" },
    {
      title: "ტელეფონის ნომერი",
      value: user.mobile ? user.mobile.slice(0, 6) + "***" : "დამატება",
    },
  ];
  return (
    <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex gap-6 flex-col  px-7 py-5 ">
      <h2 className="text-textHeadCard">ინფორმაცია</h2>
      <div className="flex items-center gap-3 flex-wrap small:justify-center ">
        {userInfo.map((e: TuserInfo, i: number) => (
          <div
            key={i}
            className=" bg-profileInfoBlock rounded-md flex flex-col justify-center px-3 h-[45px] min-w-[120px]"
          >
            <p className=" text-[11px] text-profileInfoBlockHeader font-mainSemiBold  ">
              {e.title}
            </p>
            <p className=" text-[12px] text-profileInfoBlockHeader font-mainBold ml-1 ">
              {e.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4  flex-wrap justify-center">
        <div className="h-[50px] w-[270px] productsBg rounded-lg flex flex-col justify-center px-3 ">
          <p className=" text-[13px] text-[rgba(255,255,255,0.9)] leading-[15px] font-mainBold tracking-wider">
            განცხადებების რაოდენობა
          </p>
          <p className=" text-[15px] text-[rgb(255,255,255)] leading-[15px] font-mainBold ml-auto">
            {data?.products_count ? data.products_count : "..."}
          </p>
        </div>
        <div className="h-[50px] w-[270px] balanceBg rounded-lg flex flex-col justify-center px-3 ">
          <p className=" text-[13px] text-[rgba(255,255,255,0.9)] leading-[15px] font-mainBold tracking-wider">
            ბალანსი
          </p>
          <p className=" text-[15px] text-[rgb(255,255,255)] leading-[15px] font-mainBold ml-auto">
            {data?.user_money
              ? (data.user_money / 100)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "₾"
              : "..."}
          </p>
        </div>
        <div className="h-[50px] w-[270px] spentMoneyBg rounded-lg flex flex-col justify-center px-3 ">
          <p className=" text-[13px] text-[rgba(255,255,255,0.9)] leading-[15px] font-mainBold tracking-wider">
            დახარჯული თანხა
          </p>
          <p className=" text-[15px] text-[rgb(255,255,255)] leading-[15px] font-mainBold ml-auto">
            {data?.total_payed
              ? (data.total_payed / 100)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "₾"
              : "..."}
          </p>
        </div>
      </div>
      <p className=" text-[14px] text-textDesc">
        ანგარიშის შექმნის თარიღი:{" "}
        <span className="text-textHead">{user.create_date?.split(" ")[0]}</span>
      </p>

      <h2 className=" text-[16px] text-textHead text-center">
        გადახდების ისტორია
      </h2>
      <div className="h-[2px] w-[50px] bg-lineBg mx-auto"></div>

      <div className="flex flex-col">
        <div className="flex [&>div]:text-textDesc [&>div]:text-[14px] mb-3">
          <div className=" w-1/12">ID</div>
          <div className=" w-4/12">გადახდილი თანხა</div>
          <div className=" w-4/12">გააქტიურდა</div>
          <div className=" w-3/12">თარიღი</div>
        </div>
        {data?.payments
          ? data.payments.map((e: TuserCardInfoPayments) => (
              <PaymentCard key={e.id} paymentData={e} />
            ))
          : "იტვირთება"}
      </div>
    </div>
  );
}

function PaymentCard({ paymentData }: { paymentData: TuserCardInfoPayments }) {
  const color = ActiveOffers.filter(
    (item) => item.name == paymentData.payment_for
  )[0].mainColor;
  return (
    <div className="flex [&>div]:text-textDesc [&>div]:text-[14px]">
      <div className=" w-1/12">{paymentData.id}</div>
      <div className=" w-4/12">
        <p className="text-main">
          {(paymentData.price / 100)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "₾"}
        </p>
      </div>
      <div className=" w-4/12" style={{ color: color ? color : "" }}>
        {paymentData.payment_for}
      </div>
      <div className=" w-3/12">{paymentData.payment_date}</div>
    </div>
  );
}
