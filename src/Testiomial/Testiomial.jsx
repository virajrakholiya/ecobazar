import React from "react";
import TestiomialData from "./../../data/Testiomial.json";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";

function Testiomial() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col bg-gray-200 p-5">
      <p className="text-green-500 font-medium">CLIENT TESTIMONIALS</p>
      <h1 className="text-2xl text-center md:text-3xl font-semibold">
        What our Client Says
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 mt-10 items-center ">
        {TestiomialData.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2  hover:border-green-500 transition-all rounded-md p-5 flex  flex-col group"
          >
            <RiDoubleQuotesL size={30} />
            <p className="text-base font-normal text-black mt-2 group-hover:text-green-500 transition-all ">
              {item.msg}
            </p>
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="flex flex-row mt-3 items-center gap-3 ">
                <img src={item.image} alt="" className="h-10 object-cover" />
                <div className="flex flex-col ">
                  <p className="text-base font-bold text-black mt-2 group-hover:text-green-500 transition-all ">
                    {item.name}
                  </p>
                  <p className="text-base font-normal text-black  group-hover:text-green-500 transition-all ">
                    Customer
                  </p>
                </div>
              </div>{" "}
              <div className="flex ">
                {Array.from({ length: 5 }, (_, index) => (
                  <IoIosStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testiomial;
