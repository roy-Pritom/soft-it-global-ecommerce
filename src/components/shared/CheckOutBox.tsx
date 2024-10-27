import { FaShoppingCart } from "react-icons/fa";

const CheckOutBox = () => {
  return (
    <div className="w-16 h-20 rounded-lg ">
      <div className="bg-[#00276C] p-1 flex flex-col justify-center items-center gap-1  rounded-t-lg">
        <FaShoppingCart size={25} fill="white" color="white" />
        <p className="text-white font-bold text-xs">2 items</p>
      </div>
      <div className="bg-[#F39305] text-center rounded-b-lg">
        <p className="text-white font-bold text-xs">6100</p>
      </div>
    </div>
  );
};

export default CheckOutBox;
