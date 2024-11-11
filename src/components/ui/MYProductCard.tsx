/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ProductModal from "../Modal/ProductModal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const MYProductCard = ({ product }: { product: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const productRef = useRef(product);

  const showModal = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsModalVisible(true);
    setIsOrder(false);
  };
  const showModal2 = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsModalVisible(true);
    setIsOrder(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className=" w-full ">
      <Link href={`/order/${product?.id}`}>
        <div className="bg-gray-100 md:w-full w-full text-center border border-gray-100 px-2">
          <Fade>
            <Image
              src={product?.photo ? product?.photo[0]?.img : "/img2.jpg"}
              alt="img1"
              width={150}
              height={230}
              className="mx-auto bg-[#E5E5E5] w-full h-[280px] md:h-[200px]"
            />
          </Fade>
          <p className="text-center text-sm font-medium mt-2">
            {product?.name}
          </p>
          <p className="my-3">{product?.price}tk</p>
          <div className="flex w-full items-center justify-center pb-4 gap-1">
            <button
              className="text-xs w-full  bg-[#00276C] text-white font-semibold px-4 py-2 shadow-sm rounded-sm"
              onClick={showModal}
            >
              কার্টে রাখুন
            </button>
            <button
              onClick={showModal2}
              className=" text-xs w-full bg-primaryColor text-white font-semibold px-4 py-2 shadow-sm rounded-sm"
            >
              অর্ডার করুন
            </button>
          </div>
        </div>
      </Link>

      {/* Antd Modal */}
      <ProductModal
        onClose={handleCancel}
        isOrder={isOrder}
        isModalVisible={isModalVisible}
        product={productRef.current}
        title="Choose Size and Color"
      />
    </div>
  );
};

export default MYProductCard;
