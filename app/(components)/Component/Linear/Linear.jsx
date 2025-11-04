import Image from "next/image";

const Linear = ({
  customClass = "",
  img2 = false,
  img = "/site/linear_xett.svg",
}) => {
  return (
    <div className={`${customClass} absolute`}>
      <Image width={300} height={300} alt="linear" src={img} className="" />
      {img2 === true && (
        <Image
          width={120}
          height={500}
          alt="linear"
          src={"/site/linear_pic.svg"}
          className="absolute top-0 left-[-240px] w-[600px] h-[600px] "
        />
      )}
    </div>
  );
};

export default Linear;
