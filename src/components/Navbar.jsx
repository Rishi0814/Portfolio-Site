import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navArray } from "../data/data";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f]  text-gray-300">
      <div>
        <p className="font-mono text-[#ffec99] text-4xl  font-semibold italic">
          RB
        </p>
      </div>
      {/* main screen */}
      <div className=" text-xl font-normal hidden md:flex shadow-[#040c16] ">
        <ul className="hidden md:flex ">
          {navArray.map((navItem, index) => (
            <li key={index}>
              <Link to={navItem} spy={true} smooth={true} duration={500}>
                {navItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          {navArray.map((navItem, index) => (
            <li className="py-6 text-4xl" key={index}>
              <Link
                onClick={handleClick}
                to={navItem}
                spy={true}
                smooth={true}
                duration={500}
              >
                {navItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
