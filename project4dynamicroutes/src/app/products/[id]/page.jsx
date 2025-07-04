import React from "react";
import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
async function getProductsInfo(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err.message);
    return null;
  }
}
export default async function ProductInfoPage({ params }) {
  const productInfo = await getProductsInfo(params.id);
  // console.log("this data from id", productInfo);
  if (!productInfo || !productInfo.id) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <h1 className="text-2xl font-semibold text-orange-600">
          No product found.
        </h1>
      </div>
    );
  }
  return (
    <>
      <div
        className="relative flex min-h-screen flex-col bg-gray-200 group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* Product Info */}
              <div className="p-4 @container">
                <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg">
                    <Image
                      src={productInfo.images[0]}
                      alt={productInfo.title}
                      width={200}
                      height={100}
                    ></Image>
                  </div>
                  <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                    <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
                      {productInfo.title}
                    </p>
                    <div className="flex items-end gap-3 justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-neutral-500 text-base font-normal leading-normal">
                          {productInfo.description}
                        </p>
                        <p className="text-neutral-500 text-base font-normal leading-normal">
                          Category: {productInfo.category} Discount:{" "}
                          {productInfo.discountPercentage}% Rating:{" "}
                          {productInfo.rating} Stock: {productInfo.stock}
                        </p>
                        <p className="text-neutral-500 text-base font-normal leading-normal">
                          Price: {productInfo.price}
                        </p>
                          <AddToCart productname={productInfo.title}/>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                {[
                  ["Brand", `${productInfo.brand}`],
                  ["SKU", `${productInfo.sku}`],
                  ["Weight", `${productInfo.weight}`],
                  [
                    "Dimensions",
                    `width : ${productInfo.dimensions.width}, height : ${productInfo.dimensions.height}, depth : ${productInfo.dimensions.depth}`,
                  ],
                  ["Warranty", `${productInfo.warrantyInformation}`],
                  ["Shipping", `${productInfo.shippingInformation}`],
                  ["Availability", `${productInfo.availabilityStatus}`],
                ].map(([label, value], idx) => (
                  <div
                    key={idx}
                    className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5"
                  >
                    <p className="text-neutral-500 text-sm font-normal leading-normal">
                      {label}
                    </p>
                    <p className="text-[#141414] text-sm font-normal leading-normal">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Customer Reviews */}
              <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4  ">
                Customer Reviews
              </h3>
              <div className="flex flex-col gap-8 overflow-x-hidden bg-gray-400 p-4 rounded-2xl ">
                {productInfo.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 bg-gray-400"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-neutral-200 aspect-square rounded-full size-10 flex items-center justify-center text-xs font-semibold text-neutral-700">
                        {review.reviewerName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#141414] text-base font-medium leading-normal">
                          {review.reviewerName}
                        </p>
                        <p className="text-neutral-500 text-sm font-normal leading-normal">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill={star <= review.rating ? "#141414" : "#c2c2c2"}
                          viewBox="0 0 256 256"
                        >
                          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Comment */}
                    <p className="text-[#141414] text-base font-normal leading-normal">
                      {review.comment}
                    </p>

                    {/* Placeholder for Likes/Dislikes */}
                    <div className="flex gap-9 text-neutral-500">
                      <button className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z" />
                        </svg>
                        <p className="text-inherit">0</p>
                      </button>
                      <button className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z" />
                        </svg>
                        <p className="text-inherit">0</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                {[
                  ["Return Policy", `${productInfo.returnPolicy}`],
                  [
                    "Minimum Order Quantity",
                    `${productInfo.minimumOrderQuantity}`,
                  ],
                  ["Created", `${productInfo.meta.createdAt}`],
                  ["Updated", `${productInfo.meta.updatedAt}`],
                  ["Barcode", `${productInfo.meta.barcode}`],
                  ["QR Code", `${productInfo.barcode}`],
                ].map(([label, value], idx) => (
                  <div
                    key={idx}
                    className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5"
                  >
                    <p className="text-neutral-500 text-sm font-normal leading-normal">
                      {label}
                    </p>
                    <p className="text-[#141414] text-sm font-normal leading-normal">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
