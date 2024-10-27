"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MYProductCard from "../ui/MYProductCard";
import { CategorySettings } from "@/utils/slideSeetings";
import { Button } from "antd";
import { BsEye } from "react-icons/bs";
const TShirt = () => {
  return (
    <div className="md:my-20 my-10">
      <div className="bg-[#84E0FE] p-10 rounded-md mb-14 flex justify-between">
        <p className="text-5xl uppercase font-bold">T-SHIRT</p>
        <Button
          size="large"
          className="font-semibold uppercase"
          shape="round"
          icon={<BsEye />}
        >
          See All
        </Button>
      </div>
      <Slider {...CategorySettings}>
        {Array(9)
          .fill(null)
          ?.map((item: number, index: number) => (
            <MYProductCard key={index} item={item} />
          ))}
      </Slider>
    </div>
  );
};

export default TShirt;
