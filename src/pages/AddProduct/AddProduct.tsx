import { useSelector } from "react-redux";
import EstateConfirm from "./components/EstateConfirm";
import {
  DealType,
  EstateAddons,
  EstateAddress,
  EstateClosePlaces,
  EstateImages,
  EstateInformation,
  EstateOption,
  EstateStatus,
  EstateType,
} from "./components/Selectors";
import { RootState } from "../../store/store";
import { useState } from "react";
import ContentLoader from "../../components/global/ContentLoader";
import { Link } from "react-router-dom";

export default function AddProduct() {
  const productData = useSelector((store: RootState) => store.addProduct);
  const [showError, setShowError] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<number | null>(null);

  const [alertBlock, setAlertBlock] = useState<boolean>(false);

  return (
    <main className="flex flex-row-reverse gap-3 min-h-screen items-start smallXl:flex-col">
      {alertBlock && (
        <div className="fixed w-full h-full top-0 left-0 z-50 flex justify-center items-center bg-blackFade">
          <div className=" w-[650px] h-auto min-h-[150px] rounded-section bg-whiteMain p-5 relative z-10">
            {uploadStatus === null && <ContentLoader />}

            {uploadStatus == 100 ? (
              <>
                <h2 className="text-greenI text-center text-[20px] font-mainBold">
                  განცხადება წარმატებით დამატდა
                </h2>
                <p className="text-textDesc text-center text-[16px] font-mainBold my-3">
                  განცხადება წარმატებით დამატდა მონაცემთა ბაზაში, მის გამოჩენას
                  შესაძლოა დაჭირდეს რამოდენიმე წუთი
                </p>
                <div className="flex items-center gap-5 justify-center mt-5">
                  <Link to={"/Profile/MyProducts"}>
                    <button className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover">
                      განცხადებების ნახვა
                    </button>
                  </Link>{" "}
                  <Link to={"/"}>
                    <button className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover">
                      მთავარ გვერდზე დაბრუნება
                    </button>{" "}
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-pinkI text-center text-[20px] font-mainBold">
                  განცხადების დამატებისას წარმოიშვა პრობლემა
                </h2>
                <p className="text-textDesc text-center text-[16px] font-mainBold my-3">
                  გთხოვთ სცადოთ მოგვიანებით
                </p>
                <div className="flex items-center gap-5 justify-center mt-5">
                  <Link to={"/"}>
                    <button className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover">
                      მთავარ გვერდზე დაბრუნება
                    </button>{" "}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <section className="flex-[3] medium:w-8/12 bg-whiteMain rounded-section shadow-sectionShadow smallXl:w-full">
        <div className="py-4 px-5 flex flex-col gap-8  mobile:px-3">
          <EstateType />
          {productData.estateType !== null && <DealType />}
          {productData.estateDeal !== null && <EstateStatus />}
          {productData.estateStatus !== null && (
            <EstateAddress
              error={showError && productData.estateCity == null ? true : false}
            />
          )}
          {productData.estateStatus !== null && (
            <EstateImages
              error={
                showError && productData.estateImages == null ? true : false
              }
            />
          )}
          {productData.estateStatus !== null && (
            <EstateInformation
              error={
                showError && productData.estatePrice == null ? true : false
              }
            />
          )}
          {productData.estateStatus !== null && <EstateAddons />}
          {productData.estateStatus !== null && <EstateClosePlaces />}
          {productData.estateStatus !== null && <EstateOption />}
        </div>
      </section>
      <section className="flex-1 medium:w-4/12 sticky top-[80px] bg-whiteMain rounded-section shadow-sectionShadow smallXl:w-full">
        <EstateConfirm
          setAlertBlock={setAlertBlock}
          setShowError={setShowError}
          setUploadStatus={setUploadStatus}
        />
      </section>
    </main>
  );
}
