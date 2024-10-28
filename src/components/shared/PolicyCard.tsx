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
      title: "হাই-কোয়ালিটি পণ্য",
      img: quality,
      details: "উচ্চমানের এবং নির্ভরযোগ্য পণ্য সরবরাহ",
    },
    {
      id: 2,
      title: "24/7 লাইভ সাহায্য",
      img: call,
      details: "সকল সময়ে গ্রাহক সহায়তা এবং সাহায্য",
    },
    {
      id: 3,
      title: "এক্সপ্রেস শিপিং",
      img: shipped,
      details: "দ্রুত এবং সুরক্ষিত শিপিং সুবিধা",
    },
    {
      id: 4,
      title: "৭ দিনের রিটার্ন পলিসি",
      img: returnPlo,
      details: "৭ দিনের মধ্যে সহজে রিটার্ন করার সুবিধা",
    },
  ];

  return (
    <div className="w-full container mx-auto md:px-0 px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 py-8">
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
