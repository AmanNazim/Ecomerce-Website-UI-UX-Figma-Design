import { TcpSocketConnectOpts } from "net";
import Image from "next/image";

interface CartItemProps {
  ItemImg: string;
  ItemName: string;
  ItemSize: string;
  ItemColor: string;
  ItemPrice: string;
}

export default function CartItem(CartItemInfo: CartItemProps) {
  return (
    <div>
      <div>
        <div className="w-full flex lg:gap-[16px] lg:h-[124px] sm:gap-[15px] sm:h-[114px] x-sm:gap-[14px] x-sm:h-[99px]">
          <div className="flex items-center rounded-[8.66px] overflow-hidden lg:w-[124px] lg:h-[124px] sm:h-[114px] sm:w-[114px] x-sm:w-[99px] x-sm:h-[99px]">
            <Image
              className="rounded-[8.66px] lg:w-[124px] lg:h-[124px] x-sm:w-[99px] sm:h-[114px] sm:w-[114px] x-sm:h-[99px]"
              src={CartItemInfo.ItemImg}
              width={124}
              height={124}
              alt="t-shirt image"
              quality={100}
              priority={true}
            />
          </div>
          <div className="flex justify-between lg:w-[527px] lg:h-[124px] sm:w-full sm:h-[114px] x-sm:w-full x-sm:h-[99px]">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <div>
                  <h1 className="font-[700] text-[#000000] mt-[2px] lg:h-[27px] lg:text-[20px] lg:leading-[27px] sm:h-[24px] sm:text-[18px] sm:leading-[24px] x-sm:h-[22px] x-sm:text-[16px] x-sm:leading-[21.6px]">
                    {CartItemInfo.ItemName}
                  </h1>
                  <div className="flex flex-col lg:gap-[4px] sm:gap-[3px] x-sm:gap-[2px]">
                    <h2 className="text-[#000000]  font-[400] lg:h-[19px] lg:text-[14px] lg:leading-[18.9px] sm:h-[17px] sm:text-[13px] sm:leading-[17px] x-sm:h-[16px] x-sm:text-[12px] x-sm:leading-[16.2px]">
                      Size:{" "}
                      <span className="text-[#000000] text-opacity-[60%]">
                        {CartItemInfo.ItemSize}
                      </span>
                    </h2>
                    <h2 className="text-[#000000]  font-[400] lg:h-[19px] lg:text-[14px] lg:leading-[18.9px] sm:h-[17px] sm:text-[13px] sm:leading-[17px] x-sm:h-[16px] x-sm:text-[12px] x-sm:leading-[16.2px]">
                      Color:{" "}
                      <span className="text-[#000000] text-opacity-[60%]">
                        {CartItemInfo.ItemColor}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="lg:w-[24px] lg:h-[24px] sm:h-[22px] sm:w-[22px] x-sm:w-[20px] x-sm:h-[20px]">
                  <Image
                    src="/icon-images/delete-icon.svg"
                    width={24}
                    height={24}
                    alt="delete icon"
                    quality={100}
                    priority={true}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between lg:h-[32px] sm:h-[30px] x-sm:h-[27px]">
                <div>
                  <h1 className="text-[#000000] font-[700] lg:h-[32px] lg:text-[24px] lg:leading-[32.4px] sm:h-[30px] sm:text-[22px] sm:leading-[30.9px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
                    {CartItemInfo.ItemPrice}
                  </h1>
                </div>
                <div className="relative bg-[#F0F0F0] text-[#000000] font-[500] rounded-[62px] flex items-center lg:h-[44px] lg:w-[126px] lg:text-[16px] sm:h-[36px] sm:w-[116px] sm:text-[15px] x-sm:h-[31px] x-sm:w-[105px] x-sm:text-[14px]">
                  <div className="absolute lg:left-[20px] lg:h-[20px] lg:w-[20px] sm:h-[18px] sm:w-[18px] x-sm:left-[12px] x-sm:h-[16px] x-sm:w-[16px]">
                    <Image
                      src="/icon-images/minus-icon.svg"
                      width={20}
                      height={20}
                      alt="minus icon"
                      quality={100}
                      priority={true}
                    />
                  </div>
                  <div className="absolute left-[50%] transform -translate-x-[50%]">
                    <p>1</p>
                  </div>
                  <div className="absolute lg:right-[20px] lg:h-[20px] lg:w-[20px] sm:h-[18px] sm:w-[18px] x-sm:right-[12px] x-sm:h-[20px] x-sm:w-[20px]">
                    <Image
                      src="/icon-images/plus-icon.svg"
                      width={20}
                      height={20}
                      alt="plus icon"
                      quality={100}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
