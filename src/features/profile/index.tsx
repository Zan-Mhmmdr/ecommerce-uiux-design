import { Link, useNavigate } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";
import reigen from "/images/pict/reigen.png";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logout successful!");

    navigate("/login");
  };

  return (
    <>
      <div className="flex px-6 items-center">
        <Link to={"/"}>
          <img src={back} alt="" />
        </Link>

        <div className="absolute flex left-1/2 -translate-x-1/2 font-bold font-dmsans text-[16px] tracking-[0.2px] leading-5 ">
          <h1>Profile</h1>
        </div>
      </div>

      <div className="flex gap-[26px] items-center px-6 py-13 ">
        <img src={reigen} className="rounded-[50%] size-[75px]" alt="" />
        <div className="flex flex-col gap-[7px] ">
          <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
            Reigen Arataka
          </h1>
          <p className="font-dmsans text-sm tracking-[0.2px] text-[#7F7F7F]">
            reigenarataka17@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-6 ">
        <div className="flex py-5 -mx-6 px-6 gap-2.5 border-t border-[#00000026]">
          <div className="font-dmsans  text-sm tracking-[0.2px] text-[#7F7F7F]">
            General
          </div>
        </div>
        <div className="flex py-[15px] gap-2.5 border-b  border-[#00000026]  -mx-6 px-6 ">
          <Link
            to={"/profile"}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Edit Profile
          </Link>
        </div>
        <div className="flex py-[15px] gap-2.5 border-b border-[#00000026] -mx-6 px-6 ">
          <Link
            to={"/profile"}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Notifications
          </Link>
        </div>
        <div className="flex py-[15px] gap-2.5 border-b border-[#00000026] -mx-6 px-6 ">
          <Link
            to={"/profile"}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Wishlist
          </Link>
        </div>
        <div className="flex py-5 -mx-6 px-6 gap-2.5 ">
          <div className="font-dmsans  text-sm tracking-[0.2px] text-[#7F7F7F]">
            Legal
          </div>
        </div>
        <div className="flex py-[15px] gap-2.5 border-b border-[#00000026] -mx-6 px-6 ">
          <Link
            to={"/profile"}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Terms of Use
          </Link>
        </div>
        <div className="flex py-[15px] gap-2.5 border-b border-[#00000026] -mx-6 px-6 ">
          <Link
            to={"/profile"}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex py-[15px] gap-2.5  -mx-6 px-6 ">
          <div className="font-dmsans  text-sm tracking-[0.2px] text-[#7F7F7F]">
            Personal
          </div>{" "}
        </div>
        <div className="flex py-[15px] gap-2.5 border-b border-[#00000026] -mx-6 px-6 ">
          <Link
            to={"/profile"}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Report a Bug
          </Link>
        </div>
        <div className="flex py-[15px] gap-2.5 border-b border-[#00000026] -mx-6 px-6 ">
          <button
            onClick={handleLogout}
            className="font-dmsans text-[16px] tracking-[0.2px]"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
