/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Checkbox, Image } from "antd";
import { useGetAllProductQuery } from "@/redux/api/product/productApi";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { removeFromCart } from "@/redux/Slice/cartSlice";

export interface ProductData {
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

export interface Photo {
  id: string;
  img: string;
  isDeleted: boolean;
  productId: string;
}

const Cart = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  console.log("Quantity", quantities);
  const [selectedSizes, setSelectedSizes] = useState<{
    [key: string]: string[];
  }>({});

  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.carts.items);
  useEffect(() => {
    const initialSizes: { [key: string]: string[] } = {};
    data?.data?.data.forEach((product: ProductData) => {
      initialSizes[product.id] = [product.size[0]];
    });
    setSelectedSizes(initialSizes);
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleQuantityChange = (id: string, increment: boolean) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: increment
        ? (prevQuantities[id] || 1) + 1
        : Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  const handleSizeChange = (id: string, checkedValues: string[]) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [id]: checkedValues,
    }));
  };

  const productData: ProductData[] = data?.data?.data || [];
  const productIdsInCart = items.map((item) => item.productId);
  const cartsData = productData.filter((product: any) =>
    productIdsInCart.includes(product.id)
  );

  return (
    <div className="grid grid-cols-1 gap-4">
      {cartsData.map((product: ProductData, index: number) => (
        <div
          className={index % 2 === 0 ? "bg-white p-2" : "bg-gray-100 p-2"}
          key={product.id}
        >
          <div className="relative">
            <div className="flex gap-6">
              <Image
                width={80}
                height={80}
                src={
                  product.photo[0]?.img ||
                  "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg"
                }
                alt="Product Image"
                className="border"
              />
              <div className="space-y-2">
                <p className="text-sm font-semibold">{product.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    Tk- {product.price}
                  </span>
                  <p className="text-sm font-normal text-gray-300 line-through">
                    %{product.discount}
                  </p>
                </div>

                <div className="flex items-center font-bold gap-4">
                  <button
                    className="bg-[#ccb864] h-6 w-6 rounded-full flex justify-center items-center"
                    onClick={() => handleQuantityChange(product.id, false)}
                  >
                    <FaMinus size={16} className="text-white font-bold" />
                  </button>
                  {quantities[product.id] || 1}
                  <button
                    className="bg-[#ccb864] h-6 w-6 rounded-full flex justify-center items-center"
                    onClick={() => handleQuantityChange(product.id, true)}
                  >
                    <FaPlus size={16} className="text-white font-bold" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-2">
                <p className="text-lg">Size:</p>
                <Checkbox.Group
                  onChange={(checkedValues) =>
                    handleSizeChange(product.id, checkedValues as string[])
                  }
                  value={selectedSizes[product.id] || []}
                  className="flex flex-wrap gap-2"
                >
                  {product.size.map((size) => (
                    <Checkbox key={size} value={size}>
                      {size}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </div>
            </div>

            <div
              onClick={() => dispatch(removeFromCart(product?.id))}
              className="absolute top-0 -right-2 -mt-2 cursor-pointer"
            >
              <FaX size={16} className="text-red-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
