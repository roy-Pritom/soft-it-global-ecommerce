import React, { useState } from "react";
import { Button, InputNumber, Space } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

interface QuantitySelectorProps {
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  min = 1,
  max = 99,
  onChange,
}) => {
  const [quantity, setQuantity] = useState<number>(min);

  const handleIncrement = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const handleInputChange = (value: number | null) => {
    if (value !== null && value >= min && value <= max) {
      setQuantity(value);
      onChange?.(value);
    }
  };

  return (
    <Space size="small">
      <Button
        type="primary"
        shape="circle"
        icon={<MinusOutlined />}
        onClick={handleDecrement}
        disabled={quantity === min}
      />
      <InputNumber
        min={min}
        max={max}
        value={quantity}
        onChange={handleInputChange}
        style={{ width: 60, textAlign: "center" }}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={handleIncrement}
        disabled={quantity === max}
      />
    </Space>
  );
};

export default QuantitySelector;
