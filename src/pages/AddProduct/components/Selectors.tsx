import { useEffect, useRef, useState } from "react";
import { RealEstateTypes } from "../../Search/components/FiltersArray";
import {
  CheckIcon,
  DropDownIcon,
  PlusIcon,
  TrashIcon,
} from "../../../assets/icons/Icons";
import { SelectNumbers } from "../../Search/components/Filters";
import {
  TProductAddon,
  productAddonsList,
} from "../../../assets/lists/productAddons";
import {
  TClosePlace,
  closePlacesList,
} from "../../../assets/lists/closePlaces";
import { ActiveOffers, TOffer } from "../../../assets/lists/offers";
import { useDispatch, useSelector } from "react-redux";
import {
  TproductInfoStart,
  updateActiveImage,
  updateAddons,
  updateBathrooms,
  updateBedrooms,
  updateClosePlaces,
  updateCondition,
  updateCurrency,
  updateDeal,
  updateFloor,
  updateFloors,
  updateFullPrice,
  updateImages,
  updateIpcode,
  updateProject,
  updateRooms,
  updateSize,
  updateStatus,
  updateType,
  updateVip,
} from "../../../store/data/addProductSlice";
import { SearchCityFilter } from "../../Search/components/SearchFilters";
import { RootState } from "../../../store/store";
import axiosCall from "../../../hooks/axiosCall";

