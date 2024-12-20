/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Checkbox, Select, Spin } from "antd";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useGetCartFilteringQuery } from "@/redux/api/product/productApi";
import { useEffect, useMemo, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useCreateOrderMutation } from "@/redux/api/OrderApi/orderApi";
import { toast } from "sonner";
import { clearCart, removeFromCart } from "@/redux/Slice/cartSlice";
import { TiDelete } from "react-icons/ti";

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
  contact: number;
  address: string;
  deliveryCharge: string;
};

const CheckOutPage = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const items = useAppSelector((state: RootState) => state.carts.items);
  const [selectedSizes, setSelectedSizes] = useState<{
    [key: string]: string[];
  }>({});

  const [createOrder, { isLoading: creating }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCartFilteringQuery({});
  if (isLoading) {
    <h1 className=" pt-3 flex justify-center items-center">
      <Spin />
    </h1>;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      deliveryCharge: "60",
    },
  });

  const productData: ProductData[] = data?.data || [];
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
    data?.data?.forEach((product: ProductData) => {
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
    const toastId = toast.loading("Creating...");
    const orderUserData = {
      deliveryCharge: deliveryCharge,
      name: data.name,
      contact: String(data.contact),
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
    try {
      const res = await createOrder(confirmOrderData);
      if (res?.data?.statusCode === 201) {
        toast.success(res?.data?.message, { id: toastId, duration: 1000 });
        dispatch(clearCart());
        reset();
      } else {
        toast.error(res?.data?.message, { id: toastId, duration: 1000 });
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return (
    <div className="container mx-auto  grid lg:grid-cols-2 gap-8 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-gray-100 p-6 rounded-md space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4 primaryColor oswaldRegular">
          Billing Address
        </h2>

        <div>
          <label className="block font-medium  text-slate-700 mb-1">
            আপনার নাম
          </label>
          <input
            type="text"
            placeholder="আপনার নাম লিখুন"
            {...register("name", { required: true })}
            className="w-full p-2 px-6 border border-gray-100 rounded-md focus:outline-none focus:none focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium text-slate-700 mb-1">
            আপনার মোবাইল নাম্বার
          </label>
          <input
            type="number"
            placeholder="আপনার মোবাইল নাম্বার লিখুন"
            {...register("contact", {
              required: true,
              pattern: {
                value: /^\d{11}$/, // Regular expression to match exactly 11 digits
                message: "Contact number must be 11 digits",
              },
            })}
            className="w-full p-2 border border-gray-100 px-6 rounded-md focus:outline-none focus:none focus:ring-blue-500"
          />
          {errors.contact && (
            <span className="text-red-500">
              {errors.contact.message || "This field is required"}
            </span>
          )}
        </div>

        <div>
          <label className="block font-medium text-slate-700 mb-1">
            আপনার সম্পূর্ণ ঠিকানা
          </label>
          <textarea
            placeholder="আপনার ঠিকানা লিখুন"
            {...register("address", { required: true })}
            className="w-full p-2 border border-gray-100 px-6 rounded-md focus:outline-none focus:none focus:ring-blue-500"
          ></textarea>
          {errors.address && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label className="block font-medium text-slate-700 mb-1">
            ডেলিভারি চার্জ
          </label>
          <Select
            className="w-full  focus:outline-none focus:none"
            value={watch("deliveryCharge")}
            onChange={(value) => setValue("deliveryCharge", value)}
            options={[
              { value: "60", label: "ঢাকার ভিতরে (৬০ Tk)" },
              { value: "120", label: "ঢাকার বাহিরে (১২০ Tk)" },
            ]}
          />
        </div>

        <button
          disabled={creating}
          type="submit"
          className="w-full bg-primaryColor text-white py-2 px-6 rounded-md font-medium mt-4"
        >
          অর্ডার কনফার্ম করুন
        </button>
      </form>

      <div className="border border-gray-100 bg-gray-100 p-6 rounded-md ">
        <h2 className="text-2xl oswaldRegular font-semibold mb-4 primaryColor">
          Cart - {cartsData.length || 0} items
        </h2>

        <div className=" hidden md:block">
          <table className=" w-full text-left border-collapse">
            <thead>
              <tr className=" text-slate-700">
                <th className="border p-2 text-sm md:text-base">Image</th>
                <th className="border p-2 text-sm md:text-base ">Name</th>
                <th className="border p-2 text-sm md:text-base ">Quantity</th>
                <th className="border p-2 text-sm md:text-base ">Price</th>
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
                  <td className="border p-2 text-sm md:text-base">
                    {item.name}
                  </td>
                  <td className="border p-2">
                    <div className=" space-y-2">
                      <div className="flex items-center font-bold gap-4">
                        <button
                          className="bg-primaryColor h-6 w-6 rounded-full flex justify-center items-center"
                          onClick={() => handleQuantityChange(item?.id, false)}
                        >
                          <FaMinus size={12} className="text-white font-bold" />
                        </button>
                        {quantities[item?.id] || 1}
                        <button
                          className="bg-primaryColor h-6 w-6 rounded-full flex justify-center items-center"
                          onClick={() => handleQuantityChange(item?.id, true)}
                        >
                          <FaPlus size={12} className="text-white font-bold" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 md:gap-2">
                        <Checkbox.Group
                          onChange={(checkedValues) =>
                            handleSizeChange(item.id, checkedValues as string[])
                          }
                          value={selectedSizes[item.id] || []}
                          className="flex flex-wrap gap-1 md:gap-2"
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
                  <td className="border p-2 relative">
                    <div className="flex justify-between items-start text-sm md:text-base">
                      <h1>Tk- {item.price * (quantities[item.id] || 1)}</h1>
                    </div>
                    <div
                      onClick={() => dispatch(removeFromCart(item?.id))}
                      className="absolute top-0 right-0 cursor-pointer "
                    >
                      <TiDelete className=" w-6 h-6 text-red-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" block md:hidden">
          <table className=" w-full text-left border-collapse">
            <thead>
              <tr className=" text-slate-700">
                <th className="border p-2 text-sm md:text-base">Image</th>
                <th className="border p-2 text-sm md:text-base ">
                  Product Information
                </th>
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
                  <td className="border px-6 py-2 space-y-2 text-sm md:text-base relative">
                    <h1> {item.name}</h1>
                    <div className=" space-y-2">
                      <div className="flex items-center font-bold gap-4">
                        <button
                          className=" bg-gray-200   h-6 w-6 rounded-full flex justify-center items-center"
                          onClick={() => handleQuantityChange(item?.id, false)}
                        >
                          <FaMinus
                            size={12}
                            className="text-slate-800 font-bold"
                          />
                        </button>
                        {quantities[item?.id] || 1}
                        <button
                          className="bg-gray-200  h-6 w-6 rounded-full flex justify-center items-center"
                          onClick={() => handleQuantityChange(item?.id, true)}
                        >
                          <FaPlus
                            size={12}
                            className=" text-slate-800 font-bold"
                          />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-1 md:gap-2">
                        <Checkbox.Group
                          onChange={(checkedValues) =>
                            handleSizeChange(item.id, checkedValues as string[])
                          }
                          value={selectedSizes[item.id] || []}
                          className="flex flex-wrap gap-1 md:gap-2"
                        >
                          {item.size.map((size) => (
                            <Checkbox key={size} value={size}>
                              {size}
                            </Checkbox>
                          ))}
                        </Checkbox.Group>
                      </div>
                    </div>
                    <div className="flex justify-between items-start text-sm md:text-base">
                      <h1>Tk- {item.price * (quantities[item.id] || 1)}</h1>
                    </div>
                    <div
                      onClick={() => dispatch(removeFromCart(item?.id))}
                      className="absolute top-0 right-0 cursor-pointer "
                    >
                      <TiDelete className=" w-6 h-6 text-red-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 w-full">
          <div className="space-y-2 text-slate-700 oswaldRegular  text-sm md:text-base">
            <div className="flex justify-end gap-20">
              <span>সাবটোটাল :</span>
              <span>{subtotal} Tk</span>
            </div>
            <div className=" border border-b border-gray-200 w-full"></div>
            <div className="flex justify-end gap-24">
              <span className=" mr-1">ডেলিভারি চার্জ : </span>
              <span> {deliveryCharge} Tk</span>
            </div>
            <div className=" border border-b border-gray-200 w-full"></div>
            <div className="flex justify-end gap-20 font-semibold">
              <span>টোটাল : </span>
              <span>{totalPrice} Tk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
