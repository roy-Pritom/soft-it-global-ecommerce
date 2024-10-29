import BannerSlider from "./BannerSlider";
const Hero = () => {
  return (
    <div className="md:grid md:grid-cols-4">
      <div className="md:col-span-1 md:block hidden"></div>
      <div className="md:col-span-3">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Hero;
