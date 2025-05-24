import React from "react";
import sofa from "../assets/Hero3/sofa.svg";
import keyboard from "../assets/Hero3/keyboard.svg";
import workstation from "../assets/Hero3/workstation.svg";
import done from "../assets/Hero3/dddone.svg";
import rectangle from "../assets/Hero3/bigrectangle.svg";
import whitebox from "../assets/Hero3/whitebox.svg";
import girl from "../assets/Hero3/girl.svg";
import star from "../assets/Hero3/star.svg";
import cloud from "../assets/Hero3/cloud2.svg";
import dev1 from "../assets/Hero3/dev1.svg";
import dev2 from "../assets/Hero3/dev2.svg";
import dev3 from "../assets/Hero3/dev3.svg";
import dev4 from "../assets/Hero3/dev4.svg";
import slider from "../assets/Hero3/slider.svg";

const Hero3 = () => {
  return (
    // 3rd Hero section of the website
    <div
      style={{ backgroundColor: "#28293E" }}
      className="p-20 h-auto w-full py-30"
    >
      <div className="flex items-center justify-center">
        <h1 style={{ color: "rgba(239, 109, 88, 1)" }}>PORTFOLIO</h1>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-5xl font-bold">Latest Work</h1>
      </div>
      {/* section based menus */}
      <div className="mt-15">
        <ul className="flex items-center justify-center gap-10 text-gray-500">
          <li>
            Show All <sup>14</sup>
          </li>
          <li>
            Design <sup>6</sup>
          </li>
          <li>
            Branding <sup>4</sup>
          </li>
          <li>
            illustration <sup>3</sup>
          </li>
          <li>
            Motion <sup>1</sup>
          </li>
        </ul>
      </div>
      {/* images section */}
      <div className="md:grid grid-cols-2 mt-20 mx-auto place-items-center ml-[-15rem] gap-10">
        <div className="justify-self-end relative">
          <img height="416px" width="470px" src={sofa} alt="sofa" />
          <button className="absolute left-10 top-[64%] bg-amber-50 rounded-full py-1.5 px-4 text-amber-950">
            Design
          </button>
          <h1 className="absolute left-10 top-[78%] font-bold text-4xl">
            SOFA
          </h1>
        </div>
        <div className="justify-self-start relative">
          <img height="416px" width="670px" src={keyboard} alt="keyboard" />
          <button className="absolute left-10 top-[64%] bg-amber-50 rounded-full py-1.5 px-4 text-amber-950">
            Branding
          </button>
          <h1 className="absolute left-10 top-[78%] font-bold text-4xl">
            KeyBoard
          </h1>
        </div>
      </div>
      <div className="md:grid grid-cols-2 mt-10 mx-auto place-items-center mr-[-10rem] gap-10">
        <div className="justify-self-end relative">
          <img height="416px" width="670" src={workstation} alt="workstation" />
          <button className="absolute left-10 top-[64%] bg-amber-50 rounded-full py-1.5 px-4 text-amber-950">
            illustration
          </button>
          <h1 className="absolute left-10 top-[78%] font-bold text-4xl">
            Work Media
          </h1>
        </div>
        <div className="justify-self-start relative">
          <img height="416px" width="470" src={done} alt="done" />
          <button className="absolute left-10 top-[64%] bg-amber-50 rounded-full py-1.5 px-4 text-amber-950">
            Motion
          </button>
          <h1 className="absolute left-10 top-[78%] font-bold text-4xl">
            DDDone
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-15">
        <button className="rounded-lg border px-4 py-2 font-bold">
          EXPLORE MORE
        </button>
      </div>
      {/* banner Section */}
      <div className="mt-40 relative">
        <img className="mx-[15%]" src={rectangle} alt="bg" />
        <div className="absolute flex items-center justify-between top-12 left-[20%] gap-17">
          <div>
            <h1 className="mt-0" style={{ color: "hsla(8, 83%, 64%, 1)" }}>
              GET STARTED
            </h1>
            <h1
              style={{ color: "hsla(21, 100%, 11%, 1)" }}
              className="text-2xl font-bold mt-5"
            >
              We Help Companies <br />
              Move Faster
            </h1>
            <button className="bg-orange-500 text-white px-2 py-2 rounded mt-5 font-bold">
              Contact Us
            </button>
          </div>
          <div>
            <img src={whitebox} alt="" />
          </div>
          <div className="absolute right-[-18rem] top-[-6.67rem] z-2">
            <img src={girl} alt="" />
          </div>
        </div>
        <div className="absolute top-[-4.56rem] left-[18%]">
          <img src={star} alt="" />
        </div>
        <div className="absolute right-93 z-1 top-[3rem]">
          <img src={cloud} alt="" />
        </div>
      </div>
      {/* team section */}
      <div className="mt-30 mx-[15%]">
        <h1 style={{color:'#EF6D58'}}>OUR TEAM</h1>
        <h1 className="text-6xl font-bold mt-7">
          Team of Designers <br />
          and Developers
        </h1>
        <div className="flex items-center justify-start gap-8 mt-20 relative]">
          <h1
            className=" w-[270px] h-[272px] relative"
            style={{ border: "1px solid #3A3C56" }}
          >
            <img className="absolute bottom-0 left-8" src={dev1} alt="image" />
          </h1>
          <h1
            className=" w-[270px] h-[272px] relative"
            style={{ border: "1px solid #3A3C56" }}
          >
            <img className="absolute bottom-0 left-1" src={dev2} alt="image" />
          </h1>
          <h1
            className=" w-[270px] h-[272px] relative"
            style={{ border: "1px solid #3A3C56" }}
          >
            <img className="absolute left-9 bottom-0" src={dev3} alt="image" />
          </h1>
          <h1
            className=" w-[270px] h-[272px] relative "
            style={{ border: "1px solid #3A3C56" }}
          >
            <img className="absolute bottom-0 left-5" src={dev4} alt="image" />
          </h1>
        </div>
        <div className="flex items-center justify-center mt-20">
          <img src={slider} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
