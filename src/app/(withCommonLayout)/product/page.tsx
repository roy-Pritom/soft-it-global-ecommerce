/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetQueryByProductQuery } from "@/redux/api/product/productApi";
import { Pagination } from "antd";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";


const ProductPage = () => {
  const searchParams = useSearchParams();
  const isWomanProduct = searchParams.has("womanFashion");
  const isManProduct = searchParams.has("manFashion");
  const isTopProduct = searchParams.has("topProduct");
  const [currentPage, setCurrentPage] = useState(1);

  const queryArg = isManProduct
    ? "manFashion"
    : isWomanProduct
    ? "womanFashion"
    : isTopProduct
    ? "topProduct"
    : "";

  const { data: products, isLoading } = useGetQueryByProductQuery(queryArg, {
    skip: !queryArg,
  });
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const productData = products?.data;
  const itemsPerPage = 8;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = productData?.slice(startIdx, startIdx + itemsPerPage);


  return (
    <div className="w-full container mx-auto pt-6 pb-24 md:px-0 px-8">
      {isManProduct && (
        <h1 className="text-2xl font-bold primaryColor pb-4">Mens Products</h1>
      )}
      {isWomanProduct && (
        <h1 className="text-2xl font-bold primaryColor pb-4">
          Womens Products
        </h1>
      )}
      {isTopProduct && (
        <h1 className="text-2xl font-bold primaryColor pb-4">Top Products</h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {currentItems?.map((item: any) => (
         <MYProductCard key={item?.id} product={item}/>
        ))}
      </div>

      <div className="flex justify-center py-8">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={productData?.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ProductPage;
