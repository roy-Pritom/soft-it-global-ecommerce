import { Button } from "antd";
import React from "react";

const CartButton = () => {
  return (
    <div className="flex  justify-between gap-3 w-full ">
      <Button className=" w-full">
        <p>Remove</p>
      </Button>
      <Button className=" w-full">
        <p>Remove</p>
      </Button>
      <Button className=" w-full">
        <p>Remove</p>
      </Button>
    </div>
  );
};

export default CartButton;
