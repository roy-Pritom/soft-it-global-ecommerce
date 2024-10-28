/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularCategory.css";
import { Bounce, Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";
import CategoryLoading from "../../LazyLoadingComponents/CategoryLoading";

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
    <div className="my-24 ">
      <Fade>
        <p className="text-2xl font-bold mb-8 text-center primaryColor">
          Popular Categories
        </p>
      </Fade>

      <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categoryData?.map((item: any) => (
          <Link href={`/shop/${item?.id}`} key={item?.id}>
            <div className="w-full flex flex-col justify-center items-center bg-gray-100 h-40 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
              <Image
                src={item?.img}
                alt="img"
                width={100}
                height={100}
                className="mx-auto w-[100px] h-[100px] "
              />
              <Bounce>
                <p className="text-center text-sm font-bold pt-2 primaryColor">
                  {item?.name}
                </p>
              </Bounce>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
