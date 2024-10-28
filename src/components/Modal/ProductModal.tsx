/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import OrderProductSlider from "@/app/(withCommonLayout)/order/orderComponents/OrderProductSlider";
import { Button, Checkbox, Modal, Radio } from "antd";
import { useState } from "react";
import QuantitySelector from "../shared/QuantitySelector";
import { FaMinus, FaPhone, FaPlus, FaShoppingCart } from "react-icons/fa";
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
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeChange = (checkedValues: string[]) => {
    setSelectedSizes(checkedValues);
  };

  return (
    <Modal
      visible={isModalVisible}
      onCancel={onClose}
      width={800}
      footer={false}
    >
      <div className=" w-full flex flex-col md:flex-row items-stretch justify-start gap-10">
        {/* Product Image Slider */}
        <div className="flex-1 md:w-1/2 w-full">
          <OrderProductSlider product={product} width="300px" />
        </div>

        {/* Product Details */}
        <div className="flex-1  md:w-1/2 w-full md:text-2xl text-lg  space-y-4 text-left bg-gray-100 p-3">
          <p className="font-semibold primaryColor">{product?.name}</p>
          <p className="font-semibold text-slate-800 ">Tk- {product?.price}</p>
          <div className="flex items-center gap-2">
            <p className="text-lg">Size:</p>
            <Checkbox.Group
              onChange={handleSizeChange}
              value={selectedSizes}
              className="flex flex-wrap gap-2"
            >
              {product?.size?.map((size: string) => (
                <Checkbox key={size} value={size}>
                  {size}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="flex items-center gap-3">
              <p className="text-lg">Quantity:</p>
              <div className="flex items-center font-bold gap-4">
                <button
                  className="bg-[#ccb864] h-8 w-8 rounded-full flex justify-center items-center"
                  onClick={() =>
                    setQuantity((prevQuantity) =>
                      prevQuantity > 1 ? prevQuantity - 1 : 1
                    )
                  }
                >
                  <FaMinus size={16} className="text-white font-bold" />
                </button>
                {quantity}
                <button
                  className="bg-[#ccb864] h-8 w-8 rounded-full flex justify-center items-center"
                  onClick={() =>
                    setQuantity((prevQuantity) => prevQuantity + 1)
                  }
                >
                  <FaPlus size={16} className="text-white font-bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex flex-col gap-4 w-full">
            {isOrder ? (
              <button className="bg-[#ccb864] text-sm  w-full font-bold text-white py-2 px-4 flex justify-center items-center gap-3">
                {" "}
                অর্ডার করুন <FaShoppingCart />
              </button>
            ) : (
              <button className="bg-[#ccb864] text-sm w-full font-bold text-white py-2 px-4 flex justify-center items-center gap-3">
                {" "}
                কার্টে রাখুন <FaShoppingCart />
              </button>
            )}
            <button className="bg-[#ccb864] text-sm w-full font-bold text-white py-2 px-4 flex justify-center items-center gap-3">
              {" "}
              0847674374 <FaPhone />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
