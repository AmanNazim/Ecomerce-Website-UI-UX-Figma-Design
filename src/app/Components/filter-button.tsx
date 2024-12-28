"use client";
import Image from "next/image";
import { useState } from "react";
import FilterPanel from "./filter-panel";

const FilterButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleFilter}
        className="flex justify-center items-center rounded-[62px] bg-[#F0F0F0] lg:w-[48px] lg:h-[48px] x-sm:w-[32px] x-sm:h-[32px] mob-tab"
      >
        <div className="lg:w-[24px] lg:h-[24px] x-sm:w-[16px] x-sm:h-[16px]">
          <Image
            src="/icon-images/filter-icon.svg"
            width={24}
            height={24}
            alt="filter icon"
            quality={100}
            priority={true}
          />
        </div>
      </button>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleFilter}
        ></div>
      )}

      {/* Filter Panel */}
      {isOpen && <FilterPanel toggleFilter={toggleFilter} />}
    </div>
  );
};

export default FilterButton;
