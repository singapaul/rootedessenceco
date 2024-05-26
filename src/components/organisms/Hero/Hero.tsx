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
import Link from "next/link";
import test from '@/lib/assets/images/landscape.jpg'
export const Hero = () => {
  const CarouselMessages = [
    "Sourcing & supplying Frankincense for all your business needs.",
    "Empowering Communities, Preserving Nature, Ensuring Quality",
    "Ethical Sourcing for a Sustainable Future",
  ];
  const plugin = useRef(Autoplay({ delay: 4000 }));
  return (
    <section className="flex flex-col w-full pt-20">
      <div className="w-full flex flex-col sm:flex-row" id="story">
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
