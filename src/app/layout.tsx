import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rooted Essence Co. Somalian frankincense supplier",
  description: "Business to business frankincense products supplier",
  icons: {
    icon: "/favicon.ico",
    apple: '/apple-touch-icon.png',
  },
  keywords: "natural perfumes, organic beauty products, eco-friendly skincare, Rooted Essence Co. Somalian frankincense",
  openGraph: {
    title: "Rooted Essence Co.",
    description: "Business to business frankincense products supplier",
    url: "https://www.rootedessenceco.com",  
    type: "website",
    images: [
      {
        url: "/path-to-your-image.jpg", // Replace with the path to your image
        width: 800,
        height: 600,
        alt: "Rooted Essence Co.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
