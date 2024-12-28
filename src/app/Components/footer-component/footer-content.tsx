interface FooterContentBarProps {
  HName: String;
  RName1: string;
  RName2: string;
  RName3: string;
  RName4: string;
  SmSW: string;
  MdSW: string;
}

export const FooterContent = ({
  HName,
  RName1,
  RName2,
  RName3,
  RName4,
  SmSW,
  MdSW,
}: FooterContentBarProps) => {
  return (
    <div>
      <div
        className={`flex flex-col lg:h-full lg:w-[${MdSW}] lg:gap-[26px] lg:mt-0 x-sm:gap-[16px] x-sm:h-[146px] x-sm:w-[162px] x-sm:mt-[25px]`}
      >
        <h1 className="tracking-[3px] text-[#000000] font-[600] h-[18px] leading-[18px] lg:text-[16px] lg:leading-[18px] x-sm:text-[14px]">
          {HName}
        </h1>
        <div
          className={`lg:h-[133px] lg:w-[${MdSW}] x-sm:h-[121px] flex flex-col justify-between`}
        >
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[19px] x-sm:text-[14px] x-sm:leading-[16px]">
            {RName1}
          </h2>
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[19px] x-sm:text-[14px] x-sm:leading-[16px]">
            {RName2}
          </h2>
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[19px] x-sm:text-[14px] x-sm:leading-[16px]">
            {RName3}
          </h2>
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[19px] x-sm:text-[14px] x-sm:leading-[16px]">
            {RName4}
          </h2>
        </div>
      </div>
    </div>
  );
};
