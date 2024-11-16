/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllCategoryQuery, useGetAllProductByCategoryQuery } from "@/redux/api/category/categoryApi";
import { categorySettings } from "@/utils/slideSeetings";
import Image from "next/image";
import Slider from "react-slick";
import MYProductCard from "../ui/MYProductCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Custom Arrow Components
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
      style={{ zIndex: 1 }}
    >
      <LeftOutlined />
    </button>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
      style={{ zIndex: 1 }}
    >
      <RightOutlined />
    </button>
  );
};

const CategoryBasedProductContainer2 = () => {
  const {data:categoryData}=useGetAllCategoryQuery({});
  const categoryFeatureData = categoryData?.data?.data?.filter((i:any)=>i.isFeature===true)  || [];
  // console.log(categoryFeatureData)
  const id =categoryFeatureData?.length > 1  ? categoryFeatureData[1]?.id :  '';
  const { data } = useGetAllProductByCategoryQuery(id);
  const productData = data?.data?.data;

  // Slider settings with custom arrows
  const settings = {
    ...categorySettings,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full bg-[#F3F3F3] md:mt-20 mt-10">
      <div className="flex md:flex-row flex-col gap-5">
        {/* Left Image */}
        <Image
          src="/f2.jpeg"
          alt="category"
          width={350}
          height={400}
          className="md:w-[30%] w-full rounded-lg"
        />
        
        {/* Slider Container */}
        <div className="md:w-[70%] w-full relative pt-8">
          <Slider {...settings}>
            {productData?.map((item: any) => (
              <MYProductCard product={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CategoryBasedProductContainer2;
