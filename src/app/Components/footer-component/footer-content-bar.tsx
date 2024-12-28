import { FooterContent } from "./footer-content";

interface FooterContentBarProps {
  footerContent: {
    HName: string;
    RName1: string;
    RName2: string;
    RName3: string;
    RName4: string;
    SmSW: string;
    MdSW: string;
  }[];
}

const FooterContentBar = ({ footerContent }: FooterContentBarProps) => {
  return (
    <div
      className="
    lg:h-[177px] 
    lg:w-[879.25px] flex items-center 
    lg:justify-between 
    lg:flex-nowrap x-sm:w-full x-sm:h-auto x-sm:flex-wrap"
    >
      {footerContent.map((item, index) => (
        <FooterContent key={index} {...item} />
      ))}
    </div>
  );
};

export default FooterContentBar;
