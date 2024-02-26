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

export default function AddProduct() {
  return (
    <main className="flex gap-3 min-h-screen items-start">
      <section className="flex-[3] bg-whiteMain rounded-section shadow-sectionShadow ">
        <div className="py-4 px-5 flex flex-col gap-8">
          <EstateType />
          <DealType />
          <EstateStatus />
          <EstateAddress />
          <EstateImages />
          <EstateInformation />
          <EstateAddons />
          <EstateClosePlaces />
          <EstateOption />
        </div>
      </section>
      <section className="flex-1 sticky top-[80px] bg-whiteMain rounded-section shadow-sectionShadow">
        <EstateConfirm />
      </section>
    </main>
  );
}
