import { ExternalLinkIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#00181f] px-10 p-5 sm:p-10 sm:px-52">
      <h1 className="font-mono text-xl sm:text-4xl text-white">Ali Bassiouni</h1>

      <div className="hidden relative sm:flex space-x-9 rounded-full border-white px-10  py-2 font-mono text-xl text-white">
        <p>About</p>
        <p>Projects</p>
        <p>Github</p>
        <p className="inline-flex items-center justify-center">
            Resume
            <ExternalLinkIcon className="mx-3 h-5 w-5" />
          </p>
        <p>Contact</p>
        <div className="absolute inset-y-0 right-0 flex space-x-9 rounded-full border border-white bg-[#00181f]/0 px-10 py-2 font-mono text-xl text-white backdrop-blur-lg">
          <p>About</p>
          <p>Projects</p>
          <p>Github</p>
          <p className="inline-flex items-center justify-center">
            Resume
            <ExternalLinkIcon className="mx-3 h-5 w-5" />
          </p>
          <p>Contact</p>
        </div>
      </div>
      <div>
        <HamburgerMenuIcon className="sm:hidden h-6 w-6 text-white" />

      </div>
    </div>
  );
}

export default Navbar;
