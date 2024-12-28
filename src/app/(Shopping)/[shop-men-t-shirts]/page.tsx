import Image from "next/image";
import { DisBadge } from "../../Components/discountbadge";
import Btn from "../../Components/button";
import CustomerReview from "../../Components/customerreview";
import ViewAllBtn from "../../Components/viewallbutton";
import { ShopItemsBar } from "../../Components/shopitemsbar";

const youMightAlsoLikeThis = [
  {
    imgUrl: "/images/polo-t-shirt.svg",
    imgW: 296,
    imgH: 444,
    imgAlt: "polo t-shirt",
    imgTxt: "Polo with Contrast Trims",
    imgStUrl: "/icon-images/stars-icon(4).svg",
    imgStW: 90,
    imgStAlt: "rating icons",
    imgRate: "4.0/",
    imgFRate: 5,
    imgPrice: "$212",
    imgDelPrice: "$242",
    imgDecDis: "-20%",
  },
  {
    imgUrl: "/images/gradient-t-shirt.svg",
    imgW: 268,
    imgH: 402,
    imgAlt: "gradient t-shirt",
    imgTxt: "Gradient Graphic T-shirt",
    imgStUrl: "/icon-images/stars-icon(3.5).svg",
    imgStW: 80.2,
    imgStAlt: "rating icons",
    imgRate: "3.5/",
    imgFRate: 5,
    imgPrice: "$145",
  },
  {
    imgUrl: "/images/polo-tipping-t-shirt.svg",
    imgW: 296,
    imgH: 444,
    imgAlt: "polo tipping t-shirt",
    imgTxt: "Polo with Tipping Details",
    imgStUrl: "/icon-images/stars-icon(4.5).svg",
    imgStW: 104,
    imgStAlt: "rating icons",
    imgRate: "4.5/",
    imgFRate: 5,
    imgPrice: "$180",
  },
  {
    imgUrl: "/images/black-stripped-t-shirt.svg",
    imgW: 296,
    imgH: 444,
    imgAlt: "Stripped T-shirt image",
    imgTxt: "Black Striped T-shirt",
    imgStUrl: "/icon-images/stars-icon(5.0).svg",
    imgStW: 104,
    imgStAlt: "rating icons",
    imgRate: "5.0/",
    imgFRate: 5,
    imgPrice: "$120",
    imgDelPrice: "$150",
    imgDecDis: "-30%",
  },
];

