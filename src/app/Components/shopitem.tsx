import Link from "next/link";
import Image from "next/image";

interface ShopItemProps {
  imgUrl: string;
  imgW: number;
  imgH: number;
  imgAlt: string;
  imgTxt: string;
  imgStUrl: string;
  imgStW: number;
  imgStAlt: string;
  imgRate: string;
  imgFRate: number;
  imgPrice: string;
  imgDelPrice?: string;
  imgDecDis?: string;
  productDetailPageLink?: string;
}

const Badge = ({ text }: { text: string }) => (
  <span className="flex justify-center items-center bg-[#FF3333] bg-opacity-[10%] text-[#FF3333]  rounded-[62px] font-[500] lg:h-[28px] lg:w-[58px] lg:text-[12px] lg:leading-[16.2px] x-sm:h-[20px] x-sm:w-[42px] x-sm:text-[10px] x-sm:leading-[13.5px]">
    {text}
  </span>
);

const ShopItem = ({
  imgUrl,
  imgW,
  imgH,
  imgAlt,
  imgTxt,
  imgStUrl,
  imgStW,
  imgStAlt,
  imgRate,
  imgFRate,
  imgPrice,
  imgDelPrice,
  imgDecDis,
  productDetailPageLink,
}: ShopItemProps) => {
  return (
    <div className="h-auto lg:w-[295px] x-sm:w-[198px]">
      <div className="w-full bg-[#F0EEED] mt-[4px] flex justify-center items-center lg:h-[295px] lg:rounded-[20px] x-sm:h-[200.01px] x-sm:rounded-[13.42px] overflow-hidden hover:scale-[102%] ">
        <Link href={productDetailPageLink || ""}>
          <Image
            className={`lg:rounded-[20px] x-sm:rounded-[13.42px] `}
            src={imgUrl}
            width={imgW}
            height={imgH}
            alt={imgAlt}
            quality={100}
            priority
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>

      <div className="lg:h-[94px] lg:mt-[16px] x-sm:h-[73px] x-sm:mt-[10px]">
        <h2 className="font-[700] lg:h-[27px] lg:text-[20px] x-sm:h-[22px] x-sm:text-[15.8px] x-sm:leading-[21.6px]">
          {imgTxt}
        </h2>
        <div className=" flex items-center lg:h-[19px] lg:mt-[8px] x-sm:h-[16px] x-sm:mt-[4px]">
          <Image
            src={imgStUrl}
            width={imgStW}
            height={19}
            alt={imgStAlt}
            quality={100}
            priority={true}
          />
          <h6 className="lg:ml-[13px] x-sm:ml-[11px] ">
            {imgRate}{" "}
            <span className="text-[#000000] text-opacity-[60%]">
              {imgFRate}
            </span>
          </h6>
        </div>
        <div className="w-auto flex items-center lg:h-[32px] lg:gap-[10px] lg:mt-[8px] x-sm:h-[27px] x-sm:gap-[5px] x-sm:mt-[4px]">
          <h2 className="font-[700] lg:h-[32px] lg:text-[24px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
            {imgPrice}
          </h2>
          {imgDelPrice && (
            <span className="font-[700] text-[#000000] text-opacity-[40%] line-through decoration-solid lg:h-[32px] lg:text-[24px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
              {imgDelPrice}
            </span>
          )}
          {imgDecDis && (
            <div className="lg:pb-[6px]">
              <Badge text={imgDecDis} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
