/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { FaMinus, FaPhone, FaPlus, FaShoppingCart } from "react-icons/fa";

const ViewProductInformation = ({ productData }: { productData: any }) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeChange = (checkedValues: string[]) => {
    setSelectedSizes(checkedValues);
  };

  return (
    <div className=" bg-gray-100 p-5 ">
      <div>
        <h2 className="text-lg font-semibold primaryColor">
          {productData?.name}
        </h2>
        <p className="text-slate-900 text-lg">Tk- {productData?.price}</p>
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
              onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
            >
              <FaPlus size={16} className="text-white font-bold" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg">Size:</p>
        <Checkbox.Group
          onChange={handleSizeChange}
          value={selectedSizes}
          className="flex flex-wrap gap-2"
        >
          {productData?.size?.map((size: string) => (
            <Checkbox key={size} value={size}>
              {size}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <div className=" space-y-3 pt-6">
        <button className="bg-[#ccb864]  w-full font-bold text-white py-2 px-4 flex justify-center items-center gap-3">
          {" "}
          অর্ডার করুন <FaShoppingCart />
        </button>
        <button className="bg-[#ccb864] w-full font-bold text-white py-2 px-4 flex justify-center items-center gap-3">
          {" "}
          কার্টে রাখুন <FaShoppingCart />
        </button>
        <button className="bg-[#ccb864] w-full font-bold text-white py-2 px-4 flex justify-center items-center gap-3">
          {" "}
          0847674374 <FaPhone />
        </button>
      </div>
    </div>
  );
};

export default ViewProductInformation;
