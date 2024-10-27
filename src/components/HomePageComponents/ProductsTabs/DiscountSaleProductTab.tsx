/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetDiscountProductQuery } from "@/redux/api/product/productApi";

const DiscountSaleProductTab = () => {
  const { data } = useGetDiscountProductQuery({});
  const products = data?.data;
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

export default DiscountSaleProductTab;
