import Link from "next/link";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";

interface ShopItemsProps {
  shopItems: {
    id?: string;
    imgurl: string;
    imgw: number;
    imgh: number;
    imgalt: string;
    imgtxt: string;
    imgsturl: string;
    imgstw: number;
    imgstalt: string;
    imgrate: string;
    imgfrate: number;
    imgprice: string;
    imgdelprice?: string;
    imgdecdis?: string;
    productDetailPageLink?: Url;
  }[];
}

const Badge = ({ text }: { text: string }) => (
  <span className="flex justify-center items-center bg-[#FF3333] bg-opacity-[10%] text-[#FF3333]  rounded-[62px] font-[500] lg:h-[28px] lg:w-[58px] lg:text-[12px] lg:leading-[16.2px] x-sm:h-[20px] x-sm:w-[42px] x-sm:text-[10px] x-sm:leading-[13.5px]">
    {text}
  </span>
);

export const ShopItems = ({ shopItems }: ShopItemsProps) => {
  return (
    <div className="w-full flex flex-wrap gap-[14px] justify-center">
      {shopItems.map((item, index) => (
        <div key={index} {...item}>
          <div className="h-auto lg:w-[295px] x-sm:w-[166px]">
            <div className="w-full bg-[#F0EEED] flex justify-center items-center lg:h-[295px] lg:rounded-[20px] x-sm:h-[174px] x-sm:rounded-[13.42px] overflow-hidden hover:scale-[102%] ">
              <Link href={`${item.productDetailPageLink}`}>
                <Image
                  className={`lg:rounded-[20px] x-sm:rounded-[13.42px]`}
                  src={item.imgurl}
                  width={item.imgw}
                  height={item.imgh}
                  alt={item.imgalt}
                  quality={100}
                  priority={true}
                  layout="responsive"
                />
              </Link>
            </div>

            <div className="lg:h-[94px] lg:mt-[16px] x-sm:h-[73px] x-sm:mt-[10px]">
              <h2 className="font-[700] lg:h-[27px] lg:text-[20px] x-sm:h-[22px] x-sm:text-[15.9px] x-sm:leading-[21.6px]">
                {item.imgtxt}
              </h2>
              <div className=" flex items-center lg:h-[19px] lg:mt-[8px] x-sm:h-[16px] x-sm:mt-[4px]">
                <Image
                  src={item.imgsturl}
                  width={item.imgstw}
                  height={19}
                  alt={item.imgstalt}
                  quality={100}
                  priority={true}
                />
                <h6 className="lg:ml-[13px] x-sm:ml-[11px] ">
                  {item.imgrate}{" "}
                  <span className="text-[#000000] text-opacity-[60%]">
                    {item.imgfrate}
                  </span>
                </h6>
              </div>
              <div className="w-auto flex items-center lg:h-[32px] lg:gap-[10px] lg:mt-[8px] x-sm:h-[27px] x-sm:gap-[5px] x-sm:mt-[4px]">
                <h2 className="font-[700] lg:h-[32px] lg:text-[24px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
                  {item.imgprice}
                </h2>
                {item.imgdelprice && (
                  <span className="font-[700] text-[#000000] text-opacity-[40%] line-through decoration-solid lg:h-[32px] lg:text-[24px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
                    {item.imgdelprice}
                  </span>
                )}
                {item.imgdecdis && (
                  <div className="lg:pb-[6px]">
                    <Badge text={item.imgdecdis} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
