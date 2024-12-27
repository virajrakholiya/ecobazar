import React from "react";
import { LuApple } from "react-icons/lu";
import { PiBowlSteam, PiEggCrackLight } from "react-icons/pi";
import { IoFishOutline } from "react-icons/io5";
import { BsCake2 } from "react-icons/bs";
import { TbCakeRoll } from "react-icons/tb";
import { LuMilk } from "react-icons/lu";
import { PiCheeseThin } from "react-icons/pi";
import { GiButterToast } from "react-icons/gi";

function Sidebar() {
  const size = 25;
  const sidebarItems = [
    { id: 1, name: "Fresh Fruits", icon: <LuApple size={size} /> },
    { id: 2, name: "Vegetables", icon: <PiBowlSteam size={size} /> },
    { id: 3, name: "Dairy & Eggs", icon: <PiEggCrackLight size={size} /> },
    { id: 4, name: "Meat & Seafood", icon: <IoFishOutline size={size} /> },
    { id: 5, name: "Bakery", icon: <TbCakeRoll size={size} /> },
    { id: 6, name: "Cake & Pastry", icon: <BsCake2 size={size} /> },
    { id: 7, name: "Butter & Margarine", icon: <GiButterToast size={size} /> },
    { id: 8, name: "Cheese", icon: <PiCheeseThin size={size} /> },
    { id: 9, name: "Milk", icon: <LuMilk size={size} /> },
  ];

  return (
    <div className="w-full lg:w-[214.9px]">
      <div className="bg-white text-black border-2">
        <ul className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-1"> 
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className="hover:bg-green-500 hover:text-white transition-colors flex items-center gap-2 p-2 py-4"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
