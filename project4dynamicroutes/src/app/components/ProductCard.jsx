import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ProductCard(props) {
  return (
    <>
      <div
        key={props.id}
        className="bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <Link href="#">
          <Image
            className="p-4 rounded-t-lg object-cover"
            src={props.images}
            alt={props.title}
            width={500}
            height={300}
          />
        </Link>
        <div className="px-5 pb-5">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 mb-2">
            {props.title}
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2 mb-4">
            {props.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${props.price}
            </span>
            <span className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {props.rating}
              <svg
                className="w-4 h-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}
