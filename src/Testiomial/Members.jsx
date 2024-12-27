import React from "react";
import MembersData from "./../../data/Members.json";
function Members() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col">
      <p className="text-green-500 font-medium">TEAM</p>
      <h1 className="text-2xl text-center md:text-3xl font-semibold">
        Our Professional Members{" "}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 items-center ">
        {MembersData.map((member) => (
          <div
            key={member.id}
            className="bg-white border-2  hover:border-green-500 transition-all rounded-md  flex  flex-col group"
          >
            <img src={member.image} alt="" className=" object-cover h-60" />
            <div className="p-2">
              <p className="text-xl   font-bold text-black mt-2 group-hover:text-green-500 transition-all ">
                {member.name}
              </p>
              <p className="text-base font-normal text-black  group-hover:text-green-500 transition-all ">
                {member.work}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
