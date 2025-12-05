import { Link } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";
import reigen from "/images/pict/reigen.png";

const EditProfilePage = () => {
  return (
    <>
      <div className="flex px-6 items-center pt-3">
        <Link to={"/"}>
          <img src={back} alt="" />
        </Link>

        <div className="absolute flex left-1/2 -translate-x-1/2 font-bold font-dmsans text-[16px] tracking-[0.2px] leading-5 ">
          <h1>Edit Profile</h1>
        </div>
      </div>

      <div className="flex items-center flex-col pt-20">
        <img src={reigen} className="rounded-[50%] size-40" alt="" />
        <button className="pt-2  font-dmsans text-[16px] tracking-[0.2px] leading-5">
          Change Picture
        </button>
      </div>

      <div className="flex flex-col gap-6 px-6 w-full pt-10">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="font-semibold font-dmsans tracking-[0.2px] leading-5 "
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="outline rounded-lg  py-2 px-4 focus:outline-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-semibold font-dmsans tracking-[0.2px] leading-5"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            className="outline rounded-lg  py-2 px-4 focus:outline-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="font-semibold font-dmsans tracking-[0.2px] leading-5"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="outline rounded-lg  py-2 px-4 focus:outline-black"
          />
        </div>

        <button className="px-4 py-3 bg-black rounded-lg text-white font-dmsans text-lg tracking-[0.2px] mt-10">Update</button>
      </div>
    </>
  );
};

export default EditProfilePage;
