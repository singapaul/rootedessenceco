"use client"
import { NavBar } from "@/components/organisms/NavBar";
import { Hero } from "@/components/organisms/Hero";
import { Story } from "@/components/organisms/Story";
import { Values } from "@/components/organisms/Values";
import { Products } from "@/components/organisms/Products";
import { LinkBanner } from "@/components/organisms/LinkBanner";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";
import { MovingBanner } from "@/components/molecules/MovingBanner";
import { LogoBanner } from "@/components/organisms/LogoBanner";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <Hero />
      <LogoBanner />
      <Story />
      <Values />
      <MovingBanner imageURL="/landscape.jpg" />
      <LinkBanner title="Products" />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
