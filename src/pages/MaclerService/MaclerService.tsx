import {
  ClientContact,
  MediaFiles,
  Speedometer,
} from "../../assets/icons/Icons";
import {
  MaclerHouse1,
  MaclerHouse2,
  MaclerHouse3,
} from "../../assets/images/decorations/svg/Decorations";

type Tservice = {
  icon: JSX.Element;
  title: string;
  color: string;
};
export default function MaclerService() {
  const services: Tservice[] = [
    {
      icon: <ClientContact className="h-[30px]" />,
      title: "კლიენტთან მოლაპარაკება",
      color: "#3DBE00",
    },
    {
      icon: <MediaFiles className="h-[30px]" />,
      title: "სოციალურ ქსელებში განთავსება",
      color: "#3DBE00",
    },
    {
      icon: <Speedometer className="h-[30px] " />,
      title: "სწრაფი მომსახურება",
      color: "#3DBE00",
    },
    {
      icon: (
        <div className="h-[28px] w-[80px] text-[14px] rounded-md bg-redI text-whiteMain flex justify-center items-center">
          VIP+
        </div>
      ),
      title: "VIP+ სტატუსი",
      color: "#FF003D",
    },
  ];
  return (
    <main className=" mt-[30px]">
      <section className="flex items-center">
        <div className="">
          <h2 className="text-[28px] font-mainBold text-maclerMain mb-3">
            მაკლერის სერვისი
          </h2>
          <p className=" text-textDesc text-[16px] tracking-wider max-w-[600px]">
            სერვისში გთავაზობთ დახმარებას თქვენი უძრავი ქონების
            გაყიდვა/გაქირავება -ში
          </p>
          <div className="flex flex-col gap-3 my-5">
            <div className="flex items-center text-textDesc gap-3">
              <div className="h-[14px] aspect-square rounded-circle border-2 border-maclerMain"></div>{" "}
              სოციალურ მედიაში განთავსება
            </div>
            <div className="flex items-center text-textDesc gap-3">
              <div className="h-[14px] aspect-square rounded-circle border-2 border-maclerMain"></div>{" "}
              პრიორიტეტული გამოჩენა (საიტზე)
            </div>
            <div className="flex items-center text-textDesc gap-3">
              <div className="h-[14px] aspect-square rounded-circle border-2 border-maclerMain"></div>{" "}
              კლიენტებთან მოლაპარაკება
            </div>
            <div className="flex items-center text-textDesc gap-3">
              <div className="h-[14px] aspect-square rounded-circle border-2 border-maclerMain"></div>{" "}
              სწრაფი მომსახურება
            </div>
          </div>
          <button className="mt-5 bg-maclerMain rounded-[5px] w-[190px] h-[40px] text-whiteMain text-[15px] tracking-widest transition-colors hover:bg-maclerMainHover">
            სრულად
          </button>
        </div>
        <div className="flex justify-center items-end maclerSideBorder ">
          <MaclerHouse3 className="h-[250px] translate-x-[40%]" />
          <MaclerHouse2 className="h-[230px] relative z-[1]" />
          <MaclerHouse1 className="h-[250px] translate-x-[-40%]" />
        </div>
      </section>
      <div className=" w-full rounded-section bg-whiteMain shadow-sectionShadow mt-[50px] p-3 px-5">
        <p className="text-maclerMain font-mainBold tracking-wider">
          მომსახურება
        </p>
        <p className="mt-2 text-textDesc text-[14px]">
          ჩვენ გთავაზობთ მომსახურებას და დახმარებას თქვენი უძრავი ქონების
          სწრაფად გაყიდვა/გაქირავება ში, სერვისში შედის:
        </p>
        <div className="flex justify-center gap-10 items-center mt-7 mb-3">
          {services.map((e: Tservice, i: number) => (
            <div key={i} className="flex items-center gap-3">
              {e.icon}{" "}
              <p className="text-[15px]" style={{ color: e.color }}>
                {e.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
