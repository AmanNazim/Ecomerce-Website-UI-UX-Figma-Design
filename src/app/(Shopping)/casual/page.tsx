"use client";
import Image from "next/image";
import Btn from "@/app/Components/button";
import { useState } from "react";
import { ShopItems } from "@/app/Components/shop-items";
import FilterButton from "@/app/Components/filter-button";

const shopItemsDeskCasual = [
  {
    imgurl: "/images/gradient-t-shirt.svg",
    imgw: 268,
    imgh: 402,
    imgalt: "gradient t-shirt",
    imgtxt: "Gradient Graphic T-shirt",
    imgsturl: "/icon-images/stars-icon(3.5).svg",
    imgstw: 80.2,
    imgstalt: "rating icons",
    imgrate: "3.5/",
    imgfrate: 5,
    imgprice: "$145",
  },
  {
    imgurl: "/images/polo-tipping-t-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "polo tipping t-shirt",
    imgtxt: "Polo with Tipping Details",
    imgsturl: "/icon-images/stars-icon(4.5).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "4.5/",
    imgfrate: 5,
    imgprice: "$180",
  },
  {
    imgurl: "/images/black-stripped-t-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Stripped T-shirt image",
    imgtxt: "Black Striped T-shirt",
    imgsturl: "/icon-images/stars-icon(5.0).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "5.0/",
    imgfrate: 5,
    imgprice: "$120",
    imgdelprice: "$150",
    imgdecdis: "-30%",
  },
  {
    imgurl: "/images/skinny-fit-jeans.svg",
    imgw: 268,
    imgh: 402,
    imgalt: "Skinny-Jeans image",
    imgtxt: "Skinny Fit Jeans",
    imgsturl: "/icon-images/stars-icon(3.5).svg",
    imgstw: 80.2,
    imgstalt: "rating icons",
    imgrate: "3.5/",
    imgfrate: 5,
    imgprice: "$240",
    imgdelprice: "$260",
    imgdecdis: "-20%",
  },
  {
    imgurl: "/images/checkered-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Checkered-Shirt image",
    imgtxt: "Checkered Shirt",
    imgsturl: "/icon-images/stars-icon(4.5).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "4.5/",
    imgfrate: 5,
    imgprice: "$180",
  },
  {
    imgurl: "/images/stripped-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Stripped T-shirt image",
    imgtxt: "Sleeve Stripped T-shirt",
    imgsturl: "/icon-images/stars-icon(4.5).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "4.5/",
    imgfrate: 5,
    imgprice: "$130",
    imgdelprice: "$160",
    imgdecdis: "-30%",
  },
  {
    imgurl: "/images/vertical-stripped-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Vertical Stripped Shirt",
    imgtxt: "Vertical Stripped Shirt",
    imgsturl: "/icon-images/stars-icon(5.0).svg",
    imgstw: 113.7,
    imgstalt: "rating icons",
    imgrate: "5.0/",
    imgfrate: 5,
    imgprice: "$212",
    imgdelprice: "$232",
    imgdecdis: "-20%",
  },
  {
    imgurl: "/images/courage-tshirt.svg",
    imgw: 294,
    imgh: 441,
    imgalt: "Courage Graphic T-shirt",
    imgtxt: "Courage Graphic T-shirt",
    imgsturl: "/icon-images/stars-icon(4).svg",
    imgstw: 89.9,
    imgstalt: "rating icons",
    imgrate: "4.0/",
    imgfrate: 5,
    imgprice: "$145",
  },
  {
    imgurl: "/images/loose-fit-shorts.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Loose Fit Bermuda Shorts",
    imgtxt: "Loose Fit Bermuda Shorts",
    imgsturl: "/icon-images/stars-icon(3.0).svg",
    imgstw: 66.09,
    imgstalt: "rating icons",
    imgrate: "3.0/",
    imgfrate: 5,
    imgprice: "$80",
  },
];

