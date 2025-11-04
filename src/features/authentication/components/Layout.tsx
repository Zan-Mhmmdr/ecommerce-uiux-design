import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="bg-auth min-h-screen">
      <div className="flex flex-col py-28 gap-2 ">
        <h1 className="text-center font-dmsans text-[#FFFFFF] text-[51px] font-bold tracking-[0.64px]">Audio</h1>
        <p className="text-center font-dmsans text-[#FFFFFF] text-sm font-bold tracking-[0.2px] ">
          It's modular and designed to last
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
