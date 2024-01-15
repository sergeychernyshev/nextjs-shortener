import { kv } from "@vercel/kv";

export async function getURL(slug: string) {
  const url: string | null = await kv.get(slug);

  return url;
}
