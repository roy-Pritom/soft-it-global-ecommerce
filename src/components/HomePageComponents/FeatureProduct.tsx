import { Tabs, type TabsProps } from "antd";
import { FaFireAlt } from "react-icons/fa";
import NewTab from "./ProductsTabs/NewTab";
import TopProductTab from "./ProductsTabs/TopProductTab";
import DiscountSaleProductTab from "./ProductsTabs/DiscountSaleProductTab";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span className="flex items-center gap-2 text-base md:text-lg font-semibold bg-gray-100 px-2 md:px-5 py-1 ">
        NEW
      </span>
    ),
    children: <NewTab />,
  },
  {
    key: "2",
    label: (
      <span className="flex items-center gap-2 text-base md:text-lg  font-semibold bg-gray-100 px-2 md:px-5 py-1">
        TOP
      </span>
    ),
    children: <TopProductTab />,
  },
  {
    key: "3",
    label: (
      <span className="flex items-center gap-2 text-base md:text-lg  font-semibold bg-gray-100 px-2 md:px-5 py-1">
        <FaFireAlt /> Flash Sale
      </span>
    ),
    children: <DiscountSaleProductTab />,
  },
];

const FeatureProduct = () => {
  return (
    <div className=" w-full mx-auto md:px-0 px-8">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default FeatureProduct;
