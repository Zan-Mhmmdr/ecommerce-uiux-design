import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("user") || "null");

    const users = Array.isArray(storedUsers) ? storedUsers : [];

    const foundUser = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (!foundUser) {
      alert("Invalid email or password.");
      return;
    }

    const loginUser = {
      name: foundUser.name,
      email: foundUser.email,
    };

    localStorage.setItem("user", JSON.stringify(loginUser));

    alert("Login successful!");
    navigate("/");
  };

  return (
    <>
      <div className="pt-33 w-full px-6 flex flex-col gap-5">
        <div className="flex flex-col gap-5 w-full">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src="/images/icons/mail.svg"
                alt="icon"
                className="w-5 h-5 text-[#BABABA]"
              />
            </span>

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[50px] pl-10 pr-4 py-2  font-dmsans text-sm font-bold tracking-[0.2px] border text-[#BABABA] rounded-lg bg-white outline-none"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                src="/images/icons/lock.svg"
                alt="icon"
                className="w-5 h-5 text-[#BABABA]"
              />
            </span>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[50px] pl-10 pr-4 py-2  font-dmsans text-sm font-bold tracking-[0.2px] border text-[#BABABA] rounded-lg bg-white outline-none"
            />
          </div>
          <a
            href=""
            className="text-center font-medium text-[11px] tracking-[0.6px] font-dmsans text-[#ffffff]"
          >
            Forgot Password
          </a>
        </div>
      </div>
      <div className="w-full px-6 py-5 flex flex-col gap-6">
        <button
          onClick={handleLogin}
          className="h-[50px] px-10 w-full bg-[#0ACF83] text-[16px] rounded-lg font-semibold font-dmsans tracking-[0.2px] text-[#ffffff]"
        >
          Sign In
        </button>
        <p className="text-center font-light text-sm font-dmsans tracking-[0.2px] text-white">
          Didn’t have any account?{" "}
          <Link to={"/register"} className="text-[#0ACF83] underline">
            Sign Up here
          </Link>
        </p>
      </div>
    </>
  );
};

export default UserLogin;
