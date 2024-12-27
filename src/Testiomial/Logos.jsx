import React from "react";
import LogosData from "./../../data/Logos.json";

function Logos() {
  return (
    <div className="mt-5 border-2 p-10  ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 items-center gap-4 p-4 justify-items-center">
        {LogosData.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img 
              src={logo.img} 
              alt={logo.alt || "Logo"} // Added alt attribute for accessibility
              className="h-auto max-h-16 w-auto max-w-full md:max-h-24 lg:max-h-32 xl:max-h-40" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;
