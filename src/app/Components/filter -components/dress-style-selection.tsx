import Image from "next/image";

const dressStyles = [
  { label: "Casual" },
  { label: "Formal" },
  { label: "Party" },
  { label: "Gym" },
];

const DressStyleSelection: React.FC = () => {
  return (
    <div className="w-full h-[171px] flex flex-col gap-[16px] mt-[20px]">
      <div className="w-full h-[27px] flex justify-between items-center">
        <h1 className="w-full h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
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
          {dressStyles.map((style) => (
            <h2
              key={style.label}
              className="h-[16px] text-[16px] text-[#000000] text-opacity-[60%] font-[400] leading-[21.6px]"
            >
              {style.label}
            </h2>
          ))}
        </div>
        <div className="flex flex-col gap-[20px]">
          {dressStyles.map(() => (
            <div key={Math.random()} className="w-[16px] h-[16px]">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default DressStyleSelection;
