"use client";
import { useState } from "react";
import Btn from "../button";
import Image from "next/image";

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

const SizeSelection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setSelectedSize(label);
  };

  return (
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
              BtnTxtCol={selectedSize === size.label ? "#FFFFFF" : "#000000"}
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
  );
};

export default SizeSelection;
