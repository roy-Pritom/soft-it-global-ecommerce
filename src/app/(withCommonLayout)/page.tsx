import FeatureProduct from "@/components/HomePageComponents/FeatureProduct";
import FeatureProductSlider from "@/components/HomePageComponents/FeatureProductSlider/FeatureProductSlider";
import Hero from "@/components/HomePageComponents/Hero";
import PopularCategory from "@/components/HomePageComponents/ProductsTabs/PopularCategory/PopularCategory";
import ManFashion from "@/components/HomePageComponents/ManFashion";
import WomenFashion from "@/components/HomePageComponents/WomenFashion";
import PolicyCard from "@/components/shared/PolicyCard";
import CategoryBasedProductContainer1 from "@/components/HomePageComponents/CategoryBasedProductContainer1";
import CategoryBasedProductContainer2 from "@/components/HomePageComponents/CategoryBasedProductContainer2";

export default function Home() {
  // home
  return (
    <div className=" ">
      <Hero />
      <div className="container mx-auto">
        <PopularCategory />
        <FeatureProduct />
        <FeatureProductSlider />
        <ManFashion />
        <CategoryBasedProductContainer1 />
        <WomenFashion />
        <CategoryBasedProductContainer2 />
        <PolicyCard />
      </div>
    </div>
  );
}
