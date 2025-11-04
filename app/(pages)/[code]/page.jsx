import Footer from "@/app/(components)/Component/Layout/Footer/Footer";
import Header from "@/app/(components)/Component/Layout/Header/Header";
import Home from "@/app/(components)/Home/Home";
import Linear from "@/app/(components)/Component/Linear/Linear";
import Main from "@/app/(components)/Component/Main/Main";
import { fetchData } from "@/app/(components)/fetch/fetch";
import ScrollToTop from "@/app/(components)/ScrollToTop/ScrollToTop";

const getData = async (params) => {
  const main = await fetchData(params?.code, "one_page");

  return { main };
};

export async function generateMetadata({ params }) {
  try {
    const { main } = await getData(params);

    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
    const logoUrl = `${pictureBaseUrl}/${main?.settings?.logo}`;
    const faviconUrl = `${pictureBaseUrl}/${main?.settings?.favicon}`;

    return {
      title: `${main?.settings?.title} - ${main?.settings?.home_page}`,
      description: main?.settings?.description,
      keywords: main?.settings?.keywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${main?.settings?.title} - ${main?.settings?.home_page}`,
        description: main?.settings?.description,
        keywords: main?.settings?.keywords,
        url: `${baseUrl}/${params?.code}`,
        siteName: `${baseUrl}/${params?.code}`,
        type: "website",
        image: logoUrl,
        images: [
          {
            url: logoUrl,
            secure_url: logoUrl,
            width: 100,
            height: 60,
            type: "image/png",
            alt: main?.settings?.title,
          },
        ],
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}

export default async function page({ params }) {
  const { main } = await getData(params);
  return (
    <>
      <Header
        params_code={params?.code}
        header_data={main?.navigation_menu}
        settings={main?.settings}
        order_now={main?.translations?.order_now}
      />
      <Linear
        customClass="top-0 left-[-120px] w-full h-full z-30"
        img2={true}
      />
      <Main isTrue={true}>
        <Home main={main} order_now={main?.translations?.order_now} />
        <Footer
          settings={main?.settings}
          params_code={params?.code}
          header_data={main?.navigation_menu}
          text1={main?.translations?.privacy_policy}
          text2={main?.translations?.terms_and_conditions}
          desig_and_spirit={main?.translations?.desig_and_spirit}
          phone={main?.translations?.phone}
          email={main?.translations?.email}
          text3={main?.translations?.messaging_terms}
          order_now={main?.translations?.order_now}
          contact_text={main?.translations?.contact_text}
        />
      </Main>
      <ScrollToTop />
    </>
  );
}
