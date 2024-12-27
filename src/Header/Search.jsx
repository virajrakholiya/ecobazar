import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

function Search() {
  return (
    <div className="flex justify-between items-center p-3 flex-col sm:flex-row gap-2 ">
      <img src="/src/assets/image/Ecobazar.png" alt="" className="h-8 sm:9 md:10 " />
      <div className="flex items-center ">
        <div className="flex border border-r-0 rounded-r-none items-center gap-2 p-1 rounded-md ">
          <CiSearch className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for products"
            className=" border-gray-300 rounded-md p-1"
          />
        </div>
        <button className="bg-green-500 p-2 rounded-md rounded-l-none">
          Search
        </button>
      </div>
      <div className="flex-row items-center gap-2 hidden md:flex">
        <FiPhoneCall size={30} />
        <div className="flex flex-col">
          <p className="text-gray-500">Customer Services</p>
          <p className="text-black font-bold">( 219 ) 555-0114</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
