import Link from "next/link";
import { IoClose } from "react-icons/io5";

// params prop'unu buraya ekledik
const MobileHeader = ({ headerLinks, closeMobileMneu, mobileMenu, params }) => {
  return (
    <div
      ref={mobileMenu}
      className="fixed top-[-100%] h-[300px] w-full z-[1000] left-0 bg-[--bgColor] box-shdaow-1 transtion1"
    >
      <ul className="flex items-center w-full justify-center flex-col  gap-[32px] border border-[#1D2C2F] h-full">
        {headerLinks?.map((item) => {
          // === YENİ EKLENEN KISIM BAŞLANGIÇ ===
          // Eğer dil 'az' ise prefix boş olsun, değilse '/en' vb. olsun.
          const urlPrefix = params === "az" ? "" : `/${params}`;
          const fullUrl = `${urlPrefix}${item?.slug_url}`;
          // === YENİ EKLENEN KISIM BİTİŞ ===

          return (
            <li
              key={item?.id}
              className="text-[#DFDFDF] text-[16px] font-medium w-max"
            >
              <Link
                onClick={closeMobileMneu}
                className="w-max"
                href={fullUrl} // href güncellendi
              >
                {item?.name}
              </Link>
            </li>
          );
        })}
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
