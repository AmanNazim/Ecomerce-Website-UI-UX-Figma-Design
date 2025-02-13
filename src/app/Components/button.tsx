"use client";
import Image from "next/image";
interface BtnTxtType {
  BtnTxt: string;
  BtnCol: string;
  BtnTxtCol: string;
  BtnH: string;
  BtnW: string;
  BtnTxtS: string;
  BtnFW: string;
  BtnDivH?: string;
  BtnDivW?: string;
  BtnDivF?: string;
  BtnDivJC?: string;
  BtnTxtOp?: string;
  BtnGap?: string;

  //small screen width and height
  SmDW?: string;
  SmDH?: string;

  //Optional Image Section
  ImgSrc?: string;
  ImgW?: number;
  ImgH?: number;
  ImgAlt?: string;

  onClick?: () => void;
}
const Btn: React.FC<BtnTxtType> = ({
  BtnTxt,
  BtnCol,
  BtnTxtCol,
  BtnH,
  BtnW,
  BtnTxtS,
  BtnFW,
  BtnDivH,
  BtnDivW,
  BtnDivF,
  BtnDivJC,
  BtnTxtOp,
  BtnGap,
  SmDW,
  SmDH,
  ImgSrc,
  ImgH,
  ImgAlt,
  ImgW,
  onClick,
}) => {
  return (
    <div
      className={`lg:w-[${BtnDivW}] h-[${BtnDivH}] ${BtnDivF} ${BtnDivJC} x-sm:w-${SmDW} x-sm:h-${SmDH}`}
    >
      <button
        onClick={onClick}
        className={`h-${BtnH} w-${BtnW} flex justify-center items-center gap-[${BtnGap}] text-[${BtnTxtS}] text-opacity-[${BtnTxtOp}] font-[${BtnFW}] bg-[${BtnCol}] rounded-[62px] text-[${BtnTxtCol}] leading-[21.6px] x-sm:text-[12px]`}
      >
        {BtnTxt}
        {ImgSrc && (
          <Image
            src={ImgSrc}
            width={ImgW || 24}
            height={ImgH || 24}
            alt={ImgAlt || "Button Image"}
            quality={100}
            priority={true}
          />
        )}
      </button>
    </div>
  );
};

export default Btn;
