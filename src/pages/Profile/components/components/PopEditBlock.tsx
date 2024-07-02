import { FormEvent, useEffect, useState } from "react";
import { TProductData } from "../MyProducts";
import { PopupCloseIcon } from "../../../../assets/icons/Icons";
import {
  EstateAddons,
  EstateClosePlaces,
  EstateInformation,
  EstateType,
} from "../../../AddProduct/components/Selectors";
import {
  DealType,
  EstateDescription,
  EstateStatus,
  EstateTitle,
} from "../../../AddProduct/components/SelectorsOpt";
import { setWebLoader } from "../../../../store/data/webUISlice";
import { useDispatch } from "react-redux";
import axiosCall from "../../../../hooks/axiosCall";

export default function PopEditBlock({
  productData,
  close,
  fetchProducts,
}: {
  productData: TProductData;
  close: Function;
  fetchProducts: Function;
}) {
  const [status, setStatus] = useState<number | null>(null);
  return (
    <div className="fixed w-full h-full top-0 left-0 z-30 flex justify-center items-center pointer-events-all">
      <div
        onClick={() => close()}
        className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5] "
      ></div>
      <div
        className={`noScrollBar  max-w-[1000px] w-[96%] flex  flex-col justify-center items-center max-h-[90%] overflow-auto min-h-[200px] rounded-section bg-whiteMain p-5 relative z-10`}
      >
        <button
          onClick={() => close()}
          className="h-[30px] aspect-square  absolute top-3 right-3 flex justify-center items-center p-1"
        >
          <PopupCloseIcon className="h-[16px] [&>path]:fill-mainBlack" />
        </button>

        {status == null ? (
          <>
            {" "}
            <p className="text-center text-main text-[18px]">
              პროდუქტის რედაქტირება
            </p>
            <p className="text-center text-textDesc mt-3">
              {productData.estate_title.slice(0, 30)}
            </p>
            <ChangeProductData
              productData={productData}
              setStatus={setStatus}
              fetchProducts={fetchProducts}
            />
          </>
        ) : status == 100 ? (
          <div className="w-[550px] mx-auto  max-w-[100%] ">
            <h2 className="text-greenI font-mainBold text-center text-[18px]  mb-4">
              პროდუქტი წარმატებით განახლდა
            </h2>
            <button
              onClick={() => close()}
              className="bg-greenI text-[14px] h-[35px] w-[200px] text-buttonText tracking-wider rounded-md mx-auto block mt-6  transition-colors hover:bg-greenCloseI"
            >
              გასაგებია
            </button>
          </div>
        ) : (
          <div className="w-[550px] mx-auto  max-w-[100%] ">
            <h2 className="text-redI font-mainBold text-center text-[18px]  mb-4">
              წარმოიშვა შეცდომა
            </h2>
            <p className="text-textDesc  text-center text-[14px] mt-2">
              სერვერზე შეფერხებაა სცადეთ მოგვიანებით
            </p>

            <button
              onClick={() => close()}
              className="bg-redI text-[14px] h-[35px] w-[200px] text-buttonText tracking-wider rounded-md mx-auto block mt-6  transition-colors hover:bg-redCloseI"
            >
              გასაგებია
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export type TinfoDefData = {
  size: number;
  landSize: number;
  currency: number;
  fullPrice: number;
  sizePrice: number;
  project: number;
  projectStatus: number;
  floor: number;
  floors: number;
  rooms: number;
  bedroom: number;
  bathroom: number;
};

function ChangeProductData({
  productData,
  setStatus,
  fetchProducts,
}: {
  productData: TProductData;
  setStatus: Function;
  fetchProducts: Function;
}) {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");
  const [estateType, setEstateType] = useState(productData.estate_type);
  const [estateDeal, setEstateDeal] = useState<number>(productData.estate_deal);
  const [estateStatus, setEstateStatus] = useState<string>(
    productData.estate_status
  );
  const [estateTitle, setEstateTitle] = useState<string>(
    productData.estate_title
  );
  const [estateDescription, setEstateDescription] = useState<string>(
    productData.estate_description !== "null"
      ? productData.estate_description
      : ""
  );
  const [estateInformation, setEstateInformation] = useState<TinfoDefData>({
    size: productData.estate_size,
    landSize: productData.estate_land_size,
    currency: productData.estate_currency,
    fullPrice: productData.estate_price,
    sizePrice: Math.floor(
      productData.estate_price /
        (productData.estate_land_size
          ? productData.estate_size + productData.estate_land_size
          : productData.estate_size)
    ),
    project: productData.estate_project,
    projectStatus: productData.estate_condition,
    floor: productData.estate_floor,
    floors: productData.estate_floors,
    rooms: productData.estate_rooms,
    bedroom: productData.estate_bedrooms,
    bathroom: productData.estate_bathrooms,
  });

  const [estateAddons, setEstateAddons] = useState<number[] | null>(
    productData.estate_addons ? JSON.parse(productData.estate_addons) : null
  );
  const [estateClosePlaces, setEstateClosePlaces] = useState<number[] | null>(
    productData.estate_close_places
      ? JSON.parse(productData.estate_close_places)
      : null
  );
  useEffect(() => {
    scrollTo(0, 0);
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      estateType != null &&
      estateStatus &&
      estateDeal != null &&
      estateTitle.length > 0 &&
      estateInformation.size &&
      estateInformation.fullPrice &&
      estateInformation.project != null &&
      estateInformation.projectStatus != null
    ) {
      dispatch(setWebLoader({ active: true, opacity: true }));
      let formData = new FormData();

      formData.append("productId", productData.id.toString());
      formData.append("estateType", estateType.toString());
      formData.append("estateTitle", estateTitle);
      formData.append("estateDescription", estateDescription);
      formData.append("estateDeal", estateDeal.toString());
      formData.append("estateStatus", estateStatus);
      formData.append("estateSize", estateInformation.size.toString());
      formData.append("estateLandSize", estateInformation.landSize.toString());
      formData.append("estateProject", estateInformation.project.toString());
      formData.append(
        "estateCondition",
        estateInformation.projectStatus.toString()
      );
      formData.append("estateFloor", estateInformation.floor.toString());
      formData.append("estateFloors", estateInformation.floors.toString());
      formData.append("estateRooms", estateInformation.rooms.toString());
      formData.append("estateBedrooms", estateInformation.bedroom.toString());
      formData.append("estateBathrooms", estateInformation.bathroom.toString());
      formData.append("estateAddons", JSON.stringify(estateAddons));
      formData.append("estateClosePlaces", JSON.stringify(estateClosePlaces));

      axiosCall
        .post("update_product.php", formData, { withCredentials: true })
        .then((res) => {
          dispatch(setWebLoader({ active: false }));
          fetchProducts();
          if (res.data.status == 5) {
            setError("შეავსეთ ყველა სავალდებულო ველი");
          } else {
            setStatus(res.data.status);
          }
        });
    } else {
      setError("შეავსეთ ყველა სავალდებულო ველი");
    }
  };

  return (
    <form className="flex flex-col justify-center items-start mt-3 gap-7 ">
      {error !== "" && (
        <div className="max-w-full w-full  h-auto p-3 rounded-lg bg-pinkClear text-pinkI border-2 border-pinkI  flex justify-center items-center text-center text-[14px] tracking-wider font-mainSemiBold">
          {error}
        </div>
      )}
      <div className="flex flex-col items-start  gap-7 max-h-[500px] overflow-y-auto px-2 pb-[60px]">
        <EstateType setData={setEstateType} defData={productData.estate_type} />
        <DealType setData={setEstateDeal} defData={estateDeal} />
        <EstateStatus
          productData={productData}
          estateType={estateType}
          setData={setEstateStatus}
          defData={estateStatus}
        />
        <EstateTitle setData={setEstateTitle} defData={estateTitle} />
        <EstateDescription
          setData={setEstateDescription}
          defData={estateDescription}
        />
        <EstateInformation
          productData={productData}
          defData={estateInformation}
          setData={setEstateInformation}
        />
        <EstateAddons
          estateType={estateType}
          productData={productData}
          defData={estateAddons}
          setData={setEstateAddons}
        />
        <EstateClosePlaces
          defData={estateClosePlaces}
          setData={setEstateClosePlaces}
        />
      </div>

      <div className="flex justify-center bg-whiteMain items-center h-[60px] absolute w-full bottom-0 z-20">
        <button onClick={submitForm} className="DefButton block mx-auto">
          დადასტურება
        </button>
      </div>
    </form>
  );
}
