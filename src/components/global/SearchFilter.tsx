import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cities } from "../../assets/lists/cities";
import { updateCity } from "../../store/data/addProductSlice";

export default function SearchFilter() {
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
    }
  }, [active]);

  const fetchSearch = () => {
    if (search == "") {
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
  );
}

// export default function SearchFilter() {
//     const citiesAPI = cities.subLocs.map((item) => item.name.ka);
//     const [search, setSearch] = useState("");
//     const [searchWindow, setSearchWindow] = useState(false);
//     const [active, setActive] = useState("");
//     const dispatch = useDispatch();

//     useEffect(() => {
//       if (active !== "" && search !== active) {
//         setActive("");
//       }
//     }, [search]);
//     useEffect(() => {
//       if (active !== "") {
//         setSearch(active);
//         setSearchWindow(false);
//         dispatch(updateCity(active));
//       }
//     }, [active]);

//     const fetchSearch = () => {
//       if (search == "") {
//         return citiesAPI.map((e: string, i: number) => (
//           <button
//             key={i}
//             onClick={() => setActive(e)}
//             className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
//               active == e ? "text-main" : "text-textHead"
//             }`}
//           >
//             {e}
//           </button>
//         ));
//       } else {
//         return citiesAPI
//           .filter((item: string) => item.includes(search))
//           .map((e: string, i: number) => (
//             <button
//               key={i}
//               onClick={() => setActive(e)}
//               className={`w-full h-auto py-2 text-start px-5 text-Asmall transition-colors hover:bg-mainClear ${
//                 active == e ? "text-main" : "text-textHead"
//               }`}
//             >
//               {e}
//             </button>
//           ));
//       }
//     };
//     return (
//       <div className="relative">
//         <input
//           onChange={(e) => setSearch(e.target.value)}
//           value={search}
//           onFocus={() => setSearchWindow(true)}
//           type="text"
//           className="AddProductInput"
//           placeholder="ქალაქი"
//         />

//         {searchWindow && (
//           <div className="absolute h-[200px] w-full rounded-lg bg-whiteMain shadow-sectionShadow z-10 top-[45px] overflow-hidden">
//             <div className="flex flex-col h-full overflow-y-scroll">
//               {fetchSearch()}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
