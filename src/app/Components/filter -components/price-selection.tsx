import Image from "next/image";

const PriceSelection: React.FC = () => {
  return (
    <div className="w-full h-[90px] flex flex-col gap-[16px] mt-[20px]">
      <div className="w-full h-[27px] flex justify-between items-center">
        <h1 className="w-full h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-cente">
          Price
        </h1>
        <div className="w-[16px] h-[16px]">
          <Image
            className="h-[16px] w-[16px] rotate-180"
            src="/icon-images/down-arrow.svg"
            width={11.5}
            height={6.5}
            alt="up arrow icon"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="w-full h-[43px]">
        <div className="relative w-full h-[43px] flex justify-center">
          <hr className="w-full border-[5px] border-[#F0F0F0] rounded-[20px] mt-[8px]" />
          <hr className="absolute w-[263px] border-[5px] border-[#000000] mt-[8px]" />
          <div className="absolute w-[20px] h-[20px] bg-[#000000] rounded-full mr-[263px] mt-[2px]"></div>
          <div className="absolute w-[20px] h-[20px] bg-[#000000] rounded-full ml-[263px] mt-[2px]"></div>
          <div className="absolute w-[180px] height-[19px] flex justify-between mt-[30px]">
            <h1 className="h-[19px] text-[14px] text-[#000000] font-[500] leading-[18.9px]">
              $50
            </h1>
            <h1 className="h-[19px] text-[14px] text-[#000000] font-[500] leading-[18.9px]">
              $200
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSelection;
