import React from "react";
import { LuCheck } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { SiOrganicmaps } from "react-icons/si";

function ExtraContent() {
  return (
    <div className="mt-10  gap-5">
      <div className="flex  justify-center gap-5 border-b-2 text-center">
        <p className="text-black font-bold border-b-2 border-green-500">
          Descriptions
        </p>
        <p className="text-gray-500">Additional Information</p>
        <p className="text-gray-500">Customer Feedback</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  p-10 gap-20 ">
        <div className="flex flex-col">
          <p>
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
            posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
            vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
            porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
            Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
            Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
            scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
            commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit.
          </p>
         
          <p className="mt-5 flex flex-row gap-2  items-center">
            <LuCheck className="bg-green-500 text-white rounded-full" />
            100 g of fresh leaves provides.
          </p>
          <p className="flex flex-row gap-2 items-center ">
            <LuCheck className="bg-green-500 text-white rounded-full" /> Aliquam
            ac est at augue volutpat elementum.
          </p>
          <p className="flex flex-row gap-2  items-center">
            <LuCheck className="bg-green-500 text-white rounded-full" />
            Quisque nec enim eget sapien molestie.
          </p>
          <p className="flex flex-row gap-2 items-center ">
            <LuCheck className="bg-green-500 text-white rounded-full" />
            Proin convallis odio volutpat finibus posuere.
          </p>
          <p className="mt-5">
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.{" "}
          </p>
        </div>
        <div className="">
          <img
            src="/src/assets/image/Image.png"
            className="h-auto object-contain w-full"
            alt=""
          />
          <div className="border-2 mt-5 flex flex-row items-center gap-2 p-2">
            <div className="flex flex-row items-center gap-2 p-2">
              <RiDiscountPercentLine size={35} fill="green" />
              <div className="flex flex-col">
                <p className="font-medium">64% Discount</p>
                <p>Save your 64% money with us</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 p-2">
              <SiOrganicmaps size={35} fill="green" />
              <div className="flex flex-col">
                <p className="font-medium">100% Organic</p>
                <p>100% Organic Vegetables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraContent;
