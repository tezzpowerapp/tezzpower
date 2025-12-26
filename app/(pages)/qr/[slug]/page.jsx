import { redirect, notFound } from "next/navigation";
export default async function page({ params }) {
  const { slug } = await params;
  let data;
  try {
    const res = await fetch(`https://api.tezz.az/api/qr-links/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      notFound();
    }
    data = await res.json();
  } catch (error) {
    console.error("Error:", error);
    notFound();
  }
  if (data?.target_url) {
    redirect(data.target_url);
  } else {
    notFound();
  }
}
