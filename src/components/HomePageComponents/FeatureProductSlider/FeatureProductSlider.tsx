"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import styles from "./FeatureProductSlider.module.css";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";

// import required modules
const FeatureProductSlider = () => {
  return (
    <>
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
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            width={800}
            height={445}
            className="h-[445px] w-full border border-red-500"
            src="/banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            width={445}
            height={445}
            className="h-[445px] w-full"
            src="/banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            width={445}
            height={445}
            className="h-[445px] w-full"
            src="/banner1.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FeatureProductSlider;
