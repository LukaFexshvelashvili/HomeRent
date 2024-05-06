import { useState } from "react";
import {
  BookmarkIcon,
  DocumentsIcon,
  HelpIcon,
  LogoutIcon,
  MessageIcon,
  MoonIcon,
  NotificationResponsiveIcon,
  PlusIcon,
  SunIcon,
  UserLinearIcon,
} from "../assets/icons/Icons";
import georgianFlag from "../assets/images/languages/georgia.png";
import englishFlag from "../assets/images/languages/english.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { RealEstateTypes } from "../pages/Search/components/FiltersArray";
import { toggleDarkMode } from "../store/data/webUISlice";

import { NotificationBar, ProfileBar } from "./NavbarComponents";
import { OutsideClickClose } from "./global/OutsideClickClose";
export default function Navbar() {
  const userData = useSelector((store: RootState) => store.user);
  const darkmode: boolean = useSelector(
    (store: RootState) => store.webUI.darkMode
  );

  const [activePop, setActivePop] = useState<null | string>(null);
  const [activeLang, setActiveLang] = useState<boolean>(false);
  const [langImg, setLangImg] = useState<string>(georgianFlag);

  return (
    <nav className="h-[60px] w-full sticky bg-navBg shadow-navbarShadow flex items-center top-0 z-20">
      <div className="content_container flex justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-[36px] aspect-square rounded-[6px] bg-main cursor-pointer"></div>
            <div className=" mobile:hidden h-[20px] w-[110px] rounded-[3px] bg-whiteLoad cursor-pointer"></div>
          </Link>
          <OutsideClickClose
            setActivePop={setActiveLang}
            activePop={activeLang}
          >
            <div className="relative h-[36px] aspect-square flex items-center justify-center">
              <button
                onClick={() => setActiveLang((state) => !state)}
                className=" h-[26px] aspect-square rounded-circle border border-buttonStroke flex items-center justify-center cursor-pointer"
              >
                <img
                  className="max-h-[20px] aspect-square"
                  src={langImg}
                  alt="georgia"
                />
              </button>
              <div
                className={` absolute h-auto w-[150px] overflow-hidden flex flex-col bg-whiteMain rounded-normal shadow-sectionShadow top-[50px] left-0 duration-200 transition-[opacity,visibility]  ${
                  activeLang ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <button
                  onClick={() => {
                    setActiveLang(false);
                    setLangImg(georgianFlag);
                  }}
                  className="px-4 text-start py-3 transition-colors hover:bg-whiteHover text-[12px] flex items-center text-textHead"
                >
                  <img
                    className="max-h-[18px] aspect-square mr-3"
                    src={georgianFlag}
                    alt="georgian flag"
                  />
                  ქართული
                </button>
                <button
                  onClick={() => {
                    setActiveLang(false);
                    setLangImg(englishFlag);
                  }}
                  className="px-4 text-start py-3 transition-colors hover:bg-whiteHover text-[12px] flex items-center text-textHead"
                >
                  <img
                    className="max-h-[18px] aspect-square mr-3"
                    src={englishFlag}
                    alt="uk flag"
                  />
                  English
                </button>
              </div>
            </div>
          </OutsideClickClose>
        </div>
        <div className="mobile:hidden flex items-center gap-4">
          <button className=" font-mainSemiBold flex items-center justify-center gap-3 tracking-widest w-[140px] h-[34px] bg-orangeClear text-orangeI rounded-[8px] text-[12px] transition-colors hover:bg-orangeHover">
            <HelpIcon className="h-[16px] aspect-square" />
            დახმარება
          </button>
          {userData.isLogged && (
            <Link to={"/AddProduct"}>
              <button className=" font-mainSemiBold flex items-center justify-center gap-3 tracking-widest w-[140px] h-[34px] bg-greenClear text-greenI rounded-[8px] text-[12px] transition-colors hover:bg-greenHover">
                <PlusIcon className="h-[13px] aspect-square" />
                დამატება
              </button>
            </Link>
          )}
          <div className="flex mx-2 items-center justify-center gap-2">
            <Link to={"/profile/SavedProducts"}>
              <button className="relative h-[34px] aspect-square cursor-pointer flex items-center justify-center select-none">
                {userData.favorites.length > 0 ? (
                  <div className="absolute h-[16px] aspect-square top-[2px] right-[2px] z-20 text-[9px] flex justify-center items-center text-buttonText font-mainRegular rounded-circle bg-main">
                    {userData.favorites.length}
                  </div>
                ) : null}

                <BookmarkIcon className="h-[20px] aspect-square stroke-navIcon cursor-pointer [&>path]:stroke-navIcon p-[0.2px]" />
              </button>
            </Link>{" "}
            <NotificationBar
              userData={userData}
              activePop={activePop}
              setActivePop={setActivePop}
            />
          </div>

          <ProfileBar
            userData={userData}
            activePop={activePop}
            setActivePop={setActivePop}
            darkmode={darkmode}
          />
        </div>
        <div className="hidden mobile:block">
          <ResponsiveNavbar userData={userData} />
        </div>
      </div>
    </nav>
  );
}

function ResponsiveNavbar(props: { userData: any }) {
  const darkmode: boolean = useSelector(
    (store: RootState) => store.webUI.darkMode
  );

  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setActive((state: boolean) => !state)}
        className={` h-[45px] translate relative aspect-square gap-[6px] justify-center p-[10px] flex flex-col z-[31] transition-colors rounded-lg ${
          active ? " bg-whiteBgLow" : "bg-transparent"
        } `}
      >
        <span
          className={`transition-transform block h-[2px] rounded-md w-full bg-blackMain ${
            active && " rotate-45 translate-y-[8px]"
          }  `}
        ></span>
        <span
          className={`transition-transform  block h-[2px] rounded-md w-8/12 bg-blackMain ${
            active && " scale-x-0"
          }  `}
        ></span>
        <span
          className={`transition-transform  block h-[2px] rounded-md w-4/12 bg-blackMain ${
            active && " -rotate-45 -translate-y-[8px] w-full"
          }  `}
        ></span>
      </button>
      <div
        className={`z-30 fixed h-full w-full bg-whiteMain top-0 left-0 transition-transform duration-300 ResponsiveNavbar pb-5 overflow-auto  ${
          active ? "translate-x-0" : "translate-x-full"
        }  `}
      >
        <div className=" z-30 relative content_container flex justify-between pt-[80px]  flex-col ">
          <div className="flex gap-2 items-center justify-center">
            <div className="">
              <div className="h-[44px]  aspect-square rounded-circle bg-main p-[3px] flex justify-center items-center relative">
                <div className="h-full border-[3px] border-whiteMain aspect-square rounded-circle bg-main select-none cursor-pointer "></div>
              </div>
            </div>
            <div className="ml-1">
              <p className=" font-mainBold text-textHeadCard leading-[25px] text-[16px]">
                {props.userData.name}
              </p>
              <p className=" font-mainBold text-textDescCard leading-[25px] text-[15px]">
                {props.userData.surname}
              </p>
            </div>
          </div>
          <div className="bg-lineBg h-[5px] rounded-md w-[50px] mx-auto my-6"></div>
          <div className="flex flex-col gap-[2px]">
            {profileResponsiveButtons.map((e: TProfileButton, i: number) =>
              e.link !== "ChangeDarkTheme" ? (
                <Link key={i} onClick={() => setActive(false)} to={e.link}>
                  <button
                    key={i}
                    className={` outline-none cursor-pointer text-textHead transition-colors w-full text-start px-5 py-[10px] font-mainMedium flex items-center relative text-[15px] `}
                  >
                    {e.icon} {e.name}
                  </button>
                </Link>
              ) : (
                <button
                  key={i}
                  onClick={() => dispatch(toggleDarkMode())}
                  className={` outline-none cursor-pointer text-textHead transition-colors w-full text-start px-5 py-[10px] font-mainMedium flex items-center relative text-[15px] `}
                >
                  {darkmode ? (
                    <SunIcon className=" h-[26px] aspect-square fill-textHead mr-2" />
                  ) : (
                    e.icon
                  )}
                  {darkmode ? "ღია თემა" : "მუქი თემა"}
                </button>
              )
            )}
          </div>
          <div className=" flex items-center justify-center mt-8 gap-4">
            <button className=" font-mainSemiBold flex items-center justify-center gap-2 tracking-widest w-[160px] h-[40px] bg-orangeClear text-orangeI rounded-[8px] text-[14px] transition-colors hover:bg-orangeHover">
              <HelpIcon className="h-[18px] aspect-square" />
              დახმარება
            </button>
            <button className=" font-mainSemiBold flex items-center justify-center gap-2 tracking-widest w-[160px] h-[40px] bg-greenClear text-greenI rounded-[8px] text-[14px] transition-colors hover:bg-greenHover">
              <PlusIcon className="h-[16px] aspect-square" />
              დამატება
            </button>
          </div>
          <div className="bg-lineBg h-[5px] rounded-md w-[50px] mx-auto mb-5 mt-7"></div>

          <p className="text-center  text-textDesc tracking-wider text-[16px]">
            კატეგორიები
          </p>
          <div className="flex gap-3 flex-wrap justify-center mt-5">
            {RealEstateTypes.map(
              (
                e: { icon: (props: any) => JSX.Element; name: string },
                i: number
              ) => (
                <button
                  key={i}
                  className={`  p-2 px-4 rounded-xl transition-colors bg-mainClear`}
                >
                  <e.icon className={` h-[24px] aspect-square  `} />
                  <p className={`text-Asmall ml-7 tracking-wide text-main`}>
                    {e.name}
                  </p>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

type TProfileButton = {
  name: string;
  icon: JSX.Element;
  link: string;
};
const profileResponsiveButtons: TProfileButton[] = [
  {
    link: "/Profile",
    name: "ჩემი პროფილი",
    icon: (
      <UserLinearIcon className=" h-[26px] aspect-square fill-textHead mr-2" />
    ),
  },
  {
    link: "/Profile/MyProducts",
    name: "ჩემი განცხადებები",
    icon: (
      <DocumentsIcon className=" h-[26px] aspect-square stroke-textHead mr-2" />
    ),
  },
  {
    link: "ChangeDarkTheme",
    name: "მუქი თემა",
    icon: <MoonIcon className=" h-[26px] aspect-square fill-textHead mr-2" />,
  },
  {
    link: "/Contact",
    name: "კონტაქტი",
    icon: (
      <MessageIcon className=" h-[26px] aspect-square stroke-textHead mr-2" />
    ),
  },
  {
    link: "/Notifications",
    name: "შეტყობინებები",
    icon: (
      <NotificationResponsiveIcon className=" h-[26px] flex items-center justify-center stroke-textHead mr-2" />
    ),
  },
  {
    link: "/Logout",
    name: "გასვლა",
    icon: (
      <LogoutIcon className=" h-[26px] aspect-square stroke-textHead mr-2" />
    ),
  },
];
