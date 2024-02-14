import {
  Home1Decor,
  Home2Decor,
  Home3Decor,
  Home4Decor,
  SkeletonDecor,
} from "../../../assets/images/decorations/svg/HomeDecorations";

export default function CreateOffer() {
  return (
    <section className="flex items-center gap-20 my-[120px]">
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-center gap-16 items-end border-b-8 border-mainClear">
          <Home3Decor className=" h-[90px] aspect-auto translate-y-[1px]" />
          <Home4Decor className=" h-[80px] aspect-auto" />
          <Home1Decor className=" h-[90px] aspect-auto" />
          <Home2Decor className=" h-[90px] aspect-auto translate-y-[2px]" />
        </div>
        <h2 className="mt-5 text-[26px] tracking-wider font-mainBold text-main mb-3">
          გამოაქვეყნე შენი უძრავი ქონება
        </h2>
        <p className=" text-textDesc text-[16px] max-w-[500px] leading-7 tracking-wider">
          ჩვენი სერვისი საშუალებას გაძლევთ გამოაქვეყნოთ თქვენი უძრავი ქონება
          რათა დაგეხმაროთ მის გაყიდვა/გაქირავება -ში
        </p>
        <button className="mt-9 bg-main rounded-[5px] w-[190px] h-[40px] text-whiteMain text-[15px] tracking-widest transition-colors hover:bg-mainHover">
          დაწყება
        </button>
      </div>
      <div className="flex flex-col flex-1 pl-7">
        <SkeletonDecor className=" w-full aspect-auto" />
      </div>
    </section>
  );
}
