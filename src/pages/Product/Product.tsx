import { useParams } from "react-router-dom";
import { TClosePlace, closePlacesList } from "../../assets/lists/closePlaces";
import {
  TProductAddon,
  productAddonsList,
  productAddonsListForLand,
} from "../../assets/lists/productAddons";
import CardSlider from "../../components/global/CardSlider";
import ImageSlider from "./components/ImageSlider";
import ProductSideBar from "./components/ProductSideBar";
import { useEffect, useRef, useState } from "react";
import axiosCall from "../../hooks/axiosCall";
import ContentLoader from "../../components/global/ContentLoader";
import { TProductData } from "../Profile/components/MyProducts";
import { addLastProduct } from "../../hooks/UIFunctions";
import { useDispatch } from "react-redux";
import { productViewPlus } from "../../hooks/serverProductFunctions";
import { TProductCard } from "../../components/global/Card";
import { AdBanner3 } from "../../components/global/AdComponents";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState<null | TProductData>(null);
  const [sameProducts, setSameProducts] = useState<null | TProductCard[]>(null);
  const makeRefresh = useRef({ id: id, refresh: true });
  useEffect(() => {
    if (
      (makeRefresh.current.id == id && makeRefresh.current.refresh == true) ||
      makeRefresh.current.id !== id
    ) {
      makeRefresh.current.id = id;
      makeRefresh.current.refresh = false;
      axiosCall.post("fetch/product", `product_id=${id}`).then((res) => {
        if (res.data.status === 100) {
          setProductData(res.data.product_data[0]);
          let formData = new FormData();
          formData.append("city", res.data.product_data[0].estate_city);
          axiosCall
            .post("fetch/same_products", formData)
            .then((res) => setSameProducts(res.data));
        }
      });

      if (id) {
        productViewPlus(parseInt(id));
        addLastProduct(dispatch, parseInt(id));
      }
    }
  }, [id]);

  return (
    <main className="min-h-screen">
      {productData === null || !productData.id ? (
        <ContentLoader />
      ) : (
        <>
          <section className="medium:flex-col flex gap-[36px] medium:gap-5 mobile:gap-3">
            <ImageSlider productData={productData} />
            <ProductSideBar productData={productData} />
          </section>
          <section className="flex gap-[36px] mt-6  small:flex-col">
            <div className="flex-[2] flex flex-col gap-3">
              <div className=" rounded-block bg-whiteMain p-4">
                <p className=" text-[15px] font-mainBold text-textHeadCard">
                  აღწერა
                </p>
                <p className=" text-[14px] font-mainSemiBold text-textDescCard leading-[23px] mt-2 tracking-normal">
                  {productData.estate_description
                    ? productData.estate_description
                    : "აღწერა არ არის დამატებული"}
                </p>
                {productData.estate_ipcode !== "null" && (
                  <p className="text-[14px] font-mainSemiBold text-textDesc leading-[23px] mt-2 tracking-normal">
                    საკადასტრო კოდი:{" "}
                    <span className="text-main underline cursor-pointer">
                      {" "}
                      {productData.estate_ipcode}
                    </span>
                  </p>
                )}
              </div>
              <div className=" rounded-block bg-whiteMain p-4">
                <p className=" text-[15px] font-mainBold text-textHeadCard">
                  დამატებითი ინფორმაცია
                </p>
                <div className="flex items-start justify-center gap-3 flex-col flex-wrap max-h-[150px] my-[25px] pl-5 medium:max-h-none medium:flex-row ">
                  {productData.estate_type == 3
                    ? productData.estate_addons !== null
                      ? productAddonsListForLand.map(
                          (item: TProductAddon, i: number) => (
                            <div
                              key={i}
                              className={`flex items-center ${
                                JSON.parse(productData.estate_addons).includes(
                                  i
                                )
                                  ? "opacity-100"
                                  : "opacity-20 line-through decoration-blackMain"
                              } `}
                            >
                              {item.icon("h-[20px]")}{" "}
                              <p className="text-Asmall ml-2 text-textDesc">
                                {" "}
                                {item.name}
                              </p>
                            </div>
                          )
                        )
                      : null
                    : productData.estate_addons !== null
                    ? productAddonsList.map(
                        (item: TProductAddon, i: number) => {
                          if (
                            productData.estate_type !== 0 &&
                            item.name == "კანალიზაცია"
                          ) {
                            return null;
                          }
                          return (
                            <div
                              key={i}
                              className={`flex items-center ${
                                JSON.parse(productData.estate_addons).includes(
                                  i
                                )
                                  ? "opacity-100"
                                  : "opacity-20 line-through decoration-blackMain"
                              } `}
                            >
                              {item.icon("h-[20px]")}{" "}
                              <p className="text-Asmall ml-2 text-textDesc">
                                {" "}
                                {item.name}
                              </p>
                            </div>
                          );
                        }
                      )
                    : null}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3  small:flex-col-reverse">
              <AdBanner3 />
              <div className=" rounded-block bg-whiteMain p-4">
                <p className=" text-[15px] font-mainBold text-textHeadCard">
                  ახლოს მდებარეობს
                </p>
                <div className="flex gap-3 flex-wrap mt-5 mobile:justify-center">
                  {productData.estate_close_places !== null
                    ? closePlacesList.map((item: TClosePlace, i: number) =>
                        JSON.parse(productData.estate_close_places).includes(
                          i
                        ) ? (
                          <div
                            className="h-[35px] px-4 flex items-center rounded-md "
                            style={{ backgroundColor: item.bgColor }}
                            key={i}
                          >
                            {item.icon("h-[24px]")}{" "}
                            <p
                              className="ml-2 text-Asmall font-mainMedium tracking-widest"
                              style={{ color: item.color }}
                            >
                              {" "}
                              {item.name}
                            </p>
                          </div>
                        ) : null
                      )
                    : null}
                </div>
              </div>
            </div>
          </section>
          <div className="mt-5">
            {sameProducts && (
              <>
                <p className="p-2 text-[16px] font-mainBold text-textHeadCard mb-1">
                  მსგავსი განცხადებები
                </p>

                <CardSlider uniqueId={1001} products={sameProducts} />
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}
