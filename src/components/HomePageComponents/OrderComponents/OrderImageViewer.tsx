import { Image } from "antd";

const OrderImageViewer = ({ imgurl }: { imgurl: string }) => {
  return (
    // <div className="w-full">
    <Image
      width={1050}
      height={560}
      src={imgurl}
      className="w-full h-[35rem] rounded-md object-cover"
      alt="img2"
    />
    // </div>
  );
};

export default OrderImageViewer;
