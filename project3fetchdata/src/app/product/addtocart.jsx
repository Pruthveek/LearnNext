"use client";
export default function AddToCartButton({ product }) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => {
            console.log(`Added ${product.title} to cart`);}}>
            Add to Cart
        </button>)
};