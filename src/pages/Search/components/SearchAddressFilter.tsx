import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCity } from "../../../store/data/addProductSlice";
import { subLocs } from "../../../assets/lists/subLocs";
import { RootState } from "../../../store/store";
import axiosCall from "../../../hooks/axiosCall";

export function SearchAddressFilter() {
  const getInput = useRef<any>(null);
  const [search, setSearch] = useState("");
  const [searchWindow, setSearchWindow] = useState(false);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (active !== "" && search !== active) {
      setActive("");
    }
  }, [search]);
  useEffect(() => {
    if (active !== "") {
      setSearch(active);
      setSearchWindow(false);
      dispatch(updateCity(active));
    }
  }, [active]);
  useEffect(() => {
    if (getInput.current !== null) {
      getInput.current.focus();
    }
  }, []);
  const getActiveCity: any = useSelector(
    (item: RootState) => item.addProduct.estateCity
  );
  if (getActiveCity == null) {
    return null;
  }

  const [activeCityCode, setActiveCityCode] = useState<number | null>(null);
  const firstRender = useRef<boolean>(true);
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      axiosCall.get("locations/get_cities").then((res) => {
        if (res.status == 200) {
          setActiveCityCode(
            res.data.subLocs.filter(
              (item: any) => item.name.ka == getActiveCity
            )[0].osm_id
          );
        }
      });
    }
  }, []);
  const citiesAPI = subLocs.subLocs.map((item) => {
    if (parseInt(item.parent_osm_id) == activeCityCode) return item.name.ka;
  });

  const fetchSearch = () => {
    if (search == "") {
      return citiesAPI.map((e: any, i: number) => (
        <button
          key={i}
          onClick={() => setActive(e)}
          className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
            active == e ? "text-main" : "text-textHead"
          }`}
        >
          {e}
        </button>
      ));
    } else {
      return citiesAPI
        .filter((item: any) => item.includes(search))
        .map((e: any, i: number) => (
          <button
            key={i}
            onClick={() => setActive(e)}
            className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
              active == e ? "text-main" : "text-textHead"
            }`}
          >
            {e}
          </button>
        ));
    }
  };
  return (
    <div className="relative">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onFocus={() => setSearchWindow(true)}
        type="text"
        className="AddProductInput"
        placeholder="რაიონი"
        ref={getInput}
      />

      {searchWindow && (
        <div className="absolute h-[200px] w-full rounded-lg bg-whiteMain shadow-sectionShadow z-10 top-[45px] overflow-hidden">
          <div className="flex flex-col h-full overflow-y-scroll">
            {fetchSearch()}
          </div>
        </div>
      )}
    </div>
  );
}
