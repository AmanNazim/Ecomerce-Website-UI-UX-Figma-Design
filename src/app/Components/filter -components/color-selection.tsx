"use client";
import { useState } from "react";
import Image from "next/image";

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

const ColorSelection: React.FC = () => {
  // Define the type of the state to store the selected color id (number or null)
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  // handleColorClick accepts a number representing the color id
  const handleColorClick = (id: number): void => {
    setSelectedColor(id); // Correctly set the selected color id
  };

  return (
    <div className="w-full h-[137px] flex flex-col gap-[20px] mt-[20px]">
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
            className="w-[390px] h-[37px] flex flex-row justify-between"
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
  );
};

export default ColorSelection;
