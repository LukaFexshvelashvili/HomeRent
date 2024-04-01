import { useParams } from "react-router-dom";
import { TClosePlace, closePlacesList } from "../../assets/lists/closePlaces";
import {
  TProductAddon,
  productAddonsList,
} from "../../assets/lists/productAddons";
import CardSlider from "../../components/global/CardSlider";
import ImageSlider from "./components/ImageSlider";
import ProductSideBar from "./components/ProductSideBar";
import { useEffect, useState } from "react";
import axiosCall from "../../hooks/axiosCall";
import ContentLoader from "../../components/global/ContentLoader";

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState<any>(null);
  useEffect(() => {
    axiosCall.post("fetch/product", `product_id=${id}`).then((res) => {
      console.log(res.data.product_data[0]);

      if (res.data.status === 100) {
        setProductData(res.data.product_data[0]);
      }
    });
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
                  {productData.description
                    ? productData.description
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
                  {productAddonsList.map((item: TProductAddon, i: number) => (
                    <div key={i} className="flex items-center  ">
                      {item.icon("h-[20px]")}{" "}
                      <p className="text-Asmall ml-2 text-textDesc">
                        {" "}
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-3  small:flex-col-reverse">
              <div className="w-full  aspect-[2/1] small:h-[200px] rounded-block bg-whiteLoad relative">
                <div className="bg-mainClear text-main px-5 py-1 rounded-md text-Asmall absolute top-3 right-3 cursor-pointer">
                  განათავსე რეკლამა
                </div>
              </div>
              <div className=" rounded-block bg-whiteMain p-4">
                <p className=" text-[15px] font-mainBold text-textHeadCard">
                  ახლოს მდებარეობს
                </p>
                <div className="flex gap-3 flex-wrap mt-5 mobile:justify-center">
                  {closePlacesList.map((item: TClosePlace, i: number) => (
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
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className="mt-5">
            <p className="p-2 text-[16px] font-mainBold text-textHeadCard mb-1">
              მსგავსი განცხადებები
            </p>
            <CardSlider uniqueId={1001} />
          </div>
        </>
      )}
    </main>
  );
}
