import { Link } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";
import { useState } from "react";
import { notifications } from "../data/notifications";

const NotifPage = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    {
      id: "general",
      label: "General",
    },
    {
      id: "recomandation",
      label: "Recomanded",
    },
  ];
  

  return (
    <>
      <div className="flex px-6 items-center pt-5">
        <Link to={"/profile"}>
          <img src={back} alt="" />
        </Link>

        <div className="absolute flex left-1/2 -translate-x-1/2 font-bold font-dmsans text-xl tracking-[0.2px] leading-5 ">
          <h1>Notification</h1>
        </div>
      </div>

      <div className="flex gap-12 px-6 pt-13">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-dmsans font-semibold text-[16px] tracking-[0.2px] border-b-2 leading-5 pb-2 ${
              activeTab === tab.id
                ? "text-[#0ACF83]  border-[#0ACF83]"
                : "text-[#7F7F7F] border-transparent "
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {notifications.map((item) => (
        <div key={item.id} className="flex gap-4 px-6 pt-10 items-center">
          <img src={item.avatar} className="rounded-[50%] size-20" alt="" />

          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-dmsans text-lg tracking-[0.2px]">
              {item.name}
            </h1>

            <span className="font-dmsans text-sm tracking-[0.2px] line-clamp-3">
              {item.message}
            </span>

            <span className="text-xs text-gray-500 mt-1">{item.time}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotifPage;
