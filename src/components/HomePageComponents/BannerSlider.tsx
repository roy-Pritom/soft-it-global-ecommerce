/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllBannerQuery } from "@/redux/api/BannerApi/bannerApi";
import { Carousel } from "antd";
import Image from "next/image";

const BannerSlider = () => {
  const { data, isLoading } = useGetAllBannerQuery({});
  if (isLoading) {
    return (
      <div className="bg-gray-300 animate-pulse h-[390px] lg:w-[902px] md:w-[450px] w-full rounded-md md:px-2 md:pt-2 md:absolute md:top-40 md:ml-2 m-0 p-0"></div>
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
