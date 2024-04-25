import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  BookmarkIcon,
  DocumentsIcon,
  HistoryIcon,
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
    if (location.pathname.includes("SavedProducts")) {
      setActiveNav(2);
    }
    if (location.pathname.includes("LastSeenProducts")) {
      setActiveNav(3);
    }
    if (location.pathname.includes("Settings")) {
      setActiveNav(4);
    }
    if (location.pathname.includes("ProfileInfo")) {
      setActiveNav(5);
    }
  }, [navigate]);
  const userData = useSelector((store: RootState) => store.user);
  return (
    <main className="min-h-screen flex gap-4 mobile:flex-col">
      <section className="flex flex-col flex-[2] gap-4 ">
        <div className="h-[90px] rounded-section shadow-sectionShadow bg-whiteMain relative flex items-center px-7 py-5 ">
          <p className="text-sm text-textDescCard absolute top-2 right-4 small:text-[10px]">
            ID - {userData.id}
          </p>
          <div className="flex gap-2 items-center">
            <div className="">
              <div className="h-[38px]  aspect-square rounded-circle bg-main p-[3px] flex justify-center items-center relative">
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
        </div>
        <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative items-center overflow-hidden flex flex-col">
          {ProfileNavs.map((e: TProfileNav) => (
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
    name: "შენახული განცხადებები",
    link: "SavedProducts",
    icon: () => (
      <BookmarkIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },
  {
    id: 3,
    name: "ბოლოს ნანახი",
    link: "LastSeenProducts",
    icon: () => (
      <HistoryIcon className="h-[27px] aspect-square mr-[10px]  [&>path]:stroke-[1.5px] p-[3px] [&>path]:fill-textHead" />
    ),
  },
  {
    id: 4,
    name: "პარამეტრები",
    link: "Settings",
    icon: () => (
      <SettingsIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px] [&>path]:stroke-textHead" />
    ),
  },
  {
    id: 5,
    name: "ჩემს შესახებ",
    link: "ProfileInfo",
    icon: () => (
      <UserLinearIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[2px] [&>path]:fill-textHead" />
    ),
  },
];
