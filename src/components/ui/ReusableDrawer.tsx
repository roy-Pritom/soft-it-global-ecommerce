import React from "react";
import { Drawer, Button } from "antd";
import { IoBagCheckOutline } from "react-icons/io5";

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
        className="bg-black w-full"
        style={{
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <Button
          onClick={onClose}
          type="primary"
          icon={<IoBagCheckOutline size={15} />}
          style={{
            flex: 2,
            marginRight: "4px",
            borderRadius: 0,
          }}
        >
          Checkout
        </Button>
        <Button
          onClick={onClose}
          type="primary"
          className="bg-red-400"
          style={{
            flex: 1,
            borderRadius: 0,
          }}
        >
          Close
        </Button>
      </div>
    </Drawer>
  );
};

export default ReusableDrawer;
