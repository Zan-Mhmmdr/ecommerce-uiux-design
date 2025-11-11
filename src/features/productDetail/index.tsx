import { Link } from "react-router-dom";
import chevronLeft from "/src/assets/images/icons/chevron-left.svg";
import shoppingCart from "/src/assets/images/icons/shopping-cart.svg";
import { useState } from "react";
import Overview from "./components/Overview";
import Specifications from "./components/Specifications";
import Features from "./components/Features";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "specifications", label: "Specifications" },
  ];

  return (
    <>
      <div className="bg-[#ffffff] px-6">
        <div className="pt-[55px] flex justify-between">
          <Link to="/products">
            <img src={chevronLeft} alt="Back" />
          </Link>
          <Link to="/shopping-cart">
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

        {activeTab === "overview" && <Overview />}
        {activeTab === "features" && <Features />}
        {activeTab === "specifications" && <Specifications />}
      </div>
    </>
  );
};

export default ProductDetail;
