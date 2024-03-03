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
              <div className="h-[39px] aspect-square rounded-circle outline outline-3 outline-main  flex justify-center items-center relative">
                <div className="h-[32px] aspect-square rounded-circle bg-main select-none"></div>
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
              className={` outline-none cursor-pointer transition-colors w-full text-start px-9 py-[13px] font-mainMedium flex items-center relative text-[15px] before:transition-transform  ${
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
      <section className="flex flex-col flex-[4] gap-4 ">
        <div className=""></div>
      </section>
    </main>
  );
}
type TProfileNav = {
  id: number;
  name: string;
  icon: (props: any) => JSX.Element;
};
const ProfileNavs: TProfileNav[] = [
  {
    id: 1,
    name: "ჩემი განცხადებები",
    icon: (props: any) => (
      <DocumentsIcon className="h-[28px] aspect-square mr-[10px]" />
    ),
  },
  {
    id: 2,
    name: "შენახული განცხადებები",
    icon: (props: any) => (
      <BookmarkIcon className="h-[28px] aspect-square mr-[10px] [&>path]:stroke-[1.2px] p-[3px]" />
    ),
  },
  {
    id: 3,
    name: "ბოლოს ნანახი",
    icon: (props: any) => (
      <HistoryIcon className="h-[29px] aspect-square mr-[10px]  [&>path]:stroke-[1.5px] p-[3px]" />
    ),
  },
  {
    id: 4,
    name: "პარამეტრები",
    icon: (props: any) => (
      <SettingsIcon className="h-[28px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[3px]" />
    ),
  },
  {
    id: 5,
    name: "ჩემს შესახებ",
    icon: (props: any) => (
      <UserLinearIcon className="h-[28px] aspect-square mr-[10px] [&>path]:stroke-[1.5px] p-[2px]" />
    ),
  },
];
