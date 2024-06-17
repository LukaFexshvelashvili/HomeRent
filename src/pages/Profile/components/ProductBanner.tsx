import { useDispatch } from "react-redux";
import {
  DateIcon,
  LightningIcon,
  LoginEyeCloseIcon,
  LoginEyeIcon,
  TrashIcon,
} from "../../../assets/icons/Icons";
import {
  deleteProduct,
  hideProduct,
} from "../../../hooks/serverProductFunctions";
import { Tuser } from "../../../store/data/userSlice";
import { TProductData } from "./MyProducts";
import { Link } from "react-router-dom";
import { ActiveOffers } from "../../../assets/lists/offers";

export default function ProductBanner(props: {
  setPopbuy: Function;
  productData: TProductData;
  setPopAlert: Function;
  userData: Tuser;
  fetchProducts: Function;
}) {
  const dispatch = useDispatch();
  const vipOffer = ActiveOffers.filter(
    (item) => item.id == props.productData.estate_vip
  )[0];
  return (
    <div className=" w-full border-t-[2px] border-lineBg py-5 px-4 flex items-center small:flex-col ">
      {props.productData.product_status !== 1 ? (
        <Link to={"/Product/" + props.productData.id} className="small:w-full">
          <div className="w-[160px] h-[90px] rounded-lg bg-whiteLoad relative overflow-hidden small:w-[100%] small:aspect-video small:h-auto">
            <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2] "></div>
            <img
              src={
                "http://localhost/ONHOMEServer/" +
                props.productData.estate_active_image
              }
              className="absolute h-full w-full object-cover  top-0 left-0"
            />
          </div>
        </Link>
      ) : (
        <div className="w-[160px] h-[90px] rounded-lg bg-whiteLoad relative overflow-hidden small:w-[100%] small:aspect-video small:h-auto">
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2] "></div>
          <img
            src={
              "http://localhost/ONHOMEServer/" +
              props.productData.estate_active_image
            }
            className="absolute h-full w-full object-cover  top-0 left-0"
          />
        </div>
      )}
      <div className="flex flex-col ml-3 h-full relative small:w-full small:mt-3 small:h-auto">
        <h3 className="text-[15px] mb-[2px] text-textHeadBlack">
          {props.productData.estate_title.length > 20
            ? props.productData.estate_title.slice(0, 20) + "..."
            : props.productData.estate_title}
        </h3>
        <p className="text-[13px] text-textDesc">
          ვადა:{" "}
          <span className="text-[13px] text-textHeadBlack">
            {" "}
            {props.productData.expire_time.slice(0, 10)}
          </span>
        </p>{" "}
        <p className="text-[13px] text-textDesc">
          სტატუსი:{" "}
          <span
            style={{
              color: vipOffer.mainColor,
            }}
          >
            {vipOffer.name}{" "}
          </span>
        </p>
        {vipOffer.id !== 0 ? (
          <p className="text-[13px] text-textDesc mb-2">
            სტატუსის ვადა:{" "}
            <span className="text-[13px] text-textHeadBlack">
              {" "}
              {props.productData.estate_vip_expire.slice(0, 10)}
            </span>
          </p>
        ) : null}
        <div className="flex items-center gap-5 mt-auto small:mt-2">
          {" "}
          <p className="flex items-center text-[13px] text-textDesc gap-1">
            <DateIcon className="h-4 aspect-square [&>path]:fill-textDesc" />
            {props.productData.created_time.slice(0, 10)}
          </p>
          <p className="flex items-center text-[13px] text-textDesc gap-1">
            <LoginEyeIcon className="h-4 aspect-square [&>path]:fill-textDesc" />{" "}
            {props.productData.views}
          </p>
          <p className="text-[13px] text-textDesc">
            ID - {props.productData.id}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-auto mediumSmallXl:flex-wrap mediumSmallXl:justify-end small:justify-start small:w-full small:mt-5">
        {props.productData.macler_status == 1 ? (
          <button className="bg-maclerMainClear pointer-events-none mobile:mt-5  text-maclerMain h-[35px] w-[200px] rounded-md text-[13px] font-mainBold tracking-wide">
            მოთხოვნა გაგზავნილია
          </button>
        ) : props.productData.macler_status == 2 ? (
          <button className="bg-redClear pointer-events-none mobile:mt-5  text-redI h-[35px] w-[220px] rounded-md text-[13px] font-mainMedium tracking-wider">
            მოთხოვნა უარყოფილია
          </button>
        ) : props.productData.macler_status == 3 ? (
          <button className="bg-maclerMainClear pointer-events-none mobile:mt-5  text-maclerMain h-[35px] w-[240px] rounded-md text-[13px] font-mainBold tracking-wide">
            მოთხოვნა დადასტურებულია
          </button>
        ) : null}

        {props.productData.product_status !== 2 ? (
          props.productData.macler_status == 0 ? (
            props.productData.estate_vip == 0 ? (
              <button
                onClick={() => props.setPopbuy({ id: props.productData.id })}
                className="bg-purpleClear text-blueI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-purpleHover flex justify-center items-center"
              >
                <LightningIcon className="h-full aspect-square [&>path]:fill-purpleI" />
              </button>
            ) : (
              <button
                className="bg-purpleClear text-blueI h-[35px] px-3 rounded-md tracking-wider transition-colors p-2 text-[12px] font-mainBold flex justify-center items-center"
                style={{
                  color: vipOffer.mainColor,
                  backgroundColor: vipOffer.secondColor,
                }}
              >
                {vipOffer.name}
              </button>
            )
          ) : null
        ) : null}
        {props.productData.product_status !== 2 ? (
          props.productData.product_status !== 1 ? (
            <button
              onClick={() =>
                props.setPopAlert({
                  open: true,
                  headText: "განცხადების დამალვა",
                  descText:
                    "ნამდვილად გსურთ დამალოთ განცხადება? (თქვენ ნებისმიერ დროს შეგიძლიათ გახადოთ ის ხილვადი)",
                  nextFunction: () => {
                    hideProduct(
                      props.userData,
                      props.productData.id,
                      true
                    ).then(() => {
                      props.setPopAlert({
                        open: false,
                        headText: "",
                        descText: "",
                        nextFunction: () => {},
                      });
                      props.fetchProducts();
                    });
                  },
                })
              }
              className="bg-blueClear text-blueI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-blueHover flex justify-center items-center"
            >
              <LoginEyeCloseIcon className="h-full aspect-square [&>path]:stroke-blueI" />
            </button>
          ) : (
            <button
              onClick={() =>
                props.setPopAlert({
                  open: true,
                  headText: "განცხადების გამოჩენა",
                  descText: "ნამდვილად გსურთ გამოაჩინოთ განცხადება?",
                  nextFunction: () => {
                    hideProduct(
                      props.userData,
                      props.productData.id,
                      false
                    ).then(() => {
                      props.setPopAlert({
                        open: false,
                        headText: "",
                        descText: "",
                        nextFunction: () => {},
                      });
                      props.fetchProducts();
                    });
                  },
                })
              }
              className="bg-blueI text-blueI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-blueLightI flex justify-center items-center"
            >
              <LoginEyeIcon className="h-full aspect-square [&>path]:fill-buttonText" />
            </button>
          )
        ) : null}
        <button
          onClick={() =>
            props.setPopAlert({
              open: true,
              headText: "განცხადების წაშლა",
              descText:
                "ნამდვილად გსურთ განცხადების წაშლა? ( ქმედება უკან ვეღარ დაბრუნდება )",
              nextFunction: () => {
                deleteProduct(
                  dispatch,
                  props.userData,
                  props.productData.id
                ).then(() => {
                  props.setPopAlert({
                    open: false,
                    headText: "",
                    descText: "",
                    nextFunction: () => {},
                  });
                  props.fetchProducts();
                });
              },
            })
          }
          className="bg-redClear text-redI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-redHover flex justify-center items-center"
        >
          <TrashIcon className="h-full aspect-square" />
        </button>
      </div>
    </div>
  );
}
