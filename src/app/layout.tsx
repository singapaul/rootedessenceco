import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rooted Essence Co | Sustainable and Ethical Frankincense",
  description: "Business to business sustainable frankincense products supplier",
  icons: {
    icon: "/favicon.ico",
    apple: '/apple-touch-icon.png',
  },
  keywords: "Somaliland, Frankincense, Myrrh, Essential oils, Ethical sourcing, Sustainability, Aromatherapy, Natural products, Skincare, Women-led cooperative, Perfumery, Organic",
  openGraph: {
    title: "Rooted Essence Co | Sustainable and Ethical Frankincense",
    description: "Business to business sustainable frankincense products supplier",
    url: "https://www.rootedessenceco.com",  
    type: "website",
    images: [
      {
        url: "/logo-med.png",
        width: 800,
        height: 600,
        alt: "Rooted Essence Co.",
      },
    ],
  },
  twitter:{
    card: "summary",
    title: "Rooted Essence Co | Sustainable and Ethical Frankincense",
    description: "Business to business sustainable frankincense products supplier",
    images: [{
      url: "/logo-med.png",
      width: 800,
      height: 800,
      alt: "Rooted Essence Co.",
    }]
  }
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
