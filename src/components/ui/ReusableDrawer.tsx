"use client";
import React from "react";
import { Drawer } from "antd";
import { IoBagCheckOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface ReusableDrawerProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ReusableDrawer: React.FC<ReusableDrawerProps> = ({
  visible,
  onClose,
  title,
  children,
}) => {
  const router = useRouter();
  const handleCheckoutClick = () => {
    onClose();
    router.push("/checkouts");
  };

  return (
    <Drawer
      title={title}
      placement="right"
      closable={true}
      onClose={onClose}
      open={visible}
      bodyStyle={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        {children}
      </div>

      {/* Fixed footer with full drawer width */}
      <div
        className="w-full"
        style={{
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <div className="w-1/2">
          <button
            onClick={handleCheckoutClick}
            className="bg-primaryColor w-full text-white flex items-center justify-center gap-2 py-2 px-4"
            style={{
              flex: 2,
              marginRight: "4px",
              borderRadius: 0,
            }}
          >
            <IoBagCheckOutline size={15} />
            Checkout
          </button>
        </div>
        <div className=" w-1/2">
          <button
            onClick={onClose}
            className="bg-red-600 w-full text-white py-2 px-4"
            style={{
              flex: 1,
              borderRadius: 0,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default ReusableDrawer;
