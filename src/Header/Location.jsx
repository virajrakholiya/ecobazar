import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

function Location() {
  return (
    <div className="border-b border-gray-400  ">
      <div className="flex justify-between items-center p-1 ">
        <div className="flex items-center flex-direction-row gap-1">
          <CiLocationOn size={20} />
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="flex items-center">
            Eng <RiArrowDropDownLine />
          </p>
          <p className="flex items-center">
            USD <RiArrowDropDownLine />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location;
