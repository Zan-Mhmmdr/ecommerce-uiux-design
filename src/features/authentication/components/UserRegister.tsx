import { Link } from "react-router-dom";
import mailIcon from "/src/assets/images/icons/mail.svg";
import lockIcon from "/src/assets/images/icons/lock.svg";
import appleIcon from "/src/assets/images/icons/Apple Auth.svg";
import facebookIcon from "/src/assets/images/icons/Facebook Auth.svg";
import googleIcon from "/src/assets/images/icons/Google Auth.svg";

const UserRegister = () => {
  return (
    <>
      <div className="w-full pt-16 px-6 flex flex-col gap-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src={mailIcon}
                alt="icon"
                className="w-5 h-5 text-[#BABABA]"
              />
            </span>

            <input
              type="text"
              placeholder="Email"
              className="w-full h-[50px] pl-10 pr-4 py-2 font-dmsans text-sm font-bold tracking-[0.2px] border text-[#BABABA] rounded-lg bg-white outline-none"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src={lockIcon}
                alt="icon"
                className="w-5 h-5 text-[#BABABA]"
              />
            </span>

            <input
              type="password"
              placeholder="Password"
              className="w-full h-[50px] pl-10 pr-4 py-2 font-dmsans text-sm font-bold tracking-[0.2px] border text-[#BABABA] rounded-lg bg-white outline-none"
            />
          </div>
        </div>
      </div>

      <div className="w-full pt-5 px-6 py-1 flex flex-col gap-6">
        <button className="h-[50px] px-10 w-full bg-[#0ACF83] text-[16px] rounded-lg font-semibold font-dmsans tracking-[0.2px] text-[#ffffff]">
          Sign Up
        </button>

        <div className="flex gap-4 justify-center">
          <a href="">
            <img src={appleIcon} alt="" />
          </a>
          <a href="">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="">
            <img src={googleIcon} alt="" />
          </a>
        </div>

        <p className="text-center font-light text-sm font-dmsans tracking-[0.2px] text-white">
          If you have an account?{" "}
          <Link to={"/login"} className="text-[#0ACF83] underline">
            Sign In here
          </Link>
        </p>
      </div>
    </>
  );
};

export default UserRegister;
