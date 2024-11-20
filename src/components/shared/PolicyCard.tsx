"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import quality from "../../../public/Logo/quality-service.png";
import call from "../../../public/Logo/call-center.png";
import shipped from "../../../public/Logo/shipped.png";
import returnPlo from "../../../public/Logo/return.png";

const PolicyCard = () => {
  const features = [
    {
      id: 1,
      title: "High-Quality Products",
      img: quality,
      details: "Supplying high-quality and reliable products",
    },
    {
      id: 2,
      title: "24/7 Live Support",
      img: call,
      details: "Customer support and assistance available at all times",
    },
    {
      id: 3,
      title: "Express Shipping",
      img: shipped,
      details: "Fast and secure shipping service",
    },
    {
      id: 4,
      title: "7-Day Return Policy",
      img: returnPlo,
      details: "Easy returns within 7 days",
    },
  ];

  return (
    <div className="w-full container mx-auto md:px-0 px-8 md:my-20 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 py-2">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            whileHover={{
              scale: 1.05,
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
                className="w-full text-primaryColor"
              />
            </motion.div>
            <h3 className="text-2xl text-slate-800 font-semibold mb-2 text-center oswaldRegular">
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
