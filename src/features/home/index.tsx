import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../products/data/products";
const HomePage = () => {
  const [activateTab, setActivateTab] = useState<string>("headphone");
  const navigate = useNavigate();

  const filteredItems = products.filter((p) => p.category === activateTab);
  console.log(filteredItems);

  const tabs = [
    { id: "headphone", label: "Headphone" },
    { id: "headband", label: "Headband" },
    { id: "earpads", label: "Earpads" },
    { id: "speaker", label: "Speaker" },
    { id: "headset", label: "Headset" },
    { id: "watch", label: "Watch" },
  ];

  return (
    <>
      <div className=" flex flex-row justify-between bg-[#ffffff] pt-[50px] px-6 items-center">
        <a href="">
          <img src="/images/icons/menu-variant.svg" alt="" />
        </a>
        <div className="flex gap-[7.14px]">
          <img src="/images/icons/audio.svg" alt="" />
          <h2 className="font-semibold font-dmsans text-[19px] tracking-[0.24px]">
            Audio
          </h2>
        </div>

        <Link to={"/profile"}>
          <img
            src="/images/icons/ado.png"
            className="w-[35px] rounded-full"
            alt=""
          />
        </Link>
      </div>
      <div className="pt-[35px] bg-[#ffffff]  px-6">
        <p className="font-dmsans text-sm tracking-[0.2px] leading-6">
          Hi, Ado
        </p>
        <h1 className="font-dmsans text-2xl font-bold tracking-[0.2px] leading-8">
          What are you looking for today?
        </h1>
      </div>
      <div className="py-[25px] bg-[#ffffff]  px-6">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src="/images/icons/search.svg"
              alt="icon"
              className="w-5 h-5 text-[#BABABA]"
            />
          </span>

          <input
            type="text"
            onFocus={() => navigate("/search")}
            placeholder="Search Handphone"
            className="w-full h-[45px] pl-10 pr-4 py-1 font-dmsans text-[12px] font-bold tracking-[0.2px] leading-5 border border-[#BABABA] text-[#2D2D2D] placeholder-[#BABABA] rounded-lg bg-white outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-8 pb-6 rounded-3xl px-6 bg-[#F6F6F6] ">
        <div className="flex flex-row gap-[11px] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivateTab(tab.id)}
              className={`px-[15px] flex items-center rounded-3xl py-1  cursor-pointer text-[#ffffff] text-[11px] font-dmsans tracking-[0.2px] transition-all duration-300 ${
                activateTab === tab.id
                  ? "bg-[#0ACF83]"
                  : "bg-transparent text-black  "
              } `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-row  bg-white rounded-2xl  gap-[15px] px-6 mt-5">
          <div className="flex flex-row gap-2.5 py-5 ">
            <div className="flex flex-col gap-7 w-[151px] ">
              <h1 className="font-bold font-montserrat text-[22px] tracking-[0.2px]">
                TMA-2 Modular Headphone
              </h1>
              <div className="flex items-center gap-3">
                <Link
                  to={"/products"}
                  className="font-dmsans text-sm font-semibold tracking-[0.2px] text-[#0ACF83]"
                >
                  Shop now
                </Link>
                <img src="/images/icons/arrow-right.svg" alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/images/pict/headphone.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-auto justify-between ">
          <h2 className="font-dmsans text-[16px] font-normal tracking-[0.2px]">
            Featured Products
          </h2>
          <Link
            to={"/products"}
            className="font-dmsans font-extralight text-sm tracking-[0.2px]"
          >
            See All
          </Link>
        </div>
        <div className="flex flex-row gap-[15px]  overflow-x-auto  scrollbar-hide ">
          {filteredItems.map((item) => (
            <Link
              to={`/products/product-detail/${item.id}`}
              className="bg-[#ffffff] shrink-0 flex flex-col w-[155px] rounded-2xl items-center px-2.5 pt-[15px] gap-5"
            >
              <img src={item.image} className="h-[145px]" alt="" />
              <div className="flex flex-col w-full gap-0.5 pb-3">
                <h2 className="font-dmsans  tracking-[0.2px] text-sm">
                  {item.name}
                </h2>
                <h3 className="font-dmsans font-bold tracking-[0.2px] text-[12px]">
                  USD {item.price}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
