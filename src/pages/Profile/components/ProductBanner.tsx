import { useDispatch } from "react-redux";
import {
  DateIcon,
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

export default function ProductBanner(props: {
  setPopbuy: Function;
  productData: TProductData;
  setPopAlert: Function;
  userData: Tuser;
  fetchProducts: Function;
}) {
  const dispatch = useDispatch();
  return (
    <div className=" w-full border-t-[2px] border-lineBg py-5 px-4 flex items-center small:flex-col ">
      <Link to={"/Product/" + props.productData.id}>
        <div className="w-[160px] h-[90px] rounded-lg bg-whiteLoad relative overflow-hidden small:w-[100%] small:aspect-video small:h-auto">
          <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2] "></div>
          <img
            src={
              "http://localhost/homeRentServer/" +
              props.productData.estate_active_image
            }
            className="absolute h-full w-full object-cover  top-0 left-0"
          />
        </div>
      </Link>
      <div className="flex flex-col ml-3 h-full relative small:w-full small:mt-3 small:h-auto">
        <h3 className="text-[15px] mb-[2px] text-textHeadBlack">
          {props.productData.estate_title}
        </h3>
        <p className="text-[13px] text-textDesc">
          განახლდა:{" "}
          <span className="text-[13px] text-textHeadBlack">
            {props.productData.update_time.slice(0, 10)}
          </span>
        </p>
        <p className="text-[13px] text-textDesc">
          ვადა:{" "}
          <span className="text-[13px] text-textHeadBlack">
            {" "}
            {props.productData.expire_time.slice(0, 10)}
          </span>
        </p>
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
        <button
          className="bg-purpleClear text-purpleI h-[35px] w-[180px] rounded-md text-[13px] font-mainBold tracking-wide transition-colors hover:bg-purpleHover"
          onClick={() => props.setPopbuy({ id: 2 })}
        >
          ნახვების გაზრდა
        </button>

        {props.productData.product_status !== 1 ? (
          <button
            onClick={() =>
              props.setPopAlert({
                open: true,
                headText: "განცხადების დამალვა",
                descText:
                  "ნამდვილად გსურთ დამალოთ განცხადება? (თქვენ ნებისმიერ დროს შეგიძლიათ გახადოთ ის ხილვადი)",
                nextFunction: () => {
                  hideProduct(props.userData, props.productData.id, true).then(
                    () => {
                      props.setPopAlert({
                        open: false,
                        headText: "",
                        descText: "",
                        nextFunction: () => {},
                      });
                      props.fetchProducts();
                    }
                  );
                },
              })
            }
            className="bg-mainClear text-blueI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-blueHover flex justify-center items-center"
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
                  hideProduct(props.userData, props.productData.id, false).then(
                    () => {
                      props.setPopAlert({
                        open: false,
                        headText: "",
                        descText: "",
                        nextFunction: () => {},
                      });
                      props.fetchProducts();
                    }
                  );
                },
              })
            }
            className="bg-blueI text-blueI h-[35px] aspect-square rounded-md  transition-colors p-2 hover:bg-blueLightI flex justify-center items-center"
          >
            <LoginEyeIcon className="h-full aspect-square [&>path]:fill-buttonText" />
          </button>
        )}
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
