"use client"
import CheckOutBox from "@/components/shared/CheckOutBox";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white relative">
      <Header />
   
      {children}
      <Footer />
      <div className="fixed right-0 top-1/2 z-50">
        <Link href="/checkouts">
          {/* <CheckOutBox /> */}
        </Link>
      </div>
    </div>
  );
};

export default layout;
