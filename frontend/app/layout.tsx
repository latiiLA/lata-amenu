import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Seat — Lata Amenu",
  description:
    "The Seat: a chronicle starring Lata Amenu, The Seatkeeper — full-stack engineer raising systems in Go, React, and Next.js. Join the season.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="font-body flex min-h-full flex-col bg-[var(--stone)] text-[var(--parchment)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
