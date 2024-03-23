export default function StatBlocks() {
  return (
    <div className="flex items-center gap-5 mt-3 flex-wrap justify-center">
      <div className="gradCard1 rounded-lg w-[350px] p-2 px-4 flex flex-col text-whiteMain text-[14px] tracking-wider">
        <p className=" text-buttonText">ანგარიშების რაოდენობა</p>
        <p className="ml-auto text-[16px] text-buttonText">521</p>
      </div>
      <div className="gradCard2 rounded-lg w-[350px] p-2 px-4 flex flex-col text-whiteMain text-[14px] tracking-wider">
        <p className=" text-buttonText">განცხადებების რაოდენობა</p>
        <p className="ml-auto text-[16px] text-buttonText">521</p>
      </div>
      <div className="gradCard3 rounded-lg w-[350px] p-2 px-4 flex flex-col text-whiteMain text-[14px] tracking-wider">
        <p className=" text-buttonText">შემოსული თანხა (VIP ებიდან)</p>
        <p className="ml-auto text-[16px] text-buttonText">0.00₾</p>
      </div>
    </div>
  );
}
