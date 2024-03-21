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

export default function AddProduct() {
  const productData = useSelector((store: RootState) => store.addProduct);
  const [showError, setShowError] = useState(false);

  return (
    <main className="flex flex-row-reverse gap-3 min-h-screen items-start smallXl:flex-col">
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
        <EstateConfirm setShowError={setShowError} />
      </section>
    </main>
  );
}
