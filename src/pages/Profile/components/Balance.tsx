import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import masterCard from "../../../assets/images/logos/masterCard.jpg";
import visa from "../../../assets/images/logos/visa.png";
export default function Balance() {
  const userData = useSelector((store: RootState) => store.user);
  return (
    <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex gap-6 flex-col  px-7 py-5 ">
      <h2 className="text-textHeadCard text-[15px] tracking-wider">
        ბალანსი:{" "}
        <span className=" ml-1 text-main">
          {(userData.money / 100).toFixed(2)}₾
        </span>
      </h2>

      <div className="flex justify-center items-center mt-10">
        <div className="flex justify-center items-center text-start flex-col">
          <button className="bg-main rounded-[5px] w-[200px] h-[40px] font-mainMedium text-buttonText text-[13px] tracking-wider transition-colors hover:bg-mainHover">
            ბალანსის შევსება
          </button>
          <p className="mt-5 text-textDesc text-[12px] tracking-wider">
            (მინიმალური შენატანი 5 ლარი)
          </p>
          <p className="mt-5 text-textDesc text-[12px] tracking-wider">
            გადახდის მეთოდები
          </p>
          <div className="flex gap-2 mt-3">
            <img
              className=" h-8 rounded-lg"
              src={masterCard}
              alt="mastercard_logo"
            />{" "}
            <img
              className=" h-8 rounded-lg p-1 pr-2  bg-white"
              src={visa}
              alt="visa_logo"
            />
          </div>
        </div>
      </div>
      <h2 className="text-textHeadCard text-[14px] tracking-wider mt-5">
        ბალანსის შევსების ისტორია
      </h2>
      <div className="flex flex-col border-t border-borderCol1">
        <p className="mt-5 text-textDesc text-center text-[12px] tracking-wider">
          სია ცარიელია
        </p>
      </div>
    </div>
  );
}