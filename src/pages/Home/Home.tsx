import { CrownIcon } from "../../assets/icons/Icons";
import CardSlider from "./components/CardSlider";
import MainSlider from "./components/MainSlider";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className=" py-8">
      <MainSlider />
      <SearchInput />

      <div className="flex items-center text-textHead font-mainBold text-Anormal my-4">
        <CrownIcon className=" h-[20px] [&>path]:fill-redI mr-3 translate-y-[-1px]" />{" "}
        <span className="text-redI mr-2">VIP+</span> განცხადებები
      </div>
      <CardSlider />
    </div>
  );
}
