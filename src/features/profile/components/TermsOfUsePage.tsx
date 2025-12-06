import { Link } from "react-router-dom";
import back from "/images/icons/chevron-left.svg";

const TermsOfUsePage = () => {
  return (
    <>
      <div className="flex px-6 items-center pt-5">
        <Link to={"/profile"}>
          <img src={back} alt="" />
        </Link>

        <div className="absolute flex left-1/2 -translate-x-1/2 font-bold  font-dmsans text-2xl tracking-[0.2px] leading-5 ">
          <h1>Terms Of Use</h1>
        </div>
      </div>

      <div className="flex flex-col gap-12 px-6 pt-17">
        <div className="flex flex-col gap-2">
          <p className="font-dmsans text-sm tracking-[0.2px] ">
            Last Updated: 06/12/2025
          </p>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            Welcome to our website. By accessing or using this site, you agree
            to be bound by these Terms of Use. Please read them carefully. If
            you do not agree with any part of these terms, you must stop using
            the website immediately.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            1. Acceptance of Terms
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            By using this website, you confirm that you are at least 13 years
            old and legally capable of entering into a binding agreement. Your
            continued use of the site means you accept and agree to follow these
            Terms.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            2. Use of the Website
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            If the website allows account creation, you are responsible for:
          </p>
          <ul className="list-disc px-6 font-dmsans text-lg tracking-[0.2px] leading-7">
            <li>Violate any applicable laws or regulations</li>
            <li>Harm or interfere with the website’s functionality</li>
            <li>Harass, threaten, or harm other users</li>
          </ul>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            You may not attempt to gain unauthorized access to the website, its
            servers, or its connected systems.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            3. User Accounts
          </h1>
          <ul className="list-disc px-6 font-dmsans text-lg tracking-[0.2px] leading-7">
            <li>Keeping your login credentials confidential</li>
            <li>All activities that occur under your account</li>
            <li>
              Ensuring the information you provide is accurate and up to date
            </li>
          </ul>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            We reserve the right to suspend or terminate accounts that violate
            these Terms.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            4. Content Ownership
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            All content on this website — including text, graphics, images,
            logos, icons, and code — is owned by us or our content providers.
            You are allowed to view and use content for personal, non-commercial
            purposes. You may not copy, reproduce, distribute, or modify any
            content without our written permission.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            5. User-Generated Content
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            If you submit or upload any content (such as comments, feedback, or
            profile information), you grant us a non-exclusive, royalty-free
            license to use, display, modify, and distribute that content for
            website operation and improvement.
          </p>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            You are responsible for ensuring your content:
          </p>
          <ul className="list-disc px-6 font-dmsans text-lg tracking-[0.2px] leading-7">
            <li>Does not violate any intellectual property rights</li>
            <li>
              Does not contain harmful, illegal, or inappropriate material
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            6. Privacy
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            Your use of the website is also governed by our Privacy Policy,
            which explains how we collect, use, and protect your personal
            information.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            7. Third-Party Links
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            The website may contain links to third-party sites. We are not
            responsible for the content, privacy practices, or policies of any
            external websites. You access third-party links at your own risk.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            8. Disclaimer of Warranties
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            The website is provided “as is” and “as available.” <br /> We do not
            guarantee:
          </p>
          <ul className="list-disc px-6 font-dmsans text-lg tracking-[0.2px] leading-7">
            <li>That the website will always be available</li>
            <li>That it will be free from errors, bugs, or interruptions</li>
            <li>
              That it will be free from errors, bugs, or interruptions That all
              information on the site is accurate or complete
            </li>
          </ul>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            You use the website at your own discretion and risk.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            9. Limitation of Liability
          </h1>

          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            {" "}
            We are not liable for any damages, losses, or injuries resulting
            from:
          </p>
          <ul className="list-disc px-6 font-dmsans text-lg tracking-[0.2px] leading-7">
            <li>Your use of the website</li>
            <li>Inability to access the website</li>
            <li>Any content, errors, or interruptions</li>
          </ul>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            To the maximum extent permitted by law, our total liability will not
            exceed the amount you paid to use the website (if any).
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            10. Changes to the Terms
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            We may update or revise these Terms at any time. Changes take effect
            once posted on this page. Your continued use of the website after
            changes means you accept the updated Terms.
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-20">
          <h1 className="font-dmsans font-semibold text-2xl tracking-[0.2px] leading-5">
            11. Contact Us
          </h1>
          <p className="font-dmsans text-lg tracking-[0.2px] leading-7">
            If you have questions about these Terms of Use, you can contact us
            at:
          </p>
          <a
            href="mailto:zanmmuhammadr774@gmail.com"
            className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 underline"
          >
            zanmmuhammadr774@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default TermsOfUsePage;
