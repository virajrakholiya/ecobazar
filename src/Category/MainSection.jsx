import React from "react";
import Categort from "./../../data/Category.json";

function MainSection() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
        {Categort.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border-2 hover:border-green-500 transition-all rounded-md p-5 flex items-center flex-col group" // Add 'group' class here
          >
            <img src={item.image} alt="" className="h-20 object-cover" />
            <p className="text-base font-normal text-black mt-2 group-hover:text-green-500 transition-all "> {/* Use 'group-hover' for text color change */}
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
