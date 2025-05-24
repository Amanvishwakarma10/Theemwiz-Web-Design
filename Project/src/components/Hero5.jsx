import React from "react";
import circle from "../assets/Hero5/Circle.svg";
import location from "../assets/Hero5/Location.svg";
import arrow from "../assets/Hero5/arrow.svg";

const Hero5 = () => {
  return (
    // 5th Hero section of the website
    <div className="bg-[url('./assets/Hero5/Map.png')] h-[719px] w-full bg-cover bg-no-repeat relative">
      {/* Conatct Us section */}
      <div className="flex items-center justify-between gap-100 absolute top-[20%] left-[20%]">
        <div className="h-[464px] w-[470px] p-10 py-15 bg-white rounded relative">
          {/* left side section Conatct us form */}
          <h1 className="text-2xl font-bold" style={{ color: "#391400" }}>
            Get In Touch
          </h1>
          <h1 className="rounded mt-5 " style={{ border: "1px solid #F3D1BF" }}>
            <input
              className=" placeholder:text-[#391400A3] h-12 w-full placeholder:p-3 text-[#391400A3]"
              type="text"
              placeholder="Your email"
            />
          </h1>
          <div
            className="relative group rounded  mt-5 "
            style={{ border: "1px solid #F3D1BF" }}
          >
            <ul>
              <li className="cursor-pointer placeholder:text-[#391400A3] h-12 w-full text-[#391400A3] p-3 ">
                Service
              </li>
            </ul>
            {/* Dropdown menu */}
            <ul className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-md mt-2 rounded p-2 min-w-[120px]">
              <li className="hover:bg-gray-100 px-3 py-1 rounded">
                Web Design
              </li>
              <li className="hover:bg-gray-100 px-3 py-1 rounded">SEO</li>
              <li className="hover:bg-gray-100 px-3 py-1 rounded">Marketing</li>
            </ul>
            <img className="absolute right-5 top-5" src={arrow} alt="" />
          </div>

          <h1
            className="rounded mt-3 h-[96px] relative"
            style={{ border: "1px solid #F3D1BF" }}
          >
            <input
              className="placeholder:text-[#391400A3] h-23.5 w-full placeholder:p-3 placeholder:absolute placeholder:top-0 text-[#391400A3] mt-0 "
              name="message"
              id="message"
              placeholder="Message"
            ></input>
          </h1>
          <button className="absolute px-6 py-3 bg-orange-600 text-white font-bold right-10 top-[80%] rounded">
            SUBMIT NOW
          </button>
        </div>
        {/* Right Side section location logo */}
        <div className="relative h-[464px] w-[470px]">
          <img className="absolute top-[40%]" src={circle} alt="" />
          <img className="absolute top-[44%] left-6" src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero5;
