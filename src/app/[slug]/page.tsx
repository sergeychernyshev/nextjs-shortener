import { getURL, getStaticParamsConfig } from "@/lib/shortener";
import { redirect } from "next/navigation";

export default async function Shortener({
  params,
}: {
  params: { slug: string };
}) {
  const url: URL | null = await getURL(params.slug);

  // in case shortened URL is not found, redirect to default URL
  if (!url) {
    const default_url = process.env.DEFAULT_REDIRECT_URL;

    if (default_url === undefined) {
      throw new Error(
        "DEFAULT_REDIRECT_URL environment variable is not defined"
      );
    }

    redirect(default_url);
  }

  redirect(url.toString());
}

export const generateStaticParams = getStaticParamsConfig;
