import { useDispatch, useSelector } from "react-redux";
import { Tuser, updateUserInfo } from "../../../store/data/userSlice";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import axiosCall from "../../../hooks/axiosCall";
import { ActiveOffers } from "../../../assets/lists/offers";
import { Helmet } from "react-helmet";
import HoverTitle from "../../../components/global/HoverTitle";
import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PopupCloseIcon,
} from "../../../assets/icons/Icons";
import CryptoJS from "crypto-js";
import ContentLoader from "../../../components/global/ContentLoader";
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
  const [editInfo, setEditInfo] = useState<boolean>(false);
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
    <>
      <Helmet>
        <title>ჩემი ინფორმაცია - OnHome</title>
      </Helmet>
      {editInfo ? (
        <EditInfoBlock open={editInfo} close={() => setEditInfo(false)} />
      ) : null}
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
          <button
            onClick={() => setEditInfo((state) => !state)}
            className="group relative h-[45px] aspect-square flex justify-center items-center rounded-[5px] bg-mainClear cursor-pointer transition-colors hover:bg-mainClearHover"
          >
            <EditIcon className=" h-[22px] aspect-square [&>path]:fill-main" />
            <HoverTitle title="რედაქტირება" />
          </button>
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
          <span className="text-textHead">
            {user.create_date?.split(" ")[0]}
          </span>
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
          <div className="overflow-auto max-h-[300px]">
            {data?.payments
              ? data.payments.map((e: TuserCardInfoPayments) => (
                  <PaymentCard key={e.id} paymentData={e} />
                ))
              : "იტვირთება"}
          </div>
        </div>
      </div>
    </>
  );
}

function EditInfoBlock(props: { open: boolean; close: Function }) {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const [phase, setPhase] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const mail = useRef<HTMLInputElement | null>(null);

  const checkMail = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (mail.current) {
      if (mail.current.value == user.mail) {
        setPhase(1);
      } else {
        setError("მითითებული მეილი არ ემთხვევა თქვენი ანგარიშის მეილს");
      }
    }
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 z-30 flex justify-center items-center pointer-events-all">
      <div
        onClick={() => props.close()}
        className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5] "
      ></div>
      <div
        className={`noScrollBar max-w-[1000px] w-[96%] flex  flex-col justify-center items-center max-h-[90%] overflow-auto min-h-[200px] rounded-section bg-whiteMain p-5 relative z-10`}
      >
        <button
          onClick={() => props.close()}
          className="h-[30px] aspect-square  absolute top-3 right-3 flex justify-center items-center p-1"
        >
          <PopupCloseIcon className="h-[16px] [&>path]:fill-mainBlack" />
        </button>
        {error !== "" && (
          <div className="max-w-full w-full mt-6 mb-3 h-auto p-3 rounded-lg bg-pinkClear text-pinkI border-2 border-pinkI  flex justify-center items-center text-center text-[14px] tracking-wider font-mainSemiBold">
            {error}
          </div>
        )}
        {phase == 0 ? (
          <>
            <p className="text-textDesc text-center">შეიყვანეთ თქვენი მეილი</p>
            <form
              onSubmit={checkMail}
              className="flex flex-col justify-center items-center mt-10 gap-7"
            >
              <input
                ref={mail}
                type="text"
                name="mail"
                className="AddProductInputTitle"
                placeholder={user.mail?.slice(0, 6) + "***"}
              />
              <button className="DefButton block">კოდის გაგზავნა</button>
            </form>
          </>
        ) : user.mail && phase == 1 ? (
          <SubmitMailCode
            setPhase={setPhase}
            mail={user.mail}
            setError={setError}
          />
        ) : phase == 2 ? (
          <ChangeUserInfo setError={setError} close={props.close} />
        ) : null}
      </div>
    </div>
  );
}

