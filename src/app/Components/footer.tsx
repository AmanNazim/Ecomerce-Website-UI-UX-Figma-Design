import Image from "next/image";
import FooterContentBar from "./footer-component/footer-content-bar";

export const Footer = () => {
  const FooterContents = [
    {
      HName: "COMPANY",
      RName1: "About",
      RName2: "Features",
      RName3: "Works",
      RName4: "Career",
      SmSW: "180px",
      MdSW: "104px",
    },
    {
      HName: "HELP",
      RName1: "Customer Support",
      RName2: "Delivery Details",
      RName3: "Terms & Conditions",
      RName4: "Privacy Policy",
      SmSW: "122px",
      MdSW: "139px",
    },
    {
      HName: "FAQ",
      RName1: "Account",
      RName2: "Manage Deliverys",
      RName3: "Orders",
      RName4: "Payments",
      SmSW: "180px",
      MdSW: "149px",
    },
    {
      HName: "RESOURCES",
      RName1: "Free eBooks",
      RName2: "Development Tutorial",
      RName3: "How to - Blog",
      RName4: "Youtube PlayList",
      SmSW: "159px",
      MdSW: "152px",
    },
  ];
  return (
    <div className="relative w-full lg:mt-[180px] x-sm:mt-[182px] x-sm:flex x-sm:justify-center sm:w-full sm:mt-[140px]">
      <div className="absolute flex justify-center lg:mt-[81px] lg:-top-[170px] x-sm:-top-[217px] x-sm:mt-[85px] sm:w-full sm:-top-[170px]">
        <div className="bg-[#000000] rounded-[20px] flex justify-center lg:items-center lg:w-[1240px] lg:h-[180px] x-sm:w-full x-sm:h-[293px] x-sm:flex-wrap x-sm:mx-[16px] sm:h-[180px] sm:w-full sm:items-center sm:justify-around">
          <div className="lg:w-[551px] lg:h-[94px] lg:mt-[0px] x-sm:w-[297px] x-sm:h-[105px] x-sm:mt-[32px] sm:m-0">
            <h1 className="font-[800] text-[#FFFFFF] lg:w-[551px] lg:h-[94px] lg:text-[40px] lg:leading-[45px] x-sm:w-[358] x-sm:h-[105px] x-sm:text-[32px] x-sm:leading-[35px] ">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>
          <div className="flex flex-col lg:w-[349px] lg:h-[108px] lg:gap-[14px] lg:ml-[180px] x-sm:w-[311px] x-sm:h-[96px] x-sm:gap-[12px]">
            <div className="bg-[#FFFFFF] px-[16px] py-[12px] gap-[12px] flex items-center rounded-[62px] lg:w-[349px] lg:h-[48px] x-sm:w-[311px] x-sm:h-[42px]">
              <Image
                className="lg:h-[24px] lg:w-[24px] x-sm:h-[20px] x-sm:w-[20px]"
                src="/icon-images/mail-icon.svg"
                width={24}
                height={24}
                alt="Mail icon"
                quality={100}
                priority={true}
              />
              <input
                type="text"
                className="p-2 text-[#000000] text-opacity-[40%] bg-[#ffffff] font-[400] lg:w-full lg:h-[22px] lg:text-[16px] lg:leading-[21.6px] x-sm:w-full x-sm:h-[19px] x-sm:text-[14px] x-sm:leading-[18.9px]"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="text-[#000000] font-[500] rounded-[62px] bg-[#FFFFFF] px-[16px] py-[12px] lg:w-[349px] lg:h-[46px] lg:text-[16px] x-sm:w-[311px] x-sm:h-[42px] x-sm:text-[14px]"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F0F0] lg:h-[499px] lg:pt-[131px] lg:px-[13px] x-sm:h-[846px] x-sm:pt-[189px] x-sm:px-[16px] sm:h-[610px] sm:pt-[130px]">
        <div className="lg:h-[177px] w-full flex lg:justify-between lg:flex-nowrap x-sm:h-auto x-sm:flex-wrap">
          <div className="h-full w-[248px] flex flex-col lg:justify-between">
            <div className="w-full flex justify-between flex-col lg:h-[114px] x-sm:h-[76px]">
              <Image
                className="lg:h-[23px] lg:w-[167px] x-sm:h-[20px] x-sm:w-[144px]"
                src="/name-images/SHOP.CO.svg"
                width={167}
                height={23}
                alt="brand icon"
                quality={100}
                priority={true}
              />
              <p className="text-[14px] text-[#000000] px-0 text-opacity-[60%] font-[400] lg:w-full lg:h-[66px] lg:leading-[22px] x-sm:w-[357px] x-sm:h-[40px] x-sm:leading-[20px] x-sm:px-[10px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div className="w-[148px] h-[28px] flex justify-between mt-0 px-0 x-sm:mt-[20px] x-sm:mx-[8px]">
              <Image
                src="/icon-images/twitter.svg"
                width={28}
                height={28}
                alt="twitter icon"
                quality={100}
                priority={true}
              />
              <Image
                src="/icon-images/facebook-icon.svg"
                width={28}
                height={28}
                alt="facebook icon"
                quality={100}
                priority={true}
              />
              <Image
                src="/icon-images/instagram-icon.svg"
                width={28}
                height={28}
                alt="insta icon"
                quality={100}
                priority={true}
              />
              <Image
                src="/icon-images/github-icon.svg"
                width={28}
                height={28}
                alt="github icon"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="lg:px-0 x-sm:px-[8px]">
            <FooterContentBar footerContent={FooterContents} />
          </div>
        </div>
        <hr className="border-[1px] border-[#000000] border-opacity-[10%] lg:mt-[50px] lg:mx-0 x-sm:mt-[40px] x-sm:mx-[8px]" />
        <div className="w-full h-[34px] flex lg:justify-between items-center lg:mt-[25px] x-sm:mt-[16px] x-sm:flex-wrap x-sm:justify-center sm:justify-between sm:mt-[16px]">
          <p className="h-[19px] w-[269px] text-[#000000] text-opacity-[60%] text-[14px] font-[400] leading-[18.9px]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex justify-between h-[34px] mt-0 lg:w-[282px] x-sm:w-[240px] x-sm:mt-[16px] sm:m-0">
            <Image
              src="/icon-images/visa-badge.svg"
              width={50}
              height={34}
              alt="visa badge"
              quality={100}
              priority={true}
            />
            <Image
              src="/icon-images/master-card.svg"
              width={50}
              height={34}
              alt="master card badge"
              quality={100}
              priority={true}
            />
            <Image
              src="/icon-images/paypal.svg"
              width={50}
              height={34}
              alt="paypal badge"
              quality={100}
              priority={true}
            />
            <Image
              src="/icon-images/apple-pay.svg"
              width={50}
              height={34}
              alt="apple pay badge"
              quality={100}
              priority={true}
            />
            <Image
              src="/icon-images/G-pay.svg"
              width={50}
              height={34}
              alt="G pay badge"
              quality={100}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
