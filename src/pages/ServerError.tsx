import { PhoneIcon } from "../assets/icons/Icons";
import { FacebookIcon, InstagramIcon } from "../components/popups/SharePopup";

export default function ServerError() {
  return (
    <div className="flex justify-center items-center bg-bodyBg h-screen min-h-[500px] flex-col gap-5">
      <h2 className="text-main font-mainBold text-[32px]">
        სერვერზე შეფერხებაა
      </h2>
      <p className="text-textDesc">
        სერვერზე შეფერხებაა სცადეთ საიტზე შესვლა მოგვიანებით
      </p>
      <p className="text-textDesc">
        (ბოდიშს გიხდით შეფერხებისთვის ხარვეზი მალევე გამოსწორდება)
      </p>
      <p className="text-main font-mainBold text-[20px] mt-10">საკონტაქტო</p>
      <div className="flex items-center gap-5 flex-wrap justify-center">
        <button className="flex items-center h-[50px] text-[15px] mobile:text-[14px] tracking-wider font-mainBold w-[100%] max-w-[400px] rounded-lg border-2 border-greenI text-greenI  ">
          <PhoneIcon className="h-[21px] aspect-square [&>path]:stroke-greenI [&>path]:transition-opacity mx-[20px] mobile:mx-[10px] " />
          დაგვიკავშირდით მობილურით
        </button>
        <button className="flex items-center h-[50px] text-[15px] mobile:text-[14px] tracking-wider font-mainBold w-[100%] max-w-[400px] rounded-lg border-2 border-blueI text-blueI  ">
          <FacebookIcon className="h-[21px] aspect-square [&>path]:fill-blueI [&>path]:transition-opacity mx-[20px] mobile:mx-[10px] " />
          მოგვწერეთ Facebook - ზე
        </button>
        <button className="flex items-center h-[50px] text-[15px] mobile:text-[14px] tracking-wider font-mainBold w-[100%] max-w-[400px] rounded-lg border-2 border-pinkI text-pinkI ">
          <InstagramIcon className="h-[21px] aspect-square [&>g]:stroke-pinkI [&>g]:transition-opacity mx-[20px] mobile:mx-[10px] " />
          მოგვწერეთ Instagram - ზე
        </button>
      </div>
    </div>
  );
}
