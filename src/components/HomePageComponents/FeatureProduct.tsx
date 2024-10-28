import { Tabs, type TabsProps } from "antd";
import { FaFireAlt } from "react-icons/fa";
import NewTab from "./ProductsTabs/NewTab";
import TopProductTab from "./ProductsTabs/TopProductTab";
import DiscountSaleProductTab from "./ProductsTabs/DiscountSaleProductTab";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span className="flex items-center gap-2 text-lg font-bold ">NEW</span>
    ),
    children: <NewTab />,
  },
  {
    key: "2",
    label: (
      <span className="flex items-center gap-2 text-lg font-bold">TOP</span>
    ),
    children: <TopProductTab />,
  },
  {
    key: "3",
    label: (
      <span className="flex items-center gap-2 text-lg font-bold">
        <FaFireAlt /> Flash Sale
      </span>
    ),
    children: <DiscountSaleProductTab />,
  },
];

const FeatureProduct = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        // onChange={onChange}
      />
    </div>
  );
};

export default FeatureProduct;
