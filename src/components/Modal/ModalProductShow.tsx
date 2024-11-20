/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import React, { useState } from "react";
import { BiPhone } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "sonner";

const ModalProductShow = ({ productData }: { productData: any }) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };
  //Addd
  const handleOrderToCartProduct = (productId: string) => {
    dispatch(addToCart(productId));
    toast.success("Add Successfully !");
  };
  return (
    <div>
      <div className=" bg-gray-100 p-5  h-full">
        <div>
          <h2 className="text-lg font-semibold primaryColor">
            {productData?.name}
          </h2>
          <p className="text-slate-900 text-lg">Tk- {productData?.price}</p>
        </div>
        <div className=" mt-4 border-b border-gray-300"></div>
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center gap-3">
            <p className="text-lg">Quantity:</p>
            <div className="flex items-center font-bold gap-4">
              <button
                className="bg-primaryColor h-8 w-8 rounded-full flex justify-center items-center"
                onClick={() =>
                  setQuantity((prevQuantity) =>
                    prevQuantity > 1 ? prevQuantity - 1 : 1
                  )
                }
              >
                <FaMinus size={16} className="text-white font-bold" />
              </button>
              {quantity}
              <button
                className="bg-primaryColor h-8 w-8 rounded-full flex justify-center items-center"
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                <FaPlus size={16} className="text-white font-bold" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <p className="text-lg ">Size:</p>
          <div className="flex items-center gap-2">
            {productData?.size?.map((size: string) => (
              <div
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`cursor-pointer h-8 w-8 flex justify-center items-center border border-gray-400 rounded-full ${
                  selectedSizes.includes(size)
                    ? "bg-primaryColor text-white"
                    : ""
                }`}
              >
                <h1>{size}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 py-2">
          <h1 className=" text-lg ">Available:</h1>
          <h1 className=" text-lg ">{productData?.totalProduct}</h1>
        </div>

        <div className=" mt-2 border-b border-gray-300"></div>
        <div className=" flex items-center gap-8 pt-4">
          <button
            onClick={() => handleOrderToCartProduct(productData?.id)}
            className="bg-primaryColor rounded-full w-full font-medium text-white py-2 px-4 flex justify-center items-center gap-3"
          >
            {" "}
            Add To Cart
            <FaShoppingCart />
          </button>
        </div>

        <div className=" max-w-xs flex  items-center gap-3 bg-slate-700 text-white mt-4 rounded-full px-6 py-1">
          <BiPhone className=" h-7 w-7" />
          <div>
            <h1 className=" text-xs">+880 1711979475</h1>
            <p className=" text-xs pl-2">CALL US NOW</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-2">
          <div className="flex gap-2 ">
            <div className="p-2 border border-gray-300 rounded-full cursor-pointer">
              <FaFacebook className="text-blue-600" />
            </div>
            <div className="p-2 border border-gray-300 rounded-full cursor-pointer">
              <FaWhatsapp className="text-green-500" />
            </div>
            <div className="p-2 border border-gray-300 rounded-full cursor-pointer">
              <FaInstagram className="text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductShow;
