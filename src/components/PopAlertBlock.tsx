export default function PopAlertBlock(props: {
  close: Function;
  headText: string;
  descText: string;
  nextFunction: Function;
}) {
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 z-30 flex justify-center items-center">
        <div
          onClick={() => props.close()}
          className="absolute top-0 left-0 w-full h-full  bg-[rgba(0,0,0,0.4)]  z-[5]"
        >
          {" "}
        </div>
        <div className=" w-[650px] rounded-section bg-whiteMain p-5 relative z-10  max-w-[90%]">
          <div className="w-[550px] mx-auto">
            <h2 className="text-main font-mainBold text-center text-[18px]  mb-4">
              {props.headText}
            </h2>
            <p className="text-textDesc  text-center text-[14px] mt-2">
              {props.descText}
            </p>

            <div className="flex gap-3 justify-center mt-6">
              <button
                onClick={() => props.close()}
                className="bg-redClear text-[14px] h-[35px] w-[200px] text-redI tracking-wider rounded-md block transition-colors hover:bg-redHover"
              >
                გაუქმება
              </button>
              <button
                onClick={() => props.nextFunction()}
                className="bg-main text-[14px] h-[35px] w-[200px] text-buttonText tracking-wider rounded-md block transition-colors hover:bg-mainHover"
              >
                გაგრძელება
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
