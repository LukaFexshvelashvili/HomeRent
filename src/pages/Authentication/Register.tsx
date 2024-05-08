import { Link, useNavigate } from "react-router-dom";
import {
  CheckIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
} from "../../assets/icons/Icons";
import {
  Home5Decor,
  HomesbgDecor,
} from "../../assets/images/decorations/svg/Decorations";
import SideSection from "./components/SideSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Tuser } from "../../store/data/userSlice";
import axiosCall from "../../hooks/axiosCall";
import { makeUserSession } from "../../hooks/serverFunctions";
import { useEffect, useRef, useState } from "react";

export default function Register() {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [passwordStatus, setPasswordStatus] = useState<number>(0);
  const [agreement, setAgreement] = useState<boolean>(false);
  const dispatch = useDispatch();

  const nameRef = useRef<null | HTMLInputElement>(null);
  const surnameRef = useRef<null | HTMLInputElement>(null);
  const mailRef = useRef<null | HTMLInputElement>(null);
  const mobileRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);
  const confirmPasswordRef = useRef<null | HTMLInputElement>(null);

  function hasNumbersAndLetters(str: string) {
    var digitRegex = /\d/;
    var letterRegex = /[a-zA-Z]/;

    return digitRegex.test(str) && letterRegex.test(str);
  }
  function hasUppercase(str: string) {
    var uppercaseRegex = /[A-Z]/;

    return uppercaseRegex.test(str);
  }
  const darkMode: boolean = useSelector(
    (store: RootState) => store.webUI.darkMode
  );

  useEffect(() => {
    let passwordVerifier: number[] = [0, 0, 0];
    if (passwordInput.length >= 8) {
      passwordVerifier[1] = 1;
    } else {
      passwordVerifier[1] = 0;
    }
    if (hasNumbersAndLetters(passwordInput)) {
      passwordVerifier[2] = 1;
    } else {
      passwordVerifier[2] = 0;
    }
    if (hasUppercase(passwordInput)) {
      passwordVerifier[3] = 1;
    } else {
      passwordVerifier[3] = 0;
    }

    setPasswordStatus(
      passwordVerifier.filter((item: number) => item == 1).length
    );
  }, [passwordInput]);

  if (user.isLogged === null || user.isLogged == true) {
    return null;
  }

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (agreement) {
      let formInputs = {
        name: nameRef.current?.value,
        surname: surnameRef.current?.value,
        mail: mailRef.current?.value,
        mobile: mobileRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: confirmPasswordRef.current?.value,
      };

      if (
        formInputs.name &&
        formInputs.surname &&
        formInputs.mail &&
        formInputs.password &&
        formInputs.confirmPassword
      ) {
        if (formInputs.password.length > 8) {
          if (formInputs.password === formInputs.confirmPassword) {
            setError("");
            const formData = new FormData();

            formData.append("name", formInputs.name);
            formData.append("surname", formInputs.surname);
            formData.append("mail", formInputs.mail);
            if (formInputs.mobile) {
              formData.append("mobile", formInputs.mobile);
            } else {
              formData.append("mobile", "");
            }
            if (localStorage.getItem("favorites")) {
              const userFavorites: any = localStorage.getItem("favorites");
              formData.append("favorites", userFavorites);
            }
            formData.append("password", formInputs.password);

            axiosCall
              .post("authentication/user_register", formData, {
                withCredentials: true,
              })
              .then((res) => {
                if (res.data.status === 3) {
                  let userData = {
                    id: res.data.user_id,
                    name: formInputs.name,
                    surname: formInputs.surname,
                    mail: formInputs.mail,
                    mobile: formInputs.mobile,
                    verified: 0,
                    create_date: res.data.create_date,
                  };
                  makeUserSession(dispatch, userData);
                  navigate("/");
                }
                if (res.data.status === 2) {
                  setError("მითითებულ მეილზე ანგარიში უკვე არსებობს");
                }
                if (res.data.status === -1) {
                  setError("სერვერზე წარმოიშვა პრობლემა, სცადეთ მოგვიანებით");
                }
              });
          } else {
            setError("პაროლები არ ემთხვევა");
          }
        } else {
          setError("პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს");
        }
      } else {
        setError("შეავსეთ ყველა სვალდებულო ველი");
      }
    } else {
      setError("გთხოვთ დაეთანხმოთ წესებს და პირობებს");
    }
  };

  return (
    <>
      <main className="m-0 p-0">
        <div className="h-[70px] w-full absolute  bg-transparent flex items-center top-0 z-10">
          <div className="login_container flex justify-between ">
            <Link to={"/"}>
              <div className="flex items-center gap-3">
                <div className="h-[36px] aspect-square rounded-[6px] bg-main cursor-pointer"></div>
                <div className="h-[20px] w-[110px] rounded-[3px] bg-whiteLoad cursor-pointer"></div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex h-screen overflow-hidden min-h-[900px]">
          <section className="flex-1 relative flex justify-center items-center">
            <div
              className={`flex flex-col items-center ${
                darkMode ? "" : "pb-[150px]"
              }  medium:pb-[80px]`}
            >
              <h1 className=" text-[32px] text-textHead font-mainBold mb-10 mobile:text-[22px] mobile:mb-6">
                ანგარიშის შექმნა
              </h1>
              <form
                onSubmit={handleForm}
                className="w-[380px] flex flex-col gap-5 items-center relative z-10 mobile:gap-4 mobile:max-w-[360px] mobile:w-[100%] mobile:px-[5px]"
              >
                {error !== "" && (
                  <div className="max-w-full w-full h-auto p-3 rounded-lg bg-pinkClear text-pinkI border-2 border-pinkI  flex justify-center items-center text-center text-[14px] tracking-wider font-mainSemiBold">
                    {error}
                  </div>
                )}
                <div className="flex items-center gap-5 mobile:gap-3">
                  <div className="h-[40px] w-full rounded-normal flex items-center relative">
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="სახელი"
                      className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                    />
                  </div>
                  <div className="h-[40px] w-full rounded-normal flex items-center relative">
                    <input
                      ref={surnameRef}
                      type="text"
                      placeholder="გვარი"
                      className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                    />
                  </div>
                </div>
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <MailIcon className="h-[22px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="email"
                    ref={mailRef}
                    placeholder="მეილი"
                    className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-[13px] transition-colors focus:bg-LoginInputActive"
                  />
                </div>

                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <PhoneIcon className="h-[22px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    ref={mobileRef}
                    type="text"
                    placeholder="ტელეფონის ნომერი (არჩევითი)"
                    className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <LockIcon className="w-[22px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="password"
                    placeholder="პაროლი"
                    ref={passwordRef}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <LockIcon className="w-[22px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    ref={confirmPasswordRef}
                    type="password"
                    placeholder="გაიმეორეთ პაროლი"
                    className="h-full w-full rounded-normal mobile:text-[12px] bg-LoginInput outline-none px-3 pl-11 mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="w-full h-2 rounded-md bg-whiteLoad">
                    <div
                      className={`  duration-500            
                    ${passwordStatus == 0 && "bg-pinkI w-[10%]"}
                    ${passwordStatus == 1 && "bg-orangeI w-[30%]"}
                    ${passwordStatus == 2 && "bg-yellowI w-[65%]"}
                    ${passwordStatus == 3 && "bg-greenI w-[100%]"}
                    h-full rounded-md transition-all`}
                    ></div>
                  </div>
                  <p className="text-textDesc text-Asmall font-mainBold tracking-wider opacity-70 mt-2 mobile:text-[12px]">
                    {passwordStatus == 0 && "პაროლი სუსტია"}
                    {passwordStatus == 1 && "პაროლი სუსტია"}
                    {passwordStatus == 2 && "საშუალო დონის პაროლია"}
                    {passwordStatus == 3 && "კარგი პაროლია "}
                  </p>
                </div>
                <div className="flex items-center w-full justify-between ">
                  <div className="flex items-center text-textDesc text-Asmall font-mainBold tracking-wider  mobile:text-[12px] select-none">
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
                      ვეთანხმები
                    </p>
                    <span className="text-main cursor-pointer ml-2 mobile:text-[12px]">
                      წესებს და პირობებს
                    </span>
                  </div>
                </div>
                <button className=" mt-4 mobile:mt-0 linearButton font-mainBold text-whiteMain h-[40px] w-[200px] mobile:text-[14px] mobile:h-[36px] rounded-normal tracking-wider transition-shadow hover:shadow-buttonShadow">
                  რეგისტრაცია
                </button>
              </form>

              <p className="mt-8 mobile:mt-6 text-textDesc text-Asmall font-mainBold tracking-wider mobile:text-[12px]">
                უკვე გაქვს ანგარიში?{" "}
                <span className="text-main cursor-pointer">
                  <Link to="/Login">ავტორიზაცია</Link>
                </span>
              </p>
            </div>

            <div className="absolute bottom-0 z-0 pointer-events-none w-full">
              {!darkMode && (
                <HomesbgDecor className="absolute bottom-0 w-full opacity-20" />
              )}
              <Home5Decor className="absolute max-h-[160px] bottom-0 max-w-[50%] left-[50%] translate-x-[-50%] hidden mobile:block " />
            </div>
          </section>
          <SideSection />
        </div>
      </main>
    </>
  );
}
