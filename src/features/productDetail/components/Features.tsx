import aptx from "/src/assets/images/pict/aptx-audio.png";
import alcantara from "/src/assets/images/pict/alcantara.png";
import type { Product } from "../../products/data/products";
import { useCartStore } from "../../../store/useCartStore";

interface OverviewProps {
  product: Product;
}

const Features = ({ product }: OverviewProps) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex flex-col gap-[13px] ">
          <h1 className="font-dmsans text-[16px] tracking-[0.2px] font-bold leading-6">
            Highly Detailed Audio
          </h1>
          <p className="font-dmsans text-[16px] tracking-[0.2px] leading-6">
            The speaker unit contains a diaphragm that is precision-grown from
            NAC Audio bio-cellulose, making it stiffer, lighter and stronger
            than regular PET speaker units, and allowing the sound-producing
            diaphragm to vibrate without the levels of distortion found in other
            speakers.{" "}
          </p>
          <p className="font-dmsans text-[16px] tracking-[0.2px] leading-6">
            The speaker unit contains a diaphragm that is precision-grown from
            NAC Audio bio-cellulose, making it stiffer, lighter and stronger
            than regular PET speaker units, and allowing the sound-producing
            diaphragm to vibrate without the levels of distortion found in other
            speakers.{" "}
          </p>
        </div>

        <div className="flex flex-row  gap-3.5">
          <div>
            <img src={aptx} alt="" />
          </div>
          <div className="flex flex-col  justify-between h-full gap-2">
            <h1 className="font-dmsans font-bold text-[16px] tracking-[0.2px] leading-6">
              {product?.name} SUPPORTS APTX® HD AUDIO
            </h1>
            <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
              The Aptx® HD codec transmits 24-bit hi-res audio, equal to or
              better than CD quality.
            </p>
          </div>
        </div>
        <div className="flex flex-row  gap-3.5">
          <div>
            <img src={alcantara} alt="" />
          </div>
          <div className="flex flex-col  justify-between h-full gap-2">
            <h1 className="font-dmsans font-bold text-[16px] tracking-[0.2px] leading-6">
              ULTRA SOFT WITH <br /> ALCANTARA
            </h1>
            <p className="font-dmsans text-sm tracking-[0.2px] leading-5">
              Alcantara® is a highly innovative material offering an unrivalled
              combination of
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center py-8">
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                qty: 1,
              })
            }
            className="w-full px-2.5 py-5 flex justify-center  gap-2.5 font-dmsans text-[16px] tracking-[0.2px] leading-5 text-[#FFFFFF] bg-[#0ACF83] rounded-[10px]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Features;
