/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from "antd";
import { BsEye } from "react-icons/bs";
import { useGetTopProductQuery } from "@/redux/api/product/productApi";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import { toast } from "sonner";
import MYProductCardLoading from "./LazyLoadingComponents/MYProductCardLoading";
const Saree = () => {
  const { data, isLoading } = useGetTopProductQuery({});
  const dispatch = useAppDispatch();
  const topProductData = data?.data;
  if (isLoading) {
    return (
      <div className="mt-10 w-full">
        <div className="w-full h-40 bg-gray-300 animate-pulse rounded-md flex justify-between items-center px-5">
          <h1 className="bg-gray-400 animate-pulse w-36 h-8 rounded-md"></h1>
          <h1 className="bg-gray-400 animate-pulse w-24 h-10 rounded-md"></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full mt-10 ">
          {Array(10)
            .fill(1)
            .map((_, index) => {
              return <MYProductCardLoading key={index} />;
            })}
        </div>
      </div>
    );
  }

  console.log(topProductData);
  const handleAddToCartProduct = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Added Successfully");
  };

  return (
    <div className="md:my-20 my-10 md:px-0 px-8">
      <div className="bg-gray-100 p-10 rounded-md mb-14 flex justify-between">
        <p className="text-2xl sm:text-3xl md:text-3xl primaryColor uppercase font-bold">
          Top Product
        </p>
        <Link href="/product?topProduct">
          <Button
            size="large"
            className="font-semibold uppercase bg-[#ccb864] text-white"
            shape="round"
            icon={<BsEye />}
          >
            See All
          </Button>
        </Link>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {topProductData?.slice(0, 5).map((item: any) => (
          <div key={item.id} className=" relative ">
            <div className="bg-gray-100 w-full   p-2 text-center border border-gray-100">
              <Link href={`/view/${item.id}`}>
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
                <div className="w-full pb-4">
                  <button className="w-full flex justify-center items-center gap-3 bg-[#ccb864] text-white text-xs py-2 px-4 font-semibold">
                    অর্ডার করুন <FaShoppingCart size={16} />
                  </button>
                </div>
              </Link>
            </div>
            <div
              onClick={() => handleAddToCartProduct(item.id)}
              className="absolute top-2 right-2 bg-[#ccb864] text-white p-2 rounded-full cursor-pointer shadow-lg"
            >
              <FaShoppingCart className="text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saree;
