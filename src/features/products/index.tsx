import { useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="pt-[55px] px-6 flex justify-between">
        <Link to="/home">
          <img src="src/assets/images/icons/chevron-left.svg" alt="Back" />
        </Link>
        <Link to="/shopping-cart">
          <img src="src/assets/images/icons/shopping-cart.svg" alt="Cart" />
        </Link>
      </div>
      <div className="flex flex-col px-6 gap-[11px] py-6">
        <h2 className="font-dmsans font-light text-[16px] tracking-[0.2px]">
          Headphone
        </h2>
        <h1 className="font-montserrat text-2xl font-bold leading-8 tracking-[0.2px]">
          TMA Wireless
        </h1>
      </div>
      <div className="flex flex-row items-center px-6 gap-[21px] pb-13 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex shrink-0 gap-2 px-[15px] py-2.5 rounded-2xl outline-2 outline-[#BABABA]"
        >
          <img src="src/assets/images/icons/sliders.svg" alt="" />
          <h1 className="font-dmsans text-sm tracking-[0.2px]">Filter</h1>
        </button>
        <div className="flex flex-row gap-[25px] items-center shrink-0 ">
          <Link
            to={"/products"}
            className="font-dmsans text-sm tracking-[0.2px]"
          >
            Popularity
          </Link>
          <Link
            to={"/products"}
            className="font-dmsans text-sm tracking-[0.2px]"
          >
            Newest
          </Link>
          <Link
            to={"/products"}
            className="font-dmsans text-sm tracking-[0.2px]"
          >
            Most Experience
          </Link>
          <Link
            to={"/products"}
            className="font-dmsans text-sm tracking-[0.2px]"
          >
            Most Experience
          </Link>
          <Link
            to={"/products"}
            className="font-dmsans text-sm tracking-[0.2px]"
          >
            Most Experience
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-[13px] bg-[#F3F3F3] rounded-t-4xl">
        <div className="flex flex-row gap-[15px]">
          <div className="flex flex-col gap-5 px-2.5 py-[15px] bg-[#ffffff] rounded-3xl ">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/pict/headphone-small.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                  TMA-2 Comfort Wireless{" "}
                </h1>
                <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                  USD 270
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-2.5 ">
                  <div className="flex gap-[3px] ">
                    <img src="src/assets/images/icons/star-filled.svg" alt="" />
                    <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      4.6
                    </h2>
                  </div>
                  <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                    86 Reviews
                  </span>
                </div>
                <Link to={"product-detail"}>
                  <img src="src/assets/images/icons/more-vertical.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-2.5 py-[15px] bg-[#ffffff] rounded-3xl ">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/pict/headphone-small.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                  TMA-2 Comfort Wireless{" "}
                </h1>
                <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                  USD 270
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-2.5 ">
                  <div className="flex gap-[3px] ">
                    <img src="src/assets/images/icons/star-filled.svg" alt="" />
                    <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      4.6
                    </h2>
                  </div>
                  <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                    86 Reviews
                  </span>
                </div>
                <Link to={"product-detail"}>
                  <img src="src/assets/images/icons/more-vertical.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[15px]">
          <div className="flex flex-col gap-5 px-2.5 py-[15px] bg-[#ffffff] rounded-3xl ">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/pict/headphone-small.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                  TMA-2 Comfort Wireless{" "}
                </h1>
                <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                  USD 270
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-2.5 ">
                  <div className="flex gap-[3px] ">
                    <img src="src/assets/images/icons/star-filled.svg" alt="" />
                    <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      4.6
                    </h2>
                  </div>
                  <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                    86 Reviews
                  </span>
                </div>
                <Link to={"product-detail"}>
                  <img src="src/assets/images/icons/more-vertical.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-2.5 py-[15px] bg-[#ffffff] rounded-3xl ">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/pict/headphone-small.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                  TMA-2 Comfort Wireless{" "}
                </h1>
                <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                  USD 270
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-2.5 ">
                  <div className="flex gap-[3px] ">
                    <img src="src/assets/images/icons/star-filled.svg" alt="" />
                    <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      4.6
                    </h2>
                  </div>
                  <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                    86 Reviews
                  </span>
                </div>
                <Link to={"product-detail"}>
                  <img src="src/assets/images/icons/more-vertical.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[15px]">
          <div className="flex flex-col gap-5 px-2.5 py-[15px] bg-[#ffffff] rounded-3xl ">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/pict/headphone-small.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                  TMA-2 Comfort Wireless{" "}
                </h1>
                <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                  USD 270
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-2.5 ">
                  <div className="flex gap-[3px] ">
                    <img src="src/assets/images/icons/star-filled.svg" alt="" />
                    <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      4.6
                    </h2>
                  </div>
                  <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                    86 Reviews
                  </span>
                </div>
                <Link to={"/search"}>
                  <img src="src/assets/images/icons/more-vertical.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-2.5 py-[15px] bg-[#ffffff] rounded-3xl ">
            <div className="flex items-center justify-center">
              <img
                src="src/assets/images/pict/headphone-small.png"
                className="w-[125px] h-[125px]"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                  TMA-2 Comfort Wireless{" "}
                </h1>
                <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                  USD 270
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-2.5 ">
                  <div className="flex gap-[3px] ">
                    <img src="src/assets/images/icons/star-filled.svg" alt="" />
                    <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      4.6
                    </h2>
                  </div>
                  <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                    86 Reviews
                  </span>
                </div>
                <Link to={"/search"}>
                  <img src="src/assets/images/icons/more-vertical.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="bg-black/50 bg-opacity-20 fixed inset-0 flex justify-center items-start px-6 pt-20 z-50">
          <div className="flex flex-col p-6 gap-[35px] rounded-2xl bg-white w-full">
            <div className="flex gap-[35px] justify-between items-center">
              <h1 className="font-montserrat text-2xl font-bold tracking-[0.2px]">
                Filter
              </h1>
              <button onClick={() => setIsModalOpen(false)}>
                <img src="src/assets/x-2.svg" alt="" />
              </button>
            </div>
            <div className="flex gap-2.5 flex-col">
              <h1 className="font-dmsans text-[16px] tracking-[0.2px]   ">
                Category
              </h1>
              <div className="flex flex-row gap-[11px] overflow-x-auto no-scrollbar">
                <button className="px-[15px] flex items-center rounded-3xl py-1 bg-[#0ACF83] cursor-pointer text-[#ffffff] text-[11px] font-dmsans tracking-[0.2px]">
                  Headphone
                </button>
                <button className="px-[15px] flex items-center rounded-3xl py-1 cursor-pointer text-[#7F7F7F] text-[11px] font-dmsans tracking-[0.2px]">
                  Headband
                </button>
                <button className="px-[15px] flex items-center rounded-3xl py-1 cursor-pointer text-[#7F7F7F] text-[11px] font-dmsans tracking-[0.2px]">
                  Earpads
                </button>
                <button className="px-[15px] flex items-center rounded-3xl py-1 cursor-pointer text-[#7F7F7F] text-[11px] font-dmsans tracking-[0.2px]">
                  Speaker
                </button>
              </div>
            </div>
            <div className="flex gap-2.5 flex-col">
              <h1 className="font-dmsans text-[16px] tracking-[0.2px]">
                Sort By
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 ">
                  <button className="px-[15px] h-[35px] py-5 flex items-center rounded-2xl bg-[#0ACF83] cursor-pointer leading-5 text-[#ffffff] text-sm font-dmsans tracking-[0.2px]">
                    Popularity{" "}
                  </button>
                  <button className="px-[15px] h-[35px] py-5 flex items-center rounded-2xl bg-[#fffff] cursor-pointer leading-5 text-black outline-2 outline-[#7F7F7F] text-sm font-dmsans tracking-[0.2px]">
                    Newest{" "}
                  </button>
                  <button className="px-[15px] h-[35px] py-5 flex items-center rounded-2xl bg-[#fffff] cursor-pointer leading-5 text-black outline-2 outline-[#7F7F7F] text-sm font-dmsans tracking-[0.2px]">
                    Oldest{" "}
                  </button>
                </div>
                <div className="flex gap-3 ">
                  <button className="px-[15px] h-[35px] py-5 flex items-center rounded-2xl bg-[#fffff] cursor-pointer leading-5 text-black outline-2 outline-[#7F7F7F] text-sm font-dmsans tracking-[0.2px]">
                    High Price{" "}
                  </button>
                  <button className="px-[15px] h-[35px] py-5 flex items-center rounded-2xl bg-[#fffff] cursor-pointer leading-5 text-black outline-2 outline-[#7F7F7F] text-sm font-dmsans tracking-[0.2px]">
                    Low Price{" "}
                  </button>
                  <button className="px-[15px] h-[35px] py-5 flex items-center rounded-2xl bg-[#fffff] cursor-pointer leading-5 text-black outline-2 outline-[#7F7F7F] text-sm font-dmsans tracking-[0.2px]">
                    Review{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 flex-col ">
              <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                Price Range
              </h1>
              <div className="flex flex-row gap-[17px] ">
                <input
                  type="text"
                  placeholder="Min Price"
                  className="flex items-center w-[155px] h-[45px] rounded-[10px] gap-3 px-[15px] outline-2 font-dmsans text-sm tracking-[0.2px]  outline-[#BABABA]"
                />
                <input
                  type="text"
                  placeholder="Min Price"
                  className="flex items-center w-[155px] h-[45px] rounded-[10px] gap-3 px-[15px] outline-2 font-dmsans text-sm tracking-[0.2px]  outline-[#BABABA]"
                />
              </div>
            </div>

            <button className="px-2.5 py-5  h-[50px] flex items-center justify-center rounded-[10px] bg-[#0ACF83] text-[16px] font-dmsans font-semibold tracking-[0.2px] text-[#ffffff]">
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
