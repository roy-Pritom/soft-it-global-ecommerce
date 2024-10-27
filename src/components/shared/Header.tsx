"use client";
import Image from "next/image";
import { Button, Input } from "antd";
const { Search } = Input;
import type { GetProps } from "antd";
import { MdCall } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { useState } from "react";
import ReusableDrawer from "../ui/ReusableDrawer";
import Cart from "../CardComponents/Cart";
import Link from "next/link";
type SearchProps = GetProps<typeof Input.Search>;
const Header = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className=" py-3 bg-[#F8F9FA]">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
        </Link>
        <Search
          className=" w-1/2 border rounded-lg custom-search"
          size="large"
          placeholder="Search"
          onSearch={onSearch}
          enterButton
        />
        <div className="flex justify-center items-center gap-6">
          <MdCall size={25} color="#00276C" />
          <p className="text-[#00276C] text-lg font-medium">01615597820</p>
          <div className="relative">
            <Button
              className="bg-primaryColor text-white font-semibold border-none 
                absolute -right-[12px] -top-3 hover:bg-primaryColor
               "
              shape="circle"
              size="small"
            >
              0
            </Button>
            <FaBagShopping
              size={25}
              color="#00276C"
              className="cursor-pointer"
              onClick={showDrawer}
            />
            <ReusableDrawer visible={visible} onClose={onClose} title="My Cart">
              <Cart />
            </ReusableDrawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
