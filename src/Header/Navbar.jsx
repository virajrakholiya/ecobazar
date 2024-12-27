import React, { useState } from 'react';
import { IoCartOutline,IoPersonOutline,IoMenu } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Shop" },
    { id: 3, name: "Pages" },
    { id: 4, name: "Blog" },
    { id: 5, name: "About Us" },
    { id: 6, name: "Contact Us" },
  ];

  const iconButtons = [
    { id: 1, icon: <CiHeart className="w-6 h-6" /> },
    { id: 2, icon: <IoPersonOutline className="w-6 h-6" /> },
    { id: 3, icon: <IoCartOutline className="w-6 h-6" /> },
  ];

  return (
    <nav className="w-full bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-4 bg-green-500 hover:bg-green-600 transition-colors"
            >
              <IoMenu className="text-white w-6 h-6" />
            </button>
            
            <div className="flex items-center bg-slate-800 px-4 py-2 cursor-pointer hover:bg-slate-700 transition-colors">
              <span className="text-white">All Categories</span>
              <RiArrowDropDownLine className="text-white w-5 h-5 ml-2" />
            </div>
          </div>

          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center px-4">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <div key={item.id} className="group relative py-4">
                    <button className="text-white flex items-center hover:text-green-500 transition-colors">
                      {item.name}
                      <RiArrowDropDownLine className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {iconButtons.map((item) => (
                  <button
                    key={item.id}
                    className="text-white p-2 hover:text-green-500 transition-colors"
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className="text-white block px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-4 py-3 border-t border-slate-700">
            {iconButtons.map((item) => (
              <button
                key={item.id}
                className="text-white p-2 hover:text-green-500 transition-colors"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;