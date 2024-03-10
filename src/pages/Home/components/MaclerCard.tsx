import BlueHouseDecoration from "../../../assets/images/decorations/bluehouse.png";

export default function MaclerCard() {
  return (
    <section className="my-[60px] mb-[80px] w-full h-[500px] maclerLinear rounded-[20px] flex items-center p-8 shadow-[12px_12px_0px] shadow-mainClear">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={BlueHouseDecoration}
          alt="blue house decoraion"
          className="max-h-[520px] max-w-[560px]"
        />
      </div>
      <div className="flex-1  pl-[80px]">
        <h2 className="text-[24px] font-mainBold text-main mb-5">
          მაკლერის სერვისი
        </h2>
        <p className=" text-textDesc text-[16px] tracking-wider max-w-[600px]">
          სერვისში გთავაზობთ დახმარებას თქვენი უძრავი ქონების გაყიდვა/გაქირავება
          -ში
        </p>
        <div className="flex flex-col gap-3 my-5">
          <div className="flex items-center text-textDesc gap-3">
            <div className="h-[14px] aspect-square rounded-circle border-2 border-main"></div>{" "}
            სოციალურ მედიაში განთავსება
          </div>
          <div className="flex items-center text-textDesc gap-3">
            <div className="h-[14px] aspect-square rounded-circle border-2 border-main"></div>{" "}
            პრიორიტეტული გამოჩენა (საიტზე)
          </div>
          <div className="flex items-center text-textDesc gap-3">
            <div className="h-[14px] aspect-square rounded-circle border-2 border-main"></div>{" "}
            კლიენტებთან მოლაპარაკება
          </div>
          <div className="flex items-center text-textDesc gap-3">
            <div className="h-[14px] aspect-square rounded-circle border-2 border-main"></div>{" "}
            სწრაფი მომსახურება
          </div>
        </div>
        <button className="mt-3 bg-main rounded-[5px] w-[190px] h-[40px] text-whiteMain text-[15px] tracking-widest transition-colors hover:bg-mainHover">
          სრულად
        </button>
      </div>
    </section>
  );
}
