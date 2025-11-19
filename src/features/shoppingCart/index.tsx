import { Link } from "react-router-dom";
import back from "/src/assets/images/icons/chevron-left.svg";
import trash from "/src/assets/images/icons/trash-2.svg";
import add from "/src/assets/images/icons/+.svg";
import min from "/src/assets/images/icons/-.svg";
import proceed from "/src/assets/images/icons/chevron-right.svg";
import { useCartStore } from "../../store/useCartStore";

const ShoppingCart = () => {
  const { items, increaseQty, decreaseQty } = useCartStore();
  console.log(items);
  return (
    <>
      <div className="flex px-6 pt-[55px] justify-between">
        <Link to={"/"}>
          <img src={back} alt="" />
        </Link>

        <h1 className="font-dmsans font-bold text-[16px] tracking-[0.2px] leading-5">
          Shopping Cart
        </h1>

        <Link to={"/home"}>
          <img src={trash} alt="" />
        </Link>
      </div>

      <div className="flex flex-col px-6 gap-[35px] pt-10">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex gap-[15px]">
              <div className="bg-[#F6F6F6] p-2.5 rounded-2xl shrink-0">
                <img src={item.image} className="size-25" alt="" />
              </div>
              <div className="flex flex-col place-content-between w-full">
                <div className="flex flex-col gap-[5px] ">
                  <h1 className="font-dmsans text-[16px] tracking-[0.2px] ">
                    {item.name}{" "}
                  </h1>
                  <h2 className="font-dmsans text-sm tracking-[0.2px] font-bold">
                    USD {item.price}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-row  gap-[25px]">
                    <button onClick={() => decreaseQty(item.id)}>
                      <img src={add} alt="" />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>
                      <img src={min} alt="" />
                    </button>
                  </div>
                  <button>
                    <img src={trash} className="opacity-50" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col fixed bottom-0 left-0 right-0 items-center px-6 bg-white justify-center pb-5">
        <div className="flex justify-between w-full items-center py-5">
          <span className="font-dmsans font-bold text-[12px] opacity-60 tracking-[0.2px]">
            Total 2 Items
          </span>
          <span className="font-dmsans font-bold text-[16px] tracking-[0.2px]">
            USD 295
          </span>
        </div>
        <button className="w-full px-[30px] items-center py-5 flex justify-between  gap-2.5 font-dmsans text-[16px] tracking-[0.2px] leading-5 text-[#FFFFFF] bg-[#0ACF83] rounded-[10px]">
          <p className="font-dmsans font-semibold text-sm tracking-[0.7px]">
            Proceed to Checkout
          </p>
          <img src={proceed} alt="" />
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
