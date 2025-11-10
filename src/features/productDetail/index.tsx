import { Link } from "react-router-dom";
import chevronLeft from "/src/assets/images/icons/chevron-left.svg";
import shoppingCart from "/src/assets/images/icons/shopping-cart.svg";
import headset from "/src/assets/images/pict/headset.png";
import pictreview from "/src/assets/images/icons/pict-review.svg";
import rating from "/src/assets/images/icons/Rating.svg";
import { useState } from "react";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <>
      <div className="bg-[#ffffff] px-6">
        <div className="pt-[55px] flex justify-between">
          <Link to="/products">
            <img src={chevronLeft} alt="Back" />
          </Link>
          <Link to="/home">
            <img src={shoppingCart} alt="Cart" />
          </Link>
        </div>

        <div className="flex flex-col gap-1.5 pt-7">
          <h1 className="font-bold font-dmsans text-[16px] text-[#0ACF83] tracking-[0.2px]">
            USD 350
          </h1>
          <h1 className="font-bold font-montserrat text-[28px] tracking-[0.2px] leading-9">
            TMA-2 <br /> HD WIRELESS
          </h1>
        </div>

        <div className="flex gap-[34px] pt-6">
          {tabs.map((tab) => (
            <button
              className="flex items-center flex-col"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <h1 className="font-dmsans text-[16px] tracking-[0.2px]">
                {tab.label}
              </h1>
              <div
                className={`h-1 mt-2  rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "w-8 bg-[#0ACF83]"
                    : "w-0 bg-transparent"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="flex flex-row overflow-x-auto no-scrollbar gap-5  pt-6">
          <div className="rounded-[10px] shrink-0 bg-[#F6F6F6]">
            <img src={headset} className="w-[285px] h-[391px]" alt="headset" />
          </div>
          <div className="rounded-[10px] shrink-0 bg-[#F6F6F6]">
            <img src={headset} className="w-[285px] h-[391px] " alt="12" />
          </div>
          <div className="rounded-[10px] shrink-0 bg-[#F6F6F6]">
            <img src={headset} className="w-[285px] h-[391px]" alt="headset" />
          </div>
        </div>

        <div className="pt-6">
          <Link to={"/*"} className="font-dmsans text-[16px] tracking-[0.2px]">
            Review (172)
          </Link>
          <div className="flex flex-col gap-[17px] pt-6 ">
            <div className="flex gap-[15px] ">
              <div className="flex gap-[13px] w-full">
                <img src={pictreview} alt="" />
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between w-full">
                    <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                      Reigen Arataka
                    </h1>
                    <p className="font-dmsans text-[12px] tracking-[0.2px] text-[#7F7F7F]">
                      1 Month ago
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={rating} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[54px]">
              <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[17px] pt-6 ">
            <div className="flex gap-[15px] ">
              <div className="flex gap-[13px] w-full">
                <img src={pictreview} alt="" />
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between w-full">
                    <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                      Reigen Arataka
                    </h1>
                    <p className="font-dmsans text-[12px] tracking-[0.2px] text-[#7F7F7F]">
                      1 Month ago
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={rating} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[54px]">
              <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[17px] py-6 ">
            <div className="flex gap-[15px] ">
              <div className="flex gap-[13px] w-full">
                <img src={pictreview} alt="" />
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between w-full">
                    <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                      Reigen Arataka
                    </h1>
                    <p className="font-dmsans text-[12px] tracking-[0.2px] text-[#7F7F7F]">
                      1 Month ago
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={rating} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[54px]">
              <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
