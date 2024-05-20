import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TypographyH2 } from "@/components/molecules/typography";
import Image from "next/image";
import {
  Boswellia_Carterii_Essential_Oil,
  Boswellia_Carterii_Resin,
  Boswellia_Frereana_Essential_Oil,
  Boswellia_Frereana_Resin,
  Myrrh_Essential_Oil,
  Myrrh_Resin,
} from "@/lib/assets/images/products/productImages";

type Props = {};

export const Products = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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

  return (
    <section className="w-full flex overflow-x-scroll">
      {productsArray.map((product, index) => {
        return (
          <Card key={index}>
            <CardHeader>{product.name}</CardHeader>
            <CardContent>
              <Image src={product.image} alt={product.name} />
            </CardContent>
            <CardDescription>{product.name}</CardDescription>
          </Card>
        );
      })}
    </section>
  );
};
