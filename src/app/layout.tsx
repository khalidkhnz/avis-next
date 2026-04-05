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
  metadataBase: new URL("https://avismedia.com"),
  title: {
    default: "Avis Media | Digital PR & Video Licensing Agency",
    template: "%s | Avis Media",
  },
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
    "video rights management",
    "media agency",
  ],
  authors: [{ name: "Avis Media", url: "https://avismedia.com" }],
  creator: "Avis Media",
  publisher: "Avis Media",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "Avis Media | Digital PR & Video Licensing Agency",
    description:
      "Premier digital PR and video licensing agency bridging high-impact content with global reach.",
    siteName: "Avis Media",
    type: "website",
    locale: "en_US",
    url: "https://avismedia.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis Media | Digital PR & Video Licensing Agency",
    description:
      "Premier digital PR and video licensing agency bridging high-impact content with global reach.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
