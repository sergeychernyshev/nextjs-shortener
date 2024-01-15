import { getURL } from "@/lib/shortener";

export default async function Shortener({
  params,
}: {
  params: { slug: string };
}) {
  const url: string | null = await getURL(params.slug);

  if (!url) {
    return (
      <>
        <h1>404 - Short URL Not Found</h1>
        <p>Slug: {params.slug}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Short URL Information</h1>
        <p>Slug: {params.slug}</p>
        <p>
          URL: <a href={url}>{url}</a>
        </p>
      </>
    );
  }
}
