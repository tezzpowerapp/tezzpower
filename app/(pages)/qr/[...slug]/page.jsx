import NotFound from "@/app/(components)/NotFound/NotFound";
import { redirect, notFound } from "next/navigation";

export default async function page({ params }) {
  let data;
  let url = params?.slug?.[0];
  try {
    const res = await fetch(`https://api.tezz.az/api/qr-links/${url}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      NotFound();
    }

    data = await res.json();
  } catch (error) {
    console.error("Error:", error);
    NotFound();
  }

  if (data?.target_url) {
    redirect(data.target_url);
  } else {
    notFound();
  }
}
