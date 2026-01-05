import type {Metadata} from "next";
import {Geist, Geist_Mono, Rubik} from "next/font/google";
import "./globals.css";
import BGGradient from "@/components/background/bg";
import {HeroHeader} from "@/components/home-page/header";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const rubik = Rubik({
  variable: "--font-shadow",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

const metadata: Metadata = {
  title: "Mrityunjay Tiwari",
  description: "This is the portfolio of Mrityunjay Tiwari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <BGGradient>
          <HeroHeader />
          {children}
        </BGGradient>
      </body>
    </html>
  );
}
