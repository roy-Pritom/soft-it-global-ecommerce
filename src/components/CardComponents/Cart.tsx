/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Image } from "antd";
import { useGetCartFilteringQuery } from "@/redux/api/product/productApi";
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
  const { data, isLoading } = useGetCartFilteringQuery({});
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.carts.items);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const productData: ProductData[] = data?.data || [];
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
