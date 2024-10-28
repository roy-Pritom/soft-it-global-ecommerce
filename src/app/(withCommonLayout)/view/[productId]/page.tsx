/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import RelaventProduct from "@/components/CustomComponents/RelaventProduct";
import ViewProductInformation from "@/components/CustomComponents/ViewProductInformation";
import { useGetAllProductByCategoryQuery } from "@/redux/api/category/categoryApi";
import { useGetSingleProductQuery } from "@/redux/api/product/productApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProductParams {
  productId: string;
}

const ProductViewPage = ({ params }: { params: ProductParams }) => {
  const productId = params?.productId;
  const { data, isLoading } = useGetSingleProductQuery(productId);

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const productData = data?.data;
  const { data: categoryData, isLoading: carategoryLoading } =
    useGetAllProductByCategoryQuery(productData?.categoryId);
  if (carategoryLoading) {
    <h1>Loading...</h1>;
  }
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

  const relevantProductData = categoryData?.data?.data || [];
  console.log("Now", relevantProductData);

  return (
    <div className="container mx-auto py-10">
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className=" bg-gray-100 w-full flex flex-col justify-center mx-auto overflow-hidden p-5">
            <div className="overflow-hidden h-96 w-full flex justify-center  mx-auto">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Selected product"
                  width={500}
                  height={500}
                  className="rounded-lg h-full"
                />
              )}
            </div>
            {/* Thumbnails */}
            <div className="w-full flex justify-center  mx-auto gap-2 mt-4">
              {productData?.photo.map((image: any) => (
                <div
                  key={image.id}
                  onClick={() => handleThumbnailClick(image.img)}
                  className={`relative overflow-hidden cursor-pointer rounded-lg border-2 
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
                    className="rounded-lg object-cover h-full"
                  />

                  {selectedImage === image.img && (
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <ViewProductInformation productData={productData} />
          </div>
        </div>
      </div>

      {/* Relavent Product */}
      <div>
        <RelaventProduct relevantProductData={relevantProductData} />
      </div>
    </div>
  );
};

export default ProductViewPage;
