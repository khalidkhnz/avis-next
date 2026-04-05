import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Avis Media | Digital PR & Video Licensing Agency",
  description:
    "Avis Media is a premier digital PR and video licensing agency. We specialize in video licensing & monetization, strategic digital PR, content protection, and brand growth — empowering creators, broadcasters, and brands worldwide.",
  keywords: [
    "Avis Media",
    "digital PR",
    "video licensing",
    "content protection",
    "brand growth",
    "media distribution",
    "video monetization",
  ],
  authors: [{ name: "Avis Media" }],
  openGraph: {
    title: "Avis Media | Digital PR & Video Licensing Agency",
    description:
      "Premier digital PR and video licensing agency bridging high-impact content with global reach.",
    siteName: "Avis Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis Media | Digital PR & Video Licensing Agency",
    description:
      "Premier digital PR and video licensing agency bridging high-impact content with global reach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
