import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

export default function NotFound() {
  const userData = useSelector((store: RootState) => store.user);
  return (
    <div className="text-textHead h-screen min-h-[300px] text-center flex flex-col justify-center items-center text-[16px]">
      <p>
        გამარჯობა {userData.name}, <br /> თქვენი ანგარიში (ID - {userData.id})
        დაიბლოკა <span className="text-redI ">საეჭვო აქტივობების</span> გამო{" "}
        <br />
        <Link to={"/"} className="cursor-pointer text-main underline">
          მოგვწერეთ დახმარებისთვის
        </Link>{" "}
        ან{" "}
        <Link to={"/Logout"} className="cursor-pointer text-main underline">
          გადით ანგარიშიდან
        </Link>
      </p>
    </div>
  );
}
