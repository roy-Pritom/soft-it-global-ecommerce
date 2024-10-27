import CheckOutBox from "@/components/shared/CheckOutBox";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import NavMenu from "@/components/shared/NavMenu";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F8F9FA] relative">
      <Header />
      <div className="grid grid-cols-4 container mx-auto">
        <div className="col-span-1">
          <NavMenu />
        </div>
        <div className="col-span-3">
          <div className="border-y flex items-center gap-4 pl-4 py-4">
            <Link href="/">
              <p className="text-base font-bold text-primaryColor">HOME</p>
            </Link>
            <Link href="/shop">
              <p className="text-base font-bold text-primaryColor">SHOP</p>
            </Link>
          </div>
          {/* <BannerSlider /> */}
        </div>
      </div>
      {children}
      <Footer />
      <div className="fixed right-4 top-1/2">
        <Link href="/checkouts">
          <CheckOutBox />
        </Link>
      </div>
    </div>
  );
};

export default layout;
