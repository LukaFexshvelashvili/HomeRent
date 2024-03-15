import imageExample from "../../../assets/images/estates/2.jpeg";
import imageExample2 from "../../../assets/images/estates/3.png";
import imageExample3 from "../../../assets/images/estates/4.jpg";

export default function ChooseSection() {
  return (
    <section className="my-[70px] mobile:my-[50px]">
      <div className="flex gap-4 mobile:gap-2 w-full [&>div]:rounded-section [&>div>div]:rounded-section  mobile:flex-col mobile:items-stretch">
        <div className="flex flex-[2] flex-wrap gap-4 mobile:gap-2 [&>div]:h-[270px] mobile:flex-col mobile:items-stretch">
          <div className="flex w-full bg-whiteLoad mobile:flex-1 mobile:aspect-video overflow-hidden cursor-pointer group relative">
            <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-sectionFadeStart to-sectionFadeEnd z-[2]"></div>
            <div className="absolute bottom-3 left-4 text-WhiteFade tracking-widest font-mainRegular text-[15px] mobile:text-[14px] z-[3] ">
              კერძო სახლები
            </div>
            <img
              src={imageExample}
              className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Real estate image"
            />
          </div>
          <div className="flex flex-1 mobile:w-full  mobile:aspect-video bg-whiteLoad overflow-hidden cursor-pointer group relative">
            <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-sectionFadeStart to-sectionFadeEnd z-[2]"></div>
            <div className="absolute bottom-3 left-4 text-WhiteFade tracking-widest font-mainRegular text-[15px] mobile:text-[14px] z-[3] ">
              იყიდება ბინები
            </div>
            <img
              src={imageExample}
              className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Real estate image"
            />
          </div>
          <div className="flex flex-1 mobile:w-full  mobile:aspect-video bg-whiteLoad overflow-hidden cursor-pointer group relative">
            <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-sectionFadeStart to-sectionFadeEnd z-[2]"></div>
            <div className="absolute bottom-3 left-4 text-WhiteFade tracking-widest font-mainRegular text-[15px] mobile:text-[14px] z-[3] ">
              ქირავდება ბინები
            </div>
            <img
              src={imageExample}
              className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Real estate image"
            />
          </div>
        </div>
        <div className="flex flex-1 bg-whiteLoad overflow-hidden cursor-pointer group relative mobile:aspect-video">
          <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-sectionFadeStart to-sectionFadeEnd z-[2]"></div>
          <div className="absolute bottom-3 left-4 text-WhiteFade tracking-widest font-mainRegular text-[15px] mobile:text-[14px] z-[3] ">
            სასტუმროები
          </div>
          <img
            src={imageExample2}
            className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt="Real estate image"
          />
        </div>
      </div>
      <div className=" mobile:aspect-video w-full mt-4 mobile:mt-2 bg-whiteLoad overflow-hidden cursor-pointer group rounded-section relative">
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-sectionFadeStart to-sectionFadeEnd z-[2]"></div>
        <div className="absolute bottom-3 left-4 text-WhiteFade tracking-widest font-mainRegular text-[15px] mobile:text-[14px] z-[3] ">
          მიწის ნაკვეთები
        </div>
        <img
          src={imageExample3}
          className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt="Real estate image"
        />
      </div>
    </section>
  );
}
