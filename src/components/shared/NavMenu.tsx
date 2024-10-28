"use client";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const categoryId = 2;
const menuItems = [
  { key: "1", label: "Baby Collection", path: `/shop/${categoryId}` },
  { key: "2", label: "Men Panjabi", path: `/shop/${categoryId}` },
  { key: "3", label: "T Shirt", path: `/shop/${categoryId}` },
  { key: "4", label: "Women Fashion", path: `/shop/${categoryId}` },
  { key: "5", label: "Saree", path: `/shop/${categoryId}` },
  { key: "6", label: "Formal Shirt", path: `/shop/${categoryId}` },
  { key: "7", label: "Shoes", path: `/shop/${categoryId}` },
  { key: "8", label: "Windbreaker", path: `/shop/${categoryId}` },
];
const menu = (
  <Menu
    className="h-[450px] rounded-none shadow-none"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items={menuItems?.map((item: any) => ({
      key: item.key,
      label: (
        <Link
          href={item.path}
          className={`text-lg font-semibold  ${
            item.key === "8" ? "border-none" : "border-b"
          } pb-2 w-full`}
        >
          {item.label}
        </Link>
      ),
    }))}
  />
);

const NavMenu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      setDropdownVisible(true); // Show dropdown on home page
    } else {
      setDropdownVisible(false); // Hide dropdown on other pages
    }
  }, [router]);

  const handleVisibleChange = (visible: boolean) => {
    if (window.location.pathname !== "/") {
      setDropdownVisible(visible);
    }
  };
  return (
    <div>
      <Dropdown
        className="py-[13.7px] shadow-sm border-none"
        overlay={menu}
        trigger={["hover"]}
        placement="bottom"
        visible={dropdownVisible}
        onVisibleChange={handleVisibleChange}
      >
        <div className="bg-[#ccb864]  flex justify-between px-4 items-center cursor-pointer">
          <div className="flex items-center gap-3">
            <FaBars className=" text-white" />
            <p className=" text-white font-semibold text-base">
              BROWSE CATEGORIES
            </p>
          </div>
          <RiArrowDropDownLine size={30} className=" text-white" />
        </div>
      </Dropdown>
    </div>
  );
};

export default NavMenu;
