/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Button } from "antd";
import OrderProductSlider from "../orderComponents/OrderProductSlider";
import { CgShoppingCart } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import PolicyCard from "@/components/shared/PolicyCard";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetSingleProductQuery } from "@/redux/api/product/productApi";
import { useGetAllProductByCategoryQuery } from "@/redux/api/category/categoryApi";

const OrderPage = ({ params }: { params: { orderId: string } }) => {
  const { orderId } = params;
  // console.log(orderId);
  const { data } = useGetSingleProductQuery(orderId);
  const product = data?.data;
  const { data: allProductData } = useGetAllProductByCategoryQuery(
    product?.categoryId
  );
  console.log(allProductData);
  return (
    // <div className="container mx-auto py-20">
    //   <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 ">
    //     <div className="lg:col-span-1  lg:h-[35rem] lg:overflow-y-scroll flex lg:flex-col gap-2 order-2 lg:order-1">
    //       {imgData?.map((item: any, index: number) => (
    //         <Image
    //           className={`${
    //             imgurl === item?.img ? "opacity-50" : "opacity-100"
    //           } cursor-pointer w-full rounded-md h-16 lg:h-44`}
    //           onClick={() => setImgUrl(item?.img)}
    //           key={index}
    //           src={item.img}
    //           width={300}
    //           height={300}
    //           alt="img"
    //         />
    //       ))}
    //     </div>
    //     <div className="lg:col-span-5 order-1 lg:order-2">
    //       <OrderImageViewer imgurl={imgurl} />
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-4 mt-14">
    //     <div className="col-span-3">
    //       <p className="text-xl font-bold">
    //         Fresh Instant Full Cream Milk Powder 1kg
    //       </p>
    //       <Descriptions title="User Info" items={items} />
    //     </div>
    //     <div className="col-span-1 bg-white p-8 rounded-md shadow-md space-y-3">
    //       <p className="text-xl font-semibold text-slate-800">Details</p>
    //       <p className="text-sm line-through">BDT 840</p>
    //       <div className="flex justify-between">
    //         <div className="">
    //           <p className="text-lg md:text-xl font-bold mb-5">
    //             BDT 800<span className="text-sm font-medium">.00</span>
    //           </p>
    //           <DynamicStarRating rating={3.5} />
    //         </div>
    //         <div className="">
    //           <button className="px-4 py-1 rounded-full bg-green-400 text-white mx-auto text-xs font-semibold">
    //             -BDT 40
    //           </button>
    //           <p className="mt-5">0 reviews</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4">
    //         <Button size="middle" className="w-1/2">
    //           Stock : 50
    //         </Button>
    //         <Button size="large" type="primary" className="uppercase">
    //           Add To Cart
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto py-20">
      <div className="flex items-start gap-20">
        <div className="">
          <OrderProductSlider width="592px" />
        </div>
        <div className="w-full ">
          <p className="text-xl font-medium">Womens Saree S2</p>
          <p className="text-xl font-medium mt-1">
            2850 <span className="font-bold">Tk</span>
          </p>
          <div className="flex flex-col gap-3 w-full mt-6 ">
            <Button
              size="large"
              className="bg-[#ffc107] text-lg font-bold w-full py-6"
              icon={<CgShoppingCart size={30} />}
            >
              অর্ডার করুন
            </Button>
            <Button
              size="large"
              icon={<MdAddShoppingCart size={30} />}
              className="bg-[#ffc107] text-lg font-bold w-full py-6"
            >
              কার্টে রাখুন
            </Button>
            <Button
              size="large"
              icon={<IoCall size={25} color="white" />}
              className="bg-[#00276C] text-lg font-bold w-full py-6 text-white"
            >
              01861714318
            </Button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold py-12">Related Products</h2>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-2 pb-12">
        {allProductData?.data?.data?.map((product: any) => (
          <MYProductCard product={product} key={product?.id} />
        ))}
      </div>
      <PolicyCard />
    </div>
  );
};

export default OrderPage;
