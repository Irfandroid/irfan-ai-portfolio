import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400" });

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://irfandroid.vercel.app");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.name} — AI Engineer | RAG & LLM Applications`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: { title: site.name, description: site.description, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
