/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Checkbox, Select, Tooltip } from "antd";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useGetAllProductQuery } from "@/redux/api/product/productApi";
import { useEffect, useMemo, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { GiCrossMark } from "react-icons/gi";

interface ProductData {
  categoryId: string;
  createdAt: string;
  discount: number;
  id: string;
  isDelete: boolean;
  name: string;
  photo: Photo[];
  price: number;
  size: string[];
  sold: number;
  totalProduct: number;
  type: string;
  updateAt: string;
}

interface Photo {
  id: string;
  img: string;
  isDeleted: boolean;
  productId: string;
}

type FormData = {
  name: string;
  contact: string;
  address: string;
  deliveryCharge: string;
};

const CheckOutPage = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const items = useAppSelector((state: RootState) => state.carts.items);
  const [selectedSizes, setSelectedSizes] = useState<{
    [key: string]: string[];
  }>({});

  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      deliveryCharge: "60",
    },
  });

  const productData: ProductData[] = data?.data?.data || [];
  const productIdsInCart = items.map((item) => item.productId);
  const cartsData = productData.filter((product: any) =>
    productIdsInCart.includes(product.id)
  );

  const handleQuantityChange = (id: string, increment: boolean) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: increment
        ? (prevQuantities[id] || 1) + 1
        : Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  useEffect(() => {
    const initialSizes: { [key: string]: string[] } = {};
    data?.data?.data?.forEach((product: ProductData) => {
      initialSizes[product.id] = [product.size[0]];
    });
    setSelectedSizes(initialSizes);
  }, [data]);

  const handleSizeChange = (id: string, checkedValues: string[]) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [id]: checkedValues,
    }));
  };

  const subtotal = useMemo(() => {
    return cartsData.reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      return total + item.price * quantity;
    }, 0);
  }, [cartsData, quantities]);

  const deliveryCharge = Number(watch("deliveryCharge"));
  const totalPrice = subtotal + deliveryCharge;

  const onSubmit = async (data: any) => {
    const orderUserData = {
      deliveryCharge: deliveryCharge,
      name: data.name,
      contact: data.contact,
      address: data.address,
      totalPrice: totalPrice,
    };
    const productOrderData = cartsData.map((data: any) => ({
      productId: data.id,
      quantity: quantities[data.id] || 1,
      size: selectedSizes[data.id] || data.sizes[0] || "N/A",
    }));
    const confirmOrderData = {
      ...orderUserData,
      productOrderData,
    };
    console.log("productOrderData", confirmOrderData);
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
            {...register("contact", { required: true })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.contact && (
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
            value={watch("deliveryCharge")}
            onChange={(value) => setValue("deliveryCharge", value)}
            options={[
              { value: "60", label: "ঢাকার ভিতরে (৬০ Tk)" },
              { value: "120", label: "ঢাকার বাহিরে (১২০ Tk)" },
            ]}
          />
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
          Cart - {cartsData.length || 0} items
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Image</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              {/* hello */}
            </tr>
          </thead>
          <tbody>
            {cartsData.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">
                  <Image
                    width={64}
                    height={64}
                    src={item.photo[0]?.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">
                  <div className=" space-y-2">
                    <div className="flex items-center font-bold gap-4">
                      <button
                        className="bg-[#ccb864] h-6 w-6 rounded-full flex justify-center items-center"
                        onClick={() => handleQuantityChange(item?.id, false)}
                      >
                        <FaMinus size={16} className="text-white font-bold" />
                      </button>
                      {quantities[item?.id] || 1}
                      <button
                        className="bg-[#ccb864] h-6 w-6 rounded-full flex justify-center items-center"
                        onClick={() => handleQuantityChange(item?.id, true)}
                      >
                        <FaPlus size={16} className="text-white font-bold" />
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Checkbox.Group
                        onChange={(checkedValues) =>
                          handleSizeChange(item.id, checkedValues as string[])
                        }
                        value={selectedSizes[item.id] || []}
                        className="flex flex-wrap gap-2"
                      >
                        {item.size.map((size) => (
                          <Checkbox key={size} value={size}>
                            {size}
                          </Checkbox>
                        ))}
                      </Checkbox.Group>
                    </div>
                  </div>
                </td>
                <td className="border p-2">
                  <div className="flex justify-between items-start">
                    <h1>Tk- {item.price * (quantities[item.id] || 1)}</h1>
                    <Tooltip title="Delete">
                      <Button
                        size="small"
                        icon={<GiCrossMark size={15} />}
                        danger
                        className="ml-2"
                      />
                    </Tooltip>
                  </div>
                </td>
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
              <span>{deliveryCharge} ৳</span>
            </div>
            <div className="flex justify-between gap-20 font-semibold">
              <span>টোটাল</span>
              <span>{totalPrice} ৳</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
