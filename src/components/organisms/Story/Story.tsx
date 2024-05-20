import React from "react";
import { TypographyH3, TypographyP } from "@/components/molecules/typography";
import { OurStory } from "@/lib/assets/copy";
import Image from "next/image";
import Table from "@/lib/assets/images/stockFrankTable.png";
export const Story = () => {
  return (
    <section className="flex flex-col sm:flex-row bg-green-900 text-white w-full items-center sm:text-center text-justify">
      <div className="px-5 h-full flex flex-col self-center w-full sm:w-1/2">
        <TypographyH3 className="text-4xl font-semibold text-lime-300">
          Our Story
        </TypographyH3>
        <TypographyP>{OurStory}</TypographyP>
      </div>
      <div className="w-full sm:w-1/2 max-h-96 overflow-hidden">
        <Image
          src={Table}
          alt="stock image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

 
