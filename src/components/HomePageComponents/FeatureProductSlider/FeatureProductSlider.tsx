/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import styles from "./FeatureProductSlider.module.css";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { useGetAllBannerQuery } from "@/redux/api/BannerApi/bannerApi";

const FeatureProductSlider = () => {
  const { data, isLoading } = useGetAllBannerQuery({});
  if (isLoading) {
    return <h1 className="text-center pt-3">Loading...</h1>;
  }

  const bannerData = data?.data?.data || [];
  return (
    <div className=" md:px-0 px-8">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {bannerData?.map((data: any) => (
          <SwiperSlide className={styles.swiperSlide} key={data.id}>
            <Image
              width={445}
              height={450}
              className=" w-full"
              src={data?.img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureProductSlider;
