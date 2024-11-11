/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetQueryByProductQuery } from "@/redux/api/product/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "sonner";

const ProductPage = () => {
  const searchParams = useSearchParams();
  const isWomanProduct = searchParams.has("womanFashion");
  const isManProduct = searchParams.has("manFashion");
  const isTopProduct = searchParams.has("topProduct");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const queryArg = isManProduct
    ? "manFashion"
    : isWomanProduct
    ? "womanFashion"
    : isTopProduct
    ? "topProduct"
    : "";

  const { data: products, isLoading } = useGetQueryByProductQuery(queryArg, {
    skip: !queryArg,
  });
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const productData = products?.data;
  const itemsPerPage = 10;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = productData?.slice(startIdx, startIdx + itemsPerPage);

  const handleAddToCartProduct = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Added Successfully !");
  };

  return (
    <div className="w-full container mx-auto pt-6 pb-24 md:px-0 px-8">
      {isManProduct && (
        <h1 className="text-2xl font-bold primaryColor pb-4">Mens Products</h1>
      )}
      {isWomanProduct && (
        <h1 className="text-2xl font-bold primaryColor pb-4">
          Womens Products
        </h1>
      )}
      {isTopProduct && (
        <h1 className="text-2xl font-bold primaryColor pb-4">Top Products</h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {currentItems?.map((item: any) => (
          <div key={item.id} className="relative">
            <div className="bg-gray-100 border border-gray-100 p-2 rounded-md">
              <Link href={`/view/${item.id}`} className="text-center">
                <Fade>
                  <Image
                    src={item.photo ? item.photo[0]?.img : "/img2.jpg"}
                    alt="Product Image"
                    width={150}
                    height={230}
                    className="mx-auto bg-[#E5E5E5] w-full h-[300px] md:h-[200px]"
                  />
                </Fade>

                <p className="text-center text-sm font-medium mt-2">
                  {item.name}
                </p>
                <p className="my-3">Tk- {item.price}</p>
                <button className="w-full flex justify-center items-center gap-3 bg-primaryColor text-white text-xs py-2 px-4 font-semibold">
                  অর্ডার করুন <FaShoppingCart size={16} />
                </button>
              </Link>
            </div>
            <div
              onClick={() => handleAddToCartProduct(item.id)}
              className="absolute top-2 right-2 bg-primaryColor text-white p-2 rounded-full cursor-pointer shadow-lg"
            >
              <FaShoppingCart className="text-sm" />
            </div>
          </div>
        ))}
      </div>

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

export default ProductPage;
