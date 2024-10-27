import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ProductModal from "../Modal/ProductModal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MYProductCard = ({ product }: { product: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const productRef = useRef(product); // Use ref to hold product data

  const showModal = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent link navigation
    event.stopPropagation(); // Stop event propagation
    setIsModalVisible(true); // Show the modal
    setIsOrder(false);
  };
  const showModal2 = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent link navigation
    event.stopPropagation(); // Stop event propagation
    setIsModalVisible(true); // Show the modal
    setIsOrder(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Hide the modal
  };

  return (
    <>
      {/* Wrap the entire card in Link */}
      <Link href={`/order/${product?.id}`}>
        <div className="bg-white md:w-full w-[75%] text-center border">
          <Fade>
            <Image
              src={product?.photo ? product?.photo[0]?.img : "/img2.jpg"}
              alt="img1"
              width={150}
              height={230}
              className="mx-auto bg-[#E5E5E5] w-full h-[200px]"
            />
          </Fade>
          <p className="text-center text-sm font-medium mt-2">
            {product?.name}
          </p>
          <p className="my-3">{product?.price}tk</p>
          <div className="flex items-center justify-center pb-4 gap-1">
            <Button
              size="middle"
              className="text-[12px] bg-[#00276C] text-white font-semibold"
              onClick={showModal} // Open modal on button click
            >
              কার্টে রাখুন
            </Button>
            <Button
              size="middle"
              onClick={showModal2}
              className="text-[12px] bg-primaryColor text-black font-semibold"
            >
              অর্ডার করুন
            </Button>
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
    </>
  );
};

export default MYProductCard;
