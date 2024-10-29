/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Pagination } from "antd";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetAllProductQuery } from "@/redux/api/product/productApi";
import { useSearchParams } from "next/navigation";
import { useDebounced } from "@/redux/hooks";

type TProps = {
  params: {
    categoryId: string;
  };
};

const ShopPage = ({ params }: TProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { categoryId } = params;
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const query: Record<string, any> = {};
  const debounced = useDebounced({ searchTerm: searchTerm, delay: 500 });
  if (!!debounced) {
    query["searchTerm"] = searchTerm;
  }
  if (categoryId) {
    query["categoryId"] = categoryId;
  }
  const { data, isLoading } = useGetAllProductQuery({ ...query });
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const productData = data?.data?.data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = productData?.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="container mx-auto py-10 md:px-0 px-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-2  justify-items-center content-center">
        {currentItems?.map((product: any, index: number) => (
          <MYProductCard key={index} product={product} />
        ))}
      </div>

      {/* Pagination */}
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

export default ShopPage;
