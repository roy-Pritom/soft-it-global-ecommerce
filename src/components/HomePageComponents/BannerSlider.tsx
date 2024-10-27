/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllBannerQuery } from "@/redux/api/BannerApi/bannerApi";
import { Carousel } from "antd";
import Image from "next/image";

const BannerSlider = () => {
  const { data, isLoading } = useGetAllBannerQuery({});

  if (isLoading) {
    return <h1 className="text-center pt-3">Loading...</h1>;
  }

  const bannerData = data?.data?.data || [];

  return (
    <div className="px-2 pt-2">
      <Carousel autoplay>
        {bannerData.map((data: any) => (
          <div key={data.id}>
            <Image
              width={445}
              height={445}
              className="h-[445px] w-full"
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
