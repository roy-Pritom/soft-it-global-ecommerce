/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import OrderProductSlider from "@/app/(withCommonLayout)/order/orderComponents/OrderProductSlider";
import { Button, Checkbox, Modal, Radio } from "antd";
import { useState } from "react";
import QuantitySelector from "../shared/QuantitySelector";
import { FaMinus, FaPhone, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/Slice/cartSlice";
import { toast } from "sonner";
import ModalImageShow from "./ModalImageShow";
import ModalProductShow from "./ModalProductShow";
interface CartModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
  title?: string;
  isOrder?: boolean;
}
const ProductModal = ({
  isModalVisible,
  onClose,
  product,
  title,
  isOrder = false,
}: CartModalProps) => {
  return (
    <Modal
      visible={isModalVisible}
      onCancel={onClose}
      width={800}
      footer={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-10">
        <div className=" h-[28rem] bg-gray-100">
          <ModalImageShow productData={product} />
        </div>
        <div className="flex flex-col h-[28rem] bg-gray-100">
          <ModalProductShow productData={product} />
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
