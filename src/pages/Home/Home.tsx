import { useEffect, useState } from "react";
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
import { TProductData } from "../Profile/components/MyProducts";

export default function Home() {
  const [products, setProducts] = useState<null | TProductData[]>(null);
  useEffect(() => {
    axiosCall.get("fetch/products").then((res) => {
      if (res.data) {
        setProducts(res.data.products);
      }
    });
  }, []);
  return (
    <main>
      <MainSlider />
      <SearchInput />

      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <CrownIcon className=" h-[18px] mobileSmall:h-[17px] [&>path]:fill-redI mr-3 mobileSmall:mr-2 translate-y-[-1px] " />{" "}
        <span className="text-redI mr-2">VIP+</span> განცხადებები
      </div>
      <CardSlider uniqueId={1} products={products} />
      <ChooseSection />
      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <NewsIcon className=" h-[32px] mobileSmall:h-[30px] mobileSmall:mr-1 [&>path]:fill-purpleI mr-2 translate-y-[-1px]" />{" "}
        ახალი
      </div>
      <CardSlider uniqueId={2} products={products} />
      <MaclerCard />
      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <StarIcon className=" h-[32px] mobileSmall:h-[30px] mobileSmall:mr-1 [&>path]:fill-pinkI mr-2 translate-y-[-1px]" />{" "}
        პოპულარული
      </div>
      <CardSlider uniqueId={3} products={products} />
      <CreateOffer />
      <div className="flex items-center text-textHead font-mainBold text-[17px] mobileSmall:text-[15px] my-4">
        <ListIcon className=" h-[36px] mobileSmall:h-[34px] mobileSmall:mr-1  [&>path]:fill-orangeI mr-2 translate-y-[-1px]" />{" "}
        <span className="text-orangeI mr-2">VIP</span> განცხადებები
      </div>
      <CardSlider uniqueId={3} products={products} />
    </main>
  );
}
