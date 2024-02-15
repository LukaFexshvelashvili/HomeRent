import {
  BedIcon,
  BookmarkIcon,
  DateIcon,
  LoginEyeIcon,
  PhoneFIlledIcon,
  ReportIcon,
  RoomIcon,
  ShareIcon,
  SquareFrameIcon,
  StairsIcon,
  UserIcon,
} from "../../../assets/icons/Icons";
export default function ProductSideBar() {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="bg-whiteMain rounded-block  shadow-sectionShadow">
        <div className="py-4 px-5 ">
          <div className="flex items-center text-[13px] font-mainBold text-textDescCard gap-7">
            <span className="flex items-center">
              <LoginEyeIcon className=" h-[18px] aspect-square [&>path]:fill-textDesc mr-3" />{" "}
              2 234
            </span>
            <span className="flex items-center">
              <DateIcon className=" h-[18px] aspect-square [&>path]:fill-textDesc mr-3 translate-y-[-1px]" />{" "}
              23 იან 24, 14:54
            </span>
            <span>ID - 18495519</span>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <h2 className="text-[20px] text-textHeadCard tracking-wide font-mainBold">
              2 ოთახიანი ბინა საბურთალოზე
            </h2>
            <div className=" flex justify-center items-center bg-mainClear text-main h-[32px] w-[120px] font-mainBold tracking-wider rounded-lg text-Asmall">
              იყიდება
            </div>
          </div>
          <div className="flex items-center mt-5 justify-between px-3">
            <div className="flex items-center gap-4">
              <p className="text-[20px] font-mainBold text-textHeadCard">
                42 700$
              </p>
              <p className="text-[16px] font-mainBold text-textDescCard">
                1 მ² - 14 $
              </p>
            </div>
            <div className="h-[35px] w-[80px] flex items-center  outline outline-2 -outline-offset-2 outline-borderCol1 rounded-lg text-textDescCard cursor-pointer">
              <div className="flex-1 h-full flex items-center justify-center">
                ₾
              </div>
              <div className="flex-1 h-full flex items-center justify-center text-whiteMain bg-main rounded-lg relative">
                $
              </div>
            </div>
          </div>
          <div className="outline outline-2 -outline-offset-2 outline-borderCol1  rounded-xl  w-full h-[48px] mt-4 flex items-center">
            <button className="flex-1 flex justify-center items-center h-full rounded-xl bg-main text-whiteMain relative text-Asmaller tracking-wide font-mainSemiBold transition-colors hover:bg-mainHover">
              <PhoneFIlledIcon className=" h-[19px] aspect-square [&>path]:fill-whiteMain mr-3 translate-y-[-1px]" />{" "}
              511 22 ** ** ნომრის ჩვენება
            </button>
            <div className="flex-1">
              <div className=" pl-5 flex items-center cursor-pointer">
                <UserIcon className=" h-[19px] aspect-square [&>g>path]:fill-userIconFilled mr-3 translate-y-[-1px]" />
                <div className="flex flex-col ">
                  <p className="text-Asmallest text-textHeadCard font-mainBold leading-4">
                    ლუკა
                  </p>
                  <p className="text-Asmallest text-textDescCard font-mainBold leading-4">
                    ყველა განცხადების ნახვა
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-whiteMain rounded-block h-[70px] flex items-center  shadow-sectionShadow">
        <div className="flex-1 px-5 flex items-center border-r-2 border-lineBg">
          <SquareFrameIcon className=" h-[25px] aspect-square [&>path]:stroke-textHeadCard" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              ფართი
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              55 მ²
            </p>
          </div>
        </div>
        <div className="flex-1 px-5 flex items-center border-r-2 border-lineBg">
          <RoomIcon className=" h-[26px] aspect-auto [&>path]:fill-textHeadCard translate-y-[2px]" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              ოთახები
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              3
            </p>
          </div>
        </div>
        <div className="flex-1 px-5 flex items-center border-r-2 border-lineBg">
          <BedIcon className=" h-[26px] aspect-square [&>path]:fill-textHeadCard" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              საძინებელი
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              2
            </p>
          </div>
        </div>
        <div className="flex-1 px-5 flex items-center">
          <StairsIcon className=" h-[25px] aspect-square [&>path]:stroke-textHeadCard" />
          <div className="flex flex-col ml-3">
            <p className=" text-textDesc text-Asmaller font-mainBold tracking-wider">
              სართული
            </p>
            <p className="text-textHeadCard text-Asmall font-mainBold ml-1 tracking-wider">
              4 <span className="text-textDescCard">/ 9</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-whiteMain rounded-block h-[70px] flex items-center justify-between  shadow-sectionShadow">
        <div className="flex flex-col px-4 gap-[2px]">
          <p className=" text-textDesc text-Asmaller font-mainSemiBold tracking-wider">
            მდებარეობა
          </p>
          <p className="text-textHeadCard text-[13px] font-mainBold tracking-wider">
            თბილისი, მარჯანიშვილი
          </p>
        </div>
        <div className=" flex flex-col px-4 gap-[2px]">
          <p className=" text-textDesc text-Asmaller font-mainSemiBold tracking-wider">
            მდგომარეობა
          </p>
          <p className="text-textHeadCard text-[13px] font-mainBold tracking-wider">
            გარემონტებული
          </p>
        </div>
        <div className=" flex flex-col px-4 gap-[2px]">
          <p className=" text-textDesc text-Asmaller font-mainSemiBold tracking-wider">
            სტატუსი
          </p>
          <p className="text-textHeadCard text-[13px] font-mainBold tracking-wider">
            ახალი აშენებული
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 ">
        <div className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-whiteMain rounded-[8px] text-Asmall text-textHeadCard tracking-wider cursor-pointer">
          <BookmarkIcon className="h-[16px] aspect-square [&>path]:stroke-orangeI mr-3" />{" "}
          შენახვა
        </div>
        <div className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-whiteMain rounded-[8px] text-Asmall text-textHeadCard tracking-wider cursor-pointer">
          <ShareIcon className="h-[16px] aspect-square [&>path]:stroke-main mr-3" />{" "}
          გაზიარება
        </div>
        <div className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-whiteMain rounded-[8px] text-Asmall text-textHeadCard tracking-wider cursor-pointer">
          <ReportIcon className="h-[16px] aspect-square [&>path]:fill-reportIcon mr-3" />{" "}
          გასაჩივრება
        </div>
      </div>
    </div>
  );
}
