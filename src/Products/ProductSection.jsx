import React from "react";
import Product from "./../../data/Product.json";
import { IoIosStar } from "react-icons/io";
import { RiHandbagLine } from "react-icons/ri";

function ProductSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
      <img
        src="/src/assets/image/Products/Bannar.png"
        className="h-80 hidden md:block rounded-md object-cover"
        alt=""
      />
      {Product.map((product) => (
        <div
          key={product.id}
          className="bg-white border-2 hover:border-green-500 transition-all rounded-md p-4 flex items-center flex-col group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-24 md:h-56 object-cover"
          />
          <div className="flex items-center justify-between w-full mt-2">
            <div className="flex flex-col">
              <p className="text-base font-normal text-black group-hover:text-green-500 transition-all">
                {product.name}
              </p>
              <p className="text-lg font-semibold text-black">
                {product.price}
              </p>
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <IoIosStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
            <div className="bg-slate-200 p-2 rounded-full group-hover:bg-green-500 transition-all">
              <RiHandbagLine className="text-black" size={25} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
