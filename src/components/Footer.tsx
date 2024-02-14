export default function Footer() {
  return (
    <footer className="w-full mt-[50px] h-auto bg-navBg pt-10 shadow-footerShadow">
      <div className="content_container">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3 [&>p]:text-Asmall [&>p]:text-textDesc [&>p]:cursor-pointer">
            <h3 className="mb-2  text-textHeadBlack">ჩვენს შესახებ</h3>
            <p className="max-w-[300px]">
              უძრავი ქონების გაყიდვის/გაქირავების სერვისი - გეხმარებით
              განათავსოთ თქვენი პროდუქტი კლიენტების მოსაზიდად
            </p>
          </div>
          <div className="flex flex-col gap-2 [&>p]:text-Asmall [&>p]:text-textDesc [&>p]:cursor-pointer">
            <h3 className="mb-2  text-textHeadBlack">ნავიგაცია</h3>
            <p>მთავარი</p>
            <p>მოძებნა</p>
            <p>პროექტები</p>
            <p>მაკლერის სერვისი</p>
          </div>
          <div className="flex flex-col gap-2 [&>p]:text-Asmall [&>p]:text-textDesc [&>p]:cursor-pointer">
            <h3 className="mb-2  text-textHeadBlack">დახმარება</h3>
            <p>კონტაქტი</p>
            <p>რეკლამა</p>
            <p>წესები</p>
            <p>00 00 0000 0000</p>
            <p>//////////@gmail.ge</p>
          </div>
          <div className="flex flex-col gap-3 ">
            <h3 className="mb-2  text-textHeadBlack">იყიდება</h3>
            <div className="flex flex-wrap flex-col gap-2 gap-x-6 h-[160px] [&>p]:text-Asmall [&>p]:text-textDesc [&>p]:cursor-pointer">
              <p>იყიდება 1 ოთახიანი ბინა</p>
              <p>იყიდება 2 ოთახიანი ბინა</p>
              <p>იყიდება 3 ოთახიანი ბინა</p>
              <p>იყიდება 4 ოთახიანი ბინა</p>
              <p>იყიდება ბინა თბილისში</p>

              <p>ქირავდება ბინები</p>
              <p>ქირავდება კერძო სახლი</p>
              <p>ქირავდება ფართი</p>
              <p>იყიდება ბინა ბათუმში</p>
              <p>იყიდება კერძო სახლი</p>

              <p>ქირავდება დარბაზი</p>
              <p>იყიდება ბინა ისანში</p>
              <p>იყიდება ბინა გლდანში</p>
              <p>იყიდება ბინა ქობულეთში</p>
              <p>იყიდება ნაკვეთი</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-lineBg mt-5"></div>
      <div className="content_container flex justify-between  [&>p]:text-Asmall [&>p]:text-textInfo [&>p]:cursor-pointer py-3">
        <div className="flex gap-4  [&>p]:text-Asmall [&>p]:text-textInfo [&>p]:cursor-pointer">
          <p> წესები და პირობები</p>
          <p>კონფიდენციალურობა</p>
        </div>
        <p>© 2024 ყველა უფლება დაცულია</p>
      </div>
    </footer>
  );
}
