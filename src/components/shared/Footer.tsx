"use client";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white py-6 bg-[url('https://cdn.bitcommerz.com/manfare-bd/media/1710417875567-manfare_bd-id-13.jpeg')] bg-cover bg-center ">
      {/* Overlay for black shadow effect */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Main content with overlay effect */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 px-20">
        {/* Logo and Contact */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Image
              src="/Logo/manio-logo-2.png"
              alt="Manfare Logo"
              width={100}
              height={10}
              className=""
        
            />
          </div>
          <p className="text-gray-400">be exclusive . be you</p>
          <p className="text-lg font-semibold text-primaryColor">
            +880 1711979475
          </p>
          <p className="text-lg font-semibold text-primaryColor">
            +880 1711359277
          </p>
          <p className="text-gray-400">Worktime: SAT - FRI, 10AM - 10PM</p>
          <div className="flex space-x-3 text-gray-400">
            <a href="#" className="hover:text-white">
              <FacebookOutlined className="text-xl" />
            </a>
            <a href="#" className="hover:text-white">
              <InstagramOutlined className="text-xl" />
            </a>
            <a href="#" className="hover:text-white">
              <TwitterOutlined className="text-xl" />
            </a>
            <a href="#" className="hover:text-white">
              <LinkedinOutlined className="text-xl" />
            </a>
          </div>
        </div>

        {/* Information Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">INFORMATION</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Return & Exchange Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">CONTACT INFO</h3>
          <p className="text-gray-400">
          Baridhara, Block-J, Road-2B, Twin Brooks, House-8, Flat-B2, Gulshan, Dhaka 1212.
          </p>
          <p className="text-gray-400">manioofficial@gmail.com</p>
         <div className="flex items-center gap-3">
          <Image src="/website.png" width={24} height={24} className="w-[24px] h-[24px] text-primaryColor" alt="" />
         <Link href='https://maniobd.com' className="text-primaryColor font-bold">
            ManioBd
          </Link>
         </div>
        </div>

        {/* Ad Image */}
        {/* <div className="flex justify-end">
          <Image
            src="https://cdn.bitcommerz.com/manfarebd/media/1716906731281-manfarebd-id-13.jpeg"
            width={250}
            height={200}
            className="rounded-md"
            alt="Ad"
          />
        </div> */}
      </div>

      {/* Payment Options */}
      <div className="relative container mx-auto mt-1">
        <h3 className="text-lg font-semibold text-center mb-4">Pay With</h3>
        <div className="flex justify-center space-x-4 flex-wrap">
          <Image src="/visaCard.svg" alt="Visa" width={60} height={60} className="h-10" />
          <Image src="/nagad.svg" alt="Nagad" width={60} height={60} className="h-10" />
          <Image src="/upay.svg" alt="Upay" width={60} height={60} className="h-10" />
          <Image src="/visaCard.svg" alt="Visa" width={60} height={60} className="h-10" />
          <Image src="/nagad.svg" alt="Nagad" width={60} height={60} className="h-10" />
          <Image src="/upay.svg" alt="Upay" width={60} height={60} className="h-10" />
          <Image src="/visaCard.svg" alt="Visa" width={60} height={60} className="h-10" />
          <Image src="/nagad.svg" alt="Nagad" width={60} height={60} className="h-10" />
          <Image src="/upay.svg" alt="Upay" width={60} height={60} className="h-10" />
          {/* Add more payment option logos as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
