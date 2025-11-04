"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MaxWidth from "../../MaxWidth/MaxWidth";
import MyButton from "../../Button/MyButton";
import MobileHeader from "./MobileHeader";

const Header = ({ header_data, settings, order_now, params_code }) => {
  const mobileMenu = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolledFromTop, setScrollTop] = useState(false);
  const [currentLang, setCurrentLang] = useState("az");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return function () {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);
  function scrollHandler(event) {
    if (typeof window !== "undefined") {
      window.pageYOffset >= 50 ? setScrollTop(true) : setScrollTop(false);
    }
  }

  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    const availableLangs = ["az", "en"];
    if (availableLangs.includes(pathLang)) {
      setCurrentLang(pathLang);
      localStorage.setItem("tezz", pathLang);
    } else {
      const storedLang = localStorage.getItem("tezz");
      if (storedLang && availableLangs.includes(storedLang)) {
        setCurrentLang(storedLang);
      }
    }
  }, [pathname]);
  const handleLangChange = (newLang) => {
    if (newLang === currentLang) return;
    setCurrentLang(newLang);
    localStorage.setItem("tezz", newLang);
    const currentPathWithoutLang = pathname.startsWith(`/${currentLang}`)
      ? pathname.substring(`/${currentLang}`.length)
      : pathname;
    router.replace(`/${newLang}${currentPathWithoutLang || "/"}`);
  };

  const closeMobileMneu = () => {
    const mobile = mobileMenu?.current?.classList;
    if (mobile.contains("top-0")) {
      mobile?.replace("top-0", "top-[-100%]");
    }
  };

  const openMobileMneu = () => {
    const mobile = mobileMenu?.current?.classList;
    if (mobile.contains("top-[-100%]")) {
      mobile?.replace("top-[-100%]", "top-0");
    }
  };

  const cleanedNumber = settings?.number?.replace(/\D/g, "");
  return (
    <>
      <div
        className={`absolute top-0 transtion1 left-0 right-0 w-full  bg-[#0f1a25]  z-50 ${
          scrolledFromTop ? " py-[0px]" : "py-[8px] md:pb-[11px]"
        }`}
      >
        <MaxWidth customClass="max-w-[1596px] h-full 3xl:px-[60px] xl:px-[30px] lg:px-[20px] md:px-[10px]">
          <div className="flex justify-between items-center md:flex-col">
            <div className="flex gap-[30px] lg:gap-[10px] md:justify-between md:w-full">
              <p className="text-white text-[13px] md:text-[12px]">
                {settings?.description}
              </p>
              <Link
                target="_blank"
                href={`tel:${cleanedNumber}`}
                className="text-white text-[13px] md:text-[12px]"
              >
                {settings?.number}
              </Link>
            </div>

            <div className="flex gap-[30px] lg:gap-[10px] md:gap-[0px] lg:flex-col lg:items-start md:mt-[10px] md:w-full ">
              <Link
                href={`/${params_code}`}
                className="text-white text-[13px] md:text-[12px]"
              >
                {settings?.title}
              </Link>
              <p className="text-white text-[14px] xs:text-[12px] sm:text-center">
                {settings?.adresslang}
              </p>
            </div>
          </div>
        </MaxWidth>
      </div>
      <header
        className={` transtion1 left-0 right-0 w-full h-[105px] z-[999] lg:py-[15px] ${
          scrolledFromTop
            ? "fixed top-[0px]"
            : "absolute top-[35px] lg:top-[65px] md:top-[80px] xs:top-[80px] 2xs:top-[90px]"
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full lg:h-[75px] md:h-[60px] bg-[#0D1C22]/50 backdrop-blur-xl"
          style={{
            clipPath: "polygon(43% -57px, 108% 6px, 84% 359%, -36% 51%)",
          }}
        ></div>

        <div className="relative z-10 h-full lg:h-max">
          <MaxWidth customClass="max-w-[1596px] h-full 3xl:px-[60px] xl:px-[30px] lg:px-[20px] md:px-[10px]">
            <nav className="flex items-center justify-between h-full lg:h-max ">
              <div className="logo ">
                <Link href={`/${currentLang}`}>
                  <Image
                    width={72}
                    height={45}
                    alt="tezzpower-logo"
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${settings?.logo}`}
                    className="lg:max-w-[60px] md:max-w-[40px]"
                  />
                </Link>
              </div>
              <div className="flex flex-1 pl-[120px] xl:pl-[30px] justify-center items-center lg:hidden ">
                <ul className="flex items-center w-full justify-center gap-[32px]">
                  {header_data?.map((item) => (
                    <li
                      key={item?.id}
                      className="text-[#DFDFDF] text-[16px] font-medium w-max"
                    >
                      <Link className="w-max" href={item?.slug_url}>
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end items-center gap-[32px] lg:gap-[20px] md:gap-[10px] m">
                {/* === LANGUAGE SWITCHER START === */}
                <div className="flex items-center gap-4 text-[16px] font-semibold md:mr-[10px]">
                  <span
                    onClick={() => handleLangChange("en")}
                    className={`cursor-pointer hover:text-[#D1F843] transition-all ${
                      currentLang === "en"
                        ? "text-[#D1F843]" // Active style
                        : "text-[#DFDFDF]" // Inactive style
                    }`}
                  >
                    ENG
                  </span>
                  <span className="w-[1px] h-[32px] flex bg-[#243140]"></span>
                  <span
                    onClick={() => handleLangChange("az")}
                    className={`cursor-pointer hover:text-[#D1F843] transition-all ${
                      currentLang === "az"
                        ? "text-[#D1F843]" // Active style
                        : "text-[#DFDFDF]" // Inactive style
                    }`}
                  >
                    AZ
                  </span>
                </div>
                {/* === LANGUAGE SWITCHER END === */}

                <MyButton
                  href={`https://wa.me/${cleanedNumber}`}
                  text={order_now}
                />
                <button
                  onClick={openMobileMneu}
                  className="border-[#D1F843] border text-[#0F1822] hidden lg:flex items-center justify-center text-[20px] p-[10px] rounded-lg font-['TTForsMedium']"
                >
                  <Image
                    width={15}
                    height={15}
                    src={"/imgs/menu.svg"}
                    alt="menu"
                  />
                </button>
              </div>
            </nav>
          </MaxWidth>
        </div>
      </header>

      <MobileHeader
        mobileMenu={mobileMenu}
        closeMobileMneu={closeMobileMneu}
        headerLinks={header_data}
      />
    </>
  );
};

export default Header;
