"use client"
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { FaShoppingCart } from "react-icons/fa";

const CheckOutBox = () => {
  const {items}=useAppSelector((state : RootState)=>state.carts)
  return (
    <div className="w-16 h-20 rounded-lg z-10 ">
      <div className="bg-[#00276C] p-1 flex flex-col justify-center items-center gap-1  rounded-t-lg">
        <FaShoppingCart size={25} fill="white" color="white" />
        <p className="text-white font-bold text-xs">{items?.length} items</p>
      </div>
      <div className="bg-primaryColor text-center rounded-b-lg">
        <p className="text-white font-bold text-xs">6100</p>
      </div>
    </div>
  );
};

export default CheckOutBox;
