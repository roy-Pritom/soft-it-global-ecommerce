/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import OrderProductSlider from "../orderComponents/OrderProductSlider";
import { CgShoppingCart } from "react-icons/cg";
import { MdAddShoppingCart } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import PolicyCard from "@/components/shared/PolicyCard";
import MYProductCard from "@/components/ui/MYProductCard";
import {
  useGetAllProductQuery,
  useGetSingleProductQuery,
} from "@/redux/api/product/productApi";
import { Checkbox } from "antd";

const OrderPage = ({ params }: { params: { orderId: string } }) => {
  const { orderId } = params;
  const { data } = useGetSingleProductQuery(orderId);
  const { data: allProductData } = useGetAllProductQuery({});
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const product = data?.data;
  console.log("Single Product:", product);

  return (
    <div className="container mx-auto py-20">
      <div className="flex items-start gap-20">
        <div className="">
          <OrderProductSlider sliderPhotoData={product?.photo} />
        </div>
        <div className="w-full bg-gray-200 px-5 py-7 ">
          <p className="text-xl font-medium">{product?.name}</p>
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
          <div className="flex items-center mt-3 ">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-[#ccb864] text-white text-lg font-bold "
            >
              -
            </button>
            <p className="px-4 py-1 text-lg font-medium border ">{quantity}</p>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-[#ccb864] text-white text-lg font-bold "
            >
              +
            </button>
          </div>

          <div className="flex flex-col gap-3 w-full mt-6 space-y-2 ">
            <button className="bg-[#ccb864] text-white flex items-center justify-center gap-2 text-base font-bold w-full py-2">
              <CgShoppingCart size={25} />
              অর্ডার করুন
            </button>
            <button className="bg-[#ccb864] text-white flex items-center justify-center gap-2 text-base font-bold w-full py-2">
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
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-2 pb-12">
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
