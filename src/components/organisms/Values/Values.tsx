import React from "react";
import { values, valuesDescription } from "@/lib/assets/copy";
import { TypographyH2, TypographyP } from "@/components/molecules/typography";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Values = () => {
  return (
    <section className="w-full flex flex-col items-center bg-orange-50 text-green-900">
      <TypographyH2 className="text-green-900">Our values</TypographyH2>
      <TypographyP>{valuesDescription}</TypographyP>
      <Tabs defaultValue="Ethical Sourcing" className="w-full text-green-900 mt-10">
        <TabsList className="flex flex-wrap min-h-40 sm:min-h-6 bg-inherit text-inherit">
          {values.map((value) => {
            return (
              <TabsTrigger key={value} value={value.title}>
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

      {/* <div className='flex flex-col sm:flex-row'>
        {values.map(({description, title}, index) => {
            return (
                <ValueCard key={index} description={description} title={title} />
            )
        })}
        </div> */}
    </section>
  );
};
