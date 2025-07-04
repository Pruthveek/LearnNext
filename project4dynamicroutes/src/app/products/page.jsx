import ProductCard from "../components/ProductCard";
import MoreInfoButton from "../components/MoreInfoButton";
async function getProducts() {
  const request = await fetch(
    "https://dummyjson.com/products?&select=title,description,price,rating,images"
  );
  const data = await request.json();
  // console.log(data);
  return data;
}

export default async function Products() {
  const productData = await getProducts();
  // console.log(productData);
  return (
    <div className="px-4 py-8">
      <h1>PRODUCTS</h1>
      {console.log("length of data" + productData.products.length)}
      {productData.products.length == 0 && <h1>No product found</h1>}
      {productData.products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.products.map((product) => (
            <div key={product.id} className="space-y-2">
              <ProductCard
                title={product.title}
                description={product.description} // fixed spelling
                price={product.price}
                rating={product.rating}
                images={product.images[0]}
              />
              <MoreInfoButton id={product.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
