type TuserInfo = {
  title: string;
  value: string;
};
export default function ProfileInfo() {
  const userInfo: TuserInfo[] = [
    { title: "სახელი", value: "ლუკა" },
    { title: "გვარი", value: "ფეხშველაშვილი" },
    { title: "მეილი", value: "luk****@mail.ru" },
    { title: "ტელეფონის ნომერი", value: "598 15 9* **" },
  ];
  return (
    <div className=" rounded-section shadow-sectionShadow bg-whiteMain relative flex gap-6 flex-col  px-7 py-5 ">
      <h2 className="text-textHeadCard">ინფორმაცია</h2>
      <div className="flex items-center gap-3 flex-wrap small:justify-center ">
        {userInfo.map((e: TuserInfo, i: number) => (
          <div
            key={i}
            className=" bg-profileInfoBlock rounded-md flex flex-col justify-center px-3 h-[45px] min-w-[120px]"
          >
            <p className=" text-[11px] text-profileInfoBlockHeader font-mainSemiBold  ">
              {e.title}
            </p>
            <p className=" text-[12px] text-profileInfoBlockHeader font-mainBold ml-1 ">
              {e.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4  flex-wrap justify-center">
        <div className="h-[50px] w-[270px] productsBg rounded-lg flex flex-col justify-center px-3 ">
          <p className=" text-[13px] text-[rgba(255,255,255,0.9)] leading-[15px] font-mainBold tracking-wider">
            განცხადებების რაოდენობა
          </p>
          <p className=" text-[15px] text-[rgb(255,255,255)] leading-[15px] font-mainBold ml-auto">
            12
          </p>
        </div>
        <div className="h-[50px] w-[270px] balanceBg rounded-lg flex flex-col justify-center px-3 ">
          <p className=" text-[13px] text-[rgba(255,255,255,0.9)] leading-[15px] font-mainBold tracking-wider">
            ბალანსი
          </p>
          <p className=" text-[15px] text-[rgb(255,255,255)] leading-[15px] font-mainBold ml-auto">
            0.00₾
          </p>
        </div>
        <div className="h-[50px] w-[270px] spentMoneyBg rounded-lg flex flex-col justify-center px-3 ">
          <p className=" text-[13px] text-[rgba(255,255,255,0.9)] leading-[15px] font-mainBold tracking-wider">
            დახარჯული თანხა
          </p>
          <p className=" text-[15px] text-[rgb(255,255,255)] leading-[15px] font-mainBold ml-auto">
            0.00₾
          </p>
        </div>
      </div>
      <p className=" text-[14px] text-textDesc">
        ანგარიშის შექმნის თარიღი:{" "}
        <span className="text-textHead">2-10-2023</span>
      </p>
    </div>
  );
}
