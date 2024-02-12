import { useState } from "react";
import {
  BookmarkIcon,
  DocumentsIcon,
  HelpIcon,
  LogoutIcon,
  MessageIcon,
  MoonIcon,
  NotificationIcon,
  PlusIcon,
  UserLinearIcon,
} from "../assets/icons/Icons";
import georgianFlag from "../assets/images/languages/georgia.png";
import englishFlag from "../assets/images/languages/english.png";
export default function Navbar() {
  const [activePop, setActivePop] = useState<null | string>(null);
  const [activeLang, setActiveLang] = useState<boolean>(false);
  const [langImg, setLangImg] = useState<string>(georgianFlag);

  return (
    <nav className="h-[70px] w-full sticky bg-navBg shadow-navbarShadow flex items-center ">
      <div className="content_container flex justify-between">
        <div className="flex items-center gap-3">
          <div className="h-[40px] aspect-square rounded-[6px] bg-main cursor-pointer"></div>
          <div className="h-[20px] w-[110px] rounded-[3px] bg-whiteLoad cursor-pointer"></div>
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
              className={` absolute h-auto w-[150px] overflow-hidden flex flex-col bg-white rounded-normal shadow-sectionShadow top-[60px] left-0 duration-200 transition-[opacity,visibility]  ${
                activeLang ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <button
                onClick={() => {
                  setActiveLang(false);
                  setLangImg(georgianFlag);
                }}
                className="px-4 text-start py-3 transition-colors hover:bg-whiteHover text-Asmall flex items-center"
              >
                <img
                  className="max-h-[20px] aspect-square mr-3"
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
                className="px-4 text-start py-3 transition-colors hover:bg-whiteHover text-Asmall flex items-center"
              >
                <img
                  className="max-h-[20px] aspect-square mr-3"
                  src={englishFlag}
                  alt="uk flag"
                />
                English
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="flex items-center justify-center gap-3 tracking-wider w-[165px] h-[38px] bg-orangeClear text-orangeI rounded-normal text-[15px] transition-colors hover:bg-orangeHover">
            <HelpIcon className="h-[18px] aspect-square" />
            დახმარება
          </button>
          <button className="flex items-center justify-center gap-3 tracking-wider w-[165px] h-[38px] bg-greenClear text-greenI rounded-normal text-[15px] transition-colors hover:bg-greenHover">
            <PlusIcon className="h-[16px] aspect-square" />
            დამატება
          </button>
          <div className="flex mx-2 items-center justify-center gap-2">
            <button className="relative h-[36px] aspect-square cursor-default flex items-center justify-center">
              <BookmarkIcon className="h-[21px] aspect-square stroke-navIcon cursor-pointer" />
            </button>
            <div className="relative h-[36px] aspect-square cursor-default flex items-center justify-center">
              <NotificationIcon
                onClick={() =>
                  setActivePop((state) =>
                    state !== "notifications" ? "notifications" : null
                  )
                }
                className="h-[21px] aspect-square fill-navIcon cursor-pointer"
              />
              <div
                className={` absolute h-auto pb-[40px] w-[250px] overflow-hidden bg-white rounded-normal shadow-sectionShadow top-[60px] right-0 duration-200 transition-[opacity,visibility]  ${
                  activePop == "notifications"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <div className="flex flex-col ">
                  {[0, 0, 0, 0].map((item, i) => (
                    <button
                      key={i}
                      className=" px-5 py-3 transition-colors hover:bg-whiteHover"
                    >
                      <div className="flex items-center ">
                        <div className="h-[32px] aspect-square bg-main rounded-md"></div>
                        <div className="flex flex-col text-start ml-3">
                          <p className="text-Asmall font-mainBold text-userName">
                            MESSAGE_TITLE
                          </p>
                          <p className="text-Asmaller font-mainBold text-userLastName">
                            MESSAGE_CR_DESCRIPTION
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <button className="absolute bottom-0 w-full h-[40px] bg-mainClear text-main left-0 tracking-wider font-mainBold text-Asmall">
                  ყველას ნახვა
                </button>
              </div>
            </div>
          </div>

          <div className="h-[36px]  aspect-square rounded-circle outline outline-3 outline-main  flex justify-center items-center relative">
            <div
              onClick={() =>
                setActivePop((state) =>
                  state !== "profile" ? "profile" : null
                )
              }
              className="h-[30px] aspect-square rounded-circle bg-main select-none cursor-pointer "
            ></div>
            <div
              className={`absolute  overflow-hidden h-auto w-[250px] bg-white rounded-normal shadow-sectionShadow top-[60px] right-0 duration-200 transition-[opacity,visibility]  ${
                activePop == "profile"
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              }`}
            >
              <div className="px-6 pt-5 pb-2 flex items-center">
                <div className="h-[34px] aspect-square rounded-circle outline outline-3 outline-main  flex justify-center items-center relative">
                  <div className="h-[28px] aspect-square rounded-circle bg-main select-none"></div>
                </div>
                <div className=" flex flex-col ml-3">
                  <p className="text-Asmall font-mainBold text-userName">
                    USER_NAME
                  </p>
                  <p className="text-Asmaller font-mainBold text-userLastName">
                    USER_LASTNAME
                  </p>
                </div>
              </div>
              <div className=" mx-auto my-2 mb-5 bg-lineBg h-[3px] w-[50px] rounded-md"></div>
              <div className="flex flex-col">
                {profileButtons.map((e: TProfileButton, i: number) => (
                  <button
                    key={i}
                    className="w-full border-t border-lineBg px-5 py-3 text-textHead text-start text-[14px] tracking-wider flex items center transition-colors hover:bg-whiteHover"
                  >
                    {e.icon}
                    {e.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

type TProfileButton = {
  name: string;
  icon: JSX.Element;
};
const profileButtons = [
  {
    name: "ჩემი პროფილი",
    icon: (
      <UserLinearIcon className=" h-[24px] aspect-square fill-textHead mr-3" />
    ),
  },
  {
    name: "ჩემი განცხადებები",
    icon: (
      <DocumentsIcon className=" h-[24px] aspect-square stroke-textHead mr-3" />
    ),
  },
  {
    name: "შავი თემა",
    icon: <MoonIcon className=" h-[24px] aspect-square fill-textHead mr-3" />,
  },
  {
    name: "კონტაქტი",
    icon: (
      <MessageIcon className=" h-[24px] aspect-square stroke-textHead mr-3" />
    ),
  },
  {
    name: "გასვლა",
    icon: (
      <LogoutIcon className=" h-[24px] aspect-square stroke-textHead mr-3" />
    ),
  },
];
