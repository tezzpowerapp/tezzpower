import MaxWidth from "../../MaxWidth/MaxWidth";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = ({
  params_code,
  header_data,
  settings,
  text1,
  text2,
  desig_and_spirit,
  phone,
  contact_text,
  email,
  order_now,
  text3,
}) => {
  const cleanedNumber = settings?.number?.replace(/\D/g, "");

  return (
    <footer
      id="bizimleelaqe"
      className="mb-[87px] md:mb-[30px] relative 3xl:px-[70px] 1xl:px-[50px] lg:px-[30px] md:px-[10px]"
    >
      <MaxWidth customClass="max-w-[1596px]">
        <div className="footer_card1">
          <div className="footer_card2 ">
            <div className="flex justify-between lg:flex-col w-full py-[50px] lg:py-[40px] px-[120px] 1xl:px-[60px] xl:px-[20px] h-full">
              <div className="flex-0 lg:flex lg:items-center lg:justify-between lg:pb-[20px]  ">
                <Link href={`/${params_code}`}>
                  <Image
                    width={152}
                    height={95}
                    alt="footer_logo"
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${settings?.logo}`}
                    className="max-w-[100px] md:max-w-[70px]"
                  />
                </Link>
                <div className="hidden lg:flex">
                  <Link
                    target="_blank"
                    href={`https://wa.me/${cleanedNumber}`}
                    className={`bg-[#D1F843] font-['TTForsMedium'] rounded-[10px] lg:w-max text-[#0F1822] text-[16px]  px-[36px] xl:px-[20px] py-[12px] md:py-[6px] flex h-max`}
                  >
                    {order_now}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] flex-1 pl-[120px] 1xl:pl-[60px] lg:pl-0 lg:mt-[30px]">
                <ul className="flex gap-[16px] items-center lg:justify-center lg:grid lg:grid-cols-12 mobile_footer_ul">
                  {header_data?.map((cur, i) => (
                    <li
                      key={i}
                      className="text-[#fff] lg:col-span-4 border-r lg:w-full border-[#243140] text-[16px] xl:text-[14px] pr-[15px]"
                    >
                      <Link
                        href={`${cur?.slug_url}`}
                        className="lg:w-max lg:flex"
                      >
                        {cur?.name}
                      </Link>
                    </li>
                  ))}
                  <li className="text-[#fff] hidden lg:flex lg:col-span-6 border-r border-[#243140] text-[16px] xl:text-[14px] ">
                    <Link href={`/${params_code}/privacy-policy`}>{text1}</Link>
                  </li>
                  <li className="text-[#fff] hidden lg:flex lg:col-span-6 text-[16px] xl:text-[14px] ">
                    <Link href={`/${params_code}/messaging-terms`}>
                      {text3}
                    </Link>
                  </li>
                </ul>
                <ul className="flex lg:hidden gap-[20px]">
                  <li className="text-[#fff]   text-[16px] xl:text-[14px] pr-[15px]">
                    <Link href={`/${params_code}/privacy-policy`}>{text1}</Link>
                  </li>
                  <li className="text-[#fff] text-[16px] xl:text-[14px] pr-[15px]">
                    <Link href={`/${params_code}/messaging-terms`}>
                      {text3}
                    </Link>
                  </li>
                </ul>
                <ul className="mt-[40px] lg:mt-[20px]">
                  <ul className="flex gap-[80px] lg:gap-[20px]   ">
                    <li className="flex flex-col gap-[10px]">
                      <h2 className="text-[#fff] text-[16px] font-['TTForsBold']">
                        {phone}
                      </h2>
                      <a
                        href={`tel:${cleanedNumber}`}
                        className="text-[#D1F843] font-['TTForsMedium'] text-[16px]"
                      >
                        {settings?.number}
                      </a>
                    </li>
                    <li className="flex flex-col gap-[10px]">
                      <h2 className="text-[#fff] text-[16px] font-['TTForsBold']">
                        {email}
                      </h2>
                      <a
                        href={`mailto:${settings?.email}`}
                        className="text-[#D1F843] font-['TTForsMedium'] text-[16px]"
                      >
                        {settings?.email}
                      </a>
                    </li>
                  </ul>
                </ul>
                <ul className="flex justify-between items-center mt-[20px]  w-full lg:hidden">
                  <h2 className="font-['TTForsMedium'] text-[12px] text-white ">
                    {desig_and_spirit}
                  </h2>
                </ul>
              </div>
              <div className="flex justify-between flex-col   lg:mt-[10px]">
                <div className="lg:hidden">
                  <Link
                    target="_blank"
                    href={`https://wa.me/${cleanedNumber}`}
                    className={`bg-[#D1F843] font-['TTForsMedium'] rounded-[10px] lg:w-max text-[#0F1822] text-[16px] px-[36px] xl:px-[20px] py-[12px] flex h-max`}
                  >
                    {order_now}
                  </Link>
                </div>

                <ul className="flex items-end justify-end lg:justify-start gap-[16px] h-full text-white text-[20px] lg:my-[30px]">
                  <li>
                    <Link href={`${settings?.facebook}`}>
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href={`${settings?.instagram}`}>
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href={`${settings?.telegram}`}>
                      <FaTiktok />
                    </Link>
                  </li>
                </ul>
                <h2 className="font-['TTForsMedium'] text-[12px] text-white hidden lg:flex ">
                  {desig_and_spirit}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
