import React from "react";
import { values, valuesDescription } from "@/lib/assets/copy";
import { TypographyH2, TypographyP } from "@/components/molecules/typography";
import Women from "@/lib/assets/images/women.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export const Values = () => {
  return (
    <section className="w-full flex flex-col items-center bg-orange-50 text-green-900">
      <TypographyH2 className="text-green-900">Our values</TypographyH2>
      <TypographyP className="text-center">{valuesDescription}</TypographyP>
      <Tabs
        defaultValue="Ethical Sourcing"
        className="w-full text-green-900 mt-10"
      >
        <TabsList className="flex flex-wrap min-h-40 sm:min-h-6 bg-inherit text-inherit">
          {values.map((value, index) => {
            return (
              <TabsTrigger key={index} value={value.title}>
                {value.title}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {values.map((value) => {
          return (
            <TabsContent key={value.title} value={value.title}>
              <TypographyP>{value.description}</TypographyP>
            </TabsContent>
          );
        })}
      </Tabs>
      <div className="w-full max-h-[500px]">
        <Image src={Women} alt="women" className="object-scale-down w-full" />
      </div>
    </section>
  );
};
