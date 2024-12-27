import React from "react";
import { IoIosStar } from "react-icons/io";
import { RiHandbagLine } from "react-icons/ri";

function TrendingProduct() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5 items-center ">
        <HotProduct />
        <BestProduct />
        <TopProduct />
        <img
          src="/src/assets/image/Trending Product/Banner.png"
          className="h-auto rounded-md object-contain hidden md:block"
          alt=""
        />
      </div>
      <div className="">
        {" "}
        <img
          src="/src/assets/image/Trending Product/Video.png"
          className="mt-6 h-80 w-full object-cover rounded-md"
          alt=""
        />
      </div>
    </>
  );
}

export default TrendingProduct;

function HotProduct() {
  const products = [
    {
      id: 1,
      name: "Green Apple",
      image: "/src/assets/image/Trending Product/Image1.png",
      price: "$100",
    },
    {
      id: 2,
      name: "Indian Malta",
      image: "/src/assets/image/Trending Product/Image2.png",
      price: "$100",
    },
    {
      id: 3,
      name: "Green Lettuce",
      image: "/src/assets/image/Trending Product/Image3.png",
      price: "$100",
    },
  ];
  return (
    <div className="flex gap-2 mt-5 flex-col ">
      <h1 className="font-bold">Hot Deals</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border-2 hover:border-green-500 transition-all rounded-md p-3 flex items-center gap-2  group flex-row"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-24 object-cover"
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
          </div>
        </div>
      ))}
    </div>
  );
}

function BestProduct() {
  const products = [
    {
      id: 1,
      name: "Green Apple",
      image: "/src/assets/image/Trending Product/Image4.png",
      price: "$100",
    },
    {
      id: 2,
      name: "Indian Malta",
      image: "/src/assets/image/Trending Product/Image5.png",
      price: "$100",
    },
    {
      id: 3,
      name: "Green Lettuce",
      image: "/src/assets/image/Trending Product/Image6.png",
      price: "$100",
    },
  ];
  return (
    <div className="flex gap-2 mt-5 flex-col ">
      <h1 className="font-bold">Best Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border-2 hover:border-green-500 transition-all rounded-md p-3 flex items-center gap-2  group flex-row"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-24 object-cover"
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
          </div>
        </div>
      ))}
    </div>
  );
}

function TopProduct() {
  const products = [
    {
      id: 1,
      name: "Green Apple",
      image: "/src/assets/image/Trending Product/Image7.png",
      price: "$100",
    },
    {
      id: 2,
      name: "Indian Malta",
      image: "/src/assets/image/Trending Product/Image8.png",
      price: "$100",
    },
    {
      id: 3,
      name: "Green Lettuce",
      image: "/src/assets/image/Trending Product/Image9.png",
      price: "$100",
    },
  ];
  return (
    <div className="flex gap-2 mt-5 flex-col ">
      <h1 className="font-bold">Top Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border-2 hover:border-green-500 transition-all rounded-md p-3 flex items-center gap-2  group flex-row"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-24 object-cover"
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
          </div>
        </div>
      ))}
    </div>
  );
}
