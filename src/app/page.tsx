"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavBar } from "@/components/organisms/NavBar";
import { Hero } from "@/components/organisms/Hero";
import { Story } from "@/components/organisms/Story";
import { Values } from "@/components/organisms/Values";
import { Products } from "@/components/organisms/Products";
import { TypographyH2 } from "@/components/molecules/typography";
import { LinkBanner } from "@/components/organisms/LinkBanner";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <NavBar />
      <Hero title="Hi" />
      <Story />
      <Values />
      <LinkBanner title="Products" />
      <Products />
      <Contact />
      <Footer />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
