import React from "react";
import AvailableWidget from "./AvailableWidget";

function Main() {
  return (
    <div className="h-full p-32 bg-[#00181f]">
      <AvailableWidget />
      <div className="p-1"></div>
      <h1 className="text-white text-7xl font-mono">Hi! I'm <span className="underline">Ali</span>! </h1>
      <div className="p-8"></div>
      {/* <h2 className="text-white text-3xl font-mono">Fullstack Developer. Photographer</h2> */}

    </div>
  );
}

export default Main;
