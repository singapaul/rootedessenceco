import React from "react";
import { TypographyH3, TypographyP } from "@/components/molecules/typography";
import { OurStory } from "@/lib/assets/copy";
import Image from "next/image";
import Table from "@/lib/assets/images/stockFrankTable.png";
export const Story = () => {
  return (
    <section className="flex flex-col sm:flex-row bg-green-900 text-white w-full items-center sm:text-center">
      <div className="px-4 py-4 h-full flex flex-col self-center w-full sm:w-2/3">
        <TypographyH3 className="text-4xl font-semibold text-lime-300">
          Our Story
        </TypographyH3>
        <TypographyP>{OurStory}</TypographyP>
      </div>
      <div className="w-full sm:w-1/3 aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          src={Table}
          alt="stock image"
          className="object-cover object-center w-full h-full max-h-96"
        />
      </div>
    </section>
  );
};
