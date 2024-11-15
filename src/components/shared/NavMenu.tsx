/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { List } from "antd";
import Link from "next/link";
import { useGetAllCategoryQuery } from "@/redux/api/category/categoryApi";

const NavMenu = ({onClose2}:{onClose2:() => void}) => {
  // Fetching categories
  const { data, isLoading } = useGetAllCategoryQuery({});
  const categoryData = data?.data?.data || [];

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

  return (
    <div className="p-0">
      <div className="bg-primaryColor flex justify-between px-4 items-center cursor-pointer">
        <div className="flex items-center gap-3">
          <FaBars className="text-white" />
          <p className="text-white font-semibold lg:text-base md:text-sm hidden md:block">
            BROWSE CATEGORIES
          </p>
        </div>
        <RiArrowDropDownLine size={30} className="text-white" />
      </div>
      <div className="w-full p-4 bg-white rounded-lg shadow-md">
        <List
        className="h-96 overflow-y-auto "
          dataSource={menuItems || []}
          renderItem={(item: any) => (
            <Link href={item.path} key={item?.key} onClick={onClose2}>
              <List.Item className="border-b last:border-b-0">
                <span className="text-lg font-medium">{item?.label}</span>
              </List.Item>
              <hr />
            </Link>
          )}
        />
      </div>
    </div>
  );
};

export default NavMenu;
