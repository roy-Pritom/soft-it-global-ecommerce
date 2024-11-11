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
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

type SearchProps = GetProps<typeof Input.Search>;

const Header = () => {
  const items = useAppSelector((state: RootState) => state.carts.items);
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const onSearch: SearchProps["onSearch"] = (value) => {
    router.push(`/shop?searchTerm=${value}`);
    setSearchTerm("");
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className=" py-3 bg-black border- border-red-400 h-[120px] ">
      <div className="flex justify-between items-center container mx-auto -mt-5">
        <Link href="/">
          <Image src="/Logo/manio-logo.png" width={150} height={50}  className="" alt="logo" />
        </Link>
        <Search
          className=" w-1/2  text-slate-600 rounded-md custom-search"
          size="large"
          placeholder="Search"
          onSearch={onSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          enterButton
        />
        <div className="flex justify-center items-center gap-6">
          <MdCall className=" hidden md:block" size={25} color="white" />
          <p className="text-white text-lg font-medium hidden md:block">
            +880 1711979475
          </p>
          <div className="relative md:mr-0 mr-4">
            <Button
              className="bg-primaryColor text-white font-semibold border-none 
                absolute -right-[12px] -top-3 hover:bg-primaryColor
               "
              shape="circle"
              size="small"
            >
              {items?.length || 0}
            </Button>
            <FaBagShopping
              size={25}
              color="white"
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
