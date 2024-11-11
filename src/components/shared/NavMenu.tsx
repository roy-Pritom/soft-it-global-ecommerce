/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Dropdown, Menu } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";

const NavMenu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname();

  // Fetching categories
  const { data,isLoading } = useGetAllCategoryQuery({});
  const categoryData = data?.data?.data || [];

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 768; // Medium screen and up
    if (pathname === "/" && isLargeScreen) {
      setDropdownVisible(true); // Keep dropdown open on homepage for large screens
    } else {
      setDropdownVisible(false); // Close dropdown on other pages or small screens
    }
  }, [pathname]);

  const handleVisibleChange = (visible: boolean) => {
    const isLargeScreen = window.innerWidth >= 768;
    // On homepage and large screens, dropdown should stay open
    if (pathname === "/" && isLargeScreen) {
      setDropdownVisible(true);
    } else {
      setDropdownVisible(visible); // Regular dropdown behavior
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-300 animate-pulse h-[445px] w-full rounded-md px-2 pt-2 md:block hidden">
        <div className="flex items-center gap-3 ml-1 pt-2">
        <p className="bg-gray-400 animate-pulse h-8 w-10  rounded-md"></p>
        <p className="bg-gray-400 animate-pulse h-8 w-32  rounded-md"></p>

        </div>
        <p className="bg-gray-400 animate-pulse h-8 w-32  rounded-md mt-6 ml-1"></p>
        <p className="bg-gray-400 animate-pulse h-8 w-32  rounded-md mt-6 ml-1"></p>
        <p className="bg-gray-400 animate-pulse h-8 w-32  rounded-md mt-6 ml-1"></p>
        <p className="bg-gray-400 animate-pulse h-8 w-32  rounded-md mt-6 ml-1"></p>
        <p className="bg-gray-400 animate-pulse h-8 w-32  rounded-md mt-6 ml-1"></p>
    
      </div>
    );
  }

  const menuItems = categoryData?.map((category: any) => ({
    key: category?.id,
    label: category?.name,
    path: `/shop/${category?.id}`,
  }));

  const menu = (
    <Menu
      className="h-[450px] rounded-none shadow-none"
      items={menuItems.map((item: any) => ({
        key: item.key,
        label: (
          <Link
            href={item.path}
            className={`text-lg font-semibold ${
              item.key === "8" ? "border-none" : "border-b"
            } pb-2 w-full`}
          >
            {item.label}
          </Link>
        ),
      }))}
    />
  );

  return (
    <div
      onMouseEnter={() => setDropdownVisible(true)} // Show dropdown on hover
      onMouseLeave={() => {
        if (pathname !== "/" || window.innerWidth < 768) {
          setDropdownVisible(false); // Hide dropdown only if not on homepage or small screen
        }
      }}
    >
      <Dropdown
        className="py-[13.7px] shadow-sm border-none"
        overlay={menu}
        trigger={[]}
        placement="bottom"
        visible={dropdownVisible}
        onVisibleChange={handleVisibleChange} // Handle click to toggle visibility
      >
        <div className="bg-primaryColor flex justify-between px-4 items-center cursor-pointer">
          <div className="flex items-center gap-3">
            <FaBars className="text-white" />
            <p className="text-white font-semibold lg:text-base md:text-sm hidden md:block">
              BROWSE CATEGORIES
            </p>
          </div>
          <RiArrowDropDownLine size={30} className="text-white" />
        </div>
      </Dropdown>
    </div>
  );
};

export default NavMenu;
