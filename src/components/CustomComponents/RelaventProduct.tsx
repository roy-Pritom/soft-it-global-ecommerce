/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaShoppingCart } from "react-icons/fa";

const RelaventProduct = ({
  relevantProductData,
}: {
  relevantProductData: any;
}) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className=" py-8 primaryColor text-2xl font-semibold">
        Relevant Products
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {relevantProductData?.map((data: any) => (
          <div key={data.id}>
            <Link href={`/view/${data.id}`}>
              <div className="bg-gray-100 md:w-full w-[75%]  p-2 text-center border border-gray-100">
                <div className=" relative ">
                  <Fade>
                    <Image
                      src={data.photo ? data.photo[0]?.img : "/img2.jpg"}
                      alt="Product Image"
                      width={150}
                      height={230}
                      className="mx-auto bg-[#E5E5E5] w-full h-[200px]"
                    />
                  </Fade>
                  <div className="w-6 h-6 rounded-full absolute top-0 right-0 -mt-2 -mr-2 bg-[#ccb864] text-white flex items-center justify-center">
                    <FaShoppingCart className="text-sm" />
                  </div>
                </div>
                <p className="text-center text-sm font-medium mt-2">
                  {data.name}
                </p>
                <p className="my-3">Tk- {data.price}</p>
                <div className="w-full pb-4">
                  <button className="w-full flex justify-center items-center gap-3 bg-[#ccb864] text-white text-xs py-2 px-4 font-semibold">
                    অর্ডার করুন <FaShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelaventProduct;
