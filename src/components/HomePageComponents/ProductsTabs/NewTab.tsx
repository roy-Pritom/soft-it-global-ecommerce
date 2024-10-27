/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetNewProductQuery } from "@/redux/api/product/productApi";

const NewTab = () => {
  const { data } = useGetNewProductQuery({});
  const products = data?.data;
  console.log(products);
  return (
    <div className="pb-20">
      <div className="grid grid-cols-5 gap-2 w-full">
        {products?.map((product: any) => (
          <MYProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewTab;
