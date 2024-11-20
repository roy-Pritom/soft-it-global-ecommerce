"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import ImageShow from "../ui/ImageShow";

const ModalImageShow = ({ productData }: { productData: any }) => {
  console.log("Data", productData);
  const [selectedImage, setSelectedImage] = useState<string>(
    productData?.photo[0].img
  );

  useEffect(() => {
    if (productData?.photo && productData.photo.length > 0) {
      setSelectedImage(productData.photo[0].img);
    }
  }, [productData]);

  const handleThumbnailClick = (img: string) => {
    setSelectedImage(img);
  };
  return (
    <div className=" bg-gray-100 w-full h-full flex flex-col justify-center mx-auto rounded-md overflow-hidden p-5">
      <div className="overflow-hidden h-80 w-full flex justify-center mx-auto ">
        {selectedImage && <ImageShow selectedImage={selectedImage} />}
      </div>
      {/* Thumbnails */}
      <div className="w-full flex justify-center  mx-auto gap-2 mt-4">
        {productData?.photo.map((image: any) => (
          <div
            key={image.id}
            onClick={() => handleThumbnailClick(image.img)}
            className={`relative h-24 cursor-pointer rounded-lg border-2 
                  ${
                    selectedImage === image.img
                      ? "border-black"
                      : "border-transparent"
                  }`}
          >
            {/* Thumbnail Image */}
            <Image
              src={image.img}
              alt={`Thumbnail ${image.id}`}
              width={100}
              height={100}
              className="rounded-lg h-full"
            />

            {selectedImage === image.img && (
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalImageShow;