export const submitProduct = (
  productData: TproductInfoStart | any,
  setShowError: Function
) => {
  // let error: boolean = false;

  // if (
  //   productData.estateCity == null ||
  //   productData.estateImages == null ||
  //   productData.estatePrice == null
  // ) {
  //   error = true;
  // }

  // if (error) {
  //   setShowError(true);
  // } else {
  let formData = new FormData();
  formData.append("estateType", productData.estateType);
  formData.append("estateDeal", productData.estateDeal);
  formData.append("estateStatus", productData.estateStatus);
  formData.append("estateCity", productData.estateCity);
  formData.append("estateAddress", productData.estateAddress);
  formData.append("estateExactAddress", productData.estateExactAddress);
  formData.append("estateIpcode", productData.estateIpcode);
  formData.append("estateActiveImage", productData.estateActiveImage);

  formData.append("estateSize", productData.estateSize);
  formData.append("estateProject", productData.estateProject);
  formData.append("estateCondition", productData.estateCondition);
  formData.append("estateFloor", productData.estateFloor);
  formData.append("estateFloors", productData.estateFloors);
  formData.append("estateRooms", productData.estateRooms);
  formData.append("estateBedrooms", productData.estateBedrooms);
  formData.append("estateBathrooms", productData.estateBathrooms);
  formData.append("estatePrice", productData.estatePrice);
  formData.append("estateAddons", productData.estateAddons);
  formData.append("estateClosePlaces", productData.estateClosePlaces);
  formData.append("estateCurrency", productData.estateCurrency);
  formData.append("estateVip", productData.estateVip);
  formData.append("estateVipExpire", productData.estateVipExpire);
  productData.estateImages.forEach((image: any) => {
    formData.append("images[]", image.image);
  });

  axiosCall
    .post("/upload_product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => console.log(res));
  // }
};

export function EstateOption() {
  const vipStatus = useSelector(
    (store: RootState) => store.addProduct.estateVip
  );
  const [status, setStatus] = useState<number>(vipStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    setStatus(vipStatus);
  }, [vipStatus]);
  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        შეთავაზება
      </p>
      <div className="flex items-center justify-center gap-5 mt-8 flex-wrap">
        {ActiveOffers.map((e: TOffer, i: number) => (
          <div
            key={i}
            className=" h-[350px] w-[260px] rounded-section flex justify-between p-3 relative items-center flex-col"
            style={{ backgroundColor: e.secondColor }}
          >
            <div
              className="absolute h-[30px] w-[120px] rounded-normal font-mainBold text-buttonText flex items-center justify-center text-Asmall tracking-wider top-0 -translate-y-1/4"
              style={{ backgroundColor: e.mainColor }}
            >
              {e.name}
            </div>
            <div
              className="flex flex-col mt-7
            "
            >
              {e.benefits.map((item: string, index: number) => (
                <div key={index} className="flex flex-col">
                  <p className="text-[13px] tracking-normal font-mainBold text-textDesc text-center">
                    {item}
                  </p>
                  <div
                    className="h-[2px] w-[30px] rounded-md  mx-auto my-2"
                    style={{ backgroundColor: e.lineColor }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p
                className="text-Asmall font-mainBold text-center"
                style={{ color: e.mainColor }}
              >
                {e.price !== 0 ? `1 დღე - ${e.price}₾` : "უფასო"}
              </p>
              <button
                className="h-[36px] w-full rounded-md text-Asmall font-mainBold tracking-wider transition-colors"
                style={{
                  backgroundColor: status == e.status ? "#FFFFFF" : e.mainColor,
                  color: status == e.status ? e.mainColor : "#FFFFFF",
                }}
                onClick={() => dispatch(updateVip(e.status))}
              >
                {status == e.status ? "არჩეული" : "არჩევა"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EstateClosePlaces() {
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedAddons.length === 0) {
      dispatch(updateClosePlaces(null));
    } else {
      dispatch(updateClosePlaces(selectedAddons));
    }
  }, [selectedAddons]);
  const addAddon = (index: number) => {
    if (selectedAddons.includes(index)) {
      let newAddons = selectedAddons.filter((item) => item !== index);
      setSelectedAddons([...newAddons]);
    } else {
      let newArr = [...selectedAddons, index];
      setSelectedAddons([...newArr]);
    }
  };

  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        ახლოს მდებარეობს
      </p>
      <div className="flex items-start justify-center gap-3 flex-col flex-wrap max-h-[200px] my-[25px] pl-5 mobileTab:pl-0 mobileSmall:pl-5 mobileSmall:max-h-fit">
        {closePlacesList.map((e: TClosePlace, i: number) => (
          <ClosePlaceBlock key={i} i={i} e={e} addAddon={addAddon} />
        ))}
      </div>
    </div>
  );
}
function ClosePlaceBlock(props: {
  i: number;
  e: TClosePlace;
  addAddon: Function;
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      key={props.i}
      onClick={() => {
        props.addAddon(props.i);
        setActive((state) => !state);
      }}
      className="flex items-center cursor-pointer select-none"
    >
      <div
        className={`h-[16px] aspect-square border-2 rounded-md mr-3 transition-colors flex justify-center items-center ${
          active ? `bg-[${props.e.color}]` : "bg-transparent"
        }`}
        style={{
          borderColor: props.e.color,
          backgroundColor: active ? props.e.color : "transparent",
        }}
      >
        {active && <CheckIcon className="h-[8px] aspect-square " />}
      </div>
      {props.e.icon("h-[30px] mobileTab:h-[24px]")}
      <p className="ml-2 text-Asmall text-textDesc mobileTab:text-[12px]">
        {props.e.name}
      </p>
    </div>
  );
}
export function EstateAddons() {
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedAddons.length === 0) {
      dispatch(updateAddons(null));
    } else {
      dispatch(updateAddons(selectedAddons));
    }
  }, [selectedAddons]);

  const addAddon = (index: number) => {
    if (selectedAddons.includes(index)) {
      let newAddons = selectedAddons.filter((item) => item !== index);
      setSelectedAddons([...newAddons]);
    } else {
      let newArr = [...selectedAddons, index];
      setSelectedAddons([...newArr]);
    }
  };

  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        მონიშნეთ დამატებები
      </p>
      <div className="flex items-start justify-center gap-3 flex-col flex-wrap max-h-[200px] my-[25px] pl-5 mediumSmallXl:max-h-[350px] mobileTab:pl-0 mobileSmall:pl-5 mobileSmall:max-h-fit">
        {productAddonsList.map((e: TProductAddon, i: number) => (
          <AddonBlock key={i} i={i} e={e} addAddon={addAddon} />
        ))}
      </div>
    </div>
  );
}
function AddonBlock(props: {
  i: number;
  e: TProductAddon;
  addAddon: Function;
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      key={props.i}
      onClick={() => {
        props.addAddon(props.i);
        setActive((state) => !state);
      }}
      className="flex items-center cursor-pointer select-none"
    >
      <div
        className={`h-[16px] aspect-square border-2 border-main rounded-md mr-3 transition-colors flex justify-center items-center ${
          active ? "bg-main" : "bg-transparent"
        }`}
      >
        {active && <CheckIcon className="h-[8px]  aspect-square" />}
      </div>
      {props.e.icon("h-[30px] mobileTab:h-[24px]")}
      <p className="ml-2 text-Asmall text-textDesc mobileTab:text-[12px]">
        {props.e.name}
      </p>
    </div>
  );
}

export function EstateImages(props: { error: boolean }) {
  const dispatch = useDispatch();
  const [images, setImages] = useState<any>([]);
  useEffect(() => {
    if (images.length > 0) {
      let covers = images.filter(
        (item: { url: string; cover: boolean }) => item.cover === true
      );
      if (covers.length === 0) {
        images[0].cover = true;
        dispatch(updateActiveImage(images[0].url));
        dispatch(updateImages(images));
        setImages([...images]);
      }
    } else if (images.length === 0) {
      dispatch(updateActiveImage(null));
      dispatch(updateImages(null));
    }
  }, [images]);

  const removeImage = (index: number) => {
    images.splice(index, 1);
    setImages([...images]);
  };
  const makeMainImage = (index: number) => {
    let newImages = images.map((item: { url: string; cover: boolean }) => ({
      url: item.url,
      cover: false,
    }));
    newImages[index].cover = true;
    dispatch(updateActiveImage(images[index].url));
    setImages([...newImages]);
  };
  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        ფოტოები{" "}
        <span className="text-Asmall text-textDescCard">
          (მაქსიმუმ 12 ფოტო, სურათის მოცულობა: 10MB)
        </span>{" "}
      </p>
      {images.length == 0 && props.error && (
        <div className=" rounded-xl text-pinkI bg-pinkClear py-3 px-4 text-sm tracking-wider mt-4 text-center">
          {" "}
          სავალდებულოა მინიმუმ ერთი ფოტო
        </div>
      )}
      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center">
        <div className=" h-[120px] aspect-video bg-whiteLow rounded-xl cursor-pointer transition-colors hover:bg-whiteHover flex justify-center items-center relative">
          <PlusIcon className=" h-[32px] aspect-square [&>path]:fill-whiteCont" />
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            className="h-full w-full absolute cursor-pointer"
            onChange={(event) => {
              if (event.target.files) {
                const selectedImages = Array.from(event.target.files).map(
                  (file) => {
                    return {
                      image: file,
                      url: URL.createObjectURL(file),
                      cover: false,
                    };
                  }
                );
                let allImages = [...images, ...selectedImages];
                if (allImages.length > 12) allImages = allImages.slice(-12);

                setImages(() => [...allImages]);
              }
            }}
            multiple
          />
        </div>
        {images.length !== 0 &&
          images.map(
            (e: { image: any; url: string; cover: boolean }, i: number) => (
              <div
                key={i}
                className="group  h-[120px] overflow-hidden aspect-video bg-whiteLow rounded-xl transition-colors hover:bg-whiteHover flex justify-center items-center relative"
              >
                <div className="flex items-center gap-3 absolute top-2 right-2">
                  <button
                    onClick={() => makeMainImage(i)}
                    className="invisible transition-opacity group-hover:visible opacity-0 group-hover:opacity-100   h-[30px] w-[150px] rounded-md bg-main text-buttonText z-[2] text-Asmaller tracking-wider"
                  >
                    ფონად დაყენება
                  </button>
                  <button
                    onClick={() => removeImage(i)}
                    className="invisible transition-opacity group-hover:visible opacity-0 group-hover:opacity-100   h-[30px] aspect-square rounded-md bg-redI text-whiteMain z-[2] text-Asmaller tracking-wider flex justify-center items-center"
                  >
                    <TrashIcon className="h-[20px] aspect-square [&>path]:stroke-buttonText" />
                  </button>
                </div>
                {e.cover == true && (
                  <div className="absolute bottom-1 left-1 w-[70px] h-[26px] flex items-center justify-center rounded-lg tracking-widest bg-main text-buttonText text-Asmaller z-[2]">
                    ფონი
                  </div>
                )}
                <img
                  src={e.url}
                  alt="EstateImage"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            )
          )}
      </div>
    </div>
  );
}

