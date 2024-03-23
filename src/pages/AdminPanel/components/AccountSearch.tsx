export default function AccountSearch() {
  return (
    <div>
      <p className=" text-textHead">ანგარიშების მართვა</p>
      <input
        type="text"
        placeholder="მოძებნა   (ID, ტელეფონით, სიტყვით)"
        className=" text-[14px] h-[40px] w-full bg-LoginInput outline-none rounded-lg px-4 transition-colors focus:bg-LoginInputActive my-3"
      />
      <div className="flex flex-col gap-3">
        <AccountBanner />
        <AccountBanner />
        <AccountBanner />
        <AccountBanner />
      </div>
    </div>
  );
}
function AccountBanner() {
  return (
    <div className="w-full h-10 rounded-lg flex items-center px-5 bg-mainClear  small:flex-wrap  small:h-auto  small:py-3 small:justify-center  small:gap-y-2">
      <div className="h-[28px]  small:h-[24px]   aspect-square rounded-circle bg-main p-[3px] small:p-[2px] flex justify-center items-center relative">
        <div className="h-full border-2 border-whiteMain  aspect-square rounded-circle bg-main select-none cursor-pointer "></div>
      </div>
      <p className="text-[14px] ml-4 text-textDesc">ლუკა ფეხშველაშვილი</p>
      <p className="text-[14px] ml-4 text-textDesc">Luka1172@mail.ru</p>
      <p className="text-[14px] ml-4 text-textDesc">599000000</p>
      <div className="flex gap-2 items-center ml-auto  small:mt-1  small:w-full small:justify-center">
        <button className="bg-pinkClear font-mainBold tracking-wider text-pinkI text-[12px] h-[28px] w-[120px] rounded-md transition-colors hover:bg-pinkHover">
          დაბლოკვა
        </button>
        <button className="bg-redClear font-mainBold tracking-wider text-redI text-[12px] h-[28px] w-[100px] rounded-md transition-colors hover:bg-redHover">
          წაშლა
        </button>
      </div>
    </div>
  );
}
