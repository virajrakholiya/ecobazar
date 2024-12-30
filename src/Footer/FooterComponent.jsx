import React from "react";

function FooterComponent() {
  return (
    <div className="bg-slate-200 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-row justify-between">
      <div className="flex flex-col gap-3">
        <div className="">
          {" "}
          <img src="/src/assets/image/Ecobazar.png" alt="" className="h-10" />
        </div>
        <p className="w-full md:w-64">
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </p>
        <div className="flex gap-3">
          <p className="border-b-2 border-green-500">(219) 555-0114</p> or
          <p className="border-b-2 border-green-500">Proxy@gmail.com</p>
        </div>
      </div>
      <FooterMenu  />
      <div className="mt-5 md:mt-0">
        <p className="font-medium"> Download Mobile App</p>
        <div className="flex flex-row gap-3 mt-3">
            <img src="/src/assets/image/App Store.png" alt="" />
            <img src="/src/assets/image/Google Play.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

function FooterMenu() {
  return (
    <div className="flex flex-row gap-5 mt-5 md:mt-0">
      <div className="flex gap-5 flex-col justify-between">
        <p className="font-bold">My Account</p>
        <p>Order History</p>
        <p>Product</p>
        <p>Shoping Cart</p>
        <p>Wishlist</p>
      </div>
      <div className="flex gap-5 flex-col">
        <p className="font-bold">Helps</p>
        <p>Contact</p>
        <p>Terms & Condition</p>
        <p>Return Policy</p>
        <p>FAQ</p>
      </div>
      <div className="flex gap-5 flex-col">
        <p className="font-bold">Proxy</p>
        <p>About</p>
        <p>Shop</p>
        <p>Product</p>
        <p>Track Order</p>
      </div>
    </div>
  );
}
