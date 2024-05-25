import React from "react";
import Image from "next/image";
import { productsArray } from "@/lib/assets/copy/products";
import { TypographyH3 } from "@/components/molecules/typography";
import Link from "next/link";

export const Products = () => {
  return (
    <section className="relative w-full flex flex-col bg-lime-300 border-black border-t-2 border-b-2">
      <div className="relative w-full flex overflow-x-scroll z-10 scrollbar-thin">
        {productsArray.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-orange-50 shadow-lg m-2 p-4 rounded-lg"
            >
              <TypographyH3 className="mb-2 text-3xl">
                {product.name}
              </TypographyH3>
              <div className="w-[300px] mb-4">
                <Link href={`/products/${product.slug}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
