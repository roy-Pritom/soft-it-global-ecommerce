import { Rate } from "antd";

const DynamicStarRating = ({
  rating,
  isFlex = false,
}: {
  rating: number;
  isFlex?: boolean;
}) => {
  return (
    <div
      className={`${isFlex ? "flex justify-center items-center gap-2" : ""}`}
    >
      {/* <h2>Dynamic Star Rating</h2> */}
      <Rate allowHalf value={rating} />
      <p className="text-xs text-gray-400">
        {!isFlex && "product rating:"} {rating}
      </p>
    </div>
  );
};

export default DynamicStarRating;
