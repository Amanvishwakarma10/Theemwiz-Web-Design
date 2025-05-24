import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="px-10 mt-0 p-5">
        <div className="flex justify-items-start gap-70 items-center px-60">
          <img className="h-[48px] w-[152px]" src={logo} alt="Company's logo" />

          {/* Hamburger Button - visible only on small screens */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Menu - shown on large screens only */}
          <ul className="hidden lg:flex text-white gap-25">
            <li>About</li>
            <li>Service</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>

          {/* Contact button - shown on large screens only */}
          <button className="hidden lg:block text-white border-2 border-gray-500 rounded-xl px-8 py-2 mr-5">
            Contact
          </button>
        </div>

        {/* Mobile Menu - shown when hamburger is open */}
        {isOpen && (
          <div className="lg:hidden mt-4 text-white flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              <li>About</li>
              <li>Service</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <button className="text-white border-2 border-gray-500 rounded-xl px-8 py-2 w-fit">
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
