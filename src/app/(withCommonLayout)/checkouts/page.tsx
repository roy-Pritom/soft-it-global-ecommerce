"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Select, Radio, Button, Tooltip } from "antd";
import { useState } from "react";
import QuantitySelector from "@/components/shared/QuantitySelector";
import Image from "next/image";
import { GiCrossMark } from "react-icons/gi";

type FormData = {
  name: string;
  phone: string;
  address: string;
  shipping: string;
  paymentMethod: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const CheckOutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Womens Saree S3",
      price: 10,
      quantity: 1,
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Womens Saree S2",
      price: 20,
      quantity: 1,
      image: "path/to/image2.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const subtotal = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="container mx-auto  grid lg:grid-cols-2 gap-8 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-6 rounded-md shadow-sm space-y-4"
      >
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>

        <div>
          <label className="block font-medium mb-1">আপনার নাম</label>
          <input
            type="text"
            placeholder="আপনার নাম লিখুন"
            {...register("name", { required: true })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">আপনার মোবাইল নাম্বার</label>
          <input
            type="text"
            placeholder="আপনার মোবাইল নাম্বার লিখুন"
            {...register("phone", { required: true })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.phone && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">
            আপনার সম্পূর্ণ ঠিকানা
          </label>
          <textarea
            placeholder="আপনার ঠিকানা লিখুন"
            {...register("address", { required: true })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
          {errors.address && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">ডেলিভারি চার্জ</label>
          <Select
            className="w-full"
            {...register("shipping", { required: true })}
            options={[{ value: "Free Shipping", label: "Free Shipping" }]}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Payment Method</label>
          <Radio.Group {...register("paymentMethod", { required: true })}>
            <Radio value="COD">Cash On Delivery</Radio>
            <Radio value="Bkash">Bkash</Radio>
          </Radio.Group>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-md font-semibold mt-4"
        >
          অর্ডার কনফার্ম করুন
        </button>
      </form>

      <div className="border p-6 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Cart - {cartItems.length} items
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Remove</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <Tooltip title="remove item">
                    <Button icon={<GiCrossMark />} danger></Button>
                  </Tooltip>
                </td>
                <td className="border p-2">
                  <Image
                    width={64}
                    height={64}
                    src="https://r.softitglobal.xyz//posadmin/images/product/large/s31728711689.jpg"
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">
                  <QuantitySelector
                    min={1}
                    max={10}
                    onChange={(newQuantity) =>
                      handleQuantityChange(item.id, newQuantity)
                    }
                  />
                </td>
                <td className="border p-2">{item.price * item.quantity} ৳</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-end">
          <div className="space-y-2 ">
            <div className="flex justify-between gap-20">
              <span>সাবটোটাল</span>
              <span>{subtotal} ৳</span>
            </div>
            <div className="flex justify-between gap-20">
              <span>ডেলিভারি চার্জ</span>
              <span>0 ৳</span>
            </div>
            <div className="flex justify-between gap-20 font-semibold">
              <span>টোটাল</span>
              <span>{subtotal} ৳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
