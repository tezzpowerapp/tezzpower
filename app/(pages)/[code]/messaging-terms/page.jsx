import Footer from "@/app/(components)/Component/Layout/Footer/Footer";
import Header from "@/app/(components)/Component/Layout/Header/Header";
import Main from "@/app/(components)/Component/Main/Main";
import { fetchData } from "@/app/(components)/fetch/fetch";
import Messaging from "@/app/(components)/Messaging/Messaging";
import ScrollToTop from "@/app/(components)/ScrollToTop/ScrollToTop";

const getData = async (params) => {
  const main = await fetchData(params?.code, "one_page");
  const all = await fetchData(params?.code, "privacy_policy");
  const second = all?.privacy_policy_api;

  return { main, second };
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
  const { main, second } = await getData(params);
  return (
    <>
      <Header
        params_code={params?.code}
        header_data={main?.navigation_menu}
        settings={main?.settings}
        order_now={main?.translations?.order_now}
      />

      <Main isTrue={true}>
        <Messaging data={second} />
        <Footer
          settings={main?.settings}
          params_code={params?.code}
          header_data={main?.navigation_menu}
          text1={main?.translations?.privacy_policy}
          text2={main?.translations?.terms_and_conditions}
          text3={main?.translations?.messaging_terms}
          desig_and_spirit={main?.translations?.desig_and_spirit}
          phone={main?.translations?.phone}
          email={main?.translations?.email}
          order_now={main?.translations?.order_now}
          contact_text={main?.translations?.contact_text}
        />
      </Main>
      <ScrollToTop />
    </>
  );
}
