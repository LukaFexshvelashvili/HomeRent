import { LockIcon, MailIcon } from "../../assets/icons/Icons";
import { HomesbgDecor } from "../../assets/images/decorations/svg/Decorations";
import SideSection from "./components/SideSection";

export default function Login() {
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
            <div className="flex flex-col items-center pb-[200px]">
              <h1 className=" text-[32px] text-textHead font-mainBold mb-10">
                ავტორიზაცია
              </h1>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[380px] flex flex-col gap-5 items-center relative z-10"
              >
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <MailIcon className="h-[24px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="text"
                    placeholder="მეილი"
                    className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="h-[40px] w-full rounded-normal flex items-center relative">
                  <LockIcon className="w-[24px] aspect-square absolute left-3 [&>path]:stroke-textDescCard" />
                  <input
                    type="password"
                    placeholder="პაროლი"
                    className="h-full w-full rounded-normal bg-LoginInput outline-none px-3 pl-11 text-textDesc tracking-wider text-Asmall transition-colors focus:bg-LoginInputActive"
                  />
                </div>
                <div className="flex items-center w-full justify-between ">
                  <div className="flex items-center text-textDesc text-Asmall font-mainBold tracking-wider cursor-pointer">
                    <div className=" h-[16px] aspect-square border-[3px] rounded-md border-main mr-2"></div>
                    დამახსოვრება
                  </div>
                  <p className="text-main text-Asmall font-mainBold tracking-wider cursor-pointer">
                    პაროლის აღდგენა
                  </p>
                </div>
                <button className="linearButton font-mainBold text-whiteMain h-[40px] w-[200px] rounded-normal tracking-wider transition-shadow hover:shadow-buttonShadow">
                  შესვლა
                </button>
              </form>

              <p className="mt-8 text-textDesc text-Asmall font-mainBold tracking-wider">
                არ გაქვს ანგარიში?{" "}
                <span className="text-main cursor-pointer">რეგისტრაცია</span>
              </p>
            </div>
            <div className="absolute bottom-0 z-0 pointer-events-none w-full">
              <HomesbgDecor className="w-full opacity-20" />
            </div>
          </section>
          <SideSection />
        </div>
      </main>
    </>
  );
}
