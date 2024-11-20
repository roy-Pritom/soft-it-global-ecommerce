/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useRef, useState } from "react";
import ProductModal from "../Modal/ProductModal";
import { Rate } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <Link href={`/view/${product.id}`}>
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5 },
          }}
          className="max-w-sm overflow-hidden  rounded-lg bg-gray-100"
        >
          <div className="relative w-full h-64">
            <Image
              src={product?.photo[0]?.img}
              alt="productImg"
              layout="fill"
              objectFit="cover"
              className="p-1"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <Rate
                allowHalf
                defaultValue={product?.rating}
                style={{ fontSize: "16px" }}
                className="custom-rating"
                count={5}
                disabled
              />
              <span className="text-gray-500 ml-2 text-sm">
                {product?.rating}
              </span>
            </div>
            <h2 className="text-base font-semibold truncate text-gray-500">
              {product?.name}
            </h2>
            <div className="flex items-baseline mt-1">
              <span className="text-lg font-medium text-gray-900">
                TK. {product?.price}
              </span>
              <span className="text-sm line-through ml-2 text-gray-500">
                TK. {product?.price / (1 - product?.discount / 100)}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.0, backgroundColor: "#4d4d00" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primaryColor rounded-full w-full flex justify-center items-center py-2 gap-2 mt-2 text-white font-medium"
              onClick={showModal}
            >
              <FaCartShopping /> Add to Cart
            </motion.button>
          </div>
        </motion.div>
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
