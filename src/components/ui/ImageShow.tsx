"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image } from "antd";
import React from "react";

const ImageShow = ({ selectedImage }: { selectedImage: any }) => {
  return (
    <div>
      <Image
        src={selectedImage}
        alt="Selected product"
        width={500}
        height={500}
        className="rounded-lg h-full transition-all duration-500 ease-in-out transform"
        style={{ transition: "transform 0.5s ease-in-out" }}
      />
    </div>
  );
};

export default ImageShow;
