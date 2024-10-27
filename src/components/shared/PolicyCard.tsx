import Image from "next/image";
import React from "react";

const PolicyCard = () => {
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-20 py-10">
      <div className="flex justify-center items-center gap-2 border-r-2">
        <Image
          src="/location.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold">Free Delivery</p>
          <p className="text-base font-medium">On all order above BDT</p>
          <p className="text-base font-medium">5000</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-2">
        <Image
          src="/arrowIcon.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold">Easy 7 days return</p>
          <p className="text-base font-medium">7 days Easy return Guaranty</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-2">
        <Image
          src="/earth.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold">International Warranty</p>
          <p className="text-base font-medium">1 year official warranty</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-0">
        <Image
          src="/lock.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold">private2 100% secure checkout</p>
          {/* <p className="text-base font-medium">On all order above BDT</p> */}
          <p className="text-base font-medium">COD/Mobile banking/visa</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-2">
        <Image
          src="/message.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold text-blue-500">
            About SoftitGlobal
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-2">
        <Image
          src="/location.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold text-blue-500">Delivery Policy</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-2">
        <Image
          src="/terms.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold text-blue-500">Terms & Condition</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-r-0">
        <Image
          src="/arrowIcon.png"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
          alt="icon"
        />
        <div className="space-y-1">
          <p className="text-base font-bold text-blue-500">Return Policy</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
