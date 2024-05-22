import React from "react";
import { values, valuesDescription } from "@/lib/assets/copy";
import { TypographyH2, TypographyP } from "@/components/molecules/typography";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Values = () => {
  return (
    <section className="w-full flex flex-col items-center justify-evenly bg-orange-50 text-green-900 min-h-96">
      <TypographyH2 className="text-green-900">Our values</TypographyH2>
      <TypographyP className="text-center">{valuesDescription}</TypographyP>
      <Tabs
        defaultValue="Ethical Sourcing"
        className="w-full text-green-900 mt-10 flex flex-col self-center items-center"
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
            <TabsContent
              key={value.title}
              value={value.title}
              className="w-full self-center text-center max-w-[600px]"
            >
              <TypographyP className="text-center">
                {value.description}
              </TypographyP>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};
