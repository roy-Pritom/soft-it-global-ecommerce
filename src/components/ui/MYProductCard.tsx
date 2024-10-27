/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const MYProductCard = ({ product }: { product: any }) => {
  return (
    <Link href={`/order/${product?.id}`}>
      <div className=" bg-white md:w-full w-[75%] text-center border">
        <Fade>
          <Image
            src={product?.photo[0] ? product?.photo[0]?.img : "/img2.jpg"}
            alt="img1"
            width={150}
            height={150}
            className="mx-auto bg-[#E5E5E5] w-full"
          />
        </Fade>
        <p className="text-center text-sm font-medium mt-2">{product?.name}</p>
        <p className="my-3">{product?.price}tk</p>
        <div className="flex items-center justify-center pb-4 gap-1">
          <Button
            size="middle"
            className="text-[12px] bg-[#00276C] text-white font-semibold"
          >
            কার্টে রাখুন
          </Button>
          <Link href={`/order/${product?.id}`}>
            <Button
              size="middle"
              className="text-[12px] bg-primaryColor text-black font-semibold"
            >
              অর্ডার করুন
            </Button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default MYProductCard;
