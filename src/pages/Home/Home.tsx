import { CrownIcon, NewsIcon } from "../../assets/icons/Icons";
import CardSlider from "./components/CardSlider";
import ChooseSection from "./components/ChooseSection";
import MaclerCard from "./components/MaclerCard";
import MainSlider from "./components/MainSlider";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className=" py-8">
      <MainSlider />
      <SearchInput />

      <div className="flex items-center text-textHead font-mainBold text-Anormal my-4">
        <CrownIcon className=" h-[20px] [&>path]:fill-redI mr-2 translate-y-[-1px]" />{" "}
        <span className="text-redI mr-2">VIP+</span> განცხადებები
      </div>
      <CardSlider uniqueId={1} />
      <ChooseSection />
      <div className="flex items-center text-textHead font-mainBold text-Anormal my-4">
        <NewsIcon className=" h-[32px] [&>path]:fill-purpleI mr-2 translate-y-[-1px]" />{" "}
        ახალი
      </div>
      <CardSlider uniqueId={2} />
      <MaclerCard />
    </div>
  );
}
