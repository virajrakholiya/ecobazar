import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { BsReddit } from "react-icons/bs";

function NewsLetter() {
  const size = 25;
  const icon = [
    {
      id: 1,
      icon: <IoLogoFacebook size={size} />,
    },
    {
      id: 2,
      icon: <FiTwitter size={size} />,
    },
    {
      id: 3,
      icon: <MdWhatsapp size={size} />,
    },
    {
      id: 4,
      icon: <BsReddit size={size} />,
    },
  ];
  return (
    <div className="bg-black text-white p-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between flex-row">
      <div className="flex flex-row items-center gap-2">
        {" "}
        <HiOutlineMailOpen size={40} className="text-green-500" />
        <div className="flex flex-col ">
          <p className="text-lg font-medium">Subcribe our Newsletter</p>
          <p className="text-slate-500">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-md gap-2 p-4">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-200 placeholder-gray-400 outline-none ring-1 ring-gray-700 transition-all focus:ring-2 focus:ring-green-500"
        />
        <button className="rounded-lg bg-green-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600 active:bg-green-700">
          Subscribe
        </button>
      </div>
      <div className="flex flex-row gap-2 items-enter">
        {icon.map((item) => (
          <div className="">
            <button
              key={item.id}
              className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition-colors"
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsLetter;
