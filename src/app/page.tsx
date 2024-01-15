import { redirect } from "next/navigation";

export default function Home() {
  const url = process.env.DEFAULT_REDIRECT_URL;

  if (!url) {
    throw new Error("DEFAULT_REDIRECT_URL environment variable is not defined");
  }

  redirect(url);
}
