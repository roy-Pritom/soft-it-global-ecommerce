/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CategorySettings } from "@/utils/slideSeetings";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopularCategory.css";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";

const PopularCategory = () => {
  const { data } = useGetAllCategoryQuery({});
  const categoryData = data?.data?.data;
  return (
    <div className="my-24 ">
      <Fade>
        <p className="text-2xl font-bold mb-8 text-center">
          Popular Categories
        </p>
      </Fade>

      <Slider {...CategorySettings}>
        {categoryData?.map((item: any) => (
          <Link href={`/shop/${item?.id}`} key={item?.id}>
            <div className="w-full bg-gray-300 shadow-xl rounded-lg border p-3 cursor-pointer ">
              <Zoom>
                <Image
                  src={item?.img}
                  alt="img"
                  width={150}
                  height={150}
                  className="mx-auto w-[150px] h-[150px]"
                />
              </Zoom>
              <Bounce>
                <p className="text-center text-sm font-medium">{item?.name}</p>
              </Bounce>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCategory;
