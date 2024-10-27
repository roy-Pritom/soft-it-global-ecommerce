"use client";
import Image from "next/image";
import { products } from "./MenProducts/MenProducts";
import ProductCard from "../ui/ProductCard";
import { Carousel } from "antd";

const ProductShowContainer = () => {
  return (
    <div className="pb-10">
      <div className="mb-10">
        <Image
          src="/b.gif"
          alt="gif"
          width={400}
          height={200}
          className="w-full h-[200px] rounded-md"
          unoptimized={true}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 ">
        <div className="lg:col-span-3  lg:h-[20rem] lg:overflow-y-scroll flex lg:flex-col gap-2 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-2">
            {products?.map((item: any, index: number) => (
              <ProductCard key={index} product={item} width="270px" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 order-1 lg:order-2">
          <Carousel autoplay>
            <Image
              width={445}
              height={445}
              className="h-[20rem] w-full rounded-md"
              src="/banner.jpg"
              alt=""
            />
            <Image
              width={445}
              height={445}
              className="h-[20rem] w-full rounded-md"
              src="/banner1.webp"
              alt=""
            />
            <Image
              width={445}
              height={445}
              className="h-[20rem] w-full rounded-md"
              src="/banner.jpg"
              alt=""
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductShowContainer;
