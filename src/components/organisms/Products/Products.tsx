import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Boswellia_Carterii_Essential_Oil,
  Boswellia_Carterii_Resin,
  Boswellia_Frereana_Essential_Oil,
  Boswellia_Frereana_Resin,
  Myrrh_Essential_Oil,
  Myrrh_Resin,
} from "@/lib/assets/images/products/productImages";
import Landscape from "@/lib/assets/images/landscape.jpg";
import { TypographyH3, TypographyP } from "@/components/molecules/typography";

export const Products = () => {
  const productsArray = [
    {
      image: Boswellia_Carterii_Essential_Oil,
      name: "Boswellia Carterii Essential Oil",
    },
    { image: Boswellia_Carterii_Resin, name: "Boswellia Carterii Resin" },
    {
      image: Boswellia_Frereana_Essential_Oil,
      name: "Boswellia Frereana Essential Oil",
    },
    { image: Boswellia_Frereana_Resin, name: "Boswellia Frereana Resin" },
    { image: Myrrh_Essential_Oil, name: "Myrrh Essential Oil" },
    { image: Myrrh_Resin, name: "Myrrh Resin" },
  ];

  // @todo add parallax to this part later.
  return (
    <section className="relative w-full flex flex-col bg-lime-300">
 
      <div className="relative w-full flex overflow-x-scroll z-10">
        {productsArray.map((product, index) => {
          return (
            <div key={index} className="bg-orange-50 shadow-lg m-2 p-4 rounded-lg">
            <TypographyH3 className="mb-2">{product.name}</TypographyH3>
            <div className="h-[300px] mb-4">
              <Image src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};
