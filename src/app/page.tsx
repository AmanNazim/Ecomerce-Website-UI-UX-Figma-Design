import Image from "next/image";
import "./globals.css";
import { ShopItemsBar } from "./Components/shopitemsbar";
import ViewAllBtn from "./Components/viewallbutton";
import CusRevsBar from "./Components/customerreviewsbar";
import Link from "next/link";
import HeroSection from "./Components/hero-section";

export default function Home() {
  const shopItemsNewArrivals = [
    {
      imgUrl: "/images/tape-shirt.svg",
      imgW: 296,
      imgH: 444,
      imgAlt: "Tape Shirt image",
      imgTxt: "T-Shirt with Tape Details",
      imgStUrl: "/icon-images/stars-icon(4.5).svg",
      imgStW: 104,
      imgStAlt: "rating icons",
      imgRate: "4.5/",
      imgFRate: 5,
      imgPrice: "$120",
      SmImgW: 198,
      SmImgH: 298,
    },
    {
      imgUrl: "/images/skinny-fit-jeans.svg",
      imgW: 268,
      imgH: 402,
      imgAlt: "Skinny-Jeans image",
      imgTxt: "Skinny Fit Jeans",
      imgStUrl: "/icon-images/stars-icon(3.5).svg",
      imgStW: 80.2,
      imgStAlt: "rating icons",
      imgRate: "3.5/",
      imgFRate: 5,
      imgPrice: "$240",
      imgDelPrice: "$260",
      imgDecDis: "-20%",
      SmImgW: 171,
      SmImgH: 256,
    },
    {
      imgUrl: "/images/checkered-shirt.svg",
      imgW: 296,
      imgH: 444,
      imgAlt: "Checkered-Shirt image",
      imgTxt: "Checkered Shirt",
      imgStUrl: "/icon-images/stars-icon(4.5).svg",
      imgStW: 104,
      imgStAlt: "rating icons",
      imgRate: "4.5/",
      imgFRate: 5,
      imgPrice: "$180",
    },
    {
      imgUrl: "/images/stripped-shirt.svg",
      imgW: 296,
      imgH: 444,
      imgAlt: "Stripped T-shirt image",
      imgTxt: "Sleeve Stripped T-shirt",
      imgStUrl: "/icon-images/stars-icon(4.5).svg",
      imgStW: 104,
      imgStAlt: "rating icons",
      imgRate: "4.5/",
      imgFRate: 5,
      imgPrice: "$130",
      imgDelPrice: "$160",
      imgDecDis: "-30%",
    },
  ];

  const shopItemsTopSelling = [
    {
      imgUrl: "/images/vertical-stripped-shirt.svg",
      imgW: 296,
      imgH: 444,
      imgAlt: "Vertical Stripped Shirt",
      imgTxt: "Vertical Stripped Shirt",
      imgStUrl: "/icon-images/stars-icon(5.0).svg",
      imgStW: 113.7,
      imgStAlt: "rating icons",
      imgRate: "5.0/",
      imgFRate: 5,
      imgPrice: "$212",
      imgDelPrice: "$232",
      imgDecDis: "-20%",
    },
    {
      imgUrl: "/images/courage-tshirt.svg",
      imgW: 294,
      imgH: 441,
      imgAlt: "Courage Graphic T-shirt",
      imgTxt: "Courage Graphic T-shirt",
      imgStUrl: "/icon-images/stars-icon(4).svg",
      imgStW: 89.9,
      imgStAlt: "rating icons",
      imgRate: "4.0/",
      imgFRate: 5,
      imgPrice: "$145",
    },
    {
      imgUrl: "/images/loose-fit-shorts.svg",
      imgW: 296,
      imgH: 444,
      imgAlt: "Loose Fit Bermuda Shorts",
      imgTxt: "Loose Fit Bermuda Shorts",
      imgStUrl: "/icon-images/stars-icon(3.0).svg",
      imgStW: 66.09,
      imgStAlt: "rating icons",
      imgRate: "3.0/",
      imgFRate: 5,
      imgPrice: "$80",
    },
    {
      imgUrl: "/images/fadded-skinny-jeans.svg",
      imgW: 252,
      imgH: 378,
      imgAlt: "Fadded Skinny Jeans",
      imgTxt: "Fadded Skinny Jeans",
      imgStUrl: "/icon-images/stars-icon(4.5).svg",
      imgStW: 104,
      imgStAlt: "rating icons",
      imgRate: "4.5/",
      imgFRate: 5,
      imgPrice: "$210",
    },
  ];

  const CusRevs = [
    {
      CusName: "Sarah M.",
      CusRev:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      MainDivW: "400px",
      MainDivH: "240px",
      RevDivW: "336px",
      RevDivH: "161px",
      SmMainW: "358px",
      SmMainH: "186.19px",
      SmRevW: "310px",
      SmRevH: "138.19px",
    },
    {
      CusName: "Alex K.",
      CusRev:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      MainDivW: "400px",
      MainDivH: "240px",
      RevDivW: "336px",
      SmMainW: "358px",
      SmMainH: "186.19px",
      SmRevW: "310px",
      SmRevH: "138.19px",
    },
    {
      CusName: "James L.",
      CusRev:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      MainDivW: "400px",
      MainDivH: "240px",
      RevDivW: "336px",
      SmMainW: "358px",
      SmMainH: "186.19px",
      SmRevW: "310px",
      SmRevH: "138.19px",
    },
    {
      CusName: "Mooen",
      CusRev:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      MainDivW: "400px",
      MainDivH: "240px",
      RevDivW: "336px",
      SmMainW: "358px",
      SmMainH: "186.19px",
      SmRevW: "310px",
      SmRevH: "138.19px",
    },
  ];
  return (
    <div className="bg-[#FFFFFF] ">
      <HeroSection />
      <div className="w-full flex justify-center lg:h-[58px] lg:mt-[72px] x-sm:mt-[50px] x-sm:h-[38px] sm:mt-[60px] sm:h-[48px]">
        <h1 className="font-[800] lg:h-[58px] lg:text-[48px] lg:leading-[57.6px] x-sm:h-[38px] x-sm:text-[32px] x-sm:leading-[38.4px] sm:h-[48px] sm:text-[40px] sm:leading-[48.4px]">
          NEW ARRIVALS
        </h1>
      </div>
      <div className="w-full scrollbar md:mt-[55px] sm:mt-[42px] x-sm:mt-[32px]">
        <ShopItemsBar shopItems={shopItemsNewArrivals} />
      </div>
      <div className="w-full flex justify-center">
        <div className="lg:mt-[36px] lg:w-[218px] sm:mt-[32px] sm:w-[200px] sm:mx-[16px] x-sm:mt-[24px] x-sm:w-full x-sm:mx-[16px]">
          <ViewAllBtn BtnTxt="View All" BtnW={218} />
        </div>
      </div>
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] lg:mt-[64px] lg:mx-[13px] x-sm:mt-[40px] x-sm:mx-[16px] " />
      <div className="w-full flex justify-center lg:h-[58px] lg:mt-[64px] x-sm:mt-[40px] x-sm:h-[38px] sm:mt-[60px] sm:h-[48px]">
        <h1 className="font-[800] lg:h-[58px] lg:text-[48px] lg:leading-[57.6px] x-sm:h-[38px] x-sm:text-[32px] x-sm:leading-[38.4px] sm:h-[48px] sm:text-[40px] sm:leading-[48.4px]">
          TOP SELLING
        </h1>
      </div>
      <div className="w-full scrollbar md:mt-[55px] sm:mt-[42px] x-sm:mt-[32px]">
        <ShopItemsBar shopItems={shopItemsTopSelling} />
      </div>
      <div className="w-full flex justify-center">
        <div className="lg:mt-[36px] lg:w-[218px]  sm:mt-[32px] sm:w-[200px] sm:mx-[16px] x-sm:mt-[24px] x-sm:w-full x-sm:mx-[16px]">
          <ViewAllBtn BtnTxt="View All" BtnW={218} />
        </div>
      </div>

      <div className="flex justify-center lg:mx-[13px] x-sm:mx-[16px] sm:mx-[19px]">
        <div className="w-full bg-[#F0F0F0] lg:h-[886px] lg:mt-[80px] lg:rounded-[40px] sm:h-[615px] sm:mt-[60px] sm:rounded-[30px] x-sm:h-[975px] x-sm:mt-[50px] x-sm:rounded-[20px]">
          <div className="w-full flex justify-center lg:h-[58px] lg:mt-[70px] sm:h-[70px] sm:mt-[50px] x-sm:h-[72px] x-sm:mt-[40px]">
            <h1 className="font-[800] text-[#000000] lg:w-auto  lg:h-[58px] lg:text-[48px] lg:leading-[57.6px] sm:w-auto sm:h-[70px] sm:text-[40px] sm:leading-[44px] sm:text-start x-sm:w-[246px] x-sm:h-[72px] x-sm:text-[32px] x-sm:leading-[36px] x-sm:text-center">
              BROWSE BY DRESS STYLE
            </h1>
          </div>
          <div className="flex justify-center flex-wrap lg:gap-[20px] lg:mt-[64px] sm:gap-[16px] sm:mt-[32px] sm:mx-[26px] x-sm:gap-[16px] x-sm:mt-[28px] x-sm:mx-[24px]">
            <Link
              href="http://localhost:3000/casual"
              className="lg:w-auto x-sm:w-full sm:w-auto"
            >
              <div className="relative bg-[#FFFFFF] rounded-[20px] overflow-hidden lg:h-[289px] lg:w-[407px] sm:h-[200px] sm:w-[407px] x-sm:h-[190px] x-sm:w-full ">
                <Image
                  src="/images/casual.svg"
                  alt="Casual Wear Image"
                  quality={100}
                  priority={true}
                  layout="fill"
                />
                <div className="absolute lg:top-[25px] lg:left-[36px] x-sm:top-[16px] x-sm:left-[24px]">
                  <h1 className="text-[#000000] font-[700] lg:text-[36px] x-sm:text-[24px] x-sm:leading-[32.4px]">
                    Casual
                  </h1>
                </div>
              </div>
            </Link>
            <div className="relative bg-[#FFFFFF] rounded-[20px] overflow-hidden lg:h-[289px] lg:w-[684px] sm:h-[200px] sm:w-[250px] x-sm:h-[190px] x-sm:w-full">
              <Image
                src="/images/formal.svg"
                alt="Formal Wear Image"
                quality={100}
                priority={true}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute lg:top-[25px] lg:left-[36px] x-sm:top-[16px] x-sm:left-[24px]">
                <h1 className="text-[#000000] font-[700] lg:text-[36px] x-sm:text-[24px] x-sm:leading-[32.4px]">
                  Formal
                </h1>
              </div>
            </div>
            <div className="relative bg-[#FFFFFF] rounded-[20px] overflow-hidden lg:h-[289px] lg:w-[684px] sm:h-[200px] sm:w-[250px] x-sm:h-[190px] x-sm:w-full">
              <Image
                src="/images/party.svg"
                alt="Party Wear Image"
                quality={100}
                priority={true}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute lg:top-[25px] lg:left-[36px] x-sm:top-[16px] x-sm:left-[24px]">
                <h1 className="text-[#000000] font-[700] lg:text-[36px] x-sm:text-[24px] x-sm:leading-[32.4px]">
                  Party
                </h1>
              </div>
            </div>
            <div className="relative bg-[#FFFFFF] rounded-[20px] overflow-hidden lg:h-[289px] lg:w-[407px] sm:h-[200px] sm:w-[407px] x-sm:h-[190px] x-sm:w-full">
              <Image
                src="/images/gym.svg"
                alt="Gym Wear Image"
                quality={100}
                priority={true}
                layout="fill"
              />
              <div className="absolute lg:top-[25px] lg:left-[36px] x-sm:top-[16px] x-sm:left-[24px]">
                <h1 className="text-[#000000] font-[700] lg:text-[36px] x-sm:text-[24px] x-sm:leading-[32.4px]">
                  Gym
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-auto justify-between lg:h-[58px] lg:mt-[80px] lg:mx-[13px] sm:h-[40px] sm:mt-[60px] sm:mx-[16px] x-sm:h-[72px] x-sm:mt-[50px] x-sm:mx-[16px] sm:items-center">
        <h1 className="text-[#000000] font-[800] lg:text-[48px] lg:leading-[57.6px] sm:text-[24px] sm:leading-[28px] x-sm:text-[32px] x-sm:leading-[36px]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex x-sm:mt-[39px] sm:m-0">
          <Image
            src="/icon-images/arrow-down-bold 2.svg"
            width={24}
            height={24}
            alt="left arrow"
            quality={100}
            priority={true}
          />
          <Image
            className="rotate-180 mx-[16px]"
            src="/icon-images/arrow-down-bold 2.svg"
            width={24}
            height={24}
            alt="right arrow"
            quality={100}
            priority={true}
          />
        </div>
      </div>
      <div className="scrollbar lg:mt-[40px] lg:mx-[13px] sm:mt-[32px] x-sm:mt-[24px] x-sm:mx-[16px]">
        <CusRevsBar CusRevs={CusRevs} />
      </div>
    </div>
  );
}
