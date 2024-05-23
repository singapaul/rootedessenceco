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
      <ParallaxBanner
        layers={[
          { image: "/earth.jpg", speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <TypographyH1 className="text-8xl sm:text-9xl font-extrabold text-white text-outline-black">Our product range</TypographyH1>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1] min-h-[400px]"
      />
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