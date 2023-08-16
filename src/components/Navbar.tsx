import React from "react";

function Navbar() {
	return (
		<div className="bg-[#00181f] flex items-center justify-between px-52 p-10">
			<h1 className="text-4xl text-white font-mono">Ali Bassiouni</h1>

            <div className="relative flex space-x-9 border-white px-10 py-2  rounded-full text-white text-xl font-mono">
                <p>About</p>
                <p>Projects</p>
                <p>Github</p>
                <p>Resume</p>
                <p>Contact</p>
                <div className="absolute inset-y-0 right-0 space-x-9 flex border bg-[#00181f]/0 backdrop-blur-lg border-white px-10 py-2 rounded-full text-white text-xl font-mono">
                    <p >About</p>
                    <p >Projects</p>
                    <p >Github</p>
                    <p >Resume</p>
                    <p >Contact</p>
                </div>
            </div>
		</div>
	);
}

export default Navbar;
