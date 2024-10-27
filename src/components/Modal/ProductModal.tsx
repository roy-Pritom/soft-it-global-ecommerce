"use client";
import OrderProductSlider from "@/app/(withCommonLayout)/order/orderComponents/OrderProductSlider";
import { Button, Modal, Radio } from "antd";
import { useState } from "react";
import QuantitySelector from "../shared/QuantitySelector";
interface CartModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
  title: string;
  isOrder?: boolean;
}
const ProductModal = ({
  isModalVisible,
  onClose,
  product,
  title,
  isOrder = false,
}: CartModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSizeChange = (e: any) => {
    setSelectedSize(e.target.value);
  };

  return (
    <Modal
      title={
        <div className="bg-yellow-300 px-4 py-2 rounded-md text-center font-bold">
          {title}
        </div>
      }
      visible={isModalVisible}
      onCancel={onClose}
      width={800}
      footer={[
        <Button key="ok" onClick={onClose}>
          OK
        </Button>,
      ]}
    >
      <div className="flex items-start justify-start gap-10">
        {/* Product Image Slider */}
        <div>
          <OrderProductSlider width="300px" />
        </div>

        {/* Product Details */}
        <div className="md:text-2xl text-lg text-black space-y-4 text-left">
          <p className="font-semibold">{product?.name}</p>
          <p className="font-extrabold">{product?.price} TK</p>

          {/* Size Selection */}
          <div className="flex items-center gap-2 space-y-0">
            <p className="font-semibold">Size:</p>
            <Radio.Group
              onChange={handleSizeChange}
              value={selectedSize}
              className="flex flex-wrap gap-2"
            >
              {product?.size?.map((size: string) => (
                <Radio key={size} value={size}>
                  {size}
                </Radio>
              ))}
            </Radio.Group>
          </div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex justify-start items-center gap-3 mt-4">
            <QuantitySelector />
            {isOrder ? (
              <Button
                size="large"
                className="text-[12px] bg-primaryColor text-black font-semibold"
              >
                অর্ডার করুন
              </Button>
            ) : (
              <Button
                size="large"
                className="text-[12px] bg-[#00276C] text-white font-semibold"
              >
                কার্টে রাখুন
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
