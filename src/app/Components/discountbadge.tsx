import ShopBtn from "./button";

interface BadgeProps {
  text: string;
  // bgColor?: string;// Default to a light red
  // textColor?: string; // Default to red
}

export const DisBadge = (BtnProps: BadgeProps) => {
  return (
    <button
      className={`inline-flex justify-center lg:h-[34px] lg:w-[72px] x-sm:h-[31px] x-sm:w-[62px] bg-[#FF3333] bg-opacity-[10%] rounded-[62px] lg:text-[16px] x-sm:text-[14px] font-[500] text-[#FF3333] py-[6px] lg:px-[14px] x-sm:px-[12px] `}
    >
      {BtnProps.text}
    </button>
  );
};
