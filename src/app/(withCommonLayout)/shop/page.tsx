/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Pagination } from "antd";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetAllProductQuery } from "@/redux/api/product/productApi";

type TProps = {
  params: {
    categoryId: string;
  };
};

const ShopPage = ({ params }: TProps) => {
  const { categoryId } = params;
  console.log(categoryId);

  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const productData = data?.data?.data || [];
  const metaData = data?.data?.meta || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the items to display based on the current page
  const products = Array(50).fill(1);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-2  justify-items-center content-center">
        {productData.map((product: any, index: number) => (
          <MYProductCard key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-8">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={products.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ShopPage;