const shopItemsMobCasual = [
  {
    imgurl: "/images/gradient-t-shirt.svg",
    imgw: 268,
    imgh: 402,
    imgalt: "gradient t-shirt",
    imgtxt: "Gradient Graphic T...",
    imgsturl: "/icon-images/stars-icon(3.5).svg",
    imgstw: 80.2,
    imgstalt: "rating icons",
    imgrate: "3.5/",
    imgfrate: 5,
    imgprice: "$145",
  },
  {
    imgurl: "/images/polo-tipping-t-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "polo tipping t-shirt",
    imgtxt: "Polo with Tipping De...",
    imgsturl: "/icon-images/stars-icon(4.5).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "4.5/",
    imgfrate: 5,
    imgprice: "$180",
  },
  {
    imgurl: "/images/black-stripped-t-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Stripped T-shirt image",
    imgtxt: "Black Striped T-shirt",
    imgsturl: "/icon-images/stars-icon(5.0).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "5.0/",
    imgfrate: 5,
    imgprice: "$120",
    imgdelprice: "$150",
    imgdecdis: "-30%",
  },
  {
    imgurl: "/images/skinny-fit-jeans.svg",
    imgw: 268,
    imgh: 402,
    imgalt: "Skinny-Jeans image",
    imgtxt: "Skinny Fit Jeans",
    imgsturl: "/icon-images/stars-icon(3.5).svg",
    imgstw: 80.2,
    imgstalt: "rating icons",
    imgrate: "3.5/",
    imgfrate: 5,
    imgprice: "$240",
    imgdelprice: "$260",
    imgdecdis: "-20%",
  },
  {
    imgurl: "/images/checkered-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Checkered-Shirt image",
    imgtxt: "Checkered Shirt",
    imgsturl: "/icon-images/stars-icon(4.5).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "4.5/",
    imgfrate: 5,
    imgprice: "$180",
  },
  {
    imgurl: "/images/stripped-shirt.svg",
    imgw: 296,
    imgh: 444,
    imgalt: "Stripped T-shirt image",
    imgtxt: "Sleeve Striped T-shirt",
    imgsturl: "/icon-images/stars-icon(4.5).svg",
    imgstw: 104,
    imgstalt: "rating icons",
    imgrate: "4.5/",
    imgfrate: 5,
    imgprice: "$130",
    imgdelprice: "$160",
    imgdecdis: "-30%",
  },
];

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

// Define a type for the color object
type Color = {
  id: number;
  bgColor: string;
};

const colors: Color[] = [
  { id: 1, bgColor: "#00C12B" },
  { id: 2, bgColor: "#F50606" },
  { id: 3, bgColor: "#F5DD06" },
  { id: 4, bgColor: "#F57906" },
  { id: 5, bgColor: "#06CAF5" },
  { id: 6, bgColor: "#063AF5" },
  { id: 7, bgColor: "#7D06F5" },
  { id: 8, bgColor: "#F506A4" },
  { id: 9, bgColor: "#FFFFFF" },
  { id: 10, bgColor: "#000000" },
];

const sizes = [
  { label: "XX-Small", width: "96px" },
  { label: "X-Small", width: "88px" },
  { label: "Small", width: "74px" },
  { label: "Medium", width: "90px" },
  { label: "Large", width: "79px" },
  { label: "X-Large", width: "89px" },
  { label: "XX-Large", width: "98px" },
  { label: "3X-Large", width: "97px" },
  { label: "4X-Large", width: "98px" },
];

