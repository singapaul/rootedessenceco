"use client";

import { NavBar } from "@/components/organisms/NavBar";
import { Hero } from "@/components/organisms/Hero";
import { Story } from "@/components/organisms/Story";
import { Values } from "@/components/organisms/Values";
import { Products } from "@/components/organisms/Products";
import { LinkBanner } from "@/components/organisms/LinkBanner";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";
import RainForest from "@/lib/assets/images/stockFrankTable.png";
import Image from "next/image";

import FAQ from "@/components/organisms/FAQ/FAQ";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <Hero />
      <Story />
      <Values />
      <LinkBanner title="Products" />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
