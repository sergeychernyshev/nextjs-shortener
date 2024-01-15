import urls from "@/urls";

export async function getURL(slug: string) {
  const url = urls.get(slug) || null;

  return url;
}
