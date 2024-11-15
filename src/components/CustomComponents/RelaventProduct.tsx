/* eslint-disable @typescript-eslint/no-explicit-any */

import MYProductCard from "../ui/MYProductCard";

const RelaventProduct = ({
  relevantProductData,
}: {
  relevantProductData: any;
}) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className=" py-8 primaryColor text-2xl font-semibold">
        Relevant Products
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {relevantProductData?.map((data: any) => (
          <MYProductCard key={data?.id} product={data}/>
        ))}
      </div>
    </div>
  );
};

export default RelaventProduct;
