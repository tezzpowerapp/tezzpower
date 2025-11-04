import Link from "next/link";
import { IoClose } from "react-icons/io5";

const MobileHeader = ({ headerLinks, closeMobileMneu, mobileMenu }) => {
  return (
    <div
      ref={mobileMenu}
      className="fixed top-[-100%] h-[300px] w-full z-[1000] left-0 bg-[--bgColor] box-shdaow-1 transtion1"
    >
      <ul className="flex items-center w-full justify-center flex-col  gap-[32px] border border-[#1D2C2F] h-full">
        {headerLinks?.map((item) => (
          <li
            key={item?.id}
            className="text-[#DFDFDF] text-[16px] font-medium w-max"
          >
            <Link
              onClick={closeMobileMneu}
              className="w-max"
              href={item?.slug_url}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <span
        onClick={closeMobileMneu}
        className="absolute top-[20px] right-[30px] text-[#D1F843] text-[25px] cursor-pointer"
      >
        <IoClose />
      </span>
    </div>
  );
};

export default MobileHeader;
