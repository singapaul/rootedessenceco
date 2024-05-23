"use client";
import {
  TypographyH1,
  TypographyH4,
  amatic,
} from "@/components/molecules/typography";
import Image from "next/image";
import rainforest from "@/lib/assets/images/rainforrest.png";
import Autoplay from "embla-carousel-autoplay";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";

export const Hero = () => {
  const CarouselMessages = [
    "Empowering Communities, Preserving Nature, Ensuring Quality",
    "Ethical Sourcing for a Sustainable Future",
    "Pure Frankincense, Authentic Origins, Lasting Impact",
    "Integrity in Every Drop, Dignity in Every Step",
    "Supporting Women, Sustaining Ecosystems, Serving Excellence",
  ];
  const plugin = useRef(Autoplay({ delay: 4000 }));
  return (
    <section className="flex flex-col w-full pt-20">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col min-h-60 sm:min-h-[600px] sm:flex-row-reverse sm:justify-between justify-center gap-9 sm:gap-0 bg-green-900">
          <TypographyH1 className="text-lime-300 text-right sm:self-end leading-normal text-[60px]">
            {"Rooted Essence Co."}
          </TypographyH1>
          <TypographyH4 className="text-lime-300 text-left self-center text-[50px] leading-normal">
            Sourcing & supplying Frankincense for all your customers needs.
          </TypographyH4>
        </div>
        <span className="display flex bg-green-900 text-lime-300 min-h-28 items-end w-full">
          <TypographyH4 className="text-3xl">Scroll down</TypographyH4>
          <ArrowDown className="animate-bounce" />
        </span>
      </div>
      <div className="w-full flex flex-col sm:flex-row">
        <div className="w-full">
          <Image
            src={rainforest}
            alt="rainforest stock image"
            className="object-cover max-h-96"
          />
        </div>
        <div className="w-full bg-lime-300 flex items-center min-h-52">
          <Carousel
            plugins={[plugin.current]}
            orientation="vertical"
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="h-[200px]">
              {CarouselMessages.map((message, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-lime-300">
                      <span
                        className={`text-4xl font-semibold ${amatic.className}`}
                      >
                        {message}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
