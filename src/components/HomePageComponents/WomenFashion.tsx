/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from "antd";
import { BsEye } from "react-icons/bs";
import { useGetAllWomanFashionQuery } from "@/redux/api/BannerApi/bannerApi";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
const WomenFashion = () => {
  const { data, isLoading } = useGetAllWomanFashionQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const womanData = data?.data;

  const handleAddToCart = (id: string) => {
    console.log("Added to cart, Product ID:", id);
    // Additional cart logic goes here
  };

  return (
    <div className="md:my-20 my-10">
      <div className="bg-gray-200 p-8 rounded-md mb-14 flex justify-between">
        <p className=" text-xl sm:text-2xl md:text-3xl uppercase font-bold primaryColor">
          Women Fashion
        </p>
        <Button
          size="large"
          className="font-semibold uppercase bg-[#CCB864] text-white"
          shape="round"
          icon={<BsEye />}
        >
          See All
        </Button>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {womanData?.slice(0, 10).map((item: any) => (
          <div key={item.id}>
            <Link href={`/view/${item.id}`}>
              <div className="bg-gray-100 md:w-full w-[75%] p-2 text-center border border-gray-100">
                <div className="relative">
                  <Fade>
                    <Image
                      src={item.photo ? item.photo[0]?.img : "/img2.jpg"}
                      alt="Product Image"
                      width={150}
                      height={230}
                      className="mx-auto bg-[#E5E5E5] w-full h-[200px]"
                    />
                  </Fade>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(item.id);
                    }}
                    className="w-6 h-6 rounded-full absolute top-0 right-0 -mt-2 -mr-2 bg-[#ccb864] text-white flex items-center justify-center cursor-pointer"
                  >
                    <FaShoppingCart className="text-sm" />
                  </div>
                </div>
                <p className="text-center text-sm font-medium mt-2">
                  {item.name}
                </p>
                <p className="my-3">Tk- {item.price}</p>
                <div className="w-full pb-4">
                  <button className="w-full flex justify-center items-center gap-3 bg-[#ccb864] text-white text-xs py-2 px-4 font-semibold">
                    অর্ডার করুন <FaShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenFashion;
