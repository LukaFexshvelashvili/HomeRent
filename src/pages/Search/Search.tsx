import { memo, useEffect, useRef, useState } from "react";
import { PopupCloseIcon, SearchIcon } from "../../assets/icons/Icons";
import {
  PriceSlider,
  SelectNumbers,
  SelectType,
  SizeSlider,
} from "./components/Filters";
import axiosCall from "../../hooks/axiosCall";
import Card, { TProductCard } from "../../components/global/Card";
import { useDebounce } from "../../hooks/serverFunctions";
import ContentLoader from "../../components/global/ContentLoader";
import DropDownSelector from "../../components/global/DropDownSelector";

import {
  projectDealTypes,
  projectStatuses,
  projectTypes,
} from "../../assets/lists/productAddons";
import { deleteParams, updateParams } from "../../hooks/routerHooks";
import { useSearchParams } from "react-router-dom";
import {
  getSearchCache,
  setSearchCache,
} from "../../components/cache/cacheFunctions";
import { Helmet } from "react-helmet";
import SearchPlace from "../../components/placeSelector/SearchPlace";
function Search() {
  const [searched, setSearched] = useState<any>(null);
  const [vipSearched, setVipSearched] = useState<any[] | null>(null);
  const [params, setParams] = useSearchParams();
  const [loader, setLoader] = useState<boolean>(false);
  const [pages, setPages] = useState<number>(1);
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  const cachedFirst = useRef<any[]>([]);
  const getFullCount = useRef<number>(0);
  const lastDebouncedSearch = useRef<string | null>(null);
  const [activePage, setActivePage] = useState<number>(() => {
    const page = params.get("page");
    return page !== null ? parseInt(page) : 1;
  });

  const [searchTitle, setSearchTitle] = useState<string>(() => {
    const title = params.get("title");
    return title !== null ? title : "";
  });
  const debouncedSearch = useDebounce(location.search, 300, setLoader);

  const afterSearchActions = (fetchedData: any) => {
    setSearched(fetchedData.products);
    if (fetchedData.vipProducts && fetchedData.vipProducts.length > 5) {
      setVipSearched(fetchedData.vipProducts.slice(0, 5));
    } else if (fetchedData.vipProducts) {
      setVipSearched(fetchedData.vipProducts);
    }
    setPages(Math.ceil(fetchedData.length / fetchedData.per_page_length));

    getFullCount.current = fetchedData.length;
    if (
      (activePage < 1 ||
        activePage >
          Math.ceil(fetchedData.length / fetchedData.per_page_length)) &&
      params.get("page")
    ) {
      deleteParams(params, setParams, "page");
    }
  };

  useEffect(() => {
    setSearched(null);
    setVipSearched(null);
  }, [location.search]);

  useEffect(() => {
    if (debouncedSearch !== lastDebouncedSearch.current) {
      getSearchCache(debouncedSearch).then((res: any) => {
        if (res !== null) {
          afterSearchActions(res);
          setLoader(false);
        } else {
          axiosCall.get(`fetch/search${debouncedSearch}`).then((res) => {
            if (res.data.status == 100) {
              setSearchCache(debouncedSearch, res.data);

              afterSearchActions(res.data);
            }
            setLoader(false);
          });
        }
      });
      if (activePage < 1) {
        deleteParams(params, setParams, "page");
        setActivePage(1);
      }
      lastDebouncedSearch.current = debouncedSearch;
    }
  }, [debouncedSearch]);

  const titleSubmit = () => {
    if (searchTitle !== "") {
      updateParams(params, setParams, { title: searchTitle });
    } else {
      if (params.get("title")) {
        deleteParams(params, setParams, "title");
      }
    }
  };

  useEffect(() => {
    if (activePage !== 1) {
      setSearched([]);
    } else {
      setSearched(cachedFirst.current);
    }
  }, [activePage]);
  const fetchPageButtons = () => {
    const buttons = []; // Create an array to hold the buttons
    if (pages > 1) {
      for (let i = 1; i <= pages; i++) {
        buttons.push(
          <button
            key={i}
            className={`h-[32px] aspect-square text-[15px] text-buttonText ${
              activePage == i ? "bg-main" : "bg-whiteHover"
            } rounded-md flex items-center justify-center`}
            onClick={() => {
              window.scrollTo(0, 0);

              if (i == 1) {
                deleteParams(params, setParams, "page");
              } else {
                updateParams(params, setParams, { page: i });
              }
              setActivePage(i);
            }}
          >
            {i}
          </button>
        );
      }
    }

    return buttons; // Return the array of buttons after the loop
  };

  return (
    <>
      {searchTitle ? (
        <Helmet>
          <title>ძებნა - {searchTitle}</title>
        </Helmet>
      ) : (
        <Helmet>
          <title>ძებნა - OnHome</title>
        </Helmet>
      )}

      <main className="flex gap-4 flex-col">
        <div className="flex gap-2">
          <div className="w-full flex items-center border-2 border-whiteLoad rounded-normal overflow-hidden relative h-[45px]">
            <form
              className="w-full h-full"
              onSubmit={(e) => {
                e.preventDefault();
                titleSubmit();
              }}
            >
              <input
                type="text"
                placeholder="სიტყვით ძებნა..."
                className="w-full h-full px-4 bg-bodyBg outline-none text-blackMain tracking-wider text-[14px] transition-colors focus:bg-whiteLoad"
                onChange={(e) => {
                  setSearchTitle(e.target.value);
                }}
                value={searchTitle}
              />
            </form>

            <div
              onClick={() => {
                if (params.get("title")) {
                  deleteParams(params, setParams, "title");
                }

                setSearchTitle("");
              }}
              className={`absolute h-[28px] aspect-square rounded-md bg-whiteHoverDark  flex items-center justify-center right-2  transition-all ${
                searchTitle == ""
                  ? " pointer-events-none cursor-default invisible opacity-0"
                  : "cursor-pointer visible opacity-100"
              } hover:bg-whiteCont`}
            >
              <PopupCloseIcon className="h-[10px] aspect-square [&>path]:fill-blackMain" />
            </div>
          </div>
          <button
            onClick={() => setOpenFilters((state) => !state)}
            className="h-[45px] w-[60px] text-[14px]   bg-main rounded-[5px] text-buttonText tracking-wider font-mainMedium relative hidden mediumSmallXl:flex items-center justify-center"
          >
            <div className=" flex flex-col h-[25px] aspect-square justify-center items-center gap-1 absolute">
              <span className="h-[2px] rounded-md w-10/12 bg-buttonText block"></span>
              <span className="h-[2px] rounded-md w-8/12 bg-buttonText block"></span>
              <span className="h-[2px] rounded-md w-4/12 bg-buttonText block"></span>
            </div>
          </button>
          <button
            onClick={titleSubmit}
            className=" h-[45px] w-[60px] text-[14px]   font-mainMedium rounded-[6px] text-buttonText bg-main flex items-center justify-center tracking-widest  transition-colors hover:bg-mainHover"
          >
            <SearchIcon className="h-[16px] aspect-square " />
          </button>
        </div>

        <div className="flex  gap-5 mediumSmallXl:flex-col">
          <FiltersSection setSearchTitle={setSearchTitle} />
          <ResponsiveFiltersSection
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
          />
          <section className="flex-[3]  rounded-normal">
            <p className="text-Asmall text-textDesc tracking-wider font-mainBold m-3 mt-0">
              {!loader && searched !== null
                ? `ნაპოვნია ${getFullCount.current} შედეგი`
                : ""}
            </p>
            <div className="flex flex-wrap relative min-h-[150px] gap-5 gap-y-7 large:justify-center large:gap-5">
              {!loader ? (
                <>
                  {vipSearched !== null && vipSearched.length > 0
                    ? vipSearched.map((product: TProductCard) => (
                        <Card key={product.id} product={product} />
                      ))
                    : null}
                  {searched !== null && searched.length > 0
                    ? searched.map((product: TProductCard) => (
                        <Card key={product.id} product={product} />
                      ))
                    : null}
                </>
              ) : (
                <ContentLoader />
              )}
            </div>
            <div className="flex items-center  justify-center gap-4 mt-5">
              {fetchPageButtons()}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default memo(Search);

function ResponsiveFiltersSection(props: {
  openFilters: boolean;
  setOpenFilters: Function;
}) {
  const [params, setParams] = useSearchParams();

  const [openLocations, setOpenLocations] = useState(false);

  useEffect(() => {
    if (props.openFilters) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [props.openFilters]);
  return (
    <section className="hidden mediumSmallXl:block shadow-none ">
      {openLocations ? (
        <>
          <div
            onClick={() => setOpenLocations(false)}
            className="fixed h-full w-full aspect-square bg-blackFade top-0 left-0 z-20 "
          ></div>
          <div
            className={`fixed left-2/4 -translate-x-2/4 -translate-y-2/4 top-2/4 bg-whiteMain rounded-section shadow-sectionShadow p-4  ${
              openLocations ? "max-w-[1200px]" : "max-w-[800px]"
            } w-[90%] mx-auto small:top-2/4 small:-translate-y-2/4 z-40`}
          >
            <button
              onClick={() => setOpenLocations(false)}
              className="h-[26px] aspect-square  absolute top-3 right-3 flex justify-center items-center p-1"
            >
              <PopupCloseIcon className=" [&>path]:fill-whiteCont" />
            </button>
            <SearchPlace
              setData={(locations: any) => {
                updateParams(params, setParams, locations);
              }}
              defData={{
                city: params.get("city") ? params.get("city") : "",
                district: params.get("district") ? params.get("district") : "",
                urban: params.get("urban") ? params.get("urban") : "",
              }}
              closeWindow={() => setOpenLocations(false)}
            />
          </div>
        </>
      ) : null}
      <div className={`overflow-hidden`}>
        <div
          onClick={() => props.setOpenFilters(false)}
          className={`fixed h-full w-full top-0 left-0 bg-blackFade z-10 transition-[opacity,visibility] duration-500  ${
            props.openFilters ? "opacity-100 visible" : "opacity-0 invisible"
          } `}
        ></div>
        <div
          className={`responsiveFilters  mobile  pb-[30px] rounded-[20px] h-3/4  top-1/4 shadow-sectionShadow fixed z-[11] bg-whiteMain left-0  w-full overflow-y-scroll transition-transform duration-300 ${
            props.openFilters ? "translate-y-0" : "translate-y-full"
          } `}
        >
          <div
            onClick={() => props.setOpenFilters(false)}
            className="flex sticky top-0 items-center justify-center py-3 h-[50px] translate-y-[-2px] bg-whiteMain z-20"
          >
            <div className=" h-[6px] w-[100px] rounded-md  bg-lineBg mx-auto "></div>
          </div>

          <div className="content_container">
            <div className="flex flex-col gap-9 pt-5">
              <p className=" text-textHead tracking-wider text-center font-mainBold ">
                გარიგების ტიპი
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <ProjectDealSelector />
              </div>
              <div className="flex flex-col items-center">
                <p className=" text-textHead tracking-wider font-mainBold ">
                  ადგილმდებარეობა
                </p>

                <div
                  onClick={() => setOpenLocations(true)}
                  className="cursor-pointer rounded-lg h-[40px] w-[300px] gap-2 flex items-center bg-whiteMain border-2 mt-2 text-textDesc text-[14px] border-lineBg font-mainRegular px-2"
                >
                  <div className=" w-[50%] overflow-hidden max-w-[50%] text-nowrap text-ellipsis">
                    ქალაქი: {params.get("city") ? params.get("city") : "*"}{" "}
                  </div>
                  <div className="h-[50%] w-[2px] bg-lineBg "></div>
                  <div className=" w-[50%] overflow-hidden max-w-[50%] text-nowrap text-ellipsis">
                    რაიონი:{" "}
                    {params.get("district") ? params.get("district") : "*"}{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className=" text-textHead tracking-wider font-mainBold ">
                  მდგომარეობა
                </p>

                <DropDownSelector
                  name="არჩევა"
                  itemsList={projectStatuses}
                  engName={"condition"}
                  changeParams={true}
                />
              </div>
              <div className="flex flex-col items-center">
                <p className=" text-textHead tracking-wider font-mainBold ">
                  პროექტის ტიპი
                </p>

                <DropDownSelector
                  name="არჩევა"
                  itemsList={projectTypes}
                  engName={"project_type"}
                  changeParams={true}
                />
              </div>
              <PriceSlider />
              <SizeSlider />
              <SelectType />
              <SelectNumbers
                changeParams={true}
                engName="rooms"
                name="ოთახები"
              />
              <SelectNumbers
                changeParams={true}
                engName="bedrooms"
                name="საძინებლები"
              />
              <SelectNumbers
                changeParams={true}
                engName="wet_points"
                name="სველი წერტილი"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FiltersSection(props: { setSearchTitle: Function }) {
  const [params, setParams] = useSearchParams();
  const [openLocations, setOpenLocations] = useState(false);

  return (
    <section className=" mediumSmallXl:hidden relative flex-[1.5] large:flex-[2] bg-whiteMain mediumSmallXl:rounded-[10px] rounded-[18px] shadow-sectionShadow mediumSmallXl:shadow-none">
      <div
        className={` px-4 py-3 pb-12 mediumSmallXl:p-0 mediumSmallXl:pb-8 overflow-hidden mediumSmallXl:max-h-[55px]`}
      >
        {params.size > 0 ? (
          <button
            onClick={() => {
              setParams({});

              props.setSearchTitle("");
            }}
            className="absolute top-3 right-3 text-buttonText px-3 py-1 rounded-md bg-main text-[12px] tracking-widest font-mainMedium cursor-pointer transition-colors hover:bg-mainHover"
          >
            ფილტრების წაშლა
          </button>
        ) : null}
        <p className="text-Asmall mediumSmallXl:hidden text-textDesc tracking-wider font-mainBold">
          ფილტრები
        </p>
        <div className="flex flex-col gap-6 pt-5">
          <p className=" text-textHead tracking-wider text-center font-mainBold ">
            გარიგების ტიპი
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <ProjectDealSelector />
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-textHead tracking-wider font-mainBold ">
              ადგილმდებარეობა
            </p>
            <div
              onClick={() => setOpenLocations(true)}
              className="cursor-pointer rounded-lg h-[40px] w-[300px] gap-2 flex items-center bg-whiteMain border-2 mt-2 text-textDesc text-[14px] border-lineBg font-mainRegular px-2"
            >
              <div className=" w-[50%] overflow-hidden max-w-[50%] text-nowrap text-ellipsis">
                ქალაქი: {params.get("city") ? params.get("city") : "*"}{" "}
              </div>
              <div className="h-[50%] w-[2px] bg-lineBg "></div>
              <div className=" w-[50%] overflow-hidden max-w-[50%] text-nowrap text-ellipsis">
                რაიონი: {params.get("district") ? params.get("district") : "*"}{" "}
              </div>
            </div>
            {openLocations ? (
              <>
                <div
                  onClick={() => setOpenLocations(false)}
                  className="fixed h-full w-full aspect-square bg-blackFade top-0 left-0 z-20 "
                ></div>

                <div
                  className={`fixed left-2/4 -translate-x-2/4 -translate-y-2/4 top-2/4 bg-whiteMain rounded-section shadow-sectionShadow p-4  ${
                    openLocations ? "max-w-[1200px]" : "max-w-[800px]"
                  } w-[90%] mx-auto z-[21] small:top-2/4 small:-translate-y-2/4`}
                >
                  <button
                    onClick={() => setOpenLocations(false)}
                    className="h-[26px] aspect-square  absolute top-3 right-3 flex justify-center items-center p-1"
                  >
                    <PopupCloseIcon className=" [&>path]:fill-whiteCont" />
                  </button>
                  <SearchPlace
                    setData={(locations: any) => {
                      updateParams(params, setParams, locations);
                    }}
                    defData={{
                      city: params.get("city") ? params.get("city") : "",
                      district: params.get("district")
                        ? params.get("district")
                        : "",
                      urban: params.get("urban") ? params.get("urban") : "",
                    }}
                    closeWindow={() => setOpenLocations(false)}
                  />
                </div>
              </>
            ) : null}
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-textHead tracking-wider font-mainBold ">
              მდგომარეობა
            </p>

            <DropDownSelector
              name="არჩევა"
              itemsList={projectStatuses}
              engName={"condition"}
              changeParams={true}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-textHead tracking-wider font-mainBold ">
              პროექტის ტიპი
            </p>

            <DropDownSelector
              name="არჩევა"
              itemsList={projectTypes}
              engName={"project_type"}
              changeParams={true}
            />
          </div>

          <PriceSlider />
          <SizeSlider />
          <SelectType />
          <SelectNumbers changeParams={true} engName="rooms" name="ოთახები" />
          <SelectNumbers
            changeParams={true}
            engName="bedrooms"
            name="საძინებლები"
          />
          <SelectNumbers
            changeParams={true}
            engName="wet_points"
            name="სველი წერტილი"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectDealSelector() {
  const [params, setParams] = useSearchParams();
  const [active, setActive] = useState<null | number>(null);

  useEffect(() => {
    const searchType = params.get("deal");

    if (searchType) {
      setActive(parseInt(searchType));
    } else {
      setActive(null);
    }
  }, [params]);
  return (
    <>
      {projectDealTypes.map((e: string, i: number) => (
        <button
          key={i}
          onClick={() => {
            if (active == i) {
              setActive(null);
              deleteParams(params, setParams, "deal");
            } else {
              setActive(i);
              updateParams(params, setParams, { deal: i });
            }
          }}
          className={`  p-2 px-4 rounded-xl transition-colors ${
            active == i ? "bg-main" : "bg-mainClear"
          }`}
        >
          <p
            className={`text-Asmall tracking-wide ${
              active == i ? "text-buttonText" : "text-main"
            }`}
          >
            {e}
          </p>
        </button>
      ))}
    </>
  );
}
