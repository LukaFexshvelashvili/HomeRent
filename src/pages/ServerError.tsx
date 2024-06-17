import { PhoneFIlledIcon } from "../assets/icons/Icons";
import HoverTitle from "../components/global/HoverTitle";
import { FacebookIcon, InstagramIcon } from "../components/popups/SharePopup";

export default function ServerError() {
  return (
    <div className="flex justify-center items-center bg-bodyBg h-screen min-h-[500px] flex-col gap-5">
      <h2 className="text-main font-mainBold text-[32px] text-center">
        სერვერზე შეფერხებაა
      </h2>
      <p className="text-textDesc text-center">
        სერვერზე შეფერხებაა სცადეთ საიტზე შესვლა მოგვიანებით
      </p>
      <p className="text-textDesc text-center">
        (ბოდიშს გიხდით შეფერხებისთვის ხარვეზი მალევე გამოსწორდება)
      </p>
      <p className="text-main font-mainBold text-[20px] mt-10 text-center">
        საკონტაქტო
      </p>
      <div className="flex items-center gap-5 flex-wrap justify-center">
        <button className="relative  group flex items-center justify-center h-[50px] aspect-square text-[15px] mobile:text-[14px] tracking-wider font-mainBold max-w-[400px] rounded-lg bg-greenI text-greenI  ">
          <PhoneFIlledIcon className="h-[21px] aspect-square [&>path]:fill-buttonText [&>path]:transition-opacity  " />
          <HoverTitle title="დარეკვა" />
        </button>
        <button className="relative group  flex items-center justify-center h-[50px] aspect-square text-[15px] mobile:text-[14px] tracking-wider font-mainBold  rounded-lg bg-blueI text-blueI  ">
          <FacebookIcon className="h-[23px] aspect-square [&>path]:fill-buttonText [&>path]:transition-opacity  " />
          <HoverTitle title="facebook" />
        </button>
        <button className="relative  group  bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center h-[50px] aspect-square text-[15px] mobile:text-[14px] tracking-wider font-mainBold  rounded-lg bg-pinkI text-pinkI ">
          <InstagramIcon className="h-[23px] aspect-square [&>g]:stroke-buttonText [&>g]:transition-opacity " />
          <HoverTitle title="instagram" />
        </button>
      </div>
    </div>
  );
}
