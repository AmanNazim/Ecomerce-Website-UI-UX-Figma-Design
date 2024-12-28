import Image from "next/image";
import Btn from "./button";

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full lg:h-full lg:mt-[24px] x-sm:bg-[#F2F0F1] x-sm:h-[878px] x-sm:mt-[20px] sm:h-full">
        <div className="res-div tab-div">
          <Image
            className="h-full w-full"
            src="/images/Hero-Img.svg"
            width={1440}
            height={663}
            alt="Hero Image"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute mt-[440px] h-[440px] w-full sm-div">
          <Image
            src="/images/mobile-hero-pic.svg"
            alt="Hero Image"
            quality={100}
            priority={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute lg:w-[577px] lg:h-[173px] lg:top-[3px] left-[13px] x-sm:w-[315px] x-sm:h-[93px] x-sm:mt-[40px] sm:w-[357px] sm:h-[73px] sm:top-[3px]">
          <h1 className="text-[#000000] lg:text-[64px] lg:font-[900] lg:leading-[64px] x-sm:text-[36px] x-sm:font-[800] x-sm:leading-[34px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
        </div>
        <div className="absolute lg:w-[550px] h-[33px] lg:top-[104px] left-[13px] x-sm:w-full x-sm:h-[50px] x-sm:mt-[153px] sm:w-full sm:top-[10px]">
          <h2 className="text-[#000000] text-opacity-[60%] lg:text-[16px] lg:font-[400] lg:leading-[22px] x-sm:text-[14px] x-sm:font-[400] x-sm:leading-[20px] sm:text-[15px] sm:font-[400] sm:leading-[22px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h2>
        </div>
        <div className="absolute lg:top-[102px] left-[13px] lg:h-[52px] lg:w-[210px] x-sm:mt-[229px] x-sm:w-full x-sm:pr-[24px] sm:top-[10px] sm:h-[50px] sm:w-[220px] ">
          <Btn
            BtnTxt="Shop Now"
            BtnCol="#000000"
            BtnTxtCol="#FFFFFF"
            BtnH="full"
            BtnW="full"
            BtnTxtS="16px"
            BtnFW="500"
            BtnDivH="52px"
            BtnDivW="210px"
            SmDH="[52px]"
            SmDW="full"
            BtnDivF="flex"
            BtnDivJC="justify-center"
          />
        </div>
        <div className="sm-div w-full flex justify-center">
          <div className="absolute flex justify-between items-center w-[278px] h-[52px] mt-[299px] mx-[56px]">
            <div className="w-[108px] h-[48px]">
              <h1 className="text-[#000000] text-[24px] font-[700] leading-[32.4px]">
                200+
              </h1>
              <h2 className="text-[#000000] text-opacity-[60%] text-[12px] font-[400] leading-[22px]">
                International Brands
              </h2>
            </div>
            <hr className="border-[1px] border-[#000000] border-opacity-[60%] h-full" />
            <div className="w-[117px] h-[48px]">
              <h1 className="text-[#000000] text-[24px] font-[700] leading-[32.4px]">
                2,000+
              </h1>
              <h2 className="text-[#000000] text-opacity-[60%] text-[12px] font-[400] leading-[22px]">
                High-Quality Products
              </h2>
            </div>
          </div>
        </div>
        <div></div>
        <div className="absolute w-full h-[48px] flex flex-col items-center mt-[363px] sm-div">
          <h1 className="text-[#000000] text-[24px] font-[700] leading-[32.4px]">
            30,000+
          </h1>
          <h2 className="text-[#000000] text-opacity-[60%] text-[12px] font-[400] leading-[22px]">
            Happy Customers
          </h2>
        </div>
        <div className="absolute lg:w-[56px] lg:h-[56px] lg:top-[251px] lg:left-[640px] x-sm:left-[27px] x-sm:top-[570px] x-sm:w-[44px] x-sm:h-[44px] sm:w-[56px] sm:h-[46px] sm:top-[126px] sm:left-[425px]">
          <Image
            className="h-full w-full"
            src="/icon-images/hero-star.svg"
            width={56}
            height={56}
            alt="Black Star"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute lg:w-[104px] lg:h-[104px] lg:top-[70px] lg:left-[1100px] x-sm:left-[290px] x-sm:top-[465px] x-sm:w-[74px] x-sm:h-[74px] sm:w-[80px] sm:h-[80px] sm:top-[30px] sm:left-[690px]">
          <Image
            className="h-full w-full"
            src="/icon-images/hero-star2.svg"
            width={104}
            height={104}
            alt="Black Star"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="w-full bg-[#000000] flex items-center lg:justify-between lg:h-[122px] x-sm:h-[146px] x-sm:py-[39px] x-sm:justify-center x-sm:flex-wrap sm:justify-evenly sm:h-[120px]">
        <div className="lg:ml-[13px] lg:w-[166.48px] lg:h-[33.16px] x-sm:w-[116.74px] x-sm:h-[23.25px] sm:m-0">
          <Image
            src="/name-images/versace.svg"
            width={166.48}
            height={33.16}
            alt="Versace icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="lg:ml-[0px] lg:w-[91px] lg:h-[38px] x-sm:w-[63.81px] x-sm:h-[26.65px] x-sm:ml-[34px] sm:m-0">
          <Image
            src="/name-images/zara.svg"
            width={91}
            height={38}
            alt="Versace icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="lg:ml-[0px] lg:w-[156px] lg:h-[36px] x-sm:w-[109.39px] x-sm:h-[25.24px] x-sm:ml-[34px] sm:m-0">
          <Image
            src="/name-images/gucci.svg"
            width={156}
            height={36}
            alt="Versace icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="lg:mt-[0px] lg:ml-[0px] lg:w-[194px] lg:h-[32px] x-sm:w-[127px] x-sm:h-[21px] x-sm:mt-[20px] sm:m-0">
          <Image
            src="/name-images/prada.svg"
            width={194}
            height={32}
            alt="Versace icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="lg:mt-[0px] lg:ml-[0px] lg:mr-[13px] lg:w-[206.79px] lg:h-[33.35px] x-sm:w-[134.84px] x-sm:h-[21.75px] x-sm:ml-[31.16px] x-sm:mt-[20px] sm:m-0">
          <Image
            src="/name-images/calvin klein.svg"
            width={206.79}
            height={33.35}
            alt="Versace icon"
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
