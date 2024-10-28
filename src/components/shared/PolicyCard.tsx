"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PolicyCard = () => {
  const features = [
    {
      id: 1,
      title: "হাই-কোয়ালিটি পণ্য",
      img: "https://cdn-icons-png.flaticon.com/128/2302/2302825.png",
      details: "উচ্চমানের এবং নির্ভরযোগ্য পণ্য সরবরাহ",
    },
    {
      id: 2,
      title: "24/7 লাইভ সাহায্য",
      img: "https://cdn-icons-png.flaticon.com/128/2302/2302825.png",
      details: "সকল সময়ে গ্রাহক সহায়তা এবং সাহায্য",
    },
    {
      id: 3,
      title: "এক্সপ্রেস শিপিং",
      img: "https://cdn-icons-png.flaticon.com/128/2302/2302825.png",
      details: "দ্রুত এবং সুরক্ষিত শিপিং সুবিধা",
    },
    {
      id: 4,
      title: "৭ দিনের রিটার্ন পলিসি",
      img: "https://cdn-icons-png.flaticon.com/128/3437/3437366.png",
      details: "৭ দিনের মধ্যে সহজে রিটার্ন করার সুবিধা",
    },
  ];

  return (
    // <div className="grid grid-cols-4 gap-x-2 gap-y-20 py-10">
    //   <div className="flex justify-center items-center gap-2 border-r-2">
    //     <Image
    //       src="/location.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold">Free Delivery</p>
    //       <p className="text-base font-medium">On all order above BDT</p>
    //       <p className="text-base font-medium">5000</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-2">
    //     <Image
    //       src="/arrowIcon.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold">Easy 7 days return</p>
    //       <p className="text-base font-medium">7 days Easy return Guaranty</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-2">
    //     <Image
    //       src="/earth.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold">International Warranty</p>
    //       <p className="text-base font-medium">1 year official warranty</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-0">
    //     <Image
    //       src="/lock.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold">private2 100% secure checkout</p>
    //       {/* <p className="text-base font-medium">On all order above BDT</p> */}
    //       <p className="text-base font-medium">COD/Mobile banking/visa</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-2">
    //     <Image
    //       src="/message.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold text-blue-500">
    //         About SoftitGlobal
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-2">
    //     <Image
    //       src="/location.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold text-blue-500">Delivery Policy</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-2">
    //     <Image
    //       src="/terms.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold text-blue-500">Terms & Condition</p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center gap-2 border-r-0">
    //     <Image
    //       src="/arrowIcon.png"
    //       width={40}
    //       height={40}
    //       className="w-[40px] h-[40px]"
    //       alt="icon"
    //     />
    //     <div className="space-y-1">
    //       <p className="text-base font-bold text-blue-500">Return Policy</p>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full container mx-auto md:px-0 px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 py-8">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            whileHover={{
              scale: 1.05,
              //   background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
              transition: { duration: 0.5 },
            }}
            className="relative p-6 rounded-lg  overflow-hidden"
          >
            <motion.div className="w-16 h-16 mb-4 mx-auto">
              <Image
                src={feature.img}
                alt={feature.title}
                width={100}
                height={100}
                className="w-full"
              />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PolicyCard;