export default function ShopMenTShirts() {
  return (
    <div>
      <hr className="border-[1px] border-[#000000] border-opacity-[10%] lg:mt-[24px] lg:mx-[13px] x-sm:mt-[20px] x-sm:mx-[16px]" />
      <div className="flex justify-between items-center lg:h-[22px] lg:w-[259px] lg:mt-[24px] lg:ml-[13px] x-sm:lg:h-[19px] x-sm:w-[215px] x-sm:mt-[20px] x-sm:ml-[16px]">
        <div className="flex justify-between items-center lg:w-[63px] lg:h-[16px] x-sm:w-[56px] x-sm:h-[14px]">
          <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[21.6px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Home
          </h1>
          <Image
            className="-rotate-90 opacity-[60%] lg:h-[14px] lg:w-[14px]  x-sm:h-[12px] x-sm:w-[12px]"
            src="/icon-images/down-arrow.svg"
            width={14}
            height={14}
            alt="right arrow icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="flex justify-between items-center lg:w-[57px] lg:h-[16px] x-sm:w-[50px] x-sm:h-[14px]">
          <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[21.6px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Shop
          </h1>
          <Image
            className="-rotate-90 opacity-[60%] lg:h-[14px] lg:w-[14px]  x-sm:h-[12px] x-sm:w-[12px]"
            src="/icon-images/down-arrow.svg"
            width={14}
            height={14}
            alt="right arrow icon"
            quality={100}
            priority={true}
          />
        </div>
        <div className="flex justify-between items-center lg:w-[51px] lg:h-[16px] x-sm:w-[46px] x-sm:h-[14px]">
          <h1 className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[21.6px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Men
          </h1>
          <Image
            className="-rotate-90 opacity-[60%] lg:h-[14px] lg:w-[14px]  x-sm:h-[12px] x-sm:w-[12px]"
            src="/icon-images/down-arrow.svg"
            width={14}
            height={14}
            alt="right arrow icon"
            quality={100}
            priority={true}
          />
        </div>
        <h1 className="text-[#000000] font-[400] lg:text-[16px] lg:leading-[21.6px] x-sm:text-[14px] x-sm:leading-[18.9px] lg:w-[53px] lg:h-[22px] x-sm:w-[47px] x-sm:h-[19px]">
          T-shirts
        </h1>
      </div>
      <div className="flex lg:mt-[36px] lg:mx-[12px] lg:gap-[14px] lg:flex-row x-sm:flex-col x-sm:mt-[20px] x-sm:mx-[16px]">
        <div className="w-full h-[290px] sm-div">
          <Image
            src="/images/one-line-t-shirt-mobile(1).svg"
            width={358}
            height={290}
            alt="one-life-graphic-t-shirt"
            quality={100}
            priority={true}
          />
        </div>
        <div className="sm-div w-full flex gap-[6px] mt-[12px] scrollbar">
          <Image
            src="/images/one-line-t-shirt-mobile(2).svg"
            width={111}
            height={106}
            alt="one-life-graphic-t-shirt"
            quality={100}
            priority={true}
          />
          <Image
            src="/images/one-line-t-shirt-mobile(3).svg"
            width={112}
            height={106}
            alt="one-life-graphic-t-shirt"
            quality={100}
            priority={true}
          />
          <Image
            src="/images/one-line-t-shirt-mobile(4).svg"
            width={111}
            height={106}
            alt="one-life-graphic-t-shirt"
            quality={100}
            priority={true}
          />
        </div>
        <div className="sm:w-full sm:flex sm:flex-row sm:gap-[24px]">
          <div className="flex flex-col gap-[16px] res-div tab-div">
            <div className="w-[152px] h-[167px]">
              <Image
                src="/images/one-life-graphic-t-shirt(1).svg"
                width={152}
                height={167}
                alt="one-life-graphic-t-shirt"
                quality={100}
                priority={true}
              />
            </div>
            <div className="w-[152px] h-[167px]">
              <Image
                src="/images/one-life-graphic-t-shirt(2).svg"
                width={152}
                height={167}
                alt="one-life-graphic-t-shirt"
                quality={100}
                priority={true}
              />
            </div>
            <div className="w-[152px] h-[167px]">
              <Image
                src="/images/one-life-graphic-t-shirt(3).svg"
                width={152}
                height={167}
                alt="one-life-graphic-t-shirt"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="w-[444px] h-[530px] res-div tab-div">
            <Image
              src="/images/one-line-graphic-t-shirt(4).svg"
              width={444}
              height={530}
              alt="one-life-graphic-t-shirt"
              quality={100}
              priority={true}
            />
          </div>
        </div>
        <div className="lg:h-[167px]">
          <h1 className="text-[#000000] font-[800] lg:mt-0 lg:h-[48px] lg:w-[615px] lg:text-[40px] lg:leading-[48px] x-sm:h-[56px] x-sm:w-[267px] x-sm:text-[24px] x-sm:leading-[28px] x-sm:mt-[20px]">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex justify-between items-center lg:h-[27px] lg:w-[193px] lg:mt-[14px] x-sm:h-[19px] x-sm:w-[154px] x-sm:mt-[12px]">
            <Image
              className="lg:h-[27px] lg:w-[139px] x-sm:h-[18px] x-sm:w-[105px]"
              src="/icon-images/stars-icon(4.5).svg"
              width={139}
              height={27}
              alt="stars icon"
              quality={100}
              priority={true}
            />
            <h3 className="text-[#000000] weight-[400] lg:h-[22px] lg:text-[16px] lg:leading-[21.6px] x-sm:h-[19px] x-sm:text-[14px] x-sm:leading-[18.9px]">
              4.5/
              <span className="text-[#000000] text-opacity-[60%] weight-[400] lg:h-[22px] lg:text-[16px] x-sm:h-[19px] x-sm:text-[14px]">
                5
              </span>
            </h3>
          </div>
          <div className="flex items-center lg:gap-[12px] lg:w-[176px] lg:h-[43px] lg:mt-[15px] x-sm:w-[205px] x-sm:h-[32px] x-sm:gap-[10px] x-sm:mt-[12px]">
            <h1 className="text-[#000000] font-[700] lg:h-[43px] lg:text-[32px] x-sm:h-[32px] x-sm:text-[24px]">
              $260
            </h1>
            <h1 className="text-[#000000] text-opacity-[30%] line-through decoration-solid font-[700] lg:h-[43px] lg:text-[32px] x-sm:h-[32px] x-sm:text-[24px]">
              $300
            </h1>
            <div className="h-[34px] w-[72px]">
              <DisBadge text="-40%" />
            </div>
          </div>
          <div className="mt-[20px] lg:w-[590px] lg:h-[33px] x-sm:w-full x-sm:h-[50px]">
            <p className="text-[#000000] text-opacity-[60%] font-[400] lg:text-[16px] lg:leading-[22px] x-sm:text-[13.9px] x-sm:leading-[20px]">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px]" />
          <p className="text-[#000000] text-opacity-[60%] font-[400] mt-[24px] lg:h-[11px] lg:text-[16px] lg:leading-[21.6px] x-sm:h-[10px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Select Colors
          </p>
          <div className="w-[143px] mt-[16px] flex lg:gap-[16px] lg:h-[37px] x-sm:gap-[12.3px] x-sm:h-[39px]">
            <div className="bg-[#4F4631] rounded-full px-[10px] py-[10px] lg:w-[37px] lg:h-[37px] x-sm:w-[39.14px] x-sm:h-[39.14px]">
              <Image
                src="/icon-images/tick.svg"
                width={16.92}
                height={16.92}
                alt="tick icon"
                quality={100}
                priority={true}
              />
            </div>
            <div className="bg-[#314F4A] rounded-full lg:w-[37px] lg:h-[37px] x-sm:w-[39.14px] x-sm:h-[39.14px]"></div>
            <div className="bg-[#31344F] rounded-full lg:w-[37px] lg:h-[37px] x-sm:w-[39.14px] x-sm:h-[39.14px] "></div>
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px]" />
          <p className="text-[#000000] text-opacity-[60%] font-[400] mt-[24px] lg:h-[11px] lg:text-[16px] lg:leading-[21.6px] x-sm:h-[10px] x-sm:text-[14px] x-sm:leading-[18.9px]">
            Choose Size
          </p>
          <div className="mt-[16px] flex lg:gap-[12px] lg:h-[46px] lg:w-[420px] x-sm:gap-[8px] x-sm:h-[39px] x-sm:w-full">
            <div className="h-[46px] w-[86px]">
              <Btn
                BtnTxt="Small"
                BtnCol="#F0F0F0"
                BtnTxtCol="#000000"
                BtnH="46px"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="400"
                BtnDivH="46px"
                BtnDivW="86px"
                BtnDivF="flex"
                BtnDivJC="justify-center"
                BtnTxtOp="60%"
              />
            </div>
            <div className="h-[46px] w-[105px]">
              <Btn
                BtnTxt="Medium"
                BtnCol="#F0F0F0"
                BtnTxtCol="#000000"
                BtnH="46px"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="400"
                BtnDivH="46px"
                BtnDivW="105px"
                BtnDivF="flex"
                BtnDivJC="justify-center"
                BtnTxtOp="60%"
              />
            </div>
            <div className="h-[46px] w-[89px]">
              <Btn
                BtnTxt="Large"
                BtnCol="#000000"
                BtnTxtCol="#FFFFFF"
                BtnH="46px"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="400"
                BtnDivH="46px"
                BtnDivW="89px"
                BtnDivF="flex"
                BtnDivJC="justify-center"
              />
            </div>
            <div className="h-[46px] w-[104px]">
              <Btn
                BtnTxt="X-Large"
                BtnCol="#F0F0F0"
                BtnTxtCol="#000000"
                BtnH="46px"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="400"
                BtnDivH="46px"
                BtnDivW="104px"
                BtnDivF="flex"
                BtnDivJC="justify-center"
                BtnTxtOp="60%"
              />
            </div>
          </div>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px]" />
          <div className="h-[52px] flex gap-[12px] mt-[24px]">
            <div className="w-[170px] bg-[#F0F0F0] text-[#000000] text-[16px] font-[500] rounded-[62px] flex items-center justify-evenly lg:h-[46px] x-sm:h-[44px] x-sm:px-[12px]">
              <div className="lg:h-[24px] lg:w-[24px] x-sm:h-[20px] x-sm:w-[20px]">
                <Image
                  src="/icon-images/minus-icon.svg"
                  width={24}
                  height={24}
                  alt="minus icon"
                  quality={100}
                  priority={true}
                />
              </div>
              <div className="h-[24px] w-[24px] x-sm:ml-3">
                <p>1</p>
              </div>
              <div className="lg:h-[24px] lg:w-[24px] x-sm:h-[20px] x-sm:w-[20px]">
                <Image
                  src="/icon-images/plus-icon.svg"
                  width={24}
                  height={24}
                  alt="plus icon"
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
            <div className="lg:h-[52px] lg:w-[400px] x-sm:h-[44px] x-sm:w-full">
              <Btn
                BtnTxt="Add to Cart"
                BtnCol="#000000"
                BtnTxtCol="#FFFFFF"
                BtnH="full"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="500"
                BtnDivH="46px"
                BtnDivW="400px"
                BtnDivF="flex"
                BtnDivJC="justify-center"
                SmDH="[44px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-around lg:mt-[80px] lg:mx-[13px] x-sm:justify-between x-sm:mt-[50px] x-sm:mx-[16px] ">
        <div>
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] leading-[22px] flex lg:justify-center lg:w-[413px] lg:h-[14px] lg:text-[20px] x-sm:w-auto x-sm:h-[11px] x-sm:text-[16px]">
            Product Details
          </h2>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px] res-div" />
        </div>
        <div>
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] leading-[22px] flex lg:justify-center lg:w-[413px] lg:h-[14px] lg:text-[20px] x-sm:w-auto x-sm:h-[11px] x-sm:text-[16px]">
            Rating & Reviews
          </h2>
          <hr className="border-[1.5px] border-[#000000] mt-[24px]" />
        </div>
        <div>
          <h2 className="text-[#000000] text-opacity-[60%] font-[400] leading-[22px] flex lg:justify-center lg:w-[413px] lg:h-[14px] lg:text-[20px] x-sm:w-auto x-sm:h-[11px] x-sm:text-[16px]">
            FAQs
          </h2>
          <hr className="border-[1px] border-[#000000] border-opacity-[10%] mt-[24px] res-div" />
        </div>
      </div>
      <hr className="w-auto border-[1px] border-[#000000] border-opacity-[10%] -mt-[1px] mx-[16px] sm-div mob-tab" />
      <div>
        <div className="flex justify-between items-center lg:mt-[32px] lg:mx-[13px] x-sm:mt-[26px] x-sm:mx-[16px]">
          <div className="flex lg:h-[32px] x-sm:h-[27px] ">
            <h1 className="text-[#000000] font-[700] lg:leading-[32.4px] lg:h-[32px] lg:text-[24px] x-sm:h-[27px] x-sm:text-[20px] x-sm:leading-[27px]">
              All Reviews
            </h1>
            <h2 className="text-[#000000] text-opacity-[60%] font-[400] leading-[22px] lg:ml-[8px] lg:my-[5px] lg:h-[11px] lg:text-[16px] x-sm:h-[10px] x-sm:text-[14px] x-sm:ml-[6px] x-sm:my-[3px] ">
              (451)
            </h2>
          </div>
          <div className="flex gap-[10px] lg:w-[354px] lg:h-[48px] x-sm:w-auto x-sm:h-[40px]">
            <div className="flex justify-center items-center rounded-[62px] bg-[#F0F0F0] lg:w-[48px] lg:h-[48px] x-sm:w-[40px] x-sm:h-[40px] ">
              <div className="lg:w-[24px] lg:h-[24px] x-sm:w-[20px] x-sm:h-[20px]">
                <Image
                  src="/icon-images/filter-icon.svg"
                  width={24}
                  height={24}
                  alt="filter icon"
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
            <div className="bg-[#F0F0F0] rounded-[62px] flex justify-center h-[48px] w-[120px] gap-[21px] res-div">
              <Btn
                BtnTxt="Latest"
                BtnCol="#F0F0F0"
                BtnTxtCol="#000000"
                BtnH="48px"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="500"
                BtnDivH="48px"
                BtnDivW="120px"
                BtnDivF="flex"
                BtnGap="21px"
                ImgSrc="/icon-images/down-arrow.svg"
                ImgW={16}
                ImgH={16}
                ImgAlt="down arrow "
              />
            </div>
            <div className="lg:w-[166px] lg:h-[48px] x-sm:w-[113px] x-sm:h-[40px]">
              <Btn
                BtnTxt="Write a Review"
                BtnCol="#000000"
                BtnTxtCol="#FFFFFF"
                BtnH="48px"
                BtnW="full"
                BtnTxtS="16px"
                BtnFW="500"
                BtnDivH="48px"
                BtnDivW="166px"
                BtnDivF="flex"
                BtnDivJC="justify-center"
                SmDH="[40px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:mt-[32px] lg:w-[1240px] lg:h-[765px] lg:grid lg:grid-cols-2 lg:gap-[21px] lg:mx-[13px] x-sm:w-full x-sm:h-auto x-sm:mt-[20px] x-sm:flex x-sm:flex-col x-sm:gap-[16px] x-sm:mx-[4px]">
          <CustomerReview
            CusName="Samantha D."
            CusRev="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
            MainDivW="610px"
            MainDivH="241.58px"
            RevDivW="546px"
            RevDivH="139.58px"
            //Stars icon
            StImgSrc="/icon-images/stars-icon(4.5).svg"
            //dots icon.
            ImgS="/icon-images/three-dot.svg"
            ImgW={24}
            ImgH={24}
            ImgAlt="dots icon"
            //Posted date.
            PostDDivW="546px"
            PostDC="Posted on August 14, 2023"
            //small screen heights and widths
            SmMainH="244px"
            SmMainW="320px"
            SmRevH="174px"
            SmRevW="310px"
          />
          <CustomerReview
            CusName="Alex M."
            CusRev="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
            MainDivW="610px"
            MainDivH="241.58px"
            RevDivW="546px"
            RevDivH="139.58px"
            //Stars icon
            StImgSrc="/icon-images/stars-icon(4).svg"
            //dots icon.
            ImgS="/icon-images/three-dot.svg"
            ImgW={24}
            ImgH={24}
            ImgAlt="dots icon"
            //Posted date.
            PostDDivW="546px"
            PostDC="Posted on August 15, 2023"
            //small screen heights and widths
            SmMainH="244px"
            SmMainW="320px"
            SmRevH="174px"
            SmRevW="310px"
          />
          <CustomerReview
            CusName="Ethan R."
            CusRev="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
            MainDivW="610px"
            MainDivH="241.58px"
            RevDivW="546px"
            RevDivH="139.58px"
            //Stars icon
            StImgSrc="/icon-images/stars-icon(3.5).svg"
            //dots icon.
            ImgS="/icon-images/three-dot.svg"
            ImgW={24}
            ImgH={24}
            ImgAlt="dots icon"
            //Posted date.
            PostDDivW="546px"
            PostDC="Posted on August 16, 2023"
            //small screen heights and widths
            SmMainH="244px"
            SmMainW="320px"
            SmRevH="174px"
            SmRevW="310px"
          />
          <div className="res-div">
            <CustomerReview
              CusName="Olivia P."
              CusRev="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
              MainDivW="610px"
              MainDivH="241.58px"
              RevDivW="546px"
              RevDivH="139.58px"
              //Stars icon
              StImgSrc="/icon-images/stars-icon(4).svg"
              //dots icon.
              ImgS="/icon-images/three-dot.svg"
              ImgW={24}
              ImgH={24}
              ImgAlt="dots icon"
              //Posted date.
              PostDDivW="546px"
              PostDC="Posted on August 17, 2023"
              //small screen heights and widths
              SmMainH="244px"
              SmMainW="320px"
              SmRevH="174px"
              SmRevW="310px"
            />
          </div>
          <div className="res-div">
            <CustomerReview
              CusName="Liam K."
              CusRev="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
              MainDivW="610px"
              MainDivH="241.58px"
              RevDivW="546px"
              RevDivH="139.58px"
              //Stars icon
              StImgSrc="/icon-images/stars-icon(4).svg"
              //dots icon.
              ImgS="/icon-images/three-dot.svg"
              ImgW={24}
              ImgH={24}
              ImgAlt="dots icon"
              //Posted date.
              PostDDivW="546px"
              PostDC="Posted on August 18, 2023"
              //small screen heights and widths
              SmMainH="244px"
              SmMainW="320px"
              SmRevH="174px"
              SmRevW="310px"
            />
          </div>
          <div className="res-div">
            <CustomerReview
              CusName="Ava H."
              CusRev="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
              MainDivW="610px"
              MainDivH="241.58px"
              RevDivW="546px"
              RevDivH="139.58px"
              //Stars icon
              StImgSrc="/icon-images/stars-icon(4.5).svg"
              //dots icon.
              ImgS="/icon-images/three-dot.svg"
              ImgW={24}
              ImgH={24}
              ImgAlt="dots icon"
              //Posted date.
              PostDDivW="546px"
              PostDC="Posted on August 19, 2023"
              //small screen heights and widths
              SmMainH="244px"
              SmMainW="320px"
              SmRevH="174px"
              SmRevW="310px"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:mt-[37px] x-sm:mt-[20px]">
        <div className="lg:w-[230px] x-sm:w-[195px] sm:w-[295]">
          <ViewAllBtn BtnTxt="Load More Reviews" BtnW={230} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="lg:w-full x-sm:w-[284px] sm:w-auto text-[#000000] flex justify-center items-center font-[800] lg:h-[58px] lg:text-[48px] lg:leading-[57.6px] lg:mt-[64px] sm:h-[52px] sm:text-[40px] sm:leading-[44px] sm:mt-[60px] sm:text-start x-sm:h-[72px] x-sm:text-[32px] x-sm:leading-[36px] x-sm:mt-[50px] x-sm:text-center">
          YOU MIGHT ALSO LIKE
        </h1>
      </div>
      <div className="scrollbar lg:mt-[55px] sm:mt-[50px] x-sm:mt-[40px]">
        <ShopItemsBar shopItems={youMightAlsoLikeThis} />
      </div>
    </div>
  );
}
