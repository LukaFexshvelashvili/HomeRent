import { memo, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosCall from "../../hooks/axiosCall";
import { PhoneFIlledIcon, ReportIcon } from "../../assets/icons/Icons";
import Card, { CardSkeleton, TProductCard } from "../../components/global/Card";
import { useDispatch } from "react-redux";
import { setReportProblem } from "../../store/data/popupsSlice";
import { setWebLoader } from "../../store/data/webUISlice";

type Tseller = {
  user_data: { name: string; surname: string; mobile: string };
  products: TProductCard[];
};

function Seller() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<null | Tseller>(null);
  const [seeNumber, setSeeNumber] = useState<boolean>(false);
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    dispatch(setWebLoader({ active: true, opacity: true }));
    if (params.id) {
      if (firstRender.current) {
        axiosCall.get("fetch/seller?id=" + params.id).then((res) => {
          if (res.data.status == 100) {
            setData({
              user_data: res.data.user_data,
              products: res.data.products,
            });
          } else {
            navigate("/");
          }
          dispatch(setWebLoader({ active: false }));
        });

        firstRender.current = false;
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="flex items-center h-[80px] rounded-lg bg-whiteMain mt-5 px-5 small:flex-col small:justify-center small:h-auto small:py-5 small:gap-2">
        <div className="h-[44px] small:min-h-[40px]  aspect-square rounded-circle bg-main p-[3px] flex justify-center items-center relative">
          <div className="h-full border-[3px] border-whiteMain aspect-square rounded-circle bg-main select-none"></div>
        </div>
        <p className="text-textDesc ml-5 shadow-sectionShadow small:ml-0">
          {data?.user_data
            ? data.user_data.name + " " + data.user_data.surname
            : null}
        </p>
        <div className="flex items-center gap-5 ml-auto small:ml-0 small:justify-center small:flex-col small:gap-2">
          <div
            onClick={() =>
              dispatch(
                setReportProblem({
                  show: true,
                  link: `${window.location}`,
                  message: "",
                })
              )
            }
            className=" shadow-sectionShadow flex items-center px-3 pr-6 h-[40px] w-auto bg-pinkClear rounded-[8px] text-[13px] text-pinkI tracking-wider cursor-pointer transition-colors hover:bg-pinkHover"
          >
            <ReportIcon className="h-[16px] aspect-square [&>path]:fill-pinkI mr-3" />{" "}
            გასაჩივრება
          </div>
          {seeNumber && data !== null ? (
            <Link to={"tel:" + data?.user_data.mobile} className="w-auto">
              <button className="flex-1  text-buttonText flex justify-center min-w-[300px] items-center h-full rounded-md min-h-[45px] mobile:min-h-[54px] mobileSmall:text-[13px] px-5 mobile:w-full bg-main relative text-Asmaller mobile:text-[14px] tracking-wide font-mainSemiBold transition-colors small:text-[12px] small:min-h-[45px] small:min-w-[95%] small:max-w-[300px] small:rounded-md hover:bg-mainHover">
                <PhoneFIlledIcon className="mobile:h-[21px] mobileSmall:h-[18px] h-[19px] aspect-square [&>path]:fill-text-buttonText mr-3 translate-y-[-1px]" />{" "}
                {data?.user_data.mobile.slice(0, 3) +
                  " " +
                  data?.user_data.mobile.slice(3, 5) +
                  " " +
                  data?.user_data.mobile.slice(5, 7) +
                  " " +
                  data?.user_data.mobile.slice(7, 9) +
                  " დარეკვა"}
              </button>
            </Link>
          ) : data !== null ? (
            <button
              onClick={() => setSeeNumber(true)}
              className="flex-1  text-buttonText flex justify-center min-w-[300px] items-center h-full rounded-md min-h-[45px] mobile:min-h-[54px] mobileSmall:text-[13px] px-5 mobile:w-full bg-main relative text-Asmaller mobile:text-[14px] tracking-wide font-mainSemiBold transition-colors small:text-[12px] small:min-h-[45px] small:min-w-[95%] small:max-w-[300px] small:rounded-md hover:bg-mainHover"
            >
              <PhoneFIlledIcon className="mobile:h-[21px] mobileSmall:h-[18px] h-[19px] aspect-square [&>path]:fill-text-buttonText mr-3 translate-y-[-1px]" />{" "}
              {data?.user_data.mobile.slice(0, 3) +
                " " +
                data?.user_data.mobile.slice(3, 5) +
                " ** ** ნომრის ჩვენება"}
            </button>
          ) : null}
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
      {data == null ? (
        <div className="flex items-center justify-center gap-5 w-full flex-wrap mt-5">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : null}
    </>
  );
}
export default memo(Seller);
