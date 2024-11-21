/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import RelaventProduct from "@/components/CustomComponents/RelaventProduct";
import ViewProductInformation from "@/components/CustomComponents/ViewProductInformation";
import { useGetAllProductByCategoryQuery } from "@/redux/api/category/categoryApi";
import { useGetSingleProductQuery } from "@/redux/api/product/productApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-medium-image-zoom/dist/styles.css";
import ImageShow from "@/components/ui/ImageShow";

interface ProductParams {
  productId: string;
}

const ProductViewPage = ({ params }: { params: ProductParams }) => {
  const productId = params?.productId;
  const { data, isLoading } = useGetSingleProductQuery(productId);
  const [activeSection, setActiveSection] = useState("description"); // default section

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
    <div className="container mx-auto py-10 md:px-0 px-8">
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 h-full gap-12">
          {/* First Div */}
          <div className=" bg-gray-100 w-full flex flex-col justify-center mx-auto overflow-hidden p-5">
            <div className="overflow-hidden h-96 w-full flex justify-center mx-auto ">
              {selectedImage && <ImageShow selectedImage={selectedImage} />}
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
          {/* Second Div */}
          <div className="flex flex-col h-full">
            <ViewProductInformation productData={productData} />
          </div>
        </div>

        <div className="mt-8 space-x-6">
          <button
            onClick={() => setActiveSection("description")}
            className={`px-8 py-2 oswaldRegular uppercase ${
              activeSection === "description"
                ? "bg-primaryColor text-white"
                : "bg-gray-100 text-slate-800"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveSection("delivery")}
            className={`px-8 py-2 oswaldRegular uppercase ${
              activeSection === "delivery"
                ? "bg-primaryColor text-white"
                : "bg-gray-100 text-slate-800"
            }`}
          >
            Delivery Options
          </button>
        </div>
        {/* <div className="mt-4">
          {activeSection === "description" ? (
            <ReactQuill
              value={productData?.description || ""}
              readOnly={true}
              theme="bubble"
              className="text-slate-800 bg-gray-50 p-4 rounded-lg"
            />
          ) : (
            <div className="text-slate-800 bg-gray-50 p-4 rounded-lg">
              {productData?.delivery}
            </div>
          )}
        </div> */}
      </div>

      {/* Relavent Product */}
      <div>
        <RelaventProduct relevantProductData={relevantProductData} />
      </div>
    </div>
  );
};

export default ProductViewPage;
