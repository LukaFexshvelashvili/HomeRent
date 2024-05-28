import { memo, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosCall from "../../hooks/axiosCall";
import { PhoneFIlledIcon, ReportIcon } from "../../assets/icons/Icons";
import Card, { TProductCard } from "../../components/global/Card";

type Tseller = {
  user_data: { name: string; surname: string };
  products: TProductCard[];
};

function Seller() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<null | Tseller>(null);
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (params.id) {
      if (firstRender.current) {
        axiosCall.get("fetch/seller?id=" + params.id).then((res) => {
          console.log(res.data);

          if (res.data.status == 100) {
            setData({
              user_data: res.data.user_data,
              products: res.data.products,
            });
          } else {
            // navigate("/");
          }
        });

        firstRender.current = false;
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="flex items-center h-[80px] rounded-lg bg-whiteMain mt-5 px-5">
        <div className="h-[44px]  aspect-square rounded-circle bg-main p-[3px] flex justify-center items-center relative">
          <div className="h-full border-[3px] border-whiteMain aspect-square rounded-circle bg-main select-none"></div>
        </div>
        <p className="text-textDesc ml-5 shadow-sectionShadow">
          {data?.user_data
            ? data.user_data.name + " " + data.user_data.surname
            : null}
        </p>
        <div className="flex items-center gap-5 ml-auto">
          <div className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-pinkClear rounded-[8px] text-[13px] text-pinkI tracking-wider cursor-pointer transition-colors hover:bg-pinkHover">
            <ReportIcon className="h-[16px] aspect-square [&>path]:fill-pinkI mr-3" />{" "}
            გასაჩივრება
          </div>
          <button className="flex-1  text-buttonText flex justify-center items-center max-w-[280px]  rounded-xl h-[50px] px-5 bg-main relative text-Asmaller tracking-wide font-mainSemiBold transition-colors hover:bg-mainHover">
            <PhoneFIlledIcon className="mobile:h-[21px] mobileSmall:h-[18px] h-[19px] aspect-square [&>path]:fill-text-buttonText mr-3 translate-y-[-1px]" />{" "}
            511 22 ** ** ნომრის ჩვენება
          </button>
        </div>
      </div>
      {data?.products ? (
        <>
          <div className="mt-5 h-[2px] bg-lineBg"></div>
          <p className="text-textDesc mt-2 tracking-wider text-[14px]">
            {data.products.length} განცხადება
          </p>
          <div className="flex gap-5 flex-wrap justify-center mt-5">
            {data.products.map((e: TProductCard) => (
              <Card key={e.id} product={e} />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
export default memo(Seller);
