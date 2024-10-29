/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllBannerQuery } from "@/redux/api/BannerApi/bannerApi";
import { Carousel } from "antd";
import Image from "next/image";

const BannerSlider = () => {
  const { data, isLoading } = useGetAllBannerQuery({});
  if (isLoading) {
    return (
      <div className="bg-gray-300 animate-pulse h-[445px] w-full rounded-md px-2 pt-2"></div>
    );
  }

  const bannerData = data?.data?.data || [];

  return (
    <div className="md:px-2 px-0 pt-2">
      <Carousel autoplay>
        {bannerData.map((data: any) => (
          <div key={data.id}>
            <Image
              width={445}
              height={445}
              className="md:h-[445px] h-[240px] w-full"
              src={data.img || "/banner.jpg"}
              alt={`Banner ${data.id}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
