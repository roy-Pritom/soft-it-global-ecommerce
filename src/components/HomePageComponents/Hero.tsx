import BannerSlider from "./BannerSlider";
const Hero = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">{/* <NavMenu /> */}</div>
      <div className="col-span-3">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Hero;