function ChangeUserInfo(props: { setError: Function; close: Function }) {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState<boolean>(true);
  const [status, setStatus] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  useEffect(() => {
    setLoader(false);

    setName(user.name);
    setSurname(user.surname);
    setMobile(`${user.mobile}`);
  }, []);
  const handleForm = (e: FormEvent) => {
    setLoader(true);

    e.preventDefault();
    if (
      name !== "" &&
      surname !== "" &&
      mobile !== "" &&
      name.length > 1 &&
      surname.length > 1 &&
      mobile.length > 8
    ) {
      axiosCall
        .post(
          "user/update_user.php",
          {
            name: name,
            surname: surname,
            mobile: mobile,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          setLoader(false);
          setStatus(res.data.status);
          if (res.data.status) {
            dispatch(
              updateUserInfo({
                name: name,
                surname: surname,
                mobile: mobile,
              })
            );
          }
        });
    } else {
      props.setError("შეიყვანეთ ინფორმაცია სწორად");
    }
  };
  return (
    <>
      {" "}
      {loader ? (
        <ContentLoader />
      ) : status == null ? (
        <>
          <p className="text-textDesc text-center">ინფორმაციის შეცვლა</p>

          <form
            onSubmit={handleForm}
            className="w-[380px] mt-5 mx-auto flex flex-col gap-5 items-center relative z-10 mobile:gap-4 mobile:max-w-[360px] mobile:w-[100%] mobile:px-[5px]"
          >
            <div className="flex items-center gap-5 mobile:gap-3">
              <div className="h-[40px] w-full rounded-normal flex items-center relative">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="სახელი"
                  className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                />
              </div>
              <div className="h-[40px] w-full rounded-normal flex items-center relative">
                <input
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname}
                  type="text"
                  placeholder="გვარი"
                  className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                />
              </div>
            </div>

            <div className="h-[40px] w-full rounded-normal flex items-center relative">
              <PhoneIcon className="h-[22px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-blackMain z-[3] opacity-40" />
              <input
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                type="tel"
                placeholder="ტელეფონის ნომერი"
                className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
              />
            </div>
            <button className="DefButton block">დადასტურება</button>
          </form>
        </>
      ) : status == 0 ? (
        <div className="w-[550px] mx-auto  max-w-[100%] ">
          <h2 className="text-redI font-mainBold text-center text-[18px]  mb-4">
            წარმოიშვა შეცდომა შეცდომა
          </h2>
          <p className="text-textDesc  text-center text-[14px] mt-2">
            სერვერზე შეფერხებაა სცადეთ მოგვიანებით
          </p>

          <button
            onClick={() => props.close()}
            className="bg-redI text-[14px] h-[35px] w-[200px] text-buttonText tracking-wider rounded-md mx-auto block mt-6  transition-colors hover:bg-redCloseI"
          >
            გასაგებია
          </button>
        </div>
      ) : status == 100 ? (
        <div className="w-[550px] mx-auto  max-w-[100%] ">
          <h2 className="text-greenI font-mainBold text-center text-[18px]  mb-4">
            ინფორმაცია წარმატებით განახლდა
          </h2>
          <button
            onClick={() => props.close()}
            className="bg-greenI text-[14px] h-[35px] w-[200px] text-buttonText tracking-wider rounded-md mx-auto block mt-6  transition-colors hover:bg-greenCloseI"
          >
            გასაგებია
          </button>
        </div>
      ) : null}
    </>
  );
}

const hashString = (data: string) => {
  return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
};
function SubmitMailCode(props: {
  mail: string;
  setError: Function;
  setPhase: Function;
}) {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const code = useRef<HTMLInputElement | null>(null);
  const [loader, setLoader] = useState<boolean>(true);
  const sendStop = useRef<boolean>(false);
  const sendedCode = useRef<string>("");
  const rn = "LoPN2610MnSpOrN";

  useEffect(() => {
    if (!sendStop.current) {
      axiosCall
        .post(
          "user/send_check_code.php",
          { email: user.mail },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          setLoader(false);
          let getCd = res.data.data.split(rn)[2];
          sendedCode.current = getCd;
        });
      sendStop.current = true;
    }
  }, [sendStop.current]);

  const checkMail = (e: FormEvent) => {
    e.preventDefault();
    props.setError("");
    if (code.current) {
      if (hashString(code.current.value.toString()) == sendedCode.current) {
        props.setPhase(2);
      } else {
        props.setError("კოდი არასწორია");
      }
    }
  };

  return (
    <>
      {" "}
      {loader ? (
        <ContentLoader />
      ) : (
        <>
          <p className="text-textDesc text-center">კოდი გამოგზავნილია მეილზე</p>
          <form
            onSubmit={checkMail}
            className="flex flex-col justify-center items-center mt-10 gap-7"
          >
            <input
              ref={code}
              type="number"
              className="AddProductInputTitle"
              placeholder={"შეიყვანეთ კოდი"}
            />
            <button className="DefButton block">დადასტურება</button>
          </form>{" "}
        </>
      )}
    </>
  );
}

function PaymentCard({ paymentData }: { paymentData: TuserCardInfoPayments }) {
  const color = ActiveOffers.filter(
    (item) => item.name == paymentData.payment_for
  )[0].mainColor;
  return (
    <div className="flex [&>div]:text-textDesc [&>div]:text-[14px] my-1">
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
