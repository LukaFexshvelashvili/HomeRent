import AccountSearch from "./components/AccountSearch";
import ProductSearch from "./components/ProductSearch";
import StatBlocks from "./components/StatBlocks";

export default function AdminPanel() {
  return (
    <main className="min-h-screen">
      <div className="bg-whiteMain  rounded-section shadow-sectionShadow p-3 px-5 flex flex-col gap-10">
        <div className="">
          <p className=" text-textHead">ადმინ პანელი</p>
          <StatBlocks />
        </div>

        <AccountSearch />
        <ProductSearch />
      </div>
    </main>
  );
}
