"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Btn from "./button";
import { SetStateAction } from "react";
import { Categories } from "./filter -components/categories";
import ColorSelection from "./filter -components/color-selection";
import SizeSelection from "./filter -components/size-selection";
import DressStyleSelection from "./filter -components/dress-style-selection";
import PriceSelection from "./filter -components/price-selection";

type Color = {
  id: number;
  bgColor: string;
};

const FilterPanel: React.FC<{ toggleFilter: () => void }> = ({
  toggleFilter,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handles visibility based on parent toggle
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(toggleFilter, 300); // Match this with the closing animation duration
  };
  return (
    <div
      className={`fixed inset-x-0 bottom-0 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } w-full h-[calc(100vh-70px)] px-[20px] py-[20px] rounded-t-[25px] border-[1px] border-[#000000] border-opacity-[10%] flex flex-col scrollbary`}
    >
      <div className="w-full h-[27px] flex items-center justify-between">
        <h1 className="w-[57px] h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
          Filters
        </h1>
        <button onClick={handleClose}>
          <Image
            className="h-[24px] w-[24px]"
            src="/icon-images/gray-cross.svg"
            width={22.25}
            height={18.75}
            alt="filter icon"
            quality={100}
            priority={true}
          />
        </button>
      </div>
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[16px]" />
      <Categories />
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px]" />
      <PriceSelection />
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px]" />
      <ColorSelection />
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[20px]" />
      <SizeSelection />
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[20px]" />
      <DressStyleSelection />
      <div className="w-full h-[48px] mt-[20px]">
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
  );
};

export default FilterPanel;
