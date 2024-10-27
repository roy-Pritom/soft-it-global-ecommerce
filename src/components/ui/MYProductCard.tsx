/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const MYProductCard = ({ womanData }: { womanData: any }) => {
  return (
    <Link href={`/order/${womanData?.id}`}>
      <div className=" bg-gray-100 md:w-full w-[75%] border">
        <Fade className=" h-52 w-full">
          <Image
            src={womanData?.photo[0] ? womanData?.photo[0]?.img : "/img2.jpg"}
            alt="img1"
            width={200}
            height={200}
            className="mx-auto bg-[#E5E5E5] h-full w-full"
          />
        </Fade>
        <p className="text-sm font-medium mt-2 px-2">{womanData?.name}</p>
        <p className="my-3 px-2">Tk- {womanData?.price}</p>
        <div className="flex items-center justify-center pb-4 gap-1">
          <Button
            size="middle"
            className="text-[12px] bg-[#00276C] text-white font-semibold"
          >
            কার্টে রাখুন
          </Button>
          <Link href={`/order/${womanData?.id}`}>
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
