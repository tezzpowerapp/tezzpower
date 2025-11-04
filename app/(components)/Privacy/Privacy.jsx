import MaxWidth from "../Component/MaxWidth/MaxWidth";

const Privacy = ({ data }) => {
  return (
    <>
      <section className="mt-[200px] mb-[100px] ">
        <MaxWidth customClass="max-w-[1596px] bg-[#EFEFEF] rounded-[12px] py-[20px] lg:py-[20px] px-[40px]">
          <div className=" ">
            <h2 className="text-[30px] md:text-[20px] font-['TTForsBold'] mb-[20px]">
              {data?.[0]?.page_title_terms}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data?.[0]?.page_content_terms}`,
              }}
            />
          </div>
        </MaxWidth>
      </section>
    </>
  );
};

export default Privacy;
