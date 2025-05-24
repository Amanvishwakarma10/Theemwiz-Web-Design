import React from "react";
import plus from "../assets/Hero4/plus.svg";
import minus from "../assets/Hero4/minus.svg";
import circle from "../assets/Hero4/circlesmall.svg";
import arrowup from "../assets/Hero4/arrowup.svg";
import arrowdown from "../assets/Hero4/arrowdown.svg";

const Hero4 = () => {
  return (
    // 4th Hero section of the website
    <div
      style={{ backgroundColor: "#FDF0E9" }}
      className="p-20 h-auto w-full px-[20%]"
    >
      <h1 style={{ color: "#EF6D58" }}>PRICING</h1>
      <h1 className="text-5xl font-bold mt-7" style={{ color: "#391400" }}>
        Check Our <br />
        Pricing Plans
      </h1>
      {/* Cards for pricing */}
      <div className="#cards mt-15 flex items-center justify-start">
        <h1
          className="#card1  w-[391px] h-[512px] p-13 rounded"
          style={{ border: "1px solid #F3D1BF" }}
        >
          <h1 style={{ color: "#EF6D58" }}>CONSULTATION</h1>
          <h1 style={{ color: "#391400" }} className="font-bold text-4xl mt-7">
            Free
          </h1>
          <p className="mt-7" style={{ color: "#391400A3" }}>
            Your digital marketing efforts,
            <br /> instead of handling in-house.
          </p>
          <h1 className="flex gap-3 mt-7" style={{ color: "#391400" }}>
            <img src={plus} alt="img" />
            Brand Design
          </h1>
          <h1 className="flex gap-3 mt-3" style={{ color: "#391400A3" }}>
            <img src={minus} alt="img" />
            Market Analysis
          </h1>
          <h1 className="flex gap-3 mt-3" style={{ color: "#391400A3" }}>
            <img src={minus} alt="img" />
            Production
          </h1>
          <button className=" font-bold text-amber-950 bg-white mt-18 py-2 px-8 rounded ">
            CONTACT US
          </button>
        </h1>
        <h1
          className="#card2 w-[391px] h-[560px] p-13 mb-12 relative bg-white rounded"
          style={{ border: "1px solid #F3D1BF" }}
        >
          <button className="border rounded-3xl py-2 px-5 bg-orange-600 text-white absolute  top-6 left-10">
            Popular
          </button>
          <h1 style={{ color: "#EF6D58" }} className="mt-12">
            DESIGN
          </h1>
          <h1 style={{ color: "#391400" }} className="font-bold text-4xl mt-7">
            $1500
          </h1>
          <p className="mt-7" style={{ color: "#391400A3" }}>
            Provide your business with a variety of digital solutions to
            promote.
          </p>
          <h1 className="flex gap-3 mt-7" style={{ color: "#391400" }}>
            <img src={plus} alt="img" />
            Brand Design
          </h1>
          <h1 className="flex gap-3 mt-3" style={{ color: "#391400" }}>
            <img src={plus} alt="img" />
            Market Analysis
          </h1>
          <h1 className="flex gap-3 mt-3" style={{ color: "#391400A3" }}>
            <img src={minus} alt="img" />
            Production
          </h1>
          <button className=" font-bold bg-orange-600 text-white mt-18 py-2 px-8 rounded ">
            CONTACT US
          </button>
        </h1>
        <h1
          className="#card3  w-[391px] h-[512px] p-13 rounded"
          style={{ border: "1px solid #F3D1BF" }}
        >
          <h1 style={{ color: "#EF6D58" }}>DESIGN-CODE</h1>
          <h1 style={{ color: "#391400" }} className="font-bold text-4xl mt-7">
            $2900
          </h1>
          <p className="mt-7" style={{ color: "#391400A3" }}>
            Help you hit your marketing goals and grow your business.
          </p>
          <h1 className="flex gap-3 mt-7" style={{ color: "#391400" }}>
            <img src={plus} alt="img" />
            Brand Design
          </h1>
          <h1 className="flex gap-3 mt-3" style={{ color: "#391400" }}>
            <img src={plus} alt="img" />
            Market Analysis
          </h1>
          <h1 className="flex gap-3 mt-3" style={{ color: "#391400" }}>
            <img src={plus} alt="img" />
            Production
          </h1>
          <button className=" font-bold text-amber-950 bg-white mt-18 py-2 px-8 rounded ">
            CONTACT US
          </button>
        </h1>
      </div>
      {/* FAQ section */}
      <div className="#Faq grid grid-cols-2 mt-20 h-[612px] w-[91%]">
        <div className="">
          <h1 style={{ color: "#EF6D58" }}>FAQ</h1>
          <h1 style={{ color: "#391400" }} className="text-4xl font-bold mt-7">
            Frequently Asked <br /> Questions
          </h1>
          <p className="mt-10" style={{ color: "#391400A3" }}>
            A digital agency is a business you hire to outsource your <br />
            <br />
            digital marketing efforts, instead of handling in-house.
          </p>
          <h1 className="mt-10" style={{ color: "#391400" }}>
            Contact Us
          </h1>
        </div>
        <div>
          <div
            className="h-[273px] w-[570px] p-10 bg-white"
            style={{ border: "1px solid #F3D1BF" }}
          >
            <h1
              style={{ color: "#391400" }}
              className="text-2xl font-bold flex items-center justify-between relative"
            >
              A digital agency in a business
              <img src={circle} alt="" />
              <img className="absolute right-2.5 top-3" src={arrowup} alt="" />
            </h1>
            <p className="mt-10" style={{ color: "#391400A3" }}>
              Digital marketing efforts, instead of handling in-house. They can
              provide your business with a variety of digital solutions to
              promote your product or service online and help you hit your
              marketing goals and grow your business.
            </p>
          </div>
          <h1
            style={{ border: "1px solid #F3D1BF", color: "#391400" }}
            className="h-[113px] w-[570px] p-10 text-2xl font-bold flex items-center justify-between relative"
          >
            Hire to outsource your digital
            <img src={circle} alt="" />
            <img className="absolute right-12.5 top-13.5" src={arrowdown} alt="" />
          </h1>
          <h1
            style={{ border: "1px solid #F3D1BF", color: "#391400" }}
            className="h-[113px] w-[570px] p-10 text-2xl font-bold flex items-center justify-between relative"
          >
            Marketing efforts
            <img src={circle} alt="" />
            <img className="absolute right-12.5 top-13.5" src={arrowdown} alt="" />
          </h1>
          <h1
            style={{ border: "1px solid #F3D1BF", color: "#391400" }}
            className="h-[113px] w-[570px] p-10 text-2xl font-bold flex items-center justify-between relative"
          >
            Can provide your business
            <img src={circle} alt="" />
            <img className="absolute right-12.5 top-13.5" src={arrowdown} alt="" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
