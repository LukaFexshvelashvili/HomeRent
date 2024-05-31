import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setReportProblem } from "../../store/data/popupsSlice";
import { useState } from "react";
import { submitReport } from "../../hooks/serverProductFunctions";
import { setWebLoader } from "../../store/data/webUISlice";

export default function ProblemReport() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<number>(0);
  const reportData = useSelector(
    (store: RootState) => store.popups.reportProblem
  );

  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 z-30 flex justify-center items-center">
        <div
          onClick={() => {
            dispatch(setReportProblem({ show: false, link: "", message: "" }));
          }}
          className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5]"
        >
          {" "}
        </div>
        <div className="  w-[90%] max-w-[650px] rounded-section bg-whiteMain p-5 relative z-10">
          <div className="  w-[90%] max-w-[550px] mx-auto">
            {status == 0 ? (
              <>
                <h2 className="text-main font-mainBold text-center text-[18px]  mb-4">
                  გასაჩივრება
                </h2>
                <p className="text-textDesc  text-center text-[14px] mt-2">
                  ლინკის გასაჩივრება: ( {reportData.link} )
                </p>
                <textarea
                  className="w-full mt-5 bg-bodyBg rounded-xl outline-none text-blackMain p-2 text-[14px] font-mainRegular tracking-wider text-center"
                  onChange={(e) =>
                    dispatch(
                      setReportProblem({
                        ...reportData,
                        message: e.target.value,
                      })
                    )
                  }
                  placeholder="შეტყობინება"
                ></textarea>
              </>
            ) : status == 3 ? (
              <>
                <h2 className="text-main font-mainBold text-center text-[18px]  mb-4">
                  ბმული წარმატებით გასაჩივრდა
                </h2>
                <p className="text-textDesc  text-center text-[14px] mt-2">
                  ადმინისტრატორი მალევე გადახედავს ბმულს, მადლობა ყურადღებისთვის
                </p>
              </>
            ) : status == 2 ? (
              <>
                <h2 className="text-main font-mainBold text-center text-[18px]  mb-4">
                  დაფიქსირდა შეცდომა
                </h2>
                <p className="text-textDesc  text-center text-[14px] mt-2">
                  სცადეთ მოგვიანებით
                </p>
              </>
            ) : null}
            <div className="flex gap-3 justify-center mt-6">
              {status == 0 ? (
                <>
                  <button
                    onClick={() => {
                      dispatch(
                        setReportProblem({ show: false, link: "", message: "" })
                      );
                    }}
                    className="bg-redClear text-[14px] h-[35px] w-[200px] text-redI tracking-wider rounded-md block transition-colors hover:bg-redHover"
                  >
                    გაუქმება
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setWebLoader(true));
                      submitReport(reportData).then((status) => {
                        dispatch(setWebLoader(false));

                        if (status == 100) {
                          setStatus(3);
                        } else {
                          setStatus(2);
                        }
                      });
                    }}
                    className="bg-main text-[14px] h-[35px] w-[200px] text-buttonText tracking-wider rounded-md block transition-colors hover:bg-mainHover"
                  >
                    გაგრძელება
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    dispatch(
                      setReportProblem({ show: false, link: "", message: "" })
                    );
                  }}
                  className="bg-mainClear text-[14px] h-[35px] w-[200px] text-main tracking-wider rounded-md block transition-colors hover:bg-mainClearHover"
                >
                  დახურვა
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
