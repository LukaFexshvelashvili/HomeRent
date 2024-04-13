import { useEffect, useRef, useState } from "react";
import ProductBanner from "./ProductBanner";
import Buypopup from "./Buypopup";
import axiosCall from "../../../hooks/axiosCall";
import { Link } from "react-router-dom";
import ContentLoader from "../../../components/global/ContentLoader";

export type TProductData = {
  id: number;
  user_id: number;
  estate_title: string;
  estate_description: string;
  estate_type: number;
  estate_deal: number;
  estate_status: number;
  estate_city: string;
  estate_address: string;
  estate_exact_address: string;
  estate_ipcode: string;
  estate_size: number;
  estate_project: number;
  estate_condition: number;
  estate_floor: number;
  estate_floors: number;
  estate_rooms: number;
  estate_bedrooms: number;
  estate_bathrooms: number;
  estate_price: number;
  estate_sale: number;
  estate_addons: string;
  estate_close_places: string;
  estate_currency: number;
  estate_vip: number;
  estate_vip_expire: string;
  estate_active_image: string;
  estate_images: string;
  views: number;
  created_time: string;
  update_time: string;
  expire_time: string;
  product_status: number;
};

export default function MyProducts() {
  const [popbuy, setPopbuy] = useState<{ id: null | number }>({ id: null });
  const [choice, setChoice] = useState<number>(0);
  const [myProducts, setMyProducts] = useState<any[] | null>(null);
  const saveProducts = useRef<any>(null);
  useEffect(() => {
    axiosCall
      .get("fetch/my_products", { withCredentials: true })
      .then((res) => {
        res.data &&
          setMyProducts(
            res.data.filter(
              (item: TProductData) => item.product_status == choice
            )
          );
        saveProducts.current = res.data;
      });
  }, []);
  useEffect(() => {
    if (saveProducts.current !== null) {
      setMyProducts(
        saveProducts.current.filter(
          (item: TProductData) => item.product_status == choice
        )
      );
    }
  }, [choice]);

  const choices: string[] = ["აქტიური", "დაბლოკილი", "ვადაგასული"];
  return (
    <>
      {" "}
      {popbuy.id && <Buypopup setPopbuy={setPopbuy} />}
      <div className=" rounded-section text-textHead shadow-sectionShadow bg-whiteMain relative flex px-7 py-5 flex-col gap-3  mobile:px-3">
        <h1 className="mobileSmall:text-[14px]">ჩემი განცხადებები</h1>
        <div className="flex gap-3 items-center flex-wrap mobile:justify-center">
          {choices.map((e: string, i: number) => (
            <button
              key={i}
              onClick={() => setChoice(i)}
              className={`px-4 py-2 transition-colors rounded-lg text-[14px]  ${
                choice == i
                  ? "text-buttonText bg-main"
                  : "text-main bg-mainClear"
              }`}
            >
              {e}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="მოძებნა  ( ID ან სათაური )"
          className=" text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive"
        />
      </div>
      <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex  py-2 flex-col gap-3 min-h-[200px]">
        {myProducts === null && <ContentLoader />}
        {myProducts && myProducts.length !== 0 && (
          <p className="px-4 text-[13px] text-textDesc my-1">
            სულ {myProducts.length} განცხადება
          </p>
        )}
        <div className="flex flex-col">
          {myProducts && myProducts.length !== 0
            ? myProducts.map((e: TProductData) => (
                <ProductBanner
                  key={e.id}
                  setPopbuy={setPopbuy}
                  productData={e}
                />
              ))
            : myProducts &&
              myProducts.length === 0 && (
                <div>
                  <p className="px-4 text-[15px] text-textDesc my-2 text-center">
                    განცხადებები ვერ მოიძებნა
                  </p>
                  <div className="flex justify-center my-3 mt-5">
                    <Link to={"/addProduct"} className=" rounded-lg">
                      <button className=" block text-buttonText bg-main rounded-lg text-[14px] px-4 py-2 tracking-wide">
                        განცხადების დამატება
                      </button>
                    </Link>
                  </div>
                </div>
              )}
        </div>
      </div>
    </>
  );
}
