import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Photaland",
    template: "%s | Photaland",
  },
  description:
    "Discover Photaland Store – your one-stop shop for premium photo products and accessories. From custom photo books and wall art to frames, albums, and camera essentials, we provide high-quality items to preserve and showcase your memories beautifully.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
