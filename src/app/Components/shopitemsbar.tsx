import ShopItem from "./shopitem";

interface ShopItemsBarProps {
  shopItems: {
    id?: string;
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
  }[];
}

export const ShopItemsBar = ({ shopItems }: ShopItemsBarProps) => {
  return (
    <div className="flex lg:w-full lg:justify-evenly lg:mx-[0px] x-sm:gap-[16px] x-sm:w-max x-sm:mx-[16px]">
      {shopItems.map((item, index) => (
        <ShopItem key={index} {...item} />
      ))}
    </div>
  );
};
