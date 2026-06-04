import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "BrightNest Realty | Homes, Apartments, Land & Commercial Spaces",
    template: "%s | BrightNest Realty",
  },
  description:
    "BrightNest Realty helps buyers, renters and property owners discover homes, apartments, villas, land and commercial spaces across Dar es Salaam and nearby growing areas.",
  keywords: [
    "BrightNest Realty",
    "real estate Tanzania",
    "Dar es Salaam properties",
    "houses for sale",
    "apartments for rent",
    "land for sale",
    "commercial spaces",
    "property listings",
  ],
  authors: [{ name: "BrightNest Realty" }],
  creator: "BrightNest Realty",
  openGraph: {
    title: "BrightNest Realty | Find Properties in Tanzania",
    description:
      "Browse homes, apartments, villas, land and commercial spaces for sale or rent across Dar es Salaam and nearby areas.",
    url: "https://brightnest-realty.vercel.app",
    siteName: "BrightNest Realty",
    images: [
      {
        url: "/images/hero-real-estate.png",
        width: 1200,
        height: 630,
        alt: "BrightNest Realty property search website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
