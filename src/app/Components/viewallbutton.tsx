interface BtnTxtType {
  BtnTxt: string;
  BtnW: number;
}
const ViewAllBtn = ({ BtnTxt, BtnW }: BtnTxtType) => {
  return (
    <button
      className={`lg:h-[52px] lg:w-[${BtnW}px] x-sm:w-full x-sm:h-[46px] flex justify-center items-center text-[16px] font-[500] border-[1px] border-[#000000] rounded-[62px] border-opacity-[10%] x-sm:text-[14px]`}
    >
      {BtnTxt}
    </button>
  );
};

export default ViewAllBtn;
