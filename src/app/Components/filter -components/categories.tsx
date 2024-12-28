import Image from "next/image";

const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

export const Categories = () => {
  return (
    <div className="w-full h-[160px] flex justify-between mt-[20px]">
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
  );
};
