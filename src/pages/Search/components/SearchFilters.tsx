import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cities } from "../../../assets/lists/cities";
import {
  updateAddress,
  updateCity,
  updateExactAddress,
} from "../../../store/data/addProductSlice";
import { subLocs } from "../../../assets/lists/subLocs";
import axiosCall from "../../../hooks/axiosCall";

export function SearchCityFilter(props: { setCity: Function }) {
  const citiesAPI = cities.subLocs.map((item) => item.name.ka);
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
      props.setCity(active);
    }
  }, [active]);

  const fetchSearch = () => {
    if (search == "" && citiesAPI && citiesAPI.length !== 0) {
      return citiesAPI.map((e: string, i: number) => (
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
        .filter((item: string) => item.includes(search))
        .map((e: string, i: number) => (
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
    <>
      <div className="relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onFocus={() => setSearchWindow(true)}
          type="text"
          className="AddProductInput"
          placeholder="ქალაქი"
        />

        {searchWindow && (
          <div className="absolute h-[200px] w-full rounded-lg bg-whiteMain shadow-sectionShadow z-10 top-[45px] overflow-hidden">
            <div className="flex flex-col h-full overflow-y-scroll">
              {fetchSearch()}
            </div>
          </div>
        )}
      </div>
      {active !== "" && (
        <SearchAddressFilter getActiveCity={active == "" ? null : active} />
      )}
    </>
  );
}

export function SearchAddressFilter(props: { getActiveCity: string | null }) {
  const getInput = useRef<any>(null);
  const [citiesAPI, setCitiesAPI] = useState<any>([]);
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
      dispatch(updateAddress(active));
    }
  }, [active]);
  useEffect(() => {
    if (getInput.current !== null) {
      getInput.current.focus();
    }
    const formData = new FormData();
    if (props.getActiveCity) {
      formData.append("city", props.getActiveCity);
      axiosCall
        .post("locations/get_location", formData)
        .then((res) => setCitiesAPI(res.data.subLocs));
    }
  }, []);

  if (props.getActiveCity == null) {
    return null;
  }

  const fetchSearch = () => {
    if (search == "" && citiesAPI && citiesAPI.length !== 0) {
      return citiesAPI.map((e: any, i: number) => (
        <button
          key={i}
          onClick={() => setActive(e.name.ka)}
          className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
            active == e.name.ka ? "text-main" : "text-textHead"
          }`}
        >
          {e.name.ka}
        </button>
      ));
    } else if (citiesAPI && citiesAPI.length !== 0) {
      return citiesAPI
        .filter((item: any) => item.name.ka.includes(search))
        .map((e: any, i: number) => (
          <button
            key={i}
            onClick={() => setActive(e.name.ka)}
            className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
              active == e.name.ka ? "text-main" : "text-textHead"
            }`}
          >
            {e.name.ka}
          </button>
        ));
    }
  };

  return (
    <>
      <div className="relative">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            dispatch(updateAddress(e.target.value));
          }}
          value={search}
          onFocus={() => setSearchWindow(true)}
          type="text"
          className="AddProductInput"
          placeholder="ქუჩა"
          ref={getInput}
        />

        {searchWindow && (
          <div className="absolute h-auto max-h-[200px] w-full rounded-lg bg-whiteMain shadow-sectionShadow z-10 top-[45px] overflow-auto">
            <div className="flex flex-col h-full overflow-y-scroll">
              {fetchSearch()}
            </div>
          </div>
        )}
      </div>
      {active !== "" && (
        <SearchExactAddressFilter activeAddress={active} childs={citiesAPI} />
      )}
    </>
  );
}

export function SearchExactAddressFilter(props: {
  activeAddress: string | null;
  childs: any[];
}) {
  const getInput = useRef<any>(null);

  const [citiesAPI, setCitiesAPI] = useState<any[]>([]);
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
      dispatch(updateExactAddress(active));
    }
  }, [active]);
  useEffect(() => {
    if (getInput.current !== null) {
      getInput.current.focus();
    }
    const activeAdresses = props.childs.filter(
      (item: any) => item.name.ka == props.activeAddress
    );

    setCitiesAPI(activeAdresses[0].childs);
  }, []);

  if (props.activeAddress == null) {
    return null;
  }

  const fetchSearch = () => {
    if (search == "" && citiesAPI && citiesAPI.length !== 0) {
      return citiesAPI.map((e: any, i: number) => (
        <button
          key={i}
          onClick={() => setActive(e.name.ka)}
          className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
            active == e.name.ka ? "text-main" : "text-textHead"
          }`}
        >
          {e.name.ka}
        </button>
      ));
    } else if (citiesAPI && citiesAPI.length !== 0) {
      return citiesAPI
        .filter((item: any) => item.name.ka.includes(search))
        .map((e: any, i: number) => (
          <button
            key={i}
            onClick={() => setActive(e.name.ka)}
            className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
              active == e.name.ka ? "text-main" : "text-textHead"
            }`}
          >
            {e.name.ka}
          </button>
        ));
    }
  };
  return (
    <>
      <div className="relative">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
            dispatch(updateExactAddress(e.target.value));
          }}
          value={search}
          onFocus={() => setSearchWindow(true)}
          type="text"
          className="AddProductInput"
          placeholder="ქუჩა"
          ref={getInput}
        />

        {searchWindow && (
          <div className="absolute h-auto max-h-[200px] w-full rounded-lg bg-whiteMain shadow-sectionShadow z-10 top-[45px] overflow-auto">
            <div className="flex flex-col h-full overflow-y-scroll">
              {fetchSearch()}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
