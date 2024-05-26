"use client"
import { Footer } from "@/components/organisms/Footer";
import { NavBar } from "@/components/organisms/NavBar";
import { ProductCard } from "@/components/organisms/Products";
import { productsArray } from "@/lib/assets/copy/products";
import { ProductGrid } from "@/components/organisms/Products/ProductGrid";
import { ParallaxBanner } from "react-scroll-parallax";
import { NextPage } from "next";
import { TypographyH1 } from "@/components/molecules/typography";


 const Page: NextPage= () => {
  return (
    <main className="flex justify-between min-h-screen flex-col items-center">
      <NavBar />
      <ProductGrid>
        {productsArray.map((product, index) => {
          return (
            <ProductCard
              key={index}
              title={product.name}
              subtitle={product.subtitle}
              image={product.image}
              slug={product.slug}
            />
          );
        })}
      </ProductGrid>
      <Footer />
    </main>
  )  
} 

export default Page;