"use client";
import MYProductCard from "@/components/ui/MYProductCard";

const NewTab = () => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-5 gap-2 w-full">
        {Array(5)
          .fill(1)
          ?.map((item: number, index: number) => (
            <MYProductCard key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default NewTab;
