/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import PolicyCard from "@/components/shared/PolicyCard";
import MYProductCard from "@/components/ui/MYProductCard";
import { useGetSingleProductQuery } from "@/redux/api/product/productApi";
import { useGetAllProductByCategoryQuery } from "@/redux/api/category/categoryApi";
import { Checkbox } from "antd";
import OrderProductSlider from "../orderComponents/OrderProductSlider";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import { toast } from "sonner";

const OrderPage = ({ params }: { params: { orderId: string } }) => {
  const { orderId } = params;
  const { data } = useGetSingleProductQuery(orderId);
  const dispatch = useAppDispatch();
  const product = data?.data;
  const { data: allProductData } = useGetAllProductByCategoryQuery(
    product?.categoryId
  );

  const handleAddToCartProduct = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Added Successfully !");
  };
  const handleAddToOrderProduct = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Added Successfully !");
  };

  return (
    <div className="container mx-auto py-20">
      <div className="flex gap-12 ">
        <div className=" w-full sm:w-1/2 md:w-1/2 bg-gray-100">
          <OrderProductSlider product={product} width="600px" />
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/2 bg-gray-100 py-12 px-4">
          <p className="text-xl font-medium">Womens Saree S2</p>
          <p className="text-xl font-medium mt-1">
            <span className="font-bold">Tk- </span>
            {product?.price}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <p className="text-lg font-semibold">Size:</p>
            <Checkbox.Group
              options={product?.size?.map((size: string) => ({
                label: size,
                value: size,
              }))}
              onChange={(checkedValues) =>
                console.log("Selected sizes:", checkedValues)
              }
            />
          </div>

          <div className="flex flex-col gap-3 w-full mt-6 space-y-2 ">
            <button
              onClick={() => handleAddToOrderProduct(product?.id)}
              className="bg-[#ccb864] text-white flex items-center justify-center gap-2 text-base font-bold w-full py-2"
            >
              <CgShoppingCart size={25} />
              অর্ডার করুন
            </button>
            <button
              onClick={() => handleAddToCartProduct(product?.id)}
              className="bg-[#ccb864] text-white flex items-center justify-center gap-2 text-base font-bold w-full py-2"
            >
              <MdAddShoppingCart size={25} />
              কার্টে রাখুন
            </button>
            <button className="bg-[#00276C] text-white flex items-center justify-center gap-2 text-base font-bold w-full py-2">
              <IoCall size={25} />
              01861714318
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold py-12">Related Products</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2 pb-12">
        {allProductData?.data?.data?.map((product: any) => (
          //@ts-ignore
          <MYProductCard product={product} key={product?.id} />
        ))}
      </div>
      <PolicyCard />
    </div>
  );
};

export default OrderPage;
