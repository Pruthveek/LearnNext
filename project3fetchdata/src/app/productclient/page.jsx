'use client'
import Image from "next/image";
import { useState,useEffect } from "react";

export default function ProductClient() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        setProductsData(data.products);
      } catch (err) {
        setError("Failed to fetch products data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchProducts();
  },[]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>  
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productsData.map((product) => (
            <li key={product.id} className="border p-4 rounded-md shadow-md">
              <h1>brand:{product.brand} </h1>
              <h2 className="font-semibold">{product.title}</h2>
              <p>${product.price}</p>
              <Image src={product.images[0]} alt={product.title} width={100} height={100} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}