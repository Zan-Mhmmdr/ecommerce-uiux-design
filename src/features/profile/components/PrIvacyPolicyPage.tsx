import { Link } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";

const PrivacyPolicyPage = () => {
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

      <div className="flex flex-col gap-12 px-6 pt-17">
        <div className="flex flex-col gap-2">
          <p className="font-dmsans text-sm tracking-[0.2px] ">
            Last Updated: 08/12/2025
          </p>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            <span className="font-bold">Information We Collect:</span> We
            collect basic details such as your name, email, and any information
            you provide while using our website. We may also collect technical
            data like your IP address and pages you visit to help improve our
            services.
          </p>

          <p className="font-dmsans font-bold text-lg tracking-[0.2px] leading-7">
            We use your information to:
          </p>
          <ul className="list-disc px-6 font-dmsans text-lg tracking-[0.2px] leading-7">
            <li>Run and improve the website</li>
            <li>Respond to your requests</li>
            <li>Keep your account secure</li>
          </ul>

          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            <span className="font-bold">Data Sharing:</span> We do not sell your
            data. We may share your information only with trusted service
            providers or when required by law.
          </p>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            <span className="font-bold">Cookies:</span> We use cookies to
            enhance your experience. You can disable them in your browser
            settings.
          </p>
          <p className="font-dmsans  text-lg tracking-[0.2px] leading-7">
            <span className="font-bold">Agreement & Contact:</span> By using this
            website, you agree to this Privacy Policy. <br /> If you have any
            questions, contact us at{" "}
            <a
              href="mailto:zanmmuhammadr774@gmail.com"
              className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 underline"
            >
              zanmmuhammadr774@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
