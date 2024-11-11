/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from "antd";
import { BsEye } from "react-icons/bs";
import { useGetManFashionQuery } from "@/redux/api/product/productApi";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import { toast } from "sonner";
import { Fade } from "react-awesome-reveal";
import MYProductCardLoading from "./LazyLoadingComponents/MYProductCardLoading";

const TShirt = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetManFashionQuery({});
  const manFashionData = data?.data;
  if (isLoading) {
    return (
      <div className="mt-10 w-full">
        <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md flex justify-between items-center px-5">
          <h1 className="bg-gray-400 animate-pulse w-36 h-8 rounded-md"></h1>
          <h1 className="bg-gray-400 animate-pulse w-24 h-10 rounded-md"></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full mt-10">
          {Array(10)
            .fill(1)
            .map((_, index) => {
              return <MYProductCardLoading key={index} />;
            })}
        </div>
      </div>
    );
  }

  const handleAddToCartProduct = (productId: string) => {
    dispatch(addToCart(productId));
    toast.success("Add Successfully");
  };

  return (
    <div className="md:my-20 my-10 md:px-0 px-8">
      <div className="bg-gray-100 p-10 rounded-md mb-14 flex justify-between">
        <p className="text-2xl sm:text-3xl md:text-3xl uppercase font-bold text-primaryColor">
          Man Fashion
        </p>
        <Link href="/product?manFashion">
          <Button
            size="large"
            className="font-semibold uppercase bg-primaryColor text-white hover:bg-primaryColor hover:text-white"
            shape="round"
            icon={<BsEye />}
          >
            See All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {manFashionData?.slice(0, 10).map((item: any) => (
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
    </div>
  );
};

export default TShirt;
