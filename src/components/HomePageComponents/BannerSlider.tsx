/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllBannerQuery } from "@/redux/api/BannerApi/bannerApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const BannerSlider = () => {
  const { data, isLoading } = useGetAllBannerQuery({});
  
  if (isLoading) {
    return (
      <div className="bg-gray-300 animate-pulse h-[300px] w-full rounded-md"></div>
    );
  }

  const bannerData = data?.data?.data || [];

  return (
    <div className="w-full bg-black">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className=" w-full"
      >
        {bannerData.map((data: any) => (
          <SwiperSlide key={data?.id} className="!p-0 !m-0 w-full h-[300px]">
      
              <Image
                src={data.img || "/banner.jpg"}
                alt={`Banner ${data.id}`}
                width={1920} // Next.js will adjust based on layout and height
                height={300}
                className="w-full h-[510px] object-cover !p-0 !m-0"
                priority
                unoptimized // Use this if the image URL is external
              />
            
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots */}
      <div className="swiper-pagination absolute bottom-5 left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default BannerSlider;
