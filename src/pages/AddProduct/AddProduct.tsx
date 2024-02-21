import {
  DealType,
  EstateAddress,
  EstateImages,
  EstateInformation,
  EstatePrice,
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
          <EstatePrice />
        </div>
      </section>
      <section className="flex-1 bg-whiteMain rounded-section shadow-sectionShadow h-8"></section>
    </main>
  );
}
