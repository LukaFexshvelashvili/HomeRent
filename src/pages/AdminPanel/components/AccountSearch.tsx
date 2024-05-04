import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/serverFunctions";
import axiosCall from "../../../hooks/axiosCall";
import ContentLoader from "../../../components/global/ContentLoader";
import { Tnotification } from "../../../assets/types/types";
export type TNuser = {
  id: string | null;
  name: string;
  surname: string;
  mail: string | null;
  mobile: string | null;
  money: number;
  favorites: number[];
  notifications: Tnotification[];
  create_date: string | null;
  verified: boolean;
  banned: boolean;
};
export default function AccountSearch() {
  const [loader, setLoader] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [searchTrigger, giveSearchTrigger] = useState<boolean>(false);
  const [users, setUsers] = useState<TNuser[]>([]);
  const debouncedSearch = useDebounce(search, 300);
  useEffect(() => {
    setLoader(true);
    axiosCall
      .post(
        `admin_panel/get_users`,
        { search: search },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setLoader(false);
        if (res.data.status === 100) {
          setUsers(res.data.query);
        }
      });
  }, [debouncedSearch, searchTrigger]);
  return (
    <div>
      <p className=" text-textHead">ანგარიშების მართვა</p>
      <input
        type="text"
        placeholder="მოძებნა   (ID, ტელეფონით, სიტყვით)"
        className=" text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive my-3 text-blackMain"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-3">
        {loader ? (
          <ContentLoader />
        ) : (
          users.map((e: TNuser) => (
            <AccountBanner key={e.id} user={e} rerender={giveSearchTrigger} />
          ))
        )}
      </div>
    </div>
  );
}
function AccountBanner(props: { user: TNuser; rerender: Function }) {
  const handleBan = (id: string | null) => {
    if (id) {
      axiosCall
        .post(
          "admin_panel/block_user",
          { user_id: parseInt(id) },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(() => props.rerender((state: boolean) => !state));
    }
  };
  const handleUnBan = (id: string | null) => {
    if (id) {
      axiosCall
        .post(
          "admin_panel/unblock_user",
          { user_id: parseInt(id) },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(() => props.rerender((state: boolean) => !state));
    }
  };
  const handleDelete = (id: string | null) => {
    if (id) {
      axiosCall
        .post(
          "admin_panel/delete_user",
          { user_id: parseInt(id) },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(() => props.rerender((state: boolean) => !state));
    }
  };
  return (
    <div className="w-full h-10 rounded-lg flex items-center px-5 bg-mainClear  small:flex-wrap  small:h-auto  small:py-3 small:justify-center  small:gap-y-2">
      <div className="h-[28px]  small:h-[24px]   aspect-square rounded-circle bg-main p-[3px] small:p-[2px] flex justify-center items-center relative">
        <div className="h-full border-2 border-whiteMain  aspect-square rounded-circle bg-main select-none cursor-pointer "></div>
      </div>
      <div className="h-[28px]  small:h-[24px] text-main  aspect-square rounded-[5px] ml-4 bg-mainClear p-[3px] small:p-[2px] flex justify-center items-center relative">
        {props.user.id}
      </div>
      <p className="text-[14px] ml-4 text-textDesc">
        {props.user.name} {props.user.surname}
      </p>
      <p className="text-[14px] ml-4 text-textDesc">{props.user.mail}</p>
      <p className="text-[14px] ml-4 text-textDesc">{props.user.mobile}</p>
      <div className="flex gap-2 items-center ml-auto  small:mt-1  small:w-full small:justify-center">
        {props.user.banned ? (
          <button
            onClick={() => {
              handleUnBan(props.user.id);
            }}
            className="bg-greenClear font-mainBold tracking-wider text-greenI text-[12px] h-[28px] w-[120px] rounded-md transition-colors hover:bg-greenHover"
          >
            განბლოკვა
          </button>
        ) : (
          <button
            onClick={() => {
              handleBan(props.user.id);
            }}
            className="bg-pinkClear font-mainBold tracking-wider text-pinkI text-[12px] h-[28px] w-[120px] rounded-md transition-colors hover:bg-pinkHover"
          >
            დაბლოკვა
          </button>
        )}
        <button
          onClick={() => handleDelete(props.user.id)}
          className="bg-redClear font-mainBold tracking-wider text-redI text-[12px] h-[28px] w-[100px] rounded-md transition-colors hover:bg-redHover"
        >
          წაშლა
        </button>
      </div>
    </div>
  );
}
