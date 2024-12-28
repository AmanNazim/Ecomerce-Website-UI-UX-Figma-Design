import Image from "next/image";
import Btn from "./button";

interface OrderDetailsProps {
  subTotal: string;
  disPer: string;
  disPrice: string;
  dilFee: string;
  total: string;
}

export default function OrderSummary(OrderDetails: OrderDetailsProps) {
  return (
    <div className="border-[1px] border-[#000000] border-opacity-[10%] rounded-[20px] flex flex-col lg:w-[505px] lg:h-[458px] lg:py-[20px] lg:px-[24px] lg:gap-[24px] sm:w-full sm:h-[424px] sm:p-[24px] sm:gap-[20px] x-sm:w-full x-sm:h-[390px] x-sm:p-[20px] x-sm:gap-[16px]">
      <h1 className="text-[#000000] font-[700] lg:h-[32px] lg:text-[24px] lg:leading-[32.4px] sm:h-[30px] sm:text-[22px] sm:leading-[30.9pxpx] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
        Order Summary
      </h1>
      <div className="w-full flex flex-col gap-[20px] lg:h-[193px] sm:h-[183px] x-sm:h-[173px]">
        <div className="w-full flex justify-between lg:h-[27px] sm:h-[25px] x-sm:h-[22px]">
          <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            Subtotal
          </h1>
          <h2 className="text-[#000000] font-[700] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            {OrderDetails.subTotal}
          </h2>
        </div>
        <div className="w-full flex justify-between lg:h-[27px] sm:h-[25px] x-sm:h-[22px]">
          <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            Discount (-{OrderDetails.disPer})
          </h1>
          <h2 className="text-[#FF3333] font-[700] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            -{OrderDetails.disPrice}
          </h2>
        </div>
        <div className="w-full flex justify-between lg:h-[27px] sm:h-[25px] x-sm:h-[22px]">
          <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            Delivery Fee
          </h1>
          <h2 className="text-[#000000] font-[700] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            {OrderDetails.dilFee}
          </h2>
        </div>
        <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
        <div className="w-full flex justify-between lg:h-[32px] sm:h-[30px] x-sm:h-[27px]">
          <h1 className="text-[#000000] font-[400] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[25px] sm:text-[18px] sm:leading-[24.9px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
            Total
          </h1>
          <h2 className="text-[#000000] font-[700] lg:h-[32px] lg:text-[24px] lg:leading-[32.4px] sm:h-[30px] sm:text-[22px] sm:leading-[30.4px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
            {OrderDetails.total}
          </h2>
        </div>
      </div>
      <div className="w-full h-[48px] flex gap-[12px]">
        <div className="flex-1 h-[48px] bg-[#F0F0F0] flex items-center rounded-[62px] px-[16px] lg:w-[326px] lg:gap-[12px] sm:w-[290px] sm:gap-[11px] x-sm:w-[218px] x-sm:gap-[10px]">
          <Image
            src="/icon-images/price-tag-icon.svg"
            width={21}
            height={21}
            alt="tag icon"
            quality={100}
            priority={true}
          />
          <input
            type="text"
            className="w-full font-[400] text-opacity-[40%] bg-[#F0F0F0] lg:text-[16px] lg:h-[22px] sm:text-[15px] sm:h-[20px] x-sm:text-[14px] x-sm:h-[19px]"
            placeholder="Add promo code"
          />
        </div>
        <div className="h-[48px] lg:w-[119px] sm:w-[112px] x-sm:w-[88px]">
          <Btn
            BtnTxt="Apply"
            BtnCol="#000000"
            BtnTxtCol="#FFFFFF"
            BtnH="48px"
            BtnW="full"
            BtnTxtS="16px"
            BtnFW="500"
            BtnDivH="48px"
            BtnDivW="119px"
            BtnDivF="flex"
            BtnDivJC="justify-center"
          />
        </div>
      </div>
      <div className="w-full h-[60px] sm:h-[56px] x-sm:h-[54px]">
        <Btn
          BtnTxt="Go to Checkout"
          BtnCol="#000000"
          BtnTxtCol="#FFFFFF"
          BtnH="60px"
          BtnW="full"
          BtnTxtS="16px"
          BtnFW="500"
          BtnDivH="60px"
          BtnDivW="457px"
          BtnDivF="flex"
          BtnDivJC="justify-center"
          BtnGap="12px"
          ImgSrc="/icon-images/left-white-arrow.svg"
          ImgW={21}
          ImgH={21}
          ImgAlt="left arrow"
        />
      </div>
    </div>
  );
}
