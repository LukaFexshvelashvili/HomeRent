import { useEffect } from "react";
import cookie from "../../../assets/images/logos/cookie.webp";

export default function CookieAgreement(props: { close: Function }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("cookiesAgreement", "1");
      props.close();
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="   w-[94%] max-w-[650px] rounded-section bg-whiteMain p-5 z-20 fixed overflow-hidden shadow-sectionShadow  bottom-5 right-10 mobile:left-2/4 mobile:-translate-x-[50%] ">
        <div className=" mobile:flex-col flex items-center gap-5 w-full  mx-auto ">
          <img src={cookie} alt="cookie" className="h-[50px] aspect-square" />
          <p className="text-textHeadCard  text-start text-[14px] mobile:text-center">
            საიტი იყენებს ქუქი ჩანაწერებს
            <br />
            მომსახურების გასაუმჯობესებლად
          </p>
          <div className="flex gap-3 justify-center mobile:w-full ml-auto mobile:mx-auto">
            <button
              onClick={() => {
                localStorage.setItem("cookiesAgreement", "1");
                props.close();
              }}
              className="bg-main mobile:w-full  text-[14px] h-[40px] w-[200px] text-buttonText tracking-wider rounded-md block transition-colors hover:bg-mainHover"
            >
              გასაგებია
            </button>
          </div>
          <div className="lineIndicator"></div>
        </div>
      </div>
    </>
  );
}
