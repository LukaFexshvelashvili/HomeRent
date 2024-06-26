import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - გვერდი ვერ მოიძებნა</title>
      </Helmet>

      <div className="text-textHead h-screen min-h-[300px] flex justify-center items-center text-[40px]">
        404 Page Not Found
      </div>
    </>
  );
}
