import headset from "/src/assets/images/pict/headset.png";
import headphonee from "/src/assets/images/pict/headphone.png";
import kanade from "/src/assets/images/pict/kanade.jpeg";
import akane from "/src/assets/images/pict/akane.jpg";
import reigen from "/src/assets/images/pict/reigen.png";
import earphone from "/src/assets/images/pict/earphone.png";
import rating5 from "/src/assets/images/icons/rating-5.svg";
import rating from "/src/assets/images/icons/Rating.svg";
import { Link } from "react-router-dom";

const Overview = () => {

  return (
    <>
      <div className="flex flex-row overflow-x-auto no-scrollbar gap-5  pt-6">
        <div className="rounded-[10px] shrink-0 bg-[#F6F6F6]">
          <img src={headset} className="w-[285px] h-[391px]" alt="headset" />
        </div>
        <div className="rounded-[10px] shrink-0 bg-[#F6F6F6]">
          <img src={headset} className="w-[285px] h-[391px] " alt="12" />
        </div>
        <div className="rounded-[10px] shrink-0 bg-[#F6F6F6]">
          <img src={headset} className="w-[285px] h-[391px]" alt="headset" />
        </div>
      </div>

      <div className="pt-6">
        <Link to={"/*"} className="font-dmsans text-[16px] tracking-[0.2px]">
          Review (172)
        </Link>
        <div className="flex flex-col gap-[17px] pt-6 ">
          <div className="flex gap-[15px] ">
            <div className="flex gap-[13px] w-full">
              <img src={reigen} className="rounded-[50%] size-10" alt="" />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between w-full">
                  <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                    Reigen Arataka
                  </h1>
                  <p className="font-dmsans text-[12px] tracking-[0.2px] text-[#7F7F7F]">
                    1 Month ago
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={rating} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[54px]">
            <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
              Honestly, this Sony headphone surprised me. The sound quality is
              crystal clear and the bass hits just right. Super comfy for long
              sessions — definitely worth the price.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[17px] pt-6 ">
          <div className="flex gap-[15px] ">
            <div className="flex gap-[13px] w-full">
              <img src={akane} className="rounded-[50%] size-10" alt="" />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between w-full">
                  <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                    Kurokawa Akane
                  </h1>
                  <p className="font-dmsans text-[12px] tracking-[0.2px] text-[#7F7F7F]">
                    3 Month ago
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={rating5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[54px]">
            <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
              The sound feels so real, like I’m inside a movie scene. I love how
              clean the design is — elegant but simple. Perfect for when I need
              to focus on scripts or just relax.
            </p>
          </div>
          <div className="flex flex-row gap-[15px] pl-[54px]">
            <div className="bg-[#FFFFFF] border border-[#BABABA] rounded-[10px] p-2.5">
              <img src={headphonee} className="w-20" alt="" />
            </div>
            <div className="bg-[#FFFFFF] border border-[#BABABA] rounded-[10px] p-2.5">
              <img src={headphonee} className="w-20" alt="" />
            </div>
            <div className="bg-[#FFFFFF] border border-[#BABABA] rounded-[10px] p-2.5">
              <img src={headphonee} className="w-20" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[17px] py-6 ">
          <div className="flex gap-[15px] ">
            <div className="flex gap-[13px] w-full">
              <img src={kanade} className="rounded-[50%] size-10" alt="" />
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between w-full">
                  <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                    Kanade Tachibana
                  </h1>
                  <p className="font-dmsans text-[12px] tracking-[0.2px] text-[#7F7F7F]">
                    4 Month ago
                  </p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={rating} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[54px]">
            <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
              The sound is peaceful… it feels like floating in another world. I
              like how gentle the bass is — it doesn’t hurt my ears, just pure
              calmness.
            </p>
          </div>
        </div>
      </div>

      <div className="py-7 flex justify-center">
        <button className="font-dmsans text-sm leading-5 tracking-[0.2px]  text-[#7F7F7F]">
          See All Reviews
        </button>
      </div>

      <div className="bg-[#F6F6F6] py-10 -mx-6">
        <div className="flex justify-between px-6">
          <h1 className="font-dmsans text-[16px] tracking-[0.2px] leading-5">
            Another Product
          </h1>
          <Link
            to={"/"}
            className="text-sm font-dmsans text-[#7F7F7F] tracking-[0.2px]"
          >
            See All
          </Link>
        </div>

        <div className="flex px-6 py-6 flex-row gap-[15px]  overflow-x-auto  scrollbar-hide ">
          <div className="bg-[#ffffff] flex flex-col w-[155px] rounded-2xl items-center px-2.5 pt-[15px] gap-5">
            <img src={headphonee} className="h-[145px]" alt="" />
            <div className="flex flex-col gap-0.5 pb-3">
              <h2 className="font-dmsans tracking-[0.2px] text-sm">
                TMA-2 HD Wireless
              </h2>
              <h3 className="font-dmsans font-bold tracking-[0.2px] text-[12px]">
                USD 350
              </h3>
            </div>
          </div>
          <div className="bg-[#ffffff] flex flex-col w-[155px]  rounded-2xl items-center px-2.5 pt-[15px] gap-5">
            <img src={earphone} className="h-[145px]" alt="" />
            <div className="flex flex-col w-full gap-0.5 pb-3">
              <h2 className="font-dmsans  tracking-[0.2px] text-sm">
                C02 - Cable
              </h2>
              <h3 className="font-dmsans font-bold tracking-[0.2px] text-[12px]">
                USD 25
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <button className="w-full px-2.5 py-5 flex justify-center  gap-2.5 font-dmsans text-[16px] tracking-[0.2px] leading-5 text-[#FFFFFF] bg-[#0ACF83] rounded-[10px]">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Overview