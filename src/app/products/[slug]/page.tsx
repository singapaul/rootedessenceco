import { productsArray } from '@/lib/assets/copy/products';
 

async function getProduct(slug: any) {
    console.log(slug)
  return productsArray.find((product) => product.slug === slug);
}

export async function generateStaticParams() {
    // console.log(productsArray)
  return productsArray.map((product) => ({
    slug: product.slug,
  }));
}

const ProductDetail = async ({ params }: { params : any }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
 
    </div>
  );
};

export default ProductDetail;