export default function Casual() {
  // Define the type of the state to store the selected color id (number or null)
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  // handleColorClick accepts a number representing the color id
  const handleColorClick = (id: number): void => {
    setSelectedColor(id); // Correctly set the selected color id
  };

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setSelectedSize(label);
  };

  return (
    <div>
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] lg:mt-[24px] lg:mx-[13px] x-sm:mt-[20px] x-sm:mx-[16px]" />
      <div className="flex justify-between items-center lg:h-[22px] lg:w-[123px] lg:mt-[24px] lg:ml-[13px] x-sm:h-[19px] x-sm:w-[104px] x-sm:mt-[20px] x-sm:mx-[16px] ">
        <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:leading-[21.6px] lg:text-[16px] x-sm:text-[14px] x-sm:leading-[18.9px]">
          Home
        </h1>
        <Image
          className="lg:h-[14px] lg:w-[14px] x-sm:w-[12px] x-sm:h-[12px] -rotate-90 opacity-[60%]"
          src="/icon-images/down-arrow.svg"
          width={11.5}
          height={6.5}
          alt="right arrow icon"
          quality={100}
          priority={true}
        />
        <h1 className="text-[#000000] font-[400] lg:leading-[21.6px] lg:text-[16px] x-sm:text-[14px] x-sm:leading-[18.9px]">
          Casual
        </h1>
      </div>
      <div className="w-full flex lg:mt-[24px] lg:mx-[13px] x-sm:mt-[12px] x-sm:justify-center  x-sm:mx-[16px]">
        <div className="w-[295px] h-[1220px] px-[24px] py-[20px] rounded-[20px] border-[1px] border-[#000000] border-opacity-[10%] flex flex-col gap-[24px] res-div">
          <div className="w-full h-[27px] flex items-center justify-between">
            <h1 className="w-[57px] h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
              Filters
            </h1>
            <Image
              className="h-[24px] w-[24px]"
              src="/icon-images/gray-filter.svg"
              width={22.25}
              height={18.75}
              alt="filter icon"
              quality={100}
              priority={true}
            />
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
          <div className="w-full h-[160px] flex justify-between">
            <div className="flex flex-col gap-[20px]">
              {categories.map((category, index) => (
                <h2
                  key={index}
                  className="h-[16px] text-[16px] text-[#000000] text-opacity-[60%] font-[400] leading-[21.6px]"
                >
                  {category}
                </h2>
              ))}
            </div>
            <div className="flex flex-col gap-[20px]">
              {categories.map((_, index) => (
                <div key={index} className="w-[16px] h-[16px]">
                  <Image
                    className="h-[16px] w-[16px] -rotate-90 opacity-[60%]"
                    src="/icon-images/down-arrow.svg"
                    width={11.5}
                    height={6.5}
                    alt="down arrow icon"
                    quality={100}
                    priority={true}
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
          <div className="w-full h-[90px] flex flex-col gap-[20px]">
            <div className="w-full h-[27px] flex justify-between items-center">
              <h1 className="w-full h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
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
                <hr className="absolute w-[150px] border-[5px] border-[#000000] mt-[8px]" />
                <div className="absolute w-[20px] h-[20px] bg-[#000000] rounded-full mr-[150px] mt-[2px]"></div>
                <div className="absolute w-[20px] h-[20px] bg-[#000000] rounded-full ml-[150px] mt-[2px]"></div>
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
          <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
          <div className="w-full h-[137px] flex flex-col gap-[20px]">
            <div className="w-full h-[27px] flex justify-between items-center">
              <h1 className="w-full h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
                Colors
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
            <div className="w-full h-[90px] flex flex-col gap-[16px]">
              {[0, 1].map((rowIndex) => (
                <div
                  key={rowIndex}
                  className="w-full h-[37px] flex flex-row justify-between"
                >
                  {colors.slice(rowIndex * 5, rowIndex * 5 + 5).map((color) => (
                    <div
                      key={color.id}
                      onClick={() => handleColorClick(color.id)} // Passing the color's id to the handler
                      className={`w-[37px] h-[37px] rounded-full border-[#000000] border-[1px] border-opacity-[20%] ${
                        selectedColor === color.id ? "border-[2px]" : ""
                      }`}
                      style={{ backgroundColor: color.bgColor }}
                    >
                      {selectedColor === color.id && (
                        <div className="flex justify-center items-center w-full h-full">
                          <Image
                            className="h-[16px] w-[16px]"
                            src="/icon-images/tick.svg"
                            width={13}
                            height={9.5}
                            alt="tick icon"
                            quality={100}
                            priority={true}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
          <div className="w-full h-[274px] flex flex-col gap-[16px] mt-[20px]">
            <div className="w-full h-[27px] flex justify-between items-center">
              <h1 className="w-full h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
                Size
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
            <div className="w-full h-[133px] flex flex-wrap gap-[8px]">
              {sizes.map((size) => (
                <div
                  key={size.label}
                  className="h-[39px]"
                  style={{ width: size.width }}
                >
                  <Btn
                    BtnTxt={size.label}
                    BtnCol={selectedSize === size.label ? "#000000" : "#F0F0F0"}
                    BtnTxtCol={
                      selectedSize === size.label ? "#FFFFFF" : "#000000"
                    }
                    BtnH="39px"
                    BtnW="full"
                    BtnTxtS="14px"
                    BtnFW="400"
                    BtnDivH="39px"
                    BtnDivW={size.width}
                    BtnDivF="flex"
                    BtnDivJC="justify-center"
                    BtnTxtOp={selectedSize === size.label ? "0%" : "60%"}
                    onClick={() => handleClick(size.label)} // Set the selected size
                  />
                </div>
              ))}
            </div>
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%]" />
          <div className="w-full h-[171px] flex flex-col gap-[20px]">
            <div className="w-full h-[27px] flex justify-between items-center">
              <h1 className="w-full h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-cente">
                Dress Style
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
            <div className="w-full h-[160px] flex justify-between">
              <div className="flex flex-col gap-[20px]">
                <h2 className="h-[16px] text-[16px] text-[#000000] text-opacity-[60%] font-[400] leading-[21.6px]">
                  Casual
                </h2>
                <h2 className="h-[16px] text-[16px] text-[#000000] text-opacity-[60%] font-[400] leading-[21.6px]">
                  Formal
                </h2>
                <h2 className="h-[16px] text-[16px] text-[#000000] text-opacity-[60%] font-[400] leading-[21.6px]">
                  Party
                </h2>
                <h2 className="h-[16px] text-[16px] text-[#000000] text-opacity-[60%] font-[400] leading-[21.6px]">
                  Gym
                </h2>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[16px] h-[16px]">
                  <Image
                    className="h-[16px] w-[16px] -rotate-90 opacity-[60%]"
                    src="/icon-images/down-arrow.svg"
                    width={11.5}
                    height={6.5}
                    alt="right arrow icon"
                    quality={100}
                    priority={true}
                  />
                </div>
                <div className="w-[16px] h-[16px]">
                  <Image
                    className="h-[16px] w-[16px] -rotate-90 opacity-[60%]"
                    src="/icon-images/down-arrow.svg"
                    width={11.5}
                    height={6.5}
                    alt="right arrow icon"
                    quality={100}
                    priority={true}
                  />
                </div>
                <div className="w-[16px] h-[16px]">
                  <Image
                    className="h-[16px] w-[16px] -rotate-90 opacity-[60%]"
                    src="/icon-images/down-arrow.svg"
                    width={11.5}
                    height={6.5}
                    alt="right arrow icon"
                    quality={100}
                    priority={true}
                  />
                </div>
                <div className="w-[16px] h-[16px]">
                  <Image
                    className="h-[16px] w-[16px] -rotate-90 opacity-[60%]"
                    src="/icon-images/down-arrow.svg"
                    width={11.5}
                    height={6.5}
                    alt="right arrow icon"
                    quality={100}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[247px] h-[48px] ">
            <Btn
              BtnTxt="Apply Filter"
              BtnCol="#000000"
              BtnTxtCol="#FFFFFF"
              BtnH="48px"
              BtnW="full"
              BtnTxtS="14px"
              BtnFW="400"
              BtnDivH="48px"
              BtnDivW="247px"
              BtnDivF="flex"
              BtnDivJC="justify-center"
            />
          </div>
        </div>
        <div className=" w-full lg:ml-[20px]">
          <div className="w-full flex lg:justify-between">
            <h1 className="h-[43px] text-[#000000] font-[700] lg:text-[32px] lg:leading-[43.2px] x-sm:text-[24px] x-sm:leading-[32.4px]">
              Casual
            </h1>
            <div className="h-[16px] lg:mt-[16px] flex lg:justify-end gap-[12px] lg:mr-[16px] x-sm:mt-[8px] x-sm:ml-[8px] x-sm:w-full x-sm:justify-between x-sm:mr-[32px] items-center">
              <h2 className="lg:h-[11px] x-sm:h-[10px] text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[21.6px] x-sm:text-[14px] x-sm:leading-[18.9px]">
                Showing 1-10 of 100 Products
              </h2>
              <h2 className="h-[11px] text-[#000000] text-opacity-[60%] font-[400]  text-[16px] leading-[21.6px] res-div">
                Sort by:{" "}
                <span className="h-[11px] text-[16px] text-[#000000] font-[400] leading-[21.6px]">
                  Most Popular
                </span>
              </h2>
              <Image
                className="h-[16px] w-[16px] my-[2.5px] res-div mt-[16px]  mr-[16px]"
                src="/icon-images/down-arrow.svg"
                width={11.5}
                height={6.5}
                alt="right arrow icon"
                quality={100}
                priority={true}
              />
              <FilterButton />
            </div>
          </div>
          <div className="w-full mt-[16px] flex flex-col -ml-[10px] gap-[36px] res-div">
            <ShopItems shopItems={shopItemsDeskCasual} />
          </div>
          <div className="w-full mob-tab mt-[29px] -ml-[4px]">
            <ShopItems shopItems={shopItemsMobCasual} />
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%] lg:mt-[32px] lg:mr-[20px] x-sm:mt-[24px] x-sm:mr-[32px]" />
          <div className="mr-0 w-[920px] h-[40px] flex justify-between mx-[10px] lg:mt-[20px] x-sm:mx-0 x-sm:w-auto x-sm:mr-[32px] x-sm:mt-[20px]">
            <button className="h-[36px] border-[1px] border-[#000000] border-opacity-[10%] rounded-[8px] flex gap-[8px] justify-center items-center lg:w-[110px] sm:w-[100px] x-sm:w-[90px] ">
              <div className="lg:h-[20px] lg:w-[20px] x-sm:h-[16px] x-sm:w-[16px]">
                <Image
                  src="/icon-images/arrow-left.svg"
                  width={20}
                  height={20}
                  alt="left arrow icon"
                  quality={100}
                  priority={true}
                />
              </div>
              <h2 className="h-[20px] text-[#000000] font-[500] leading-[20px] lg:text-[14px] sm:text-[14px] x-sm:text-[12px]">
                Previous
              </h2>
            </button>
            <div className="lg:w-[292px] lg:h-[40px] x-sm:w-auto x-sm:h-[36px] flex items-center">
              <div className="flex justify-center items-center rounded-[8px] text-[#000000] text-opacity-[60%]  hover:text-[#000000]  hover:bg-[#000000] hover:bg-opacity-[6%] lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] x-sm:w-[36px] x-sm:h-[36px]">
                <h2 className="lg:text-[14px] sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  1
                </h2>
              </div>
              <div className="flex justify-center items-center rounded-[8px] text-[#000000] text-opacity-[60%]  hover:text-[#000000]  hover:bg-[#000000] hover:bg-opacity-[6%] lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] x-sm:w-[36px] x-sm:h-[36px]">
                <h2 className="lg:text-[14px] sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  2
                </h2>
              </div>
              <div className="x-sm:hidden sm:flex w-[40px] h-[40px] flex justify-center items-center text-[#000000] text-opacity-[60%] hover:text-[#000000] rounded-[8px] hover:bg-[#000000] hover:bg-opacity-[6%]">
                <h2 className="lg:text-[14px] sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  3
                </h2>
              </div>
              <div className="flex justify-center items-center rounded-[8px] text-[#000000] text-opacity-[60%]  hover:text-[#000000]  hover:bg-[#000000] hover:bg-opacity-[6%] lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] x-sm:w-[36px] x-sm:h-[36px]">
                <h2 className="lg:text-[14px] sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  ...
                </h2>
              </div>
              <div className="x-sm:hidden sm:flex w-[40px] h-[40px] flex justify-center items-center text-[#000000] text-opacity-[60%] hover:text-[#000000] rounded-[8px] hover:bg-[#000000] hover:bg-opacity-[6%]">
                <h2 className="lg:text-[14px] sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  8
                </h2>
              </div>
              <div className="flex justify-center items-center rounded-[8px] text-[#000000] text-opacity-[60%]  hover:text-[#000000]  hover:bg-[#000000] hover:bg-opacity-[6%] lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] x-sm:w-[36px] x-sm:h-[36px]">
                <h2 className="lg:text-[14px] sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  9
                </h2>
              </div>
              <div className="flex justify-center items-center rounded-[8px] text-[#000000] text-opacity-[60%]  hover:text-[#000000]  hover:bg-[#000000] hover:bg-opacity-[6%] lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] x-sm:w-[36px] x-sm:h-[36px]">
                <h2 className="lg:text-[14px]  sm:text-[16px] x-sm:text-[12px] font-[500] leading-[20px]">
                  10
                </h2>
              </div>
            </div>
            <button className="h-[36px] border-[1px] border-[#000000] border-opacity-[10%] rounded-[8px] flex gap-[8px] justify-center items-center lg:w-[86px] sm:w-[84px] x-sm:w-[73px]">
              <h2 className="h-[20px] text-[#000000] font-[500] leading-[20px] lg:text-[14px] sm:text-[14px] x-sm:text-[12px]">
                Next
              </h2>
              <div className="lg:h-[20px] lg:w-[20px] x-sm:h-[16px] x-sm:w-[16px]">
                <Image
                  src="/icon-images/arrow-right.svg"
                  width={20}
                  height={20}
                  alt="left arrow icon"
                  quality={100}
                  priority={true}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
