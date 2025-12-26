// import NotFound from "@/app/(components)/NotFound/NotFound"; // Buna gerek yok
import { redirect, notFound } from "next/navigation"; // notFound fonksiyonunu kullan

export default async function page({ params }) {
  // Next.js 15 kullanıyorsan params await edilmeli, doğru yapmışsın.
  const { slug } = await params;

  let data;

  try {
    const res = await fetch(`https://api.tezz.az/api/qr-links/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      // API hata verirse direkt 404 sayfasına at
      notFound();
    }

    data = await res.json();
  } catch (error) {
    console.error("Error:", error);
    // Fetch hatası olursa 404 ver
    notFound();
  }

  // Veri geldi ve target_url varsa yönlendir
  if (data?.target_url) {
    redirect(data.target_url);
  } else {
    // Veri geldi ama url yoksa 404
    notFound();
  }
}
