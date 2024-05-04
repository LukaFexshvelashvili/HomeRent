import { useLayoutEffect, useRef, useState } from "react";
import AccountSearch from "./components/AccountSearch";
import ProductSearch from "./components/ProductSearch";
import StatBlocks from "./components/StatBlocks";
import axiosCall from "../../hooks/axiosCall";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [render, setRender] = useState<boolean>(false);
  const firstRender = useRef(true);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (firstRender.current) {
      axiosCall
        .get("admin_panel/get_admin", { withCredentials: true })
        .then((res) => {
          if (res.data.status === 100) {
            setRender(true);
          } else {
            navigate("/");
          }
        });
      firstRender.current = false;
    }
  }, []);

  return render ? (
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
  ) : null;
}
