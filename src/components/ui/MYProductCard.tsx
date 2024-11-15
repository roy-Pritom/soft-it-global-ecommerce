/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
// import Link from "next/link";
import React, { useRef, useState } from "react";
// import { Fade } from "react-awesome-reveal";
import ProductModal from "../Modal/ProductModal";
import { Button, Rate } from "antd";
import { FaCartShopping } from "react-icons/fa6";
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

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
   
   <div className="w-full">
     <div className="max-w-sm rounded-lg shadow-md overflow-hidden border border-gray-200">
    <div className="relative w-full h-64">
      {/* <Fade> */}
      <Image src={product?.photo[0]?.img} alt='productImg' layout="fill" objectFit="cover" />
      {/* </Fade> */}
    </div>
    <div className="p-4">
      <div className="flex items-center mb-2">
        <Rate allowHalf defaultValue={product?.rating} style={{ fontSize: '16px' }} className="custom-rating" count={5} disabled />
        <span className="text-gray-500 ml-2 text-sm">{product?.rating}</span>
      </div>
      <h2 className="text-base font-semibold truncate text-gray-500">{product?.name}</h2>
      <div className="flex items-baseline mt-2">
        <span className="text-lg font-medium text-gray-900">TK. {product?.price}</span>
        <span className="text-sm line-through ml-2 text-gray-500">TK. {product?.price / (1 - product?.discount / 100)}</span>
      </div>
      <Button className='bg-primaryColor mt-4 text-white font-medium ' icon={<FaCartShopping />} block  onClick={showModal}>
        Add to Cart
      </Button>
    </div>
  </div>
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
