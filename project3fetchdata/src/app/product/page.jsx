async function fetchProductData() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        } 
        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error("Failed to fetch product data:", error);
        return [];
    }
    
}
import Image from "next/image";                             
import AddToCartButton from "./addtocart";
export default async function Product() { 
    const products = await fetchProductData();
    console.log(products);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>  
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products .map((product) => (
            <li key={product.id} className="border p-4 rounded-md shadow-md">
              <h1>brand:{product.brand} </h1>
              <h2 className="font-semibold">{product.title}</h2>
              <p>${product.price}</p>
              <Image src={product.images[0]} alt={product.title} width={100} height={100} />
              <AddToCartButton product={product} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}