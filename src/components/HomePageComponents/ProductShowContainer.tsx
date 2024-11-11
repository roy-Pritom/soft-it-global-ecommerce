"use client";

import Image from "next/image";
import containerImg from "../../../public/Logo/container1.jpeg";
import containerImgBag from "../../../public/Logo/Container3.png";

const ProductShowContainer = () => {
  return (
    <div>
      <section className="py-24 relative">
        <div className="w-full container  mx-auto md:px-0 px-8">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <Image
                  className=" rounded-xl object-cover h-96"
                  width={300}
                  height={300}
                  src={containerImg}
                  alt="about Us image"
                />
              </div>
              <Image
                width={300}
                height={300}
                className="sm:ml-0 ml-auto rounded-xl object-cover h-96 bg-gray-200"
                src={containerImgBag}
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className=" primaryColor text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    একসাথে সফলতার পথে এগিয়ে চলা
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    প্রতিটি প্রকল্প ছিল আমাদের এক যৌথ প্রচেষ্টা, যেখানে প্রত্যেক
                    অংশগ্রহণকারী তাদের নিজস্ব অবদান রেখেছেন। একসাথে, আমরা
                    শুধুমাত্র পণ্য তৈরি করি না, আমরা তৈরি করি দীর্ঘস্থায়ী
                    সম্পর্ক, যা আমাদের সাফল্যের গল্প গড়ে তোলে।
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      ৩+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      বছরের অভিজ্ঞতা
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      ১২৫+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      সফল প্রকল্প
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      ৫২+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      খুশি গ্রাহক
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-primaryColor hover:bg-primaryColor transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  আরও পড়ুন
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowContainer;
