import { useState } from "react";
import { MailIcon } from "../../assets/icons/Icons";
import { HomesbgDecor } from "../../assets/images/decorations/svg/Decorations";
import SideSection from "./components/SideSection";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Tuser } from "../../store/data/userSlice";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const user: Tuser = useSelector((store: RootState) => store.user);
  const [codeSended, setCodeSended] = useState(false);
  const darkMode: boolean = useSelector(
    (store: RootState) => store.webUI.darkMode
  );
  if (user.isLogged === null || user.isLogged == true) {
    return null;
  }
  return (
    <>
      <main className="m-0 p-0">
        <div className="h-[70px] w-full absolute  bg-transparent flex items-center top-0 z-10">
          <div className="login_container flex justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[36px] aspect-square rounded-[6px] bg-main cursor-pointer"></div>
              <div className="h-[20px] w-[110px] rounded-[3px] bg-whiteLoad cursor-pointer"></div>
            </div>
          </div>
        </div>
        <div className="flex h-screen">
          <section className="flex-1 relative flex justify-center items-center">
            {/* <RecoverPassword /> */}
            <div
              className={`flex flex-col items-center ${
                darkMode ? "" : "pb-[200px]"
              }  medium:pb-[100px] w-full`}
            >
              <h1 className=" text-[32px] mobile:text-[24px] text-textHead font-mainBold mb-2">
                პაროლის აღდგენა
              </h1>
              <p className="mb-6 text-textDesc text-Asmall font-mainBold tracking-wider mobile:text-[14px]">
                შეიყვანეთ თქვენი ელფოსტა
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[380px] flex flex-col gap-5 items-center relative z-10 mobile:gap-4 mobile:max-w-[360px] mobile:w-full mobile:px-[5px]"
              >
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <MailIcon className="h-[24px] mobile:h-[20px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="text"
                    placeholder="მეილი"
                    className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 mobile:text-[12px] mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                {codeSended && (
                  <div className="h-[40px] w-full rounded-normal flex items-center relative">
                    <input
                      type="text"
                      placeholder="შეიყვანეთ კოდი"
                      className="h-full w-full rounded-normal bg-mainClear outline-none px-3 text-center text-textDesc tracking-wider text-Asmall transition-colors focus:bg-mainClearActive placeholder:text-mainClear2"
                    />
                  </div>
                )}
                <button
                  onClick={() => setCodeSended(true)}
                  className="linearButton mt-2 font-mainBold text-buttonText h-[40px] w-[200px] mobile:h-[36px] mobile:w-[180px] mobile:text-[14px] rounded-normal tracking-wider transition-shadow hover:shadow-buttonShadow"
                >
                  {codeSended ? "დადასტურება" : "კოდის მიღება"}
                </button>
              </form>
              <p className="text-main text-Asmall mt-5 font-mainBold tracking-wider mobile:text-[12px] mobile:invisible cursor-pointer">
                <Link to={"/Login"}>უკან დაბრუნება</Link>
              </p>
            </div>
            <div className="absolute bottom-0 z-0 pointer-events-none w-full">
              {!darkMode && <HomesbgDecor className="w-full opacity-20" />}
            </div>
          </section>
          <SideSection />
        </div>
      </main>
    </>
  );
}

// function RecoverPassword() {
//   return (
//     <div className="flex flex-col items-center pb-[200px] medium:pb-[100px] w-full">
//       <h1 className=" text-[32px] text-main font-mainBold mb-2 mobile:text-[24px] ">
//         პაროლის განახლება
//       </h1>
//       <p className="mb-6 text-textDesc text-Asmall font-mainBold tracking-wider  mobile:text-[14px]">
//         შეიყვანეთ ახალი პაროლი
//       </p>
//       <form
//         onSubmit={(e) => e.preventDefault()}
//         className="w-[380px] flex flex-col gap-5 items-center relative z-10  mobile:gap-4 mobile:max-w-[360px] mobile:w-full mobile:px-[5px]"
//       >
//         <div className="h-[40px] w-full rounded-normal flex items-center relative">
//           <LockIcon className="w-[24px] mobile:h-[20px]  aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
//           <input
//             type="password"
//             placeholder="პაროლი"
//             className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 mobile:text-[12px] mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
//           />
//         </div>
//         <div className="h-[40px] w-full rounded-normal flex items-center relative">
//           <LockIcon className="w-[24px] mobile:h-[20px]  aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
//           <input
//             type="password"
//             placeholder="გაიმეორეთ პაროლი"
//             className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 mobile:text-[12px] mobile:pl-10 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
//           />
//         </div>
//         <div className="flex flex-col w-full">
//           <div className="w-full h-2 rounded-md bg-whiteLoad">
//             <div className="w-[10%] h-full rounded-md bg-pinkI"></div>
//           </div>
//           <p className="text-textDesc text-Asmall font-mainBold tracking-wider opacity-70 mt-2 mobile:text-[12px]">
//             პაროლი სუსტია
//           </p>
//         </div>

//         <button className="linearButton mt-2 font-mainBold text-buttonText h-[40px] w-[200px] mobile:h-[36px] mobile:w-[180px] mobile:text-[14px] rounded-normal tracking-wider transition-shadow hover:shadow-buttonShadow">
//           დადასტურება
//         </button>
//       </form>
//     </div>
//   );
// }
