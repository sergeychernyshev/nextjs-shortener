import { redirect } from "next/navigation";

export default async function Shortener({
  params,
}: {
  params: { slug: string };
}) {
  const url = "https://www.chernygoods.com/";

  redirect(url);
}
