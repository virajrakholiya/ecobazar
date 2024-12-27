import React from "react";
import Location from "./Location";
import Search from "./search";
import Navbar from "./Navbar";

function IndexHeader() {
  return (
    <div className="flex flex-col">
      <Location />
      <Search />
      <Navbar />
    </div>
  );
}

export default IndexHeader;
