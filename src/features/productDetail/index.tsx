import { Link, useParams } from "react-router-dom";
import chevronLeft from "/images/icons/chevron-left.svg";
import shoppingCart from "/images/icons/shopping-cart.svg";
import { useState } from "react";
import Overview from "./components/Overview";
import Features from "./components/Features";
import { products } from "../products/data/products";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
  ];

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="bg-[#ffffff] px-6">
        <div className="flex px-6 pt-[55px] pb-5 justify-between fixed top-0 left-0 w-full bg-white z-50">
          <Link to="/products">
            <img src={chevronLeft} alt="Back" />
          </Link>
          <Link to="/shopping-cart">
            <img src={shoppingCart} alt="Cart" />
          </Link>
        </div>

        <div className="flex flex-col gap-1.5 pt-26 ">
          <h1 className="font-bold font-dmsans text-[16px] text-[#0ACF83] tracking-[0.2px]">
            USD {product?.price}
          </h1>
          <h1 className="font-bold font-montserrat text-[28px] tracking-[0.2px] leading-9">
            {product?.name}
          </h1>
        </div>

        <div className="flex gap-[34px] pt-6">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center flex-col"
              key={tab.id}
            >
              <h1 className="font-dmsans text-[16px] tracking-[0.2px]">
                {tab.label}
              </h1>
              <div
                className={`h-1 mt-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "w-8 bg-[#0ACF83]"
                    : "w-0 bg-transparent"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {activeTab === "overview" && <Overview product={product} />}
        {activeTab === "features" && <Features product={product} />}
      </div>
    </>
  );
};

export default ProductDetail;
