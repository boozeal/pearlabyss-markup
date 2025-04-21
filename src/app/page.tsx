import { redirect } from "next/navigation";

import { fallbackLng, languages } from "@/i18n/settings";

export default async function Page({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  redirect(`/${lng}/main`);
}
