/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularCategory.css";
import {  Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";
import CategoryLoading from "../../LazyLoadingComponents/CategoryLoading";
import { Button} from "antd";
import 'swiper/swiper-bundle.css';
import Slider from "react-slick";
import { settings } from "@/utils/slideSeetings";

const PopularCategory = () => {
  const { data, isLoading } = useGetAllCategoryQuery({});
  const categoryData = data?.data?.data;
  if (isLoading) {
    return (
      <div className="py-20">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-2 gap-6 w-full">
          {Array(7)
            .fill(1)
            .map((_, index) => {
              return <CategoryLoading key={index} />;
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="my-14 md:px-0 px-8">
      <Fade>
        <p className="text-2xl font-bold mb-10 text-center primaryColor">
          Popular Categories
        </p>
      </Fade>

      {/* <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"> */}
      <Slider {...settings}>
      {categoryData?.map((item:any) => (
        <Link href={`/shop/${item?.id}`} key={item?.id}>
          <div className="w-[300px] h-[234px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 rounded-md p-0 relative">
            <Image
              src={item?.img}
              alt="img"
              width={300}
              height={234}
              className="mx-auto w-[300px] h-[234px]  rounded-md"
            />
            <div className="flex justify-center items-center">
              <Button
                size="large"
                className="bg-white hover:bg-black text-primaryColor font-semibold text-[1.12rem] px-7 absolute bottom-5 border-none shadow-lg"
              >
                {item?.name}
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
      {/* </div> */}
    </div>
  );
};

export default PopularCategory;
