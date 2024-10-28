/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetDiscountProductQuery } from "@/redux/api/product/productApi";
import MYProductCardLoading from "../LazyLoadingComponents/MYProductCardLoading";

const DiscountSaleProductTab = () => {
  const { data, isLoading } = useGetDiscountProductQuery({});
  const products = data?.data;
  if (isLoading) {
    return (
      <div className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
          {Array(10)
            .fill(1)
            .map((_, index) => {
              return <MYProductCardLoading key={index} />;
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
        {products?.map((product: any) => (
          <MYProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DiscountSaleProductTab;