export function EstateType() {
  const [active, setActive] = useState(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (active !== -1) {
      dispatch(updateType(active));
    }
  }, [active]);

  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        უძრავი ქონების ტიპი
      </p>
      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center">
        {RealEstateTypes.map((e, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`  p-2 px-4 rounded-xl transition-colors ${
              active == i ? "bg-main" : "bg-mainClear"
            }`}
          >
            <e.icon
              className={` h-[24px] aspect-square ${
                active == i && "[&>path]:fill-buttonText"
              } `}
            />
            <p
              className={`text-Asmall ml-7 tracking-wide ${
                active == i ? "text-buttonText" : "text-main"
              }`}
            >
              {e.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export function DealType() {
  const [active, setActive] = useState(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (active !== -1) {
      dispatch(updateDeal(active));
    }
  }, [active]);
  const DealTypes = ["იყიდება", "ქირავდება", "ქირავდება დღიურად", "გირავდება"];
  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        გარიგების ტიპი
      </p>
      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center">
        {DealTypes.map((e, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
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
      </div>
    </div>
  );
}
export function EstateStatus() {
  const [active, setActive] = useState(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (active !== -1) {
      dispatch(updateStatus(active));
    }
  }, [active]);
  const DealTypes = ["ახალი აშენებული", "ძველი აშენებული", "მშენებარე"];
  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        სტატუსი
      </p>
      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center">
        {DealTypes.map((e, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
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
      </div>
    </div>
  );
}
export function EstateAddress(props: { error: boolean }) {
  const [city, setCity] = useState("");
  const getInput = useRef<any>(null);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
        მისამართი
      </p>
      {city == "" && props.error && (
        <div className=" rounded-xl text-pinkI bg-pinkClear py-3 px-4 text-sm tracking-wider mt-2 text-center">
          {" "}
          სავალდებულოა შეავსოთ ქალაქის ველი
        </div>
      )}
      <div className="flex gap-3 flex-wrap pl-3 mt-4 mobile:justify-center">
        <SearchCityFilter setCity={setCity} />
        <input
          type="text"
          ref={getInput}
          className="AddProductInput"
          placeholder="საკადასტრო კოდი"
          onChange={(e) => {
            if (e.target.value == "") {
              dispatch(updateIpcode(null));
            } else {
              dispatch(updateIpcode(e.target.value));
            }
          }}
        />
      </div>
    </div>
  );
}
export function EstateInformation(props: { error: boolean }) {
  const [size, setSize] = useState<null | number>(null);
  const [openDeal, setOpenDeal] = useState(false);
  const [currency, setCurrency] = useState(1);
  const [fullPrice, setFullPrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fullPrice > 0) {
      dispatch(updateFullPrice(fullPrice));
    }
  }, [fullPrice]);
  useEffect(() => {
    dispatch(updateCurrency(currency));
  }, [currency]);
  const calculateSizePrice = (price: number) => {
    if (size && size > 0) {
      setSizePrice(Math.floor(price / size));
    }
  };
  const calculateFullPrice = (price: number) => {
    if (size && size > 0) {
      setFullPrice(Math.floor(price * size));
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
          ინფორმაცია
        </p>
        {(size == null || fullPrice == 0) && props.error && (
          <div className=" rounded-xl text-pinkI bg-pinkClear py-3 px-4 text-sm tracking-wider mt-4 text-center">
            {" "}
            სავალდებულოა შეავსოთ ფართი, ფასი
          </div>
        )}
        <div className="flex gap-4 flex-col pl-3 mt-4">
          <div className="flex items-center mobileSmall:flex-col  mobileSmall:items-stretch">
            <p className="text-textDesc font-mainMedium w-[200px] mobileTab:text-[14px] mobileTab:min-w-[auto] mobileSmall:mb-3 mobileSmall:text-center mobileSmall:w-full mobileSmall:mt-3">
              ფართი (მ²)
            </p>
            <input
              type="number"
              className="AddProductInput mobileSmall:mx-auto"
              placeholder="ფართი"
              onChange={(e) => {
                setSize(e.target.valueAsNumber);
                dispatch(updateSize(e.target.valueAsNumber));
              }}
              value={size ? size : ""}
            />
          </div>

          <div className="flex items-center mobileSmall:flex-col  mobileSmall:items-stretch">
            <p className="text-textDesc font-mainMedium w-[200px] mobileTab:text-[14px] mobileTab:min-w-[auto] mobileSmall:mb-3 mobileSmall:text-center mobileSmall:w-full mobileSmall:mt-3">
              პროექტის ტიპი
            </p>
            <input
              type="number"
              className="AddProductInput  mobileSmall:mx-auto"
              placeholder="არასტანდარტული"
              onChange={(e) => {
                dispatch(updateProject(e.target.valueAsNumber));
              }}
            />
          </div>

          <div className="flex items-center mobileSmall:flex-col  mobileSmall:items-stretch ">
            <p className="text-textDesc font-mainMedium w-[200px] mobileTab:text-[14px] mobileTab:min-w-[auto] mobileSmall:mb-3 mobileSmall:text-center mobileSmall:w-full mobileSmall:mt-3">
              მდგომარეობა
            </p>
            <input
              type="number"
              className="AddProductInput mobileSmall:mx-auto"
              placeholder="მდგომარეობა"
              onChange={(e) => {
                dispatch(updateCondition(e.target.valueAsNumber));
              }}
            />
          </div>

          <div className="flex items-center mobileSmall:flex-col  mobileSmall:items-stretch">
            <p className="text-textDesc font-mainMedium min-w-[200px] mobileTab:text-[14px] mobileTab:min-w-[auto] mobileSmall:mb-3 mobileSmall:text-center mobileSmall:w-full mobileSmall:mt-3">
              სართული
            </p>
            <div className="flex gap-4 flex-wrap mobileTab:justify-end mobileSmall:justify-center">
              <input
                type="number"
                className="AddProductInput"
                placeholder="სართულები"
                onChange={(e) => {
                  dispatch(updateFloor(e.target.valueAsNumber));
                }}
              />{" "}
              <input
                type="number"
                className="AddProductInput"
                placeholder="სართული სულ"
                onChange={(e) => {
                  dispatch(updateFloors(e.target.valueAsNumber));
                }}
              />
            </div>
          </div>

          <div className="flex items-center mobileTab:flex-col">
            <p className="text-textDesc font-mainMedium w-[200px] mobileTab:w-full mobileTab:mb-3 mobileTab:mt-5 mobileTab:text-center">
              ოთახები
            </p>
            <SelectNumbers setDataDispatch={updateRooms} name="" />
          </div>
          <div className="flex items-center mobileTab:flex-col">
            <p className="text-textDesc font-mainMedium w-[200px] mobileTab:w-full mobileTab:mb-3 mobileTab:mt-5 mobileTab:text-center">
              საძინებელი
            </p>
            <SelectNumbers setDataDispatch={updateBedrooms} name="" />
          </div>
          <div className="flex items-center mobileTab:flex-col">
            <p className="text-textDesc font-mainMedium w-[200px] mobileTab:w-full mobileTab:mb-3 mobileTab:mt-5 mobileTab:text-center">
              სველი წერტილი
            </p>
            <SelectNumbers setDataDispatch={updateBathrooms} name="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {size !== null && size > 0 && (
          <>
            <p className=" text-textHead tracking-wider font-mainBold  mobile:text-[15px]  mobile:text-center ">
              ფასი
            </p>
            <div className="flex gap-4 items-center  pl-3 mt-4">
              <div className="relative">
                <button
                  onClick={() => setOpenDeal((state) => !state)}
                  className="bg-main flex items-center w-[150px] justify-center py-[8px] rounded-lg text-whiteMain tracking-widest font-mainMedium text-Asmall"
                >
                  {currency == 0 ? "$ დოლარი" : "₾ ლარი"}
                  <DropDownIcon className="h-[16px] aspect-square flex items-center justify-center ml-4 translate-y-[1px] [&>path]:fill-WhiteFade" />
                </button>
                <div
                  className={` w-[150px] absolute shadow-cardShadow bg-whiteMain rounded-lg top-[45px] overflow-hidden transition-all  ${
                    openDeal ? "opacity-100 visible" : "invisible opacity-0"
                  }`}
                >
                  <button
                    onClick={() => {
                      setOpenDeal(false);
                      setCurrency(1);
                    }}
                    className={`h-[40px] w-full flex justify-center items-center text-textHead transition-colors hover:bg-whiteHover ${
                      currency == 0 && "bg-whiteHover"
                    }`}
                  >
                    ₾ ლარი
                  </button>
                  <button
                    onClick={() => {
                      setOpenDeal(false);
                      setCurrency(0);
                    }}
                    className={`h-[40px] w-full flex justify-center items-center text-textHead transition-colors hover:bg-whiteHover ${
                      currency == 0 && "bg-whiteHover"
                    }`}
                  >
                    $ დოლარი
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="AddProductInput"
                  placeholder="სრული ფასი"
                  onChange={(e) => {
                    setFullPrice(e.target.valueAsNumber);
                    calculateSizePrice(e.target.valueAsNumber);
                  }}
                  value={fullPrice ? fullPrice : ""}
                />{" "}
                <p className=" text-textDesc">{currency == 0 ? "$" : "₾"}</p>{" "}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  className="AddProductInput"
                  placeholder="მ² ფასი"
                  onChange={(e) => {
                    setSizePrice(e.target.valueAsNumber);
                    calculateFullPrice(e.target.valueAsNumber);
                  }}
                  value={sizePrice ? sizePrice : ""}
                />{" "}
                <p className=" text-textDesc">{currency == 0 ? "$" : "₾"}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
