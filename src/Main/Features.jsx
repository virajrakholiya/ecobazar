import React from "react";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBox } from "react-icons/bs";

function Features() {
  const size = 40;
  const data = [
    {
      id: 1,
      name: "Free Shipping",
      description: "Free shipping with discount",
      icon: <MdOutlineLocalShipping size={size} />,
    },
    {
      id: 2,
      name: "Great Support 24/7",
      description: "Instant access to Contact",
      icon: <MdOutlineSupportAgent size={size} />,
    },
    {
      id: 3,
      name: "100% Sucure Payment",
      description: "We ensure your money is save",
      icon: <HiOutlineShoppingBag size={size} />,
    },
    {
      id: 4,
      name: "Money-Back Guarantee",
      description: "30 days money-back",
      icon: <BsBox size={size} />,
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center gap-5 mt-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center  gap-1 p-4 bg-white "
            >
              <div className="bg-gray-200 p-3 rounded-full text-green-600"> {item.icon}</div>
              <div className="">
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p className="">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
