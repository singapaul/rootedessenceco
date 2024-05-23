import { productsArray } from "@/lib/assets/copy/products";
import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { Send } from "lucide-react"; 
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/molecules/typography";
async function getProduct(slug: any) {
  return productsArray.find((product) => product.slug === slug);
}

export async function generateStaticParams() {
  return productsArray.map((product) => ({
    slug: product.slug,
  }));
}

const ProductDetail = async ({ params }: { params: any }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, name, points, slug, subtitle } = product;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <div className="flex flex-col flex-grow md:flex-row items-center bg-white p-4 mt-24">
        {/* Product Description */}
        <div className="flex flex-col gap-2 p-4 md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <TypographyH2 className="text-5xl font-bold mb-2">{name}</TypographyH2>
          <ul className="list-disc text-left">
            {
              points.map((point, index) => {
                return (
                  <li key={index}>{point}</li>
                )
              }) 
            }
            </ul>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-9">
          <Image
            src={image}
            alt="Product"
            className="w-64 h-auto rounded-lg shadow-md border-4 border-green-900"
          />
        <Button className="w-36 bg-green-900 p-8">Enquire <Send className="ml-2" /></Button>
        </div>
      </div>
      <Footer />
    </main>
 
  );
};

export default ProductDetail;
