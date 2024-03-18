import BlueHouseDecoration from "../../../assets/images/decorations/bluehouse.png";

export default function MaclerCard() {
  return (
    <section className="my-[60px] mb-[80px] w-full h-[500px] maclerLinear rounded-[20px] flex items-center p-8 shadow-[12px_12px_0px] shadow-mainClear small:flex-col small:h-auto small:gap-10 ">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={BlueHouseDecoration}
          alt="blue house decoraion"
          className="w-[100%] mobileSmall:w-[90%] max-h-[520px] max-w-[560px] mediumSmall:max-w-[360px]"
        />
      </div>
      <div className="flex-1  pl-[80px] small:w-full small:pl-0 small:flex small:flex-col small:items-center">
        <h2 className="small:text-center text-[24px] mobileSmall:text-[22px] font-mainBold text-main mb-5">
          მაკლერის სერვისი
        </h2>
        <p className="small:text-center text-textDesc text-[15px] mobileSmall:text-[15px] tracking-wider max-w-[600px]">
          სერვისში გთავაზობთ დახმარებას თქვენი უძრავი ქონების გაყიდვა/გაქირავება
          -ში
        </p>
        <div className="flex flex-col gap-3 my-8 mobileSmall:items-start">
          <div className="flex items-center  text-textDesc text-[15px] gap-3 small:justify-center mobileSmall:text-[15px]">
            <div className="h-[14px] aspect-square rounded-circle border-2  border-main"></div>{" "}
            სოციალურ მედიაში განთავსება
          </div>
          <div className="flex items-center text-textDesc text-[15px] gap-3 small:justify-center mobileSmall:text-[15px]">
            <div className="h-[14px] aspect-square rounded-circle border-2  border-main"></div>{" "}
            პრიორიტეტული გამოჩენა (საიტზე)
          </div>
          <div className="flex items-center text-textDesc text-[15px] gap-3 small:justify-center mobileSmall:text-[15px]">
            <div className="h-[14px] aspect-square rounded-circle border-2  border-main"></div>{" "}
            კლიენტებთან მოლაპარაკება
          </div>
          <div className="flex items-center text-textDesc text-[15px] gap-3 small:justify-center mobileSmall:text-[15px]">
            <div className="h-[14px] aspect-square rounded-circle border-2  border-main"></div>{" "}
            სწრაფი მომსახურება
          </div>
        </div>
        <button className="small:mx-auto block mt-3 bg-main rounded-[5px] w-[190px] h-[40px] mobileSmall:h-[36px] mobileSmall:w-[160px] mobileSmall:text-[14px] text-buttonText text-[14px] tracking-widest transition-colors hover:bg-mainHover">
          სრულად
        </button>
      </div>
    </section>
  );
}
