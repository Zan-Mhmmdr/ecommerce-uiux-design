import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className=" flex flex-row justify-between bg-[#ffffff] pt-[50px] px-6 items-center">
        <a href="">
          <img src="src/assets/images/icons/menu-variant.svg" alt="" />
        </a>
        <div className="flex gap-[7.14px]">
          <img src="src/assets/images/icons/audio.svg" alt="" />
          <h2 className="font-semibold font-dmsans text-[19px] tracking-[0.24px]">
            Audio
          </h2>
        </div>

        <img
          src="src/assets/images/icons/ado.png"
          className="w-[35px] rounded-full"
          alt=""
        />
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
              src="/src/assets/images/icons/search.svg"
              alt="icon"
              className="w-5 h-5 text-[#BABABA]"
            />
          </span>

          <input
            type="text"
            placeholder="Search Handphone"
            className="w-full h-[45px] pl-10 pr-4 py-1 font-dmsans text-[12px] font-bold tracking-[0.2px] leading-5 border border-[#BABABA] text-[#2D2D2D] placeholder-[#BABABA] rounded-lg bg-white outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-8 pb-6 rounded-3xl px-6 bg-[#F6F6F6] ">
        <div className="flex flex-row gap-[11px] overflow-x-auto scrollbar-hide pl-6 -mx-6">
          <Link
            to={"/*"}
            className="px-[15px] flex items-center rounded-3xl py-1 bg-[#0ACF83] cursor-pointer text-[#ffffff] text-[11px] font-dmsans tracking-[0.2px]"
          >
            Headphone
          </Link>
          <Link
            to={"/*"}
            className="px-[15px] flex items-center rounded-3xl py-1 bg-[#0ACF83] cursor-pointer text-[#ffffff] text-[11px] font-dmsans tracking-[0.2px]"
          >
            Headband
          </Link>
          <Link
            to={"/*"}
            className="px-[15px] flex items-center rounded-3xl py-1 bg-[#0ACF83] cursor-pointer text-[#ffffff] text-[11px] font-dmsans tracking-[0.2px]"
          >
            Camera
          </Link>
          <Link
            to={"/*"}
            className="px-[15px] flex items-center rounded-3xl py-1 bg-[#0ACF83] cursor-pointer text-[#ffffff] text-[11px] font-dmsans tracking-[0.2px]"
          >
            Keyboard
          </Link>
        </div>
        <div className="flex flex-row  bg-white rounded-2xl  gap-[15px] px-6 mt-5">
          <div className="flex flex-row gap-2.5 py-5 ">
            <div className="flex flex-col gap-7 w-[151px] ">
              <h1 className="font-bold font-montserrat text-[22px] tracking-[0.2px]">
                TMA-2 Modular Headphone
              </h1>
              <div className="flex items-center gap-3">
                <Link
                  to={"/search"}
                  className="font-dmsans text-sm font-semibold tracking-[0.2px] text-[#0ACF83]"
                >
                  Shop now
                </Link>
                <img src="src/assets/images/icons/arrow-right.svg" alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/images/pict/headphone.png"
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
          <div className="bg-[#ffffff] flex flex-col w-[155px] rounded-2xl items-center px-2.5 pt-[15px] gap-5">
            <img
              src="src/assets/images/pict/headphone.png"
              className="h-[145px]"
              alt=""
            />
            <div className="flex flex-col gap-0.5 pb-3">
              <h2 className="font-dmsans tracking-[0.2px] text-sm">
                TMA-2 HD Wireless
              </h2>
              <h3 className="font-dmsans font-bold tracking-[0.2px] text-[12px]">
                USD 350
              </h3>
            </div>
          </div>
          <div className="bg-[#ffffff] flex flex-col w-[155px]  rounded-2xl items-center px-2.5 pt-[15px] gap-5">
            <img
              src="src/assets/images/pict/earphone.png"
              className="h-[145px]"
              alt=""
            />
            <div className="flex flex-col gap-0.5 pb-3">
              <h2 className="font-dmsans tracking-[0.2px] text-sm">
                C02 - Cable
              </h2>
              <h3 className="font-dmsans font-bold tracking-[0.2px] text-[12px]">
                USD 25
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
