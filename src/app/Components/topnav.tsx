import Image from "next/image";

interface propsType {
  proptext: string;
  propboldtext: string;
}

const TopNavBar = ({ proptext, propboldtext }: propsType) => {
  return (
    <div className="fixed top-[0px] z-[1] w-full bg-[#000000] text-[#FFFFFF] flex items-center justify-center lg:h-[38px] sm:h-[36px] x-sm:h-[34px]">
      <div className="lg:h-[19px] w-full flex justify-center">
        <p className="lg:w-max lg:font-[400] lg:text-[14px] x-sm:h-[16px] x-sm:text-[12px] x-sm:flex lg:leading-[18.9px] x-sm:w-[301px]">
          {proptext}
          <span className="underline lg:font-[500] lg:text-[14px] lg:leading-[18.9px] x-sm:text-[12px] x-sm:flex x-sm:font-[400] x-sm:leading-[16.2px] x-sm:ml-[4px] sm:flex">
            {propboldtext}
          </span>
        </p>
      </div>
      <div className="w-[20px] res-div h-[20px] sm:mr-[16px] lg:mr-[30px]">
        <Image
          src="/icon-images/cross-icon.svg"
          width={13.3}
          height={13.3}
          alt="Search icon"
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
};

export default TopNavBar;
