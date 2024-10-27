"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, Swiper as SwiperCore } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const images = [
  "https://r.softitglobal.xyz//posadmin/images/product/large/s31728711689.jpg",
  "https://r.softitglobal.xyz//posadmin/images/product/large/b21721127597.jpg",
  "https://r.softitglobal.xyz//posadmin/images/product/large/s31728711689.jpg",
];

type TProps = {
  width: string;
};

const OrderProductSlider = ({ width = "592px" }: TProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation={true}
        modules={[Navigation]}
        className={`w-full md:w-[${width}]`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              loading="lazy"
              width={592}
              height={592}
              alt={`Slide ${index + 1}`}
              className={`swiper-slide-image w-full md:w-[592px] h-auto`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`thumbnail-button ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <Image
              src={image}
              width={50}
              height={50}
              alt="img"
              className="thumbnail-image"
            />
          </button>
        ))}
      </div>

      <style jsx>{`
        .thumbnail-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          gap: 10px;
        }
        .thumbnail-button {
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .thumbnail-button.active {
          opacity: 1;
        }
        .thumbnail-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
        .swiper-slide-image {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default OrderProductSlider;
