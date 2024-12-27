import React from "react";
import Sidebar from "./Sidebar";
import Features from "./Features";

function IndexMain() {
  return (
    <div className="pt-5">
      <div className="flex flex-col-reverse lg:flex-row gap-5 w-full">
        <Sidebar />
        <img
          src="/src/assets/image/Bannar.png"
          alt=""
          className="object-center h-auto max-w-full lg:h-[95vh] lg:w-[80vw]"
        />
      </div>
      <Features />
    </div>
  );
}

export default IndexMain;
