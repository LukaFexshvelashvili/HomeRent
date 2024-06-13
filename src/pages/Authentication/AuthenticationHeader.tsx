import { Link } from "react-router-dom";
import WebIcon from "../../assets/icons/WebIcon";

export default function AuthenticationHeader() {
  return (
    <div className="h-[70px] w-full absolute   bg-transparent flex items-center top-0 z-10">
      <div className="login_container flex justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-3"
        >
          <WebIcon className="h-[34px] aspect-square" />
          <div className=" mobile:hidden rounded-[3px] cursor-pointer text-blackMain font-logoBold text-[18px] tracking-[3px]">
            <span className="text-main ">ON</span>HOME
          </div>
        </Link>
      </div>
    </div>
  );
}
