import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  BookmarkIcon,
  DocumentsIcon,
  HistoryIcon,
  SettingsIcon,
  UserLinearIcon,
} from "../../assets/icons/Icons";
import { useState } from "react";
import MyProducts from "./components/MyProducts";
import SavedProducts from "./components/SavedProducts";
import LastSeenProducts from "./components/LastSeenProducts";
import Settings from "./components/Settings";
import ProfileInfo from "./components/ProfileInfo";

export default function Profile() {
  const [activeNav, setActiveNav] = useState(1);
  const userData = useSelector((store: RootState) => store.user);
  return (
    <main className="min-h-screen flex gap-4">
      <section className="flex flex-col flex-[2] gap-4 ">
        <div className="h-[90px] rounded-section shadow-sectionShadow bg-whiteMain relative flex items-center px-7 py-5 ">
          <p className="text-sm text-textDescCard absolute top-2 right-4">
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
                {userData.lastname}
              </p>
            </div>
          </div>
        </div>
        <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative items-center overflow-hidden flex flex-col">
          {ProfileNavs.map((e: TProfileNav) => (
            <button
              key={e.id}
              onClick={() => setActiveNav(e.id)}
              className={` outline-none cursor-pointer transition-colors w-full text-start px-5 py-[13px] font-mainMedium flex items-center relative text-[14px] before:transition-transform  ${
                activeNav == e.id
                  ? "ActiveProfileNav before:bg-main bg-mainClear before:scale-y-1"
                  : "bg-transparent before:scale-y-0"
              }`}
            >
              <e.icon /> {e.name}
            </button>
          ))}
        </div>
      </section>
      <section className="flex flex-col flex-[5] gap-4 ">
        {activeNav == 1 && <MyProducts />}
        {activeNav == 2 && <SavedProducts />}
        {activeNav == 3 && <LastSeenProducts />}
        {activeNav == 4 && <Settings />}
        {activeNav == 5 && <ProfileInfo />}
      </section>
    </main>
  );
}
type TProfileNav = {
  id: number;
  name: string;
  icon: () => JSX.Element;
};
const ProfileNavs: TProfileNav[] = [
  {
    id: 1,
    name: "ჩემი განცხადებები",
    icon: () => <DocumentsIcon className="h-[26px] aspect-square mr-[10px]" />,
  },
  {
    id: 2,
    name: "შენახული განცხადებები",
    icon: () => (
      <BookmarkIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px]" />
    ),
  },
  {
    id: 3,
    name: "ბოლოს ნანახი",
    icon: () => (
      <HistoryIcon className="h-[27px] aspect-square mr-[10px]  [&>path]:stroke-[1.5px] p-[3px]" />
    ),
  },
  {
    id: 4,
    name: "პარამეტრები",
    icon: () => (
      <SettingsIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px]" />
    ),
  },
  {
    id: 5,
    name: "ჩემს შესახებ",
    icon: () => (
      <UserLinearIcon className="h-[26px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[2px]" />
    ),
  },
];
