"use client";
import React from 'react';

export default function AddToCart(props) {
  return (
    <button
      onClick={() => alert(`${props.productname} added in to cart`)} 
      className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[#141414] px-6 py-2 text-white text-sm sm:text-base font-semibold shadow hover:bg-[#1f1f1f] transition"
    >
      🛒 Add to Cart
    </button>
  );
}