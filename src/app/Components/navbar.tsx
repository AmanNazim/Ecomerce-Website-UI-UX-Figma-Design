"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <div className="w-auto lg:h-[48px] mx-[13px] flex justify-center items-center lg:mt-[60px] lg:gap-[40px] x-sm:h-[24px] x-sm:mt-[54px] x-sm:justify-between x-sm:mx-[16px] sm:h-[34px]">
      <div className="flex gap-[16px] items-center">
        <div className="h-[24px] w-[24px] mob-tab">
          <Image
            src="/icon-images/black-menu-icon.svg"
            width={24}
            height={24}
            alt="menu icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="lg:h-[22px] lg:w-[160px] flex items-center x-sm:h-[18px] x-sm:w-[126px]">
          <Link href="/">
            <Image
              src="/name-images/SHOP.CO.svg"
              width={160}
              height={22}
              alt="Brand icon"
              quality={100}
              priority={true}
              layout="responsive"
            />
          </Link>
        </div>
      </div>
      <div className="w-[321px] h-[22px] res-div lg:flex justify-between">
        <div className="w-[57px] h-[22px] flex justify-between items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent className="h-[100px]">
                  <NavigationMenuLink href="/mens">Men </NavigationMenuLink>
                  Woman Kids
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <h2 className="text-[16px] font-[400] leading-[21.6px]">On Sale</h2>
        <h2 className="text-[16px] font-[400] leading-[21.6px]">
          New Arrivals
        </h2>
        <h2 className="text-[16px] font-[400] leading-[21.6px]">Brands</h2>
      </div>
      <div className="h-[48px] w-[577px] lg:flex items-center justify-between gap-[4px] bg-[#f0f0f0] rounded-r-[62px] rounded-l-[62px] pr-[16px] pl-[16px] res-div tab-div sm:h-[40px] sm:mx-[16px]">
        <Image
          src="/icon-images/search-icon.svg"
          width={24}
          height={24}
          alt="Search icon"
          quality={100}
          priority={true}
        />
        <div className="h-[22px] w-full">
          <input
            className="bg-[#f0f0f0] w-full pl-[12px] text-[16px] font-[400] leading-[21.6px]"
            type="text"
            placeholder="Search for products..."
          />
        </div>
      </div>
      <div className="w-auto h-[24px] flex justify-between lg:gap-[14px] x-sm:gap-[12px]">
        <div className="sm-div h-[24px] w-[24px]">
          <Image
            src="/icon-images/black-search-icon.svg"
            width={24}
            height={24}
            alt="search icon"
            quality={100}
            priority={true}
          />
        </div>
        <Link href="/cart">
          <div className="w-[24px] h-[24px]">
            <Image
              src="/icon-images/cart-icon.svg"
              width={24}
              height={24}
              alt="Cart icon"
              quality={100}
              priority={true}
            />
          </div>
        </Link>
        <Image
          src="/icon-images/profile-icon.svg"
          width={24}
          height={24}
          alt="Profile icon"
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
};

export default NavBar;
