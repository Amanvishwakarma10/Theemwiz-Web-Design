import heading from "../assets/Hero2/heading.svg";
import line from "../assets/Hero2/line.svg";
import cloud from "../assets/Hero2/Cloud.svg";
import arrow from "../assets/Hero2/arrow.svg";
import transparent from "../assets/Hero2/transparentbox.svg";
import box from "../assets/Hero2/box.svg";
import image from "../assets/Hero2/image.svg";
import avatar2 from "../assets/Hero2/avatar2.svg";
import video from "../assets/Hero2/video.svg";
import circle from "../assets/Hero2/videoCircle.svg";
import playbutton from "../assets/Hero2/playbutton.svg";

const Hero2 = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#FDF0E9" }}
        className="p-20 h-auto w-full"
      >
        {/* // 2nd Hero section of the website */}
        <img className="mx-60" src={heading} alt="heading" />
        <img className="mx-60 mt-20" src={line} alt="heading" />
        {/* //left side of the hero section */}
        <div className="#2ndpart mt-30 flex justify-center gap-30 items-center">
          <div className="h-[650px] w-[620px] relative">
            <img
              className="absolute top-30 left-10 z-1"
              src={cloud}
              alt="cloud"
            />
            <img className="absolute right-2 z-1" src={arrow} alt="cloud" />
            <img
              className="absolute top-3 left-30 z-0"
              src={transparent}
              alt="cloud"
            />
            <img className="absolute right-5 top-7 z-1" src={box} alt="cloud" />
            <img
              className="absolute right-0 bottom-[8rem] z-2"
              src={image}
              alt="cloud"
            />
            <img className="absolute bottom-0 z-3" src={avatar2} alt="cloud" />
          </div>
          {/* // right side of the hero section */}
          <div className="h-[650px] w-[620px]">
            <h5 style={{ color: "#EF6D58" }} className="mt-20">
              ABOUT
            </h5>
            <h1
              style={{ color: "#391400" }}
              className="text-6xl font-bold mt-12"
            >
              An Experience <br />
              Design Agency
            </h1>
            <h3 style={{ color: "#391400" }} className="mt-8">
              Provides a full service range
            </h3>
            <p style={{ color: "rgba(57, 20, 0, 0.64)" }} className="mt-6">
              Ability to put themselves in the merchant's shoes. It is
              <h5 className="mt-2">
                meant to partner on the long run, and work as an extension
              </h5>
              <h5 className="mt-2">of the merchant's team.</h5>
            </p>
            <button
              className="bg-white rounded p-2 px-8 font-bold mt-10 shadow-lg"
              style={{ color: "#391400" }}
            >
              ABOUT US
            </button>
          </div>
        </div>
        
        <div className="#3rectangles flex items-center justify-center mt-[200px] ">
          <div
            className="#rectangle1 borderpx-5 py-10 h[176px] w-[391px]"
            style={{ border: "1px solid rgba(243, 209, 191, 1)" }}
          >
            <h1 style={{ color: "#391400" }} className="px-5">
              <h1 className="font-bold text-4xl"> 42%</h1>
              <h5 className="mt-3"> Years of Experience</h5>
            </h1>
          </div>
          <div
            className="#rectangle2 border px-5 py-10 h[176px] w-[391px]"
            style={{ border: "1px solid rgba(243, 209, 191, 1)" }}
          >
            <h1 style={{ color: "#391400" }}>
              <h1 className="font-bold text-4xl"> 72%</h1>
              <h5 className="mt-3"> Agency Members</h5>
            </h1>
          </div>
          <div
            className="#rectangle3 border px-5 py-10 h[176px] w-[391px]"
            style={{ border: "1px solid rgba(243, 209, 191, 1)" }}
          >
            <h1 style={{ color: "#391400" }}>
              <h1 className="font-bold text-4xl"> 5.000</h1>
              <h5 className="mt-3">Projects Complete</h5>
            </h1>
          </div>
        </div>
        <div className="#4thpart flex items-center justify-center mt-[150px] gap-40 mx-0-">
          <div className="#1st">
            <h1 className="" style={{ color: "rgba(239, 109, 88, 1)" }}>
              HOW WE WORK
            </h1>
            <h1
              className="text-5xl font-bold mt-5"
              style={{ color: "rgba(57, 20, 0, 1)" }}
            >
              Making Your Projects <br /> Look Awesome
            </h1>
            <p className="mt-10" style={{ color: "rgba(57, 20, 0, 0.64)" }}>
              Technical skills, design, business understanding, ability to{" "}
              <br /> put themselves in the merchant's shoes.
            </p>
            <h1
              className="font-ligh5 mt-15"
              style={{ color: "rgba(57, 20, 0, 1)" }}
            >
              Read More
            </h1>
          </div>
          <div className="#2nd">
            <h1
              style={{ color: "rgba(57, 20, 0, 1)" }}
              className="flex items-center gap-10"
            >
              <h1 className="text-6xl font-bold mt-15">1</h1>
              <h1 className="text-2xl font-bold mt-15">
                Full service range including
              </h1>
            </h1>
            <h1
              style={{ color: "rgba(57, 20, 0, 1)" }}
              className="flex items-center gap-10"
            >
              <h1 className="text-6xl font-bold mt-15">2</h1>
              <h1 className="text-2xl font-bold -mx-3 mt-15">
                Technical skills, design, business
              </h1>
            </h1>
            <h1
              style={{ color: "rgba(57, 20, 0, 1)" }}
              className="flex items-center gap-10"
            >
              <h1 className="text-6xl font-bold mt-15">3</h1>
              <h1 className="text-2xl font-bold -mx-3 mt-15">
                Themselves in the merchant's
              </h1>
            </h1>
          </div>
        </div>
        <img className="mx-60 mt-30" src={line} alt="heading" />
        {/* //video section */}
        <div className="#5thpart flex items-center justify-center mt-30 gap-40">
          <div className=" relative">
            <img
              className="relative "
              height="368px"
              width="570px"
              src={video}
              alt="video"
            />
            <img
              className="absolute top-[30%] left-[38%]"
              src={circle}
              alt=""
            />
            <img
              className="absolute top-[46%] left-[50%]"
              src={playbutton}
              alt=""
            />
          </div>
          <div className="">
            <h1 className=" mt-10 " style={{ color: "rgba(239, 109, 88, 1)" }}>
              VIDEO REEL
            </h1>
            <h1
              className="text-5xl font-bold mt-5"
              style={{ color: "#391400" }}
            >
              Unlock The Greatest <br /> Value Possible
            </h1>
            <p className="mt-10" style={{ color: "rgba(57, 20, 0, 0.64)" }}>
              Design, business understanding, ability to put themselves <br />{" "}
              in the merchant's shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
