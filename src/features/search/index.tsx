import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../products/data/products";
import { useSearchStore } from "../../store/useSearchStore";

const SearchPage = () => {
  const [inputQuery, setInputQuery] = useState("");
  const { searchHistory, addSearchHistory, removeSearchHistory } =
    useSearchStore();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputQuery.toLowerCase())
  );

  console.log(filteredProducts);

  return (
    <>
      <div className="flex justify-between px-6 bg-white ">
        <Link to="/home">
          <img src="/images/icons/chevron-left.svg" alt="Back" />
        </Link>
        <h1 className="font-bold text-[16px] font-dmsans tracking-[0.2px] leading-5">
          Search
        </h1>
        <Link to="/shopping-cart">
          <img src="/images/icons/shopping-cart.svg" alt="Cart" />
        </Link>
      </div>

      <div className="py-[30px] bg-[#ffffff] px-6">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src="/images/icons/search.svg"
              alt="icon"
              className="w-5 h-5 text-[#BABABA]"
            />
          </span>

          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addSearchHistory(inputQuery);
              }
            }}
            placeholder="Search Handphone"
            className="w-full h-[45px] pl-10 pr-4 py-1 font-dmsans text-[12px] font-bold tracking-[0.2px] leading-5 border border-[#BABABA] text-[#2D2D2D] placeholder-[#BABABA] rounded-lg bg-white outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col px-6 gap-5 ">
        <h2>Lastest search</h2>
        {searchHistory.length === 0 && (
          <p className="text-center text-gray-500">No search history</p>
        )}{" "}
        {searchHistory.map((query, index) => (
          <div key={index} className="flex flex-col gap-[25px] ">
            <div className="flex justify-between">
              <button
                onClick={() => setInputQuery(query)}
                className="flex gap-2.5"
              >
                <img src="/images/icons/clock.svg" alt="" />
                <span className="font-dmsans text-sm tracking-[0.2px]">
                  {query}
                </span>
              </button>

              <button
                onClick={() => removeSearchHistory(query)}
                className="self-end"
              >
                <img src="/images/icons/x.svg" alt="remove" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-5 flex-col px-6 pt-6">
        <h1 className="font-dmsans text-[16px] tracking-[0.2px] leading-5">
          Popular product
        </h1>
        <div className="flex flex-col pt-10 gap-[25px]">
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500">No products found</p>
          )}
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-row gap-[15px] pb-10">
              <div className="bg-[#F6F6F6] rounded-2xl p-2.5">
                <img src={product.image} className="w-20" alt="" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col gap-[5px] ">
                  <h1 className="font-dmsans font-medium text-[16px] tracking-[0.2px]">
                    {product.name}{" "}
                  </h1>
                  <h1 className="font-dmsans font-extrabold text-sm tracking-[0.2px] ">
                    USD {product.price}
                  </h1>
                </div>
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="flex gap-2.5 ">
                    <div className="flex gap-[3px] ">
                      <img src="/images/icons/star-filled.svg" alt="" />
                      <h2 className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                        {product.rating}
                      </h2>
                    </div>
                    <span className="font-dmsans text-[12px] tracking-[0.2px] font-medium">
                      {product.reviews} Reviews
                    </span>
                  </div>
                  <Link to={"/search"}>
                    <img src="/images/icons/more-vertical.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
