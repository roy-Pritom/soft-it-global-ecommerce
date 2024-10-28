import FeatureProduct from "@/components/HomePageComponents/FeatureProduct";
import FeatureProductSlider from "@/components/HomePageComponents/FeatureProductSlider/FeatureProductSlider";
import Hero from "@/components/HomePageComponents/Hero";
// import MenProducts from "@/components/HomePageComponents/MenProducts/MenProducts";
import ProductShowContainer from "@/components/HomePageComponents/ProductShowContainer";
import PopularCategory from "@/components/HomePageComponents/ProductsTabs/PopularCategory/PopularCategory";
import Saree from "@/components/HomePageComponents/Saree";
import TShirt from "@/components/HomePageComponents/TShirt";
import WomenFashion from "@/components/HomePageComponents/WomenFashion";
import PolicyCard from "@/components/shared/PolicyCard";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Hero />
      <PopularCategory />
      <FeatureProduct />
      <FeatureProductSlider />
      <TShirt />
      <WomenFashion />
      <Saree />
      <ProductShowContainer />
      <PolicyCard />
    </div>
  );
}
