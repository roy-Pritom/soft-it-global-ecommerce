"use client";
import OrderProductSlider from "@/app/(withCommonLayout)/order/orderComponents/OrderProductSlider";
import { useGetSingleProductQuery } from "@/redux/api/product/productApi";
import { Button, Modal, Radio } from "antd";
import { useState } from "react";
interface CartModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productId: any;
  title: string;
}
const ProductModal = ({
  isModalVisible,
  onClose,
  productId,
  title,
}: CartModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  //   const { data } = useGetSingleProductQuery(productId);
  const product = {};
  console.log("p", productId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSizeChange = (e: any) => {
    setSelectedSize(e.target.value);
  };
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onCancel={onClose}
      width={800}
      footer={[
        <Button key="ok" onClick={onClose}>
          OK
        </Button>,
      ]}
    >
      <div className="flex items-center justify-between">
        <div className="">
          <OrderProductSlider width="300px" />
        </div>
        <div className="text-lg text-black">
          <p className=" font-semibold">{product?.name}</p>
          <p className="font-extrabold">{product?.price} TK</p>
          <div className="">
            <p className="font-semibold">Size :</p>
            <Radio.Group
              onChange={handleSizeChange}
              value={selectedSize}
              optionType="button"
              buttonStyle="solid"
            >
              {product?.size?.map((size: string) => (
                <Radio.Button key={size} value={size}>
                  {size}
                </Radio.Button>
              ))}
            </Radio.Group>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
