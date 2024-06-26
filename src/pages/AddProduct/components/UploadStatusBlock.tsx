import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateActiveImage,
  updateImages,
} from "../../../store/data/addProductSlice";
import { useEffect } from "react";

export default function statusBlock({
  status,
  setStatus,
  setAlertBlock,
}: {
  status: number;
  setStatus: Function;
  setAlertBlock: Function;
}) {
  // status 100 = success
  // status 0 = insert error (Server error)
  // status 5 = missing necessary info
  // status 6 = no supported format images
  // status 7 = image size exceeds 20MB
  // status 12 = no enough money
  useEffect(() => {
    scrollTo(0, 0);
    if (status) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const closeAlert = () => {
    setStatus(null);
    setAlertBlock(false);
  };
  return (
    <>
      {status === 100 ? (
        <UploadSuccessed />
      ) : status == 12 ? (
        <ErrorBlock
          title="არასაკმარისი თანხა"
          description="ანგარიშზე არ არის საკმარისი თანხა აირჩიეთ სხვა პაკეტი ან შეცვალეთ ვადა"
          close={closeAlert}
        />
      ) : status == 7 ? (
        <ExceedImageSize close={closeAlert} />
      ) : status == 6 ? (
        <NoSupportedFImageormats close={closeAlert} />
      ) : status == 5 ? (
        <ErrorBlock
          title="გადაამოწმეთ ინფორმაცია"
          description="გთხოვთ გადაამოწმოთ შეყვანილი ინფორმაცია და სცადოთ ხელახლა"
          close={closeAlert}
        />
      ) : (
        status === 0 && (
          <ErrorBlock
            title="სერვერზე შეფერხებაა"
            description="სერვერზე შეფერხებაა სცადეთ მოგვიანებით"
            close={closeAlert}
          />
        )
      )}
    </>
  );
}

function ErrorBlock({
  close,
  title,
  description,
}: {
  close: () => void;
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-pinkI text-center text-[20px] font-mainBold">
        {title}
      </h2>
      <p className="text-textDesc text-center text-[16px] font-mainBold my-3">
        {description}
      </p>
      <div className="flex items-center gap-5 justify-center mt-5">
        <button
          onClick={() => {
            close();
          }}
          className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover"
        >
          დახურვა
        </button>{" "}
      </div>
    </>
  );
}

function NoSupportedFImageormats({ close }: { close: () => void }) {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-pinkI text-center text-[20px] font-mainBold">
        შეუსაბამო ფოტოების ფორმატი
      </h2>
      <p className="text-textDesc text-center text-[16px] font-mainBold my-3">
        გთხოვთ გადაამოწმოთ შეყვანილი ინფორმაცია და სცადოთ ხელახლა
      </p>
      <div className="flex items-center gap-5 justify-center mt-5">
        <button
          onClick={() => {
            dispatch(updateActiveImage(null));
            dispatch(updateImages(null));
            close();
          }}
          className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover"
        >
          დახურვა
        </button>{" "}
      </div>
    </>
  );
}
function ExceedImageSize({ close }: { close: () => void }) {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-pinkI text-center text-[20px] font-mainBold">
        სურათი აჭარბებს ზომას
      </h2>
      <p className="text-textDesc text-center text-[16px] font-mainBold my-3">
        სურათის ზომა აჭარბებს 15 მეგაბაიტს, გთხოვთ ატვირთოთ ფოტოები ხელახლა
      </p>
      <div className="flex items-center gap-5 justify-center mt-5">
        <button
          onClick={() => {
            dispatch(updateActiveImage(null));
            dispatch(updateImages(null));
            close();
          }}
          className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover"
        >
          დახურვა
        </button>{" "}
      </div>
    </>
  );
}

function UploadSuccessed() {
  return (
    <>
      <h2 className="text-greenI text-center text-[20px] font-mainBold">
        განცხადება წარმატებით დამატდა
      </h2>
      <p className="text-textDesc text-center text-[16px] font-mainBold my-3">
        განცხადება წარმატებით დამატდა მონაცემთა ბაზაში, მის გამოჩენას შესაძლოა
        დაჭირდეს რამოდენიმე წუთი
      </p>
      <div className="flex items-center gap-5 justify-center mt-5">
        <Link to={"/Profile/MyProducts"}>
          <button className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover">
            განცხადებების ნახვა
          </button>
        </Link>{" "}
        <Link to={"/"}>
          <button className="px-4 py-2 rounded-md text-buttonText bg-main tracking-wider text-[14px] transition-colors hover:bg-mainHover">
            მთავარ გვერდზე დაბრუნება
          </button>{" "}
        </Link>
      </div>
    </>
  );
}
