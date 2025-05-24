import React from "react";
import circle from "../assets/Footer/circle.svg";
import facebook from "../assets/Footer/facebook.svg";
import twitter from "../assets/Footer/twitter.svg";
import instagram from "../assets/Footer/instagram.svg";
import line from "../assets/Footer/line.svg";

const Footer = () => {
  return (
    //Footer section of the website
    // This section contains the footer of the website
    // with some links and social media icons
    // and some copyright information
    <div
      style={{ backgroundColor: "#FDF0E9" }}
      className="p-20 h-[480px] w-full px-[18%]"
    >
      <div className="flex  gap-60 relative mx-20">
        <h1 className="font-bold text-2xl text-amber-950">Agency</h1>
        <div>
          <h1 className="text-[#EF6D58]">MENU</h1>

          <ul className="text-[#391400] mt-5">
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#EF6D58]">SERVICE</h1>

          <ul className="text-[#391400] mt-5">
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>See More</li>
          </ul>
        </div>

        <h1 className="flex items-center gap-2 absolute right-8">
          <img src={circle} alt="" />
          <img src={circle} alt="" />
          <img src={circle} alt="" />
          <img className="absolute left-5" src={facebook} alt="" />
          <img className="absolute left-18" src={twitter} alt="" />
          <img className="absolute left-32" src={instagram} alt="" />
        </h1>
      </div>
      <div className="felx items-center mt-30 mx-12">
        <img src={line} alt="" />
      </div>
      <div className="flex gap-[460px] mt-10 mx-15">
        <h1 className="text-[#391400A3]">
          Copyright © 2022 Laaqiq. All Rights Reserved.
        </h1>
        <h1 className="text-[#391400A3] flex gap-12">
          <h1>Terms of use</h1>
          <h1>Privacy policy</h1>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
