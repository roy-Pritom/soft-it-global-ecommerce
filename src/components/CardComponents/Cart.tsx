import { Image } from "antd";
import DynamicStarRating from "../ui/DynamicStarRating ";
import QuantitySelector from "../shared/QuantitySelector";
import CartButton from "./CartButton";

const Cart = () => {
  return (
    <div className=" grid grid-cols-1 gap-8">
      {Array(5)
        .fill(null)
        ?.map((item: string, index: number) => (
          <div className="bg-white" key={index}>
            <div className="grid grid-cols-5 gap-12">
              <div className="col-span-2">
                <Image
                  width={80}
                  height={80}
                  src="https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg"
                  alt="catImg"
                />
                <QuantitySelector />
              </div>
              <div className="col-span-3 space-y-3">
                <p className="text-sm font-semibold">
                  RED TAPE Walking Sports Shoes for Men
                </p>
                <div className="flex items-center justify-start gap-3">
                  <DynamicStarRating rating={4.2} isFlex={true} />
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-normal text-gray-300 line-through">
                    $500
                  </p>
                  <span className="text-sm font-semibold">$300</span>
                </div>
              </div>
            </div>
            <div className="w-full   mt-6">
              <CartButton />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
