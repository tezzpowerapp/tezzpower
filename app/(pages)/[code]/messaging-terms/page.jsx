import Footer from "@/app/(components)/Component/Layout/Footer/Footer";
import Header from "@/app/(components)/Component/Layout/Header/Header";
import Main from "@/app/(components)/Component/Main/Main";
import { fetchData, fetchData2 } from "@/app/(components)/fetch/fetch";
import Messaging from "@/app/(components)/Messaging/Messaging";
import ScrollToTop from "@/app/(components)/ScrollToTop/ScrollToTop";

const getData = async (code) => {
  const main = await fetchData(code, "one_page");
  const all = await fetchData(code, "privacy_policy");
  const hiddens = await fetchData2("home_sections");
  const second = all?.privacy_policy_api;

  return { main, second, hiddens };
};

export async function generateMetadata({ params }) {
  try {
    const { code } = await params;
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
        url: `${baseUrl}/${code}`,
        siteName: `${baseUrl}/${code}`,
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
  const { code } = await params;
  const { main, second, hiddens } = await getData(code);
  return (
    <>
      <Header
        params_code={code}
        header_data={main?.navigation_menu}
        settings={main?.settings}
        order_now={main?.translations?.order_now}
        hiddens={hiddens}
      />

      <Main isTrue={true}>
        <Messaging data={second} />
        <Footer
          settings={main?.settings}
          params_code={code}
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
