"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function MoreInfoButton({ id }) {
  const router = useRouter();
  function showProductInfo() {
    router.push(`/products/${id}`);
  }
  return (
    <>
      <button onClick={showProductInfo}>Show More →</button>
    </>
  );
}
