import React from "react";
import { IoIosStar } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { BsReddit } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Product = () => {
  const products = [
    {
      id: 1,
      image: "/src/assets/image/item Image/Product Image Slider.png",
      alt: "Product Image 1",
    },
    {
      id: 2,
      image: "/src/assets/image/item Image/Product Image (1).png",
      alt: "Product Image 2",
    },
    {
      id: 3,
      image: "/src/assets/image/item Image/Product Image (2).png",
      alt: "Product Image 3",
    },
    {
      id: 4,
      image: "/src/assets/image/item Image/Product Image.png",
      alt: "Product Slider Image",
    },
  ];

  const socialIcons = [
    { id: 1, icon: <IoLogoFacebook size={25} /> },
    { id: 2, icon: <FiTwitter size={25} /> },
    { id: 3, icon: <MdWhatsapp size={25} /> },
    { id: 4, icon: <BsReddit size={25} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
      <div className="flex flex-col-reverse gap-4 md:flex-row ">
        <div className="flex flex-wrap flex-row md:flex-col gap-2">
          {products.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
              className="h-20 w-20 object-cover border"
            />
          ))}
        </div>
        <img
          src="/src/assets/image/item Image/ProductMain.png"
          alt="Main Product"
          className="mt-4 h-80 object-contain"
        />
      </div>

      <div className="flex gap-2 flex-col">
        <div className="flex flex-row gap-1">
          <h1 className="text-3xl font-blod">Chinese Cabbage</h1>
          <p className="bg-green-200 w-20 text-center p-1">In Stock</p>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoIosStar key={index} className="text-yellow-500" />
            ))}
            4 Review
          </div>
          <p>
            <b>SKU</b>: 234221
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 border-b-2 pb-5">
          <p className="line-through text-gray-500">$200</p>
          <p className="text-2xl font-bold text-green-500">$100</p>
          <p className="bg-red-100 rounded-2xl p-1 text-red-500">50% off</p>
        </div>
        <div className="flex flex-col justify-between gap-2 md:flex-row md:justify-between">
          <p className="flex flex-row items-center gap-1">
            Brand:{" "}
            <img src="/src/assets/image/Group 19.png" height={20} alt="" />
          </p>
          <div className="flex flex-row items-center gap-2">
            <p>Share With :</p>
            {socialIcons.map((item) => (
              <div key={item.id}>
                <button className="p-3 rounded-full hover:bg-green-500 transition-colors">
                  {item.icon}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-2 pb-2">
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full justify-between border-b-2 pb-2 ">
          <div className="flex gap-2 border-2 rounded-3xl p-1 ">
            <button className="p-2 bg-gray-200 rounded-full w-10 text-center">
              -
            </button>
            <p className="p-2 rounded-full w-10 text-center">1</p>
            <button className="p-2 bg-gray-200 rounded-full w-10 text-center">
              +
            </button>
          </div>
          <button className="p-2 bg-green-500 rounded-full w-full justify-center flex items-center gap-2 text-white text-center">
            Add to Card <IoCartOutline size={20} />
          </button>
          <button className="p-3 bg-green-500 rounded-full text-white text-center">
            <CiHeart size={30} fill="white" />
          </button>
        </div>{" "}
        <div className="">
          <p className="flex flex-row gap-1">
            <b>Category</b>: Vegetables
          </p>
          <p><b>Tag:</b> Vegetables, Healthy, Chinese, Cabbage, Green, Cabbage</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
