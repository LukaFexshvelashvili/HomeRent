import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  BookmarkIcon,
  ChatIcon,
  DocumentsIcon,
  HistoryIcon,
  MoneyDollarIcon,
  SettingsIcon,
  UserLinearIcon,
} from "../../assets/icons/Icons";
import { useLayoutEffect, useState } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(1);
  useLayoutEffect(() => {
    if (location.pathname.includes("MyProducts")) {
      setActiveNav(1);
    }
    if (location.pathname.includes("Balance")) {
      setActiveNav(2);
    }
    if (location.pathname.includes("SavedProducts")) {
      setActiveNav(3);
    }
    if (location.pathname.includes("LastSeenProducts")) {
      setActiveNav(4);
    }
    if (location.pathname.includes("Notifications")) {
      setActiveNav(5);
    }
    if (location.pathname.includes("Settings")) {
      setActiveNav(6);
    }
    if (location.pathname.includes("ProfileInfo")) {
      setActiveNav(7);
    }
    let forScroll: any = null;

    if (window.innerWidth <= 800) {
      forScroll = setTimeout(() => {
        window.scrollTo(0, 400);
      }, 0);
    }
    return () => {
      clearTimeout(forScroll);
    };
  }, [navigate, location.pathname]);

  const userData = useSelector((store: RootState) => store.user);
  return (
    <main className="min-h-screen flex gap-4 mobile:flex-col">
      <section className="flex flex-col flex-[2] gap-4 ">
        {userData.isLogged ? (
          <div className="h-[100px] rounded-section shadow-sectionShadow bg-whiteMain relative flex flex-wrap items-center px-7 py-5 ">
            <p className="text-sm text-textDescCard absolute top-2 right-4 small:text-[10px]">
              ID - {userData.id}
            </p>
            <div className="flex gap-2 items-center">
              <div className="">
                <div className="h-[38px]  aspect-square rounded-circle bg-main p-[4px] flex justify-center items-center relative">
                  <div className="h-full border-2 border-whiteMain aspect-square rounded-circle bg-main select-none cursor-pointer "></div>
                </div>
              </div>
              <div className="ml-1">
                <p className=" font-mainBold text-textHeadCard leading-[22px] text-[15px]">
                  {userData.name}
                </p>
                <p className=" font-mainBold text-textDescCard leading-[22px] text-[14px]">
                  {userData.surname}
                </p>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[13px] text-textDesc mt-2 text-center px-4">
                ბალანსი{": "}
                <span className="text-main ml-1 font-mainSemiBold tracking-wider">
                  {(userData.money / 100)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "₾"}
                </span>
              </p>
            </div>
          </div>
        ) : null}

        <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative items-center overflow-hidden flex flex-col">
          {userData.isLogged
            ? ProfileNavs.map((e: TProfileNav) => (
                <Link
                  key={e.id}
                  onClick={() => setActiveNav(e.id)}
                  to={e.link}
                  className="w-full"
                >
                  <button
                    className={` outline-none cursor-pointer transition-colors w-full text-start px-5 py-[13px] text-textHead font-mainMedium flex items-center relative text-[14px] before:transition-transform  ${
                      activeNav == e.id
                        ? "ActiveProfileNav before:bg-main bg-mainClear before:scale-y-1"
                        : "bg-transparent before:scale-y-0"
                    }`}
                  >
                    <e.icon /> {e.name}
                  </button>
                </Link>
              ))
            : ProfileNavsGuest.map((e: TProfileNav) => (
                <Link
                  key={e.id}
                  onClick={() => setActiveNav(e.id)}
                  to={e.link}
                  className="w-full"
                >
                  <button
                    className={` outline-none cursor-pointer transition-colors w-full text-start px-5 py-[13px] text-textHead font-mainMedium flex items-center relative text-[14px] before:transition-transform  ${
                      activeNav == e.id
                        ? "ActiveProfileNav before:bg-main bg-mainClear before:scale-y-1"
                        : "bg-transparent before:scale-y-0"
                    }`}
                  >
                    <e.icon /> {e.name}
                  </button>
                </Link>
              ))}
        </div>
        {!userData.isLogged ? (
          <Link to={"/Login"} className="rounded-[10px] ">
            <button className="w-full h-[50px] rounded-[10px] text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover">
              ანგარიშში შესვლა
            </button>
          </Link>
        ) : null}
      </section>
      <section className="flex flex-col flex-[5] gap-4 ">
        <Outlet />
      </section>
    </main>
  );
}
type TProfileNav = {
  id: number;
  name: string;
  link: string;
  icon: () => JSX.Element;
};
const ProfileNavs: TProfileNav[] = [
  {
    id: 1,
    name: "ჩემი განცხადებები",
    link: "MyProducts",
    icon: () => <DocumentsIcon className="h-[26px] aspect-square mr-[10px]" />,
  },
  {
    id: 2,
    name: "ბალანსი",
    link: "Balance",
    icon: () => (
      <MoneyDollarIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-textHead" />
    ),
  },
  {
    id: 3,
    name: "შენახული განცხადებები",
    link: "SavedProducts",
    icon: () => (
      <BookmarkIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },
  {
    id: 4,
    name: "ბოლოს ნანახი",
    link: "LastSeenProducts",
    icon: () => (
      <HistoryIcon className="h-[27px] aspect-square mr-[10px]  [&>path]:stroke-[1.5px] p-[3px] [&>path]:fill-textHead" />
    ),
  },
  {
    id: 5,
    name: "შეტყობინებები",
    link: "Notifications",
    icon: () => (
      <ChatIcon className="h-[27px] aspect-square mr-[10px]  [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },

  {
    id: 6,
    name: "პარამეტრები",
    link: "Settings",
    icon: () => (
      <SettingsIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },
  {
    id: 7,
    name: "ჩემს შესახებ",
    link: "ProfileInfo",
    icon: () => (
      <UserLinearIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[2px] [&>path]:fill-textHead" />
    ),
  },
];
const ProfileNavsGuest: TProfileNav[] = [
  {
    id: 3,
    name: "შენახული განცხადებები",
    link: "SavedProducts",
    icon: () => (
      <BookmarkIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },

  {
    id: 5,
    name: "პარამეტრები",
    link: "Settings",
    icon: () => (
      <SettingsIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },
];
