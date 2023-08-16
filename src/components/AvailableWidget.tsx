import React from "react";

function AvailableWidget() {
  return (
    <div className="flex w-fit items-center justify-around rounded-full bg-gray-600 p-1 px-3 sm:p-2  sm:px-4">
      <span className="relative mr-3 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
      <p className="font-mono text-white">Available for work</p>
    </div>
  );
}

export default AvailableWidget;
