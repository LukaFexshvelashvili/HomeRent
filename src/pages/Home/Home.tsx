import { memo, useLayoutEffect, useRef, useState } from "react";
import {
  CrownIcon,
  ListIcon,
  NewsIcon,
  StarIcon,
} from "../../assets/icons/Icons";
import CardSlider from "../../components/global/CardSlider";
import ChooseSection from "./components/ChooseSection";
import CreateOffer from "./components/CreateOffer";
import MaclerCard from "./components/MaclerCard";
import MainSlider from "./components/MainSlider";
import SearchInput from "./components/SearchInput";
import axiosCall from "../../hooks/axiosCall";
import { TProductCard } from "../../components/global/Card";

function Home() {
  const [products, setProducts] = useState<null | TProductCard[]>([]);
  const firstRender = useRef<boolean>(true);
  useLayoutEffect(() => {
    if (firstRender.current) {
      axiosCall.get("fetch/products").then((res) => {
        if (res.data) {
          setProducts(res.data.products);
        }
      });
      firstRender.current = false;
    }
  }, []);
  const viewedProducts = (): undefined | TProductCard[] => {
    if (products) {
      let productsList = products;
      productsList.sort((a, b) => b.views - a.views);

      // Select the top 5 items
      let List = productsList.slice(0, 5);
      return List;
    }
  };
  const lastProducts = (): TProductCard[] => {
    // Ensure products exist and the array is not empty
    if (products && products.length > 0) {
      // Copy the products array to avoid modifying the original array
      let productsList = [...products];

      // Sort the products based on views in descending order

      // Sort the top viewed products by created_time in descending order
      productsList.sort(
        (a, b) =>
          new Date(b.created_time).getTime() -
          new Date(a.created_time).getTime()
      );

      // Select the top 5 items
      let top5List = productsList.slice(0, 5);

      return top5List;
    } else {
      // Return an empty array if products is undefined or empty
      return [];
    }
  };
  return (
    <main>
      <MainSlider />
      <SearchInput />

      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <CrownIcon className=" h-[18px] mobileSmall:h-[17px] [&>path]:fill-redI mr-3 mobileSmall:mr-2 translate-y-[-1px] " />{" "}
        <span className="text-redI mr-2">VIP+</span> განცხადებები
      </div>
      <CardSlider
        uniqueId={1}
        products={products?.filter(
          (product: TProductCard) => product.estate_vip == 2
        )}
      />
      <ChooseSection />
      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <NewsIcon className=" h-[32px] mobileSmall:h-[30px] mobileSmall:mr-1 [&>path]:fill-purpleI mr-2 translate-y-[-1px]" />{" "}
        ახალი
      </div>
      <CardSlider uniqueId={2} products={lastProducts()} />
      <MaclerCard />
      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <StarIcon className=" h-[32px] mobileSmall:h-[30px] mobileSmall:mr-1 [&>path]:fill-pinkI mr-2 translate-y-[-1px]" />{" "}
        პოპულარული
      </div>
      <CardSlider uniqueId={3} products={viewedProducts()} />
      <CreateOffer />
      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <ListIcon className=" h-[36px] mobileSmall:h-[34px] mobileSmall:mr-1  [&>path]:fill-orangeI mr-2 translate-y-[-1px]" />{" "}
        <span className="text-orangeI mr-2">VIP</span> განცხადებები
      </div>
      <CardSlider
        uniqueId={3}
        products={products?.filter(
          (product: TProductCard) => product.estate_vip == 1
        )}
      />
    </main>
  );
}
export default memo(Home);
