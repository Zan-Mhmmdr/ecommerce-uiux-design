import { Link } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";

const ReportABugPage = () => {
  return (
    <>
      <div className="flex px-6 items-center pt-5">
        <Link to={"/profile"}>
          <img src={back} alt="" />
        </Link>

        <div className="absolute flex left-1/2 -translate-x-1/2 font-bold font-dmsans text-xl tracking-[0.2px] leading-5 ">
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </>
  );
};

export default ReportABugPage;
