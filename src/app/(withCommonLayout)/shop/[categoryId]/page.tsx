/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Pagination } from "antd";
import MYProductCard from "@/components/ui/MYProductCard";
import PolicyCard from "@/components/shared/PolicyCard";
import { useGetAllProductByCategoryQuery } from "@/redux/api/category/categoryApi";

type TProps = {
  params: {
    categoryId: string;
  };
};

const ShopPage = ({ params }: TProps) => {
  const { categoryId } = params;
  // console.log(categoryId);
  const { data } = useGetAllProductByCategoryQuery(categoryId);
  const products = data?.data?.data;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the items to display based on the current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = products?.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-2  justify-items-center content-center">
        {currentItems?.map((product: any) => (
          <MYProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-8">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={products?.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
      <PolicyCard />
    </div>
  );
};

export default ShopPage;
