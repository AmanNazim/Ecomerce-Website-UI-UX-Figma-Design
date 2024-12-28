// import Image from "next/image";
// import { useEffect, useState } from "react";

// const FilterBreadcrumbsBar: React.FC<{ toggleFilter: () => void }> = ({
//   toggleFilter,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Handles visibility based on parent toggle
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(toggleFilter, 300); // Match this with the closing animation duration
//   };
//   return (
//     <div className="w-full h-[27px] flex items-center justify-between transition-transform duration-300 ease-in-out">
//       <h1 className="w-[57px] h-[27px] text-[#000000] text-[20px] leading-[27px] font-[700] flex items-center">
//         Filters
//       </h1>
//       <button onClick={handleClose}>
//         <Image
//           className="h-[24px] w-[24px]"
//           src="/icon-images/gray-cross.svg"
//           width={22.25}
//           height={18.75}
//           alt="filter icon"
//           quality={100}
//           priority={true}
//         />
//       </button>
//     </div>
//   );
// };

// export default FilterBreadcrumbsBar;
