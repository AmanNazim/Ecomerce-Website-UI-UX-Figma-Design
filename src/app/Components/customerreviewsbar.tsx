import CustomerReview from "./customerreview";

interface CusRevBarProps {
  CusRevs: {
    CusName: string;
    CusRev: string;
    MainDivW?: string;
    MainDivH?: string;
    CusDivW?: string;
    CusDivH?: string;

    //stars icon image optional
    StImgSrc?: string;

    //dots icon optional
    ImgS?: string;
    ImgW?: number;
    ImgH?: number;
    ImgAlt?: string;

    //Posted date optional
    PostDDivW?: string;
    PostDC?: string;

    //heigth and width for smaller screens
    SmMainH: string;
    SmMainW: string;
    SmRevH: string;
    SmRevW: string;
  }[];
}

const CusRevsBar = ({ CusRevs }: CusRevBarProps) => {
  return (
    <div className={`flex gap-[20px]`}>
      {CusRevs.map((CusRev, index) => (
        <CustomerReview key={index} {...CusRev} />
      ))}
    </div>
  );
};

export default CusRevsBar;
