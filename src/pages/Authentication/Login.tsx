import { Link, useNavigate } from "react-router-dom";
import { CheckIcon, LockIcon, MailIcon } from "../../assets/icons/Icons";
import {
  Home3Decor,
  HomesbgDecor,
} from "../../assets/images/decorations/svg/Decorations";
import SideSection from "./components/SideSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useRef, useState } from "react";
import axiosCall from "../../hooks/axiosCall";
import { Tuser } from "../../store/data/userSlice";
import { makeUserSession } from "../../hooks/serverFunctions";

export default function Login() {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [agreement, setAgreement] = useState<boolean>(false);
  const dispatch = useDispatch();
  const darkMode: boolean = useSelector(
    (store: RootState) => store.webUI.darkMode
  );

  const mailRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  if (user.isLogged === null || user.isLogged == true) {
    return null;
  }

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mailRef.current?.value && passwordRef.current?.value) {
      var mail: string = mailRef.current.value;
      var password: string = passwordRef.current.value;
      const formData = new FormData();

      formData.append("mail", mail);
      formData.append("password", password);

      axiosCall
        .post("authentication/user_login", formData, { withCredentials: true })
        .then((res) => {
          if (res.data.status === 3) {
            makeUserSession(dispatch, res.data.user_data);
            navigate("/");
          }
          if (res.data.status === 0) {
            setError("მომხმარებლის მეილი ან პაროლი არასწორია");
          }
          if (res.data.status === -1) {
            setError("სერვერზე წარმოიშვა პრობლემა, სცადეთ მოგვიანებით");
          }
        });
    } else {
      setError("შეავსეთ ყველა ველი");
    }
  };

  return (
    <>
      <main className="m-0 p-0">
        <div className="h-[70px] w-full absolute   bg-transparent flex items-center top-0 z-10">
          <div className="login_container flex justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[36px] aspect-square rounded-[6px] bg-main cursor-pointer"></div>
              <div className="h-[20px] w-[110px] rounded-[3px] bg-whiteLoad cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="flex h-screen overflow-hidden min-h-[600px]">
          <section className="flex-1 relative flex justify-center items-center">
            <div
              className={`flex flex-col items-center ${
                darkMode ? "" : "pb-[200px]"
              }  medium:pb-[100px] mobile:w-full`}
            >
              <h1 className=" text-[32px] text-textHead font-mainBold mb-10 mobile:text-[22px] mobile:mb-6">
                ავტორიზაცია
              </h1>

              <form
                onSubmit={handleForm}
                className="w-[380px] flex flex-col gap-5 items-center relative z-10 mobile:gap-4 mobile:max-w-[360px] mobile:w-full mobile:px-[5px]"
              >
                {error !== "" && (
                  <div className="max-w-full w-full h-auto p-3 rounded-lg bg-pinkClear text-pinkI border-2 border-pinkI  flex justify-center items-center text-center text-[14px] tracking-wider font-mainSemiBold">
                    {error}
                  </div>
                )}
                <div className="h-[40px] w-full rounded-normal flex items-center relative ">
                  <MailIcon className="h-[24px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="text"
                    placeholder="მეილი"
                    name="email"
                    ref={mailRef}
                    className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-Asmall mobile:text-[12px] transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <LockIcon className="h-[24px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="password"
                    placeholder="პაროლი"
                    name="password"
                    ref={passwordRef}
                    className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-Asmall mobile:text-[12px] transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="flex items-center w-full justify-between ">
                  <div className="flex items-center text-textDesc text-Asmall mobile:text-[12px] font-mainBold tracking-wider cursor-pointer">
                    <div
                      onClick={() => setAgreement((state) => !state)}
                      className={` h-[16px] transition-colors aspect-square justify-center items-center flex border-[3px] rounded-md border-main mr-2 cursor-pointer mobile:mr-1 mobile:border-[2px] ${
                        agreement ? "bg-main" : "bg-transparent"
                      } `}
                    >
                      {agreement && (
                        <CheckIcon className="h-[8px]  aspect-square" />
                      )}
                    </div>
                    <p
                      onClick={() => setAgreement((state) => !state)}
                      className="cursor-pointer "
                    >
                      დამახსოვრება
                    </p>
                  </div>
                  <p className="text-main text-Asmall font-mainBold tracking-wider mobile:text-[12px] mobile:invisible cursor-pointer">
                    <Link to={"/ForgotPassword"}>პაროლის აღდგენა</Link>
                  </p>
                </div>
                <button className="linearButton mobile:mt-4  font-mainBold text-buttonText h-[40px] w-[200px] mobile:h-[36px] mobile:w-[180px] mobile:text-[14px] rounded-normal tracking-wider transition-shadow hover:shadow-buttonShadow">
                  შესვლა
                </button>
              </form>

              <p className="mt-8  text-textDesc text-Asmall font-mainBold tracking-wider mobile:mt-6 mobile:text-[12px]">
                არ გაქვს ანგარიში?{" "}
                <span className="text-main cursor-pointer">
                  <Link to="/Register">რეგისტრაცია</Link>
                </span>
              </p>
              <p className="text-main hidden mobile:block text-Asmall font-mainBold mt-3 tracking-wider mobile:text-[12px] cursor-pointer">
                პაროლის აღდგენა
              </p>
            </div>
            <div className="absolute bottom-0 z-0 pointer-events-none w-full">
              {!darkMode && (
                <HomesbgDecor className="absolute bottom-0 w-full opacity-20" />
              )}
              <Home3Decor className="absolute max-h-[220px] bottom-0 max-w-[50%] left-[50%] translate-x-[-50%] translate-y-[4px] hidden mobile:block " />
            </div>
          </section>
          <SideSection />
        </div>
      </main>
    </>
  );
}
