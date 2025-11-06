import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#ffffff] pt-[50px] px-6">
        <div className=" flex flex-row justify-between items-center">
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
        <div className="pt-[35px]">
          <p className="font-dmsans text-sm tracking-[0.2px] leading-6">
            Hi, Ado
          </p>
          <h1 className="font-dmsans text-2xl font-bold tracking-[0.2px] leading-8">
            What are you looking for today?
          </h1>
        </div>
        <div className="py-[25px]">
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
        <div className="pt-8 pb-6 -mx-6 rounded-3xl bg-[#F6F6F6] ">
          <div className="flex flex-row gap-[11px] overflow-x-auto scrollbar-hide pl-6">
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
