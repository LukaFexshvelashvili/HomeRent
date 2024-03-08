import productImage from "../../assets/images/estates/2.jpeg";
import { LoginEyeIcon, PopupCloseIcon } from "../../assets/icons/Icons";
import { useState } from "react";

export default function MaclerChoose() {
  const [productId, setProductId] = useState<number | null>(null);
  const [message, setMessage] = useState<{ status: number }>({ status: -1 });
  return (
    <main className="min-h-screen mt-[30px]">
      {message.status !== -1 && (
        <div className="fixed w-full h-full top-0 left-0 z-10 flex justify-center items-center">
          <div
            onClick={() => setMessage({ status: -1 })}
            className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5]"
          >
            {" "}
          </div>
          <div className=" w-[650px] rounded-section bg-whiteMain p-5 relative z-10">
            {message.status == 1 ? (
              <div className="w-[550px] mx-auto">
                <h2 className="text-maclerMain font-mainBold text-center text-[18px]  mb-4">
                  მოთხოვნა წარმატებით გაიგზავნა
                </h2>
                <p className="text-textDesc  text-center text-[14px] mt-2">
                  მაკლერის სერვისის მოთხოვნა განცხადებაზე #18495518
                </p>
                <p className="text-textDesc  text-center text-[14px] ">
                  სერვისის დადასტურების შემთხვევაში დაგიკავშირდებით
                </p>

                <button
                  onClick={() => setMessage({ status: -1 })}
                  className="bg-maclerMain text-[14px] h-[35px] w-[200px] text-whiteMain tracking-wider rounded-md mx-auto block mt-6  transition-colors hover:bg-maclerMainHover"
                >
                  გასაგებია
                </button>
              </div>
            ) : (
              <div className="w-[550px] mx-auto">
                <h2 className="text-redI font-mainBold text-center text-[18px]  mb-4">
                  წარმოიშვა შეცდომა შეცდომა
                </h2>
                <p className="text-textDesc  text-center text-[14px] mt-2">
                  სერვისი ამჟამად მიუწვდომელია
                </p>
                <p className="text-textDesc  text-center text-[14px] ">
                  სცადეთ მოგვიანებით
                </p>
                <button
                  onClick={() => setMessage({ status: -1 })}
                  className="bg-redI text-[14px] h-[35px] w-[200px] text-whiteMain tracking-wider rounded-md mx-auto block mt-6  transition-colors hover:bg-redCloseI"
                >
                  გასაგებია
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="bg-whiteMain rounded-section shadow-sectionShadow">
        {productId == null ? (
          <>
            <div className="p-4">
              <h1 className="text-[18px] text-maclerMain  font-mainBold">
                მაკლერის სერვისი - აირჩიეთ განცხადება{" "}
              </h1>
              <p className="text-[15px] text-textDesc mt-4 ">
                თქვენი განცხადებები
              </p>
            </div>

            <ProductBannerMacler setProduct={setProductId} />
            <ProductBannerMacler setProduct={setProductId} />
            <ProductBannerMacler setProduct={setProductId} />
          </>
        ) : (
          <>
            <div className="p-4">
              <h1 className="text-[18px] text-maclerMain  font-mainBold">
                მაკლერის სერვისი - შეთანხმება
              </h1>
              <div className="bg-maclerMainClear rounded-xl [&>div]:border-none mt-[30px]">
                <ProductBannerMacler setProduct={setProductId} setOff />
              </div>
              <p className="text-textHead  mt-[30px] mb-[20px]">
                უძრავი ქონების ფასი
              </p>
              <div className="flex items-center gap-[30px]">
                <div className="flex flex-col flex-1 gap-8">
                  <div className="px-5 flex flex-col  gap-3">
                    <div className="w-full h-10 bg-maclerMain flex justify-center items-center text-whiteMain tracking-widest rounded-lg">
                      86 000$
                    </div>
                    <div className="flex justify-between my-3 mb-5">
                      <p className="text-maclerMain">სერვისი</p>
                      <p className="text-maclerMain">-1 000$</p>
                    </div>
                    <div className="w-full h-[1px] bg-maclerMain rounded-md"></div>
                    <p className="w-full text-maclerMain text-center">
                      გაყიდვის შემოსავალი
                    </p>
                    <p className="w-full text-maclerMain text-center">
                      85 000$
                    </p>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="bg-maclerMainClear rounded-section p-4 px-5">
                    <p className="text-center text-maclerMain font-mainBold">
                      სერვისის პირობები
                    </p>
                    <div className="flex flex-col gap-3 mt-5">
                      <p className=" text-[14px] text-maclerMain font-mainBold">
                        წინასწარი შენატანის გარეშე
                      </p>
                      <p className=" text-[14px] text-maclerMain font-mainBold">
                        სერვისის გააქტიურების შემდეგ ადმინი გადახედავს
                        განცხადებას და{" "}
                        <span className="text-main underline cursor-pointer">
                          კრიტერიუმების
                        </span>{" "}
                        მიხედვით დაადასტურებს მას
                      </p>
                      <p className=" text-[14px] text-maclerMain font-mainBold">
                        სერვისის საფასურს უძრავი ქონების გარიგების დასრულების
                        შემდეგ იხდით (თუ ჩვენი დახმარებით გაყიდეთ უძრავი ქონება)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMessage({ status: 0 })}
                className="bg-maclerMain text-[14px] h-[35px] w-[200px] text-whiteMain font-mainMedium rounded-md mx-auto block mt-8 mb-2 transition-colors hover:bg-maclerMainHover"
              >
                სერვისის მოთხოვნა
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function ProductBannerMacler(props: {
  setProduct: Function;
  setOff?: boolean;
}) {
  return (
    <div className=" w-full border-t-[2px] border-lineBg py-5 px-4 flex items-center">
      <div className="w-[170px] h-[100px] rounded-lg bg-whiteLoad relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[2]"></div>
        <img
          src={productImage}
          className="absolute h-full w-full object-cover  top-0 left-0"
        />
      </div>
      <div className="flex flex-col ml-3 h-full relative">
        <h3 className="text-[15px] mb-[2px] text-textHeadBlack">
          იყიდება 5 ოთახიანი ბინა
        </h3>
        <p className="text-[13px] text-textDesc">
          განახლდა:{" "}
          <span className="text-[13px] text-textHeadBlack">1-27-2024</span>
        </p>
        <p className="text-[13px] text-textDesc">
          ვადა:{" "}
          <span className="text-[13px] text-textHeadBlack">3-27-2024</span>
        </p>
        <div className="flex items-center gap-5 mt-3">
          <p className="flex items-center text-[13px] text-textDesc gap-1">
            <LoginEyeIcon className="h-4 aspect-square [&>path]:fill-textDesc" />{" "}
            2 234
          </p>
          <p className="text-[13px] text-textDesc">ID - 18495519</p>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        {props.setOff == null ? (
          <button
            className="bg-maclerMain text-whiteMain h-[35px] w-[180px] rounded-md text-[13px] font-mainBold tracking-wide transition-colors hover:bg-maclerMainHover"
            onClick={() => props.setProduct(3)}
          >
            არჩევა
          </button>
        ) : (
          <button
            className="bg-whiteMain text-maclerMain h-[35px] w-[180px] rounded-md text-[13px] font-mainBold tracking-wide transition-colors hover:bg-whiteHover"
            onClick={() => props.setProduct(null)}
          >
            არჩეული
          </button>
        )}
      </div>
    </div>
  );
}
