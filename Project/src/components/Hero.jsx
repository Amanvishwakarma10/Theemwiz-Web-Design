import star from "../assets/startlogo.svg";
import avatar from "../assets/avatarHero.svg";
import oval from "../assets/OvalHero.svg";
import purpleshape from "../assets/shape2Hero.svg";
import laptop from "../assets/laptopHero.svg";
import spiral from "../assets/SpiralHero.svg";
import circle from "../assets/Circle.svg";
import sparkle from "../assets/Sparkle.svg";
import spiralcircle from "../assets/spiralcircle.svg";
import shapeyellow from "../assets/Shape3.svg";
import whitebox from "../assets/whitebox.svg";
import arrow from "../assets/arrow.svg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="">
      {/* //Navbar of the website */}
      <Navbar />
      {/* // Hero section of the website */}
      <div className="flex justify-center gap-30 items-center mt-40 mb-13 px-0">
        {/* // Left side of the hero section */}
        <div className="h-[700px] w-[620px]">
          <h5 style={{ color: "#EF6D58" }} className="mb-8">
            MORDERN STUDIO
          </h5>
          <img
            className="absolute -mt-[33px] px-[160px] z-5 h-[130px] mx-20"
            src={star}
            alt=""
          />
          <h1 className="relative text-6xl font-bold z-10">
            We’re Help
            <br /> To Build Your <br />
            Dream Project
          </h1>
          <p className="mt-8 text-gray-300">
            Agency provides a full service range including technical
            <br /> skills, design, business understanding.
          </p>
          <div className="flex">
            <button className="text-white   rounded bg-[#EF6D58] font-bold px-8 py-2 mr-20 mt-10">
              HOW WE WORK
            </button>
            <button className="text-white py-2 mr-20 mt-10">Contact Us</button>
          </div>
          <div className="flex gap-5 mt-[250px]">
            <img src={avatar} alt="avatar" />
            <div>
              <p className="text-gray-300">
                "Put themselves in the merchant's shoes"
              </p>
              <p>Meta Inc.</p>
            </div>
          </div>
        </div>
        {/* // Right side of the hero section */}
        <div className="relative h-[700px] w-[620px] flex items-center justify-center">
          <img className="" src={oval} alt="oval" />
          <img
            className="absolute top-0 left-0"
            src={purpleshape}
            alt="shape"
          />
          <img className="absolute top-6 left-3" src={laptop} alt="shape" />
          <img
            className="absolute left-0 bottom-[16rem]"
            src={spiral}
            alt="shape"
          />
          <img
            className="absolute top-14 left-[50%]"
            src={circle}
            alt="shape"
          />
          <img
            className="absolute top-20 left-[56%]"
            src={sparkle}
            alt="shape"
          />
          <img
            className="absolute top-30 right-0"
            src={spiralcircle}
            alt="shape"
          />
          <img
            className="absolute top-[35%] right-0"
            src={shapeyellow}
            alt="shape"
          />
          <img
            className="absolute bottom-[6rem] left-16"
            src={whitebox}
            alt="shape"
          />
          <img
            className="absolute bottom-[3rem] left-[58%]"
            src={arrow}
            alt="shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
