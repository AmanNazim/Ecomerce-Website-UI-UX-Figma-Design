"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CusRevProTypes {
  CusName: string;
  CusRev: string;
  MainDivW?: string;
  MainDivH?: string;
  RevDivW?: string;
  RevDivH?: string;

  // Stars icon image optional
  StImgSrc?: string;

  // Dots icon optional
  ImgS?: string;
  ImgW?: number;
  ImgH?: number;
  ImgAlt?: string;

  // Posted date optional
  PostDDivW?: string;
  PostDC?: string;

  //heigth and width for smaller screens
  SmMainH: string;
  SmMainW: string;
  SmRevH: string;
  SmRevW: string;
}

const CustomerReview = ({
  CusName,
  CusRev,
  MainDivH = "240px",
  MainDivW = "400px",
  RevDivH = "",
  RevDivW = "336px",
  ImgS,
  ImgAlt,
  ImgH,
  ImgW,
  PostDDivW,
  PostDC,
  StImgSrc,

  //Small screen height and width
  SmMainH,
  SmMainW,
  SmRevH,
  SmRevW,
}: CusRevProTypes) => {
  const [divHW, setDivHW] = useState({ height: MainDivH, width: MainDivW });
  const [revHW, setRevHW] = useState({ height: RevDivH, width: RevDivW });

  useEffect(() => {
    const updateDimensions = () => {
      const isSmallScreen = window.innerWidth <= 481;

      setDivHW({
        height: isSmallScreen ? SmMainH : MainDivH,
        width: isSmallScreen ? SmMainW : MainDivW,
      });

      setRevHW({
        height: isSmallScreen ? SmRevH : RevDivH,
        width: isSmallScreen ? SmRevW : RevDivW,
      });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions(); // Initialize on mount

    return () => window.removeEventListener("resize", updateDimensions);
  }, [MainDivH, MainDivW, SmMainH, SmMainW, RevDivH, RevDivW, SmRevH, SmRevW]);

  return (
    <div
      className={`rounded-[20px] border-[1px] border-[#000000] border-opacity-[10%] flex flex-col lg:gap-[24px] lg:px-[32px] lg:py-[28px] x-sm:gap-[10px] x-sm:py-[16px] x-sm:px-[22px]`}
      style={{ height: divHW.height, width: divHW.width }}
    >
      <div style={{ width: revHW.width, height: revHW.height }}>
        <div className="w-full flex justify-between">
          <div className="">
            <Image
              className="lg:h-[22.58px] x-sm:h-[19.19px] w-full"
              src={StImgSrc || "/icon-images/stars-icon(5.0).svg"}
              width={138.84}
              height={22.58}
              alt="5 star icons"
              quality={100}
              priority={true}
            />
          </div>
          {ImgS && (
            <Image
              src={ImgS}
              width={ImgW}
              height={ImgH}
              alt={ImgAlt || "more icon"}
              quality={100}
              priority={true}
            />
          )}
        </div>
        <div className=" flex gap-[4px] lg:h-[24px] lg:mt-[13px] x-sm:h-[19px] x-sm:mt-[10px]">
          <h1 className="font-[700] lg:h-[15px] lg:text-[20px] x-sm:h-[12px] x-sm:text-[16px]">
            {CusName}
          </h1>
          <Image
            className="mt-[2px] x-sm:h-[19px] x-sm:w-[19px]"
            src="/icon-images/green-tick.svg"
            width={24}
            height={24}
            alt="Green tick icon"
            quality={100}
            priority={true}
          />
        </div>
        <div style={{ width: revHW.width, height: revHW.height }}>
          <p className="text-start text-[#000000] text-opacity-[50%] font-[400] lg:mt-[13px] lg:text-[16px] x-sm:text-[14px] x-sm:mt-[10px]">
            &quot;{CusRev}&quot;
          </p>
        </div>
      </div>
      {PostDC && (
        <div style={{ width: PostDDivW }}>
          <h2 className="text-[#000000] text-opacity-[60%] font-[500] lg:h-[22px] lg:text-[16px] lg:leading-[22px] x-sm:h-[22px] x-sm:text-[14px] x-sm:leading-[20px]">
            {PostDC}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CustomerReview;
