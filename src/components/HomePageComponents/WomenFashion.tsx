/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MYProductCard from "../ui/MYProductCard";
import { CategorySettings } from "@/utils/slideSeetings";
import { Button } from "antd";
import { BsEye } from "react-icons/bs";
import { useGetWomanProductFromDBQuery } from "@/redux/api/product/productApi";
const WomenFashion = () => {
  const { data, isLoading } = useGetWomanProductFromDBQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const womanData = data?.data;
  console.log("Woman Data", womanData);
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
      <Slider {...CategorySettings}>
        {womanData?.map((data: any) => (
          <MYProductCard key={data.id} womanData={data} />
        ))}
      </Slider>
    </div>
  );
};

export default WomenFashion;
