import CartItem from "@/app/Components/cart-item";
import Image from "next/image";
import OrderSummary from "@/app/Components/order-summary";

export default function CartPage() {
  return (
    <div>
      <div className="lg:mx-[13px] x-sm:mx-[16px]">
        <hr className="border-[1px] border-[#000000] border-opacity-[10%] lg:mt-[24px] sm:mt-[22px] x-sm:mt-[20px]" />
        <div className="flex lg:gap-[12px] lg:h-[22px] lg:w-[106px] lg:mt-[24px] sm:gap-[6px] sm:h-[21px] sm:w-[92px] sm:mt-[22px] x-sm:gap-[6px] x-sm:h-[19px] x-sm:w-[89px] x-sm:mt-[20px]">
          <h1 className="flex items-center text-[#000000] text-opacity-[60%] font-[400] gap-[6px] lg:text-[16px] lg:leading-[21.6px] sm:text-[15px] sm:leading-[20px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Home
            <Image
              className="mb-0 -rotate-90 opacity-[60%] lg:h-[14px] lg:w-[14px] sm:h-[13px] sm:w-[13px] sm:mb-0 x-sm:h-[12px] x-sm:w-[12px] x-sm:mb-[2px]"
              src="/icon-images/down-arrow.svg"
              width={14}
              height={14}
              alt="right arrow icon"
              quality={100}
              priority={true}
            />
          </h1>
          <h1 className="flex items-center text-[#000000] font-[400] lg:h-[22px] lg:text-[16px] lg:leading-[21.6px] sm:h-[21px] sm:text-[15px] sm:leading-[20px] x-sm:h-[19px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Cart
          </h1>
        </div>
        <h1 className="text-[#000000] font-[800] lg:h-[48px] lg:text-[40px] lg:leading-[48px] lg:mt-[24px] sm:h-[44px] sm:text-[40px] sm:leading-[44.2px] sm:mt-[16px] x-sm:h-[38px] x-sm:text-[32px] x-sm:leading-[38.4px] x-sm:mt-[8px]">
          YOUR CART
        </h1>
        <div className="flex lg:mt-[24px] lg:flex-row sm:mt-[22px] x-sm:mt-[20px] x-sm:flex-col gap-[20px]">
          <div className="h-auto w-full border-[#000000] border-[1px] border-opacity-[10%] rounded-[20px] flex flex-col lg:gap-[24px] lg:px-[24px] lg:py-[20px] sm:gap-[20px] sm:p-[18px] x-sm:gap-[16px] x-sm:p-[14px]">
            <CartItem
              ItemImg="images/gradient-t-shirt.svg"
              ItemName="Gradient Graphic T-shirt"
              ItemSize="Large"
              ItemColor="White"
              ItemPrice="$145"
            />
            <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
            <CartItem
              ItemImg="images/Checkered-shirt.svg"
              ItemName="Checkered Shirt"
              ItemSize="Medium"
              ItemColor="Red"
              ItemPrice="$180"
            />
            <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
            <CartItem
              ItemImg="images/skinny-fit-jeans.svg"
              ItemName="Skinny Fit Jeans"
              ItemSize="Large"
              ItemColor="Blue"
              ItemPrice="$240"
            />
          </div>
          <OrderSummary
            subTotal="$565"
            disPer="20%"
            disPrice="$113"
            dilFee="$15"
            total="$467"
          />
        </div>
      </div>
    </div>
  );
}
