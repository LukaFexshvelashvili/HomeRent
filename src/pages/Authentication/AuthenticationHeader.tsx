import { Link } from "react-router-dom";

export default function AuthenticationHeader() {
  return (
    <div className="h-[70px] w-full absolute   bg-transparent flex items-center top-0 z-10">
      <div className="login_container flex justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-3"
        >
          <div className=" h-[32px] w-[140px] flex justify-center items-center bg-gradient-to-tr from-main to-mainHover rounded-[10px] mobile:hidden  cursor-pointer text-buttonText font-logoBold text-[18px] tracking-[2.5px] [text-shadow:_2px_2px_10px_rgb(0_0_0_/_10%)] shadow-[6px_6px_0px_var(--mainClear)] transition-all hover:shadow-[0px_0px_0px_var(--mainClear)]">
            ONHOME
          </div>
        </Link>
      </div>
    </div>
  );
}
