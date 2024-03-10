export default function StatBlocks() {
  return (
    <div className="flex items-center gap-5 mt-3">
      <div className="gradCard1 rounded-lg w-[350px] p-2 px-4 flex flex-col text-whiteMain text-[14px] tracking-wider">
        <p className=" text-whiteFade">ანგარიშების რაოდენობა</p>
        <p className="ml-auto text-[16px]">521</p>
      </div>
      <div className="gradCard2 rounded-lg w-[350px] p-2 px-4 flex flex-col text-whiteMain text-[14px] tracking-wider">
        <p className=" text-whiteFade">განცხადებების რაოდენობა</p>
        <p className="ml-auto text-[16px]">521</p>
      </div>
      <div className="gradCard3 rounded-lg w-[350px] p-2 px-4 flex flex-col text-whiteMain text-[14px] tracking-wider">
        <p className=" text-whiteFade">შემოსული თანხა (VIP ებიდან)</p>
        <p className="ml-auto text-[16px]">0.00₾</p>
      </div>
    </div>
  );
}
