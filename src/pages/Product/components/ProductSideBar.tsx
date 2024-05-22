import { useDispatch, useSelector } from "react-redux";
import {
  BedIcon,
  BookmarkIcon,
  DateIcon,
  LoginEyeIcon,
  PhoneFIlledIcon,
  ReportIcon,
  RoomIcon,
  ShareIcon,
  SquareFrameIcon,
  StairsIcon,
  UserIcon,
} from "../../../assets/icons/Icons";
import { RootState } from "../../../store/store";
import { TProductData } from "../../Profile/components/MyProducts";
import { useState } from "react";
import { addFavorite, removeFavorite } from "../../../hooks/serverFunctions";
import { currencyConvertor } from "../../../components/convertors/convertors";
import { projectStatuses } from "../../../assets/lists/productAddons";
export default function ProductSideBar(props: { productData: TProductData }) {
  const userFavorites = useSelector((store: RootState) => store.user.favorites);
  const dispatch = useDispatch();
  const [favorited, setFavorited] = useState(
    userFavorites.includes(props.productData.id)
  );

  const [currency, setCurrency] = useState<number>(0);
  const [price, setPrice] = useState<{ full: number; perSize: number }>({
    full: Math.floor(props.productData.estate_price),
    perSize: Math.floor(
      props.productData.estate_price / props.productData.estate_size
    ),
  });
  const changeFavorite = () => {
    if (favorited) {
      removeFavorite(dispatch, props.productData.id);
      setFavorited(false);
    } else {
      addFavorite(dispatch, props.productData.id);

      setFavorited(true);
    }
  };
  const changeCurrency = (newCurrency: number) => {
    setPrice({
      full: currencyConvertor(price.full, currency),
      perSize: currencyConvertor(price.perSize, currency),
    });
    setCurrency(newCurrency);
  };

  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="bg-whiteMain rounded-block  shadow-sectionShadow">
        <div className="py-4 px-5 mobile:p-3 ">
          <div className=" mobileSmall:max-h-[18px] mobileSmall:overflow-hidden flex items-center text-[13px] font-mainBold text-textDescCard gap-7 mobile:justify-center mobile:gap-4 mobile:flex-wrap mobile:text-[11px] mobileSmall:text-[10px]">
            <span className="flex items-center">
              <LoginEyeIcon className=" h-[18px] aspect-square [&>path]:fill-textDesc mr-3 mobile:mr-2" />{" "}
              {props.productData.views}
            </span>
            <span className="flex items-center">
              <DateIcon className=" h-[18px] aspect-square [&>path]:fill-textDesc mr-3 mobile:mr-2 translate-y-[-1px]" />{" "}
              {props.productData.created_time.slice(0, 10)}
            </span>
            <span>ID - {props.productData.id}</span>
          </div>
          <div className="flex items-center mt-2 justify-between mobile:flex-col-reverse mobile:mt-3 mobile:gap-3 mobile:items-stretch">
            <h2 className="text-[20px] text-textHeadCard tracking-wide font-mainBold mobile:text-[18px] mobileSmall:text-[16px] max-w-[300px] overflow-hidden text-nowrap text-ellipsis">
              {props.productData.estate_title}
            </h2>
            <div className=" flex justify-center items-center bg-mainClear text-main h-[32px] w-[120px] font-mainBold tracking-wider rounded-lg text-Asmall mobile:mx-auto mobileSmall:text-[12px] mobileSmall:h-[28px]">
              {getDealType(props.productData.estate_deal)}
            </div>{" "}
          </div>
          <div className=" flex text-textHead items-center h-[30px] font-mainSemiBold tracking-wider rounded-lg text-Asmall mobile:mx-auto mobileSmall:text-[12px] mobileSmall:h-[28px]">
            ტიპი:{" "}
            <span className="ml-2 text-main ">
              {getType(props.productData.estate_type)}
            </span>
          </div>{" "}
          {props.productData.estate_condition ? (
            <div className=" flex text-textHead items-center h-[30px] font-mainSemiBold tracking-wider rounded-lg text-Asmall mobile:mx-auto mobileSmall:text-[12px] mobileSmall:h-[28px]">
              მდგომარეობა:{" "}
              <span className="ml-2 text-main ">
                {projectStatuses[props.productData.estate_condition]}
              </span>
            </div>
          ) : null}
          <div className="flex items-center mt-5 justify-between px-3 mobile:px-0">
            <div className="flex items-center gap-4 mobileSmall:gap-2">
              <p className="text-[20px] font-mainBold text-textHeadCard mobile:text-[18px] mobileSmall:text-[16px]">
                {price.full} {currency == 0 ? "$" : currency == 1 ? "₾" : ""}
              </p>
              <p className="text-[16px] font-mainBold text-textDescCard mobile:text-[14px] mobileSmall:text-[12px]">
                1 მ² - {price.perSize}{" "}
                {currency == 0 ? "$" : currency == 1 ? "₾" : ""}
              </p>
            </div>
            <div
              onClick={() => changeCurrency(currency == 0 ? 1 : 0)}
              className={`h-[30px] w-[70px] flex items-center select-none outline outline-2 -outline-offset-2 outline-borderCol1 rounded-lg  text-textDescCard cursor-pointer`}
            >
              <div
                className={`flex-1 transition-all h-full flex items-center justify-center font-mainRegular ${
                  currency == 0
                    ? ""
                    : "text-buttonText bg-main rounded-lg relative"
                } `}
              >
                ₾
              </div>
              <div
                className={`flex-1 transition-all h-full flex items-center justify-center font-mainRegular ${
                  currency == 0
                    ? "text-buttonText bg-main rounded-lg relative"
                    : ""
                }`}
              >
                $
              </div>
            </div>
          </div>
          <div className="outline outline-2 -outline-offset-2 outline-borderCol1 mobile:flex-col mobile:h-auto  rounded-xl  w-full h-[48px] mt-4 flex items-center">
            <button className="flex-1  text-buttonText flex justify-center items-center h-full rounded-xl min-h-[48px] mobile:min-h-[54px] mobileSmall:text-[13px] px-5 mobile:w-full bg-main relative text-Asmaller mobile:text-[14px] tracking-wide font-mainSemiBold transition-colors hover:bg-mainHover">
              <PhoneFIlledIcon className="mobile:h-[21px] mobileSmall:h-[18px] h-[19px] aspect-square [&>path]:fill-text-buttonText mr-3 translate-y-[-1px]" />{" "}
              511 22 ** ** ნომრის ჩვენება
            </button>
            <div className="flex-1 ">
              <div className=" pl-5 flex items-center cursor-pointer mobile:h-auto mobile:py-[10px] mobile:justify-start ">
                <UserIcon className="mobile:h-[21px] mobileSmall:text-[18px] h-[19px] aspect-square [&>g>path]:fill-userIconFilled mr-3 translate-y-[-1px]" />
                <div className="flex flex-col ">
                  <p className="text-Asmallest text-textHeadCard font-mainBold leading-4 mobile:text-[13px] mobileSmall:text-[12px] mobile:leading-[18px]">
                    ლუკა
                  </p>
                  <p className="text-Asmallest text-textDescCard font-mainBold leading-4 mobile:text-[13px] mobileSmall:text-[12px] mobile:leading-[18px]">
                    ყველა განცხადების ნახვა
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-whiteMain rounded-block h-[70px] flex items-center  shadow-sectionShadow mobile:flex-wrap mobile:h-auto mobile:gap-y-5  mobile:p-3 mobile:justify-center">
        <div className="flex-1 px-5 flex items-center  mobile:min-w-[50%] border-r-2 mobile:border-none  border-lineBg">
          <SquareFrameIcon className=" h-[25px] aspect-square [&>path]:stroke-textHeadCard" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              ფართი
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              {props.productData.estate_size} მ²
            </p>
          </div>
        </div>
        <div className="flex-1 px-5 flex items-center  mobile:min-w-[50%] border-r-2 mobile:border-none  border-lineBg">
          <RoomIcon className=" h-[26px] aspect-auto [&>path]:fill-textHeadCard translate-y-[2px]" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              ოთახები
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              {props.productData.estate_rooms}
            </p>
          </div>
        </div>
        <div className="flex-1 px-5 flex items-center  mobile:min-w-[50%] border-r-2 mobile:border-none  border-lineBg">
          <BedIcon className="min-w-[26px] h-[26px] aspect-square [&>path]:fill-textHeadCard" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              საძინებელი
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              {props.productData.estate_bedrooms}
            </p>
          </div>
        </div>
        {props.productData.estate_floor ? (
          <div className="flex-1 px-5 flex items-center  mobile:min-w-[50%] ">
            <StairsIcon className=" h-[25px] aspect-square [&>path]:stroke-textHeadCard" />
            <div className="flex flex-col ml-3">
              <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
                სართული
              </p>
              <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
                {props.productData.estate_floor}{" "}
                {props.productData.estate_floors && (
                  <span className="text-textDescCard">
                    / {props.productData.estate_floors}
                  </span>
                )}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bg-whiteMain rounded-block h-[70px] flex items-center justify-between  shadow-sectionShadow mobile:h-auto mobile:p-3 mobile:flex-wrap mobile:justify-center mobile:gap-y-3">
        <div className="flex flex-col mobile:text-center px-4 gap-[2px]">
          <p className=" text-textDesc text-Asmaller font-mainSemiBold tracking-wider">
            მდებარეობა
          </p>
          <p className="text-textHeadCard text-[13px] font-mainBold tracking-wider">
            {props.productData.estate_city}
          </p>
        </div>
        <div className=" flex flex-col mobile:text-center px-4 gap-[2px]">
          <p className=" text-textDesc text-Asmaller font-mainSemiBold tracking-wider">
            პროექტი
          </p>
          <p className="text-textHeadCard text-[13px] font-mainBold tracking-wider">
            {getProject(props.productData.estate_project)}
          </p>
        </div>
        <div className=" flex flex-col mobile:text-center px-4 gap-[2px]">
          <p className=" text-textDesc text-Asmaller font-mainSemiBold tracking-wider">
            სტატუსი
          </p>
          <p className="text-textHeadCard text-[13px] font-mainBold tracking-wider">
            {props.productData.estate_status}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5  mobile:flex-wrap mobile:justify-center mobile:gap-3">
        <div
          onClick={changeFavorite}
          className={` shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto select-none transition-colors ${
            favorited ? "bg-orangeClear" : "bg-whiteMain"
          } rounded-[8px] text-[13px] text-textHeadCard tracking-wider cursor-pointer `}
        >
          <BookmarkIcon
            className={`h-[16px] aspect-square [&>path]:stroke-orangeI mr-3 [&>path]:transition-colors ${
              favorited ? "[&>path]:fill-orangeI" : "[&>path]:fill-transparent"
            } `}
          />{" "}
          {favorited ? "შენახულია" : "შენახვა"}
        </div>
        <div className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-whiteMain rounded-[8px] text-[13px] text-textHeadCard tracking-wider cursor-pointer">
          <ShareIcon className="h-[16px] aspect-square [&>path]:stroke-main mr-3" />{" "}
          გაზიარება
        </div>
        <div className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-whiteMain rounded-[8px] text-[13px] text-textHeadCard tracking-wider cursor-pointer">
          <ReportIcon className="h-[16px] aspect-square [&>path]:fill-reportIcon mr-3" />{" "}
          გასაჩივრება
        </div>
      </div>
    </div>
  );
}

function getDealType(dealID: number) {
  switch (dealID) {
    case 0:
      return "იყიდება";
      break;
    case 1:
      return "ქირავდება";
      break;
    case 2:
      return "ქირავდება დღიურად";
      break;
    case 3:
      return "გირავდება";
      break;
  }
}
function getType(typeID: number) {
  switch (typeID) {
    case 0:
      return "კერძო სახლი";
      break;
    case 1:
      return "კორპუსის ბინა";
      break;
    case 2:
      return "კომერციული ფართი";
      break;
    case 3:
      return "მიწის ნაკვეთი";
      break;
    case 4:
      return "სასტუმრო";
      break;
  }
}

function getProject(projectID: number) {
  const projectTypes: string[] = [
    "ლენინგრადის",
    "ლვოვის",
    "კიევი",
    "თბილისური ეზო",
    "მოსკოვის",
    "ქალაქური",
    "ჩეხური",
    "ხრუშოვის",
    "თუხარელის",
    "ვეძისი",
    "იუგოსლავიის",
    "მეტრომშენის",
    "არასტანდარტული",
    "ყავლაშვილის",
  ];

  return projectTypes[projectID];
}
