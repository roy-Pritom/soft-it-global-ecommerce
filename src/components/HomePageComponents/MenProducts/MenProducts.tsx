/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./MenProducts.module.css";
// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "antd";
import { BsEye } from "react-icons/bs";

export const products = [
  {
    id: 1,
    title: "Casual T-Shirt",
    description: "Comfortable cotton t-shirt in various colors.",
    price: 19.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/style-everyday-mens-casual-shirt-photoshoot-poses-boys-shirt_463958-96.jpg?w=740",
  },
  {
    id: 2,
    title: "Denim Jeans",
    description: "Classic blue jeans with a slim-fit design.",
    price: 49.99,
    imageUrl:
      "https://img.freepik.com/free-photo/garment-beautiful-boy-beauty-sleeve_1203-6474.jpg?t=st=1729883127~exp=1729886727~hmac=0718984dcd84260d617b67daaaadfb37b7ead0042212133e4c253db513dfbc81&w=360",
  },
  {
    id: 3,
    title: "Formal Shirt",
    description: "Elegant formal shirt, perfect for office and formal events.",
    price: 29.99,
    imageUrl:
      "https://img.freepik.com/free-photo/handsome-businessman-formal-clothes-posing-street-sunglasses_158538-8315.jpg?t=st=1729883150~exp=1729886750~hmac=ee8f56c3d99da33e1c8cab1ff412dc825c1a648fb3fb778434e574f233b3b91e&w=360",
  },
  {
    id: 4,
    title: "Casual Shorts",
    description: "Lightweight shorts, ideal for casual outings.",
    price: 24.99,
    imageUrl:
      "https://img.freepik.com/free-photo/funny-smiling-hipster-handsome-man-guy-stylish-summer-cloth-street-sunglasses_158538-2278.jpg?t=st=1729883165~exp=1729886765~hmac=4b402a96ffd20cd4d9d342775cc0141df5ab093afa189219c1e8f7f0fd6ab337&w=360",
  },
  {
    id: 5,
    title: "Chinos Pants",
    description: "Stylish and comfortable chinos for a casual or formal look.",
    price: 39.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/pant-blank-mockup-design_857340-13592.jpg?w=740",
  },
  {
    id: 6,
    title: "Polo Shirt",
    description: "Classic polo shirt with a soft, breathable fabric.",
    price: 27.99,
    imageUrl:
      "https://img.freepik.com/free-photo/men-clothes-set_1203-8041.jpg?t=st=1729883266~exp=1729886866~hmac=b595b7e9dbc7acbd659f165d71230a332310a2b8ed73977ba48c70ac7fdcb2d2&w=740",
  },
  {
    id: 7,
    title: "Hoodie",
    description: "Cozy hoodie with a relaxed fit, ideal for chilly days.",
    price: 34.99,
    imageUrl:
      "https://img.freepik.com/free-photo/pants-hanger-spring-wardrobe_23-2150264168.jpg?t=st=1729883287~exp=1729886887~hmac=2d1f93524154ac76b62413d3a145b81fc5edcaf6fcaa36c8ab64b5143c92face&w=360",
  },
];

const MenProducts: React.FC = () => {
  return (
    <div className="">
      <div className="bg-[#84E0FE] p-10 rounded-b-md mb-14 flex justify-between">
        <p className="text-5xl uppercase font-bold">Men Panjabi</p>
        <Button
          size="large"
          className="font-semibold uppercase"
          shape="round"
          icon={<BsEye />}
        >
          See All
        </Button>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={20}
        // centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {products?.map((product: any) => (
          <SwiperSlide key={product?.id} className={styles.swiperSlide}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenProducts;
