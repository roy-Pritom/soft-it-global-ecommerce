/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, Swiper as SwiperCore } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

type TProps = {
  product: any;
  width?: string;
};

const OrderProductSlider = ({ product, width = "100%" }: TProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //@ts-ignore
  const swiperRef = useRef<SwiperCore | null>(null);
  console.log("l");
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
        {product?.photo?.map((data: any, index: number) => (
          <SwiperSlide key={index} className=" bg-gray-100">
            <div className=" h-96">
              <Image
                src={data?.img}
                loading="lazy"
                width={500}
                height={500}
                alt={`Slide ${index + 1}`}
                className={`swiper-slide-image object-cover w-full h-full`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="thumbnail-container">
        {product?.photo?.map((data: any, index: number) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`thumbnail-button ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <Image
              src={data?.img}
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
