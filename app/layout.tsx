import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nazarethtravelgroup.com"
  ),
  title: {
    default: "Nazareth Travel Group — Holy Land Pilgrimages from Africa",
    template: "%s | Nazareth Travel Group",
  },
  description:
    "Africa's leading Christian pilgrimage company. Walk where Jesus walked — Holy Land, Rome, Egypt & more. Serving Kenyan churches since 2013.",
  keywords: [
    "Holy Land pilgrimage Kenya",
    "Christian pilgrimage Africa",
    "Jerusalem tour Kenya",
    "church pilgrimage Nairobi",
    "Israel tour package",
    "Nazareth Travel Group",
  ],
  icons: {
    icon: "/brand/logo-mark.svg",
    apple: "/brand/logo-mark.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Nazareth Travel Group",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
