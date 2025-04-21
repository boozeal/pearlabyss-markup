import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { languages } from "@/i18n/settings";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "펄어비스 마크업 페이지",
  description: "Pearl Abyss Markup",
  icons: {
    icon: "/favicon32.ico",
  },
};

export const generateStaticParams = async () => {
  return languages.map((lng: string) => ({ lng }));
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  return (
    <html lang={lng}>
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
