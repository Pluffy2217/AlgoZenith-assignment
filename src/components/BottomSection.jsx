import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import graph from "../assets/graph.png";
import vector from "../assets/vector.png";
import azLogo from "../assets/az.png";

function BottomSection() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center my-16 mx-44">
      <div className="absolute z-10 left-0 bottom-0 opacity-[7%]">
        <img src={vector} alt="vector" />
      </div>
      <div className="w-[40rem] z-20">
        <h1 className="md:text-5xl text-4xl text-center md:text-left font-extrabold md:w-[28rem] px-40 md:px-0 ">
          Invest in skills, <span className="text-blue-900">earn 10x</span> of
          what you paid.
        </h1>
        <p className="text-sm mt-7 md:mb-16 mb-7 md:w-[30rem] w-full text-gray-700 text-center md:text-left px-40 md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-16 md:mb-0 px-40 md:px-0">
          <div className="flex items-center gap-3">
            <div className="md:bg-gray-300 border border-gray-400 md:border-none w-8 md:w-10 h-8 md:h-10 rounded-md" />{" "}
            <div>
              <h2 className="font-semibold md:text-lg text-xs">1.2 Cr/Year</h2>
              <p className="text-[10px]">highest fresher package</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="md:bg-gray-300 border border-gray-400 md:border-none w-8 md:w-10 h-8 md:h-10 rounded-md" />{" "}
            <div>
              <h2 className="font-semibold md:text-lg text-xs">
                Multiple &lt; 100
                Ranks
              </h2>
              <p className="text-[10px]">in kickstart last year</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="md:bg-gray-300 border border-gray-400 md:border-none w-8 md:w-10 h-8 md:h-10 rounded-md" />{" "}
            <div>
              <h2 className="font-semibold md:text-lg text-xs">1000+ Offers</h2>
              <p className="text-[10px]">from top companies</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="md:bg-gray-300 border border-gray-400 md:border-none w-8 md:w-10 h-8 md:h-10 rounded-md" />{" "}
            <div>
              <h2 className="font-semibold md:text-lg text-xs">
                Trusted by IITians
              </h2>
              <p className="text-[10px]">for their career prep</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-400 w-96 h-[45rem] rounded-md z-20"
        style={{ boxShadow: "0 0 50px rgba(4,65,91,0.4)" }}
      >
        <div className="w-full h-[25%] p-7 flex items-center -space-x-5">
          <div>
            <p className="text-sm">Premium Victory Batch</p>
            <p className="text-3xl line-through font-bold text-gray-500 mt-2 mb-1 ml-1">
              ₹19,999
            </p>
            <p className="text-5xl ml-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#366c87] to-[#000000]">
              ₹13,999
            </p>
          </div>

          <img src={azLogo} alt="az logo" className="opacity-[8%] w-40 h-36" />
        </div>
        <div className="relative w-full h-[75%] bg-[#05425C] text-white flex flex-col space-y-6 pt-4">
          <img
            className="absolute inset-0 w-full h-full opacity-5"
            src={graph}
            alt="Your Image"
          />
          <div className="flex items-center space-x-4 text-sm w-[21rem] mx-auto">
            <div className="w-12 h-12 border border-white rounded-md border-opacity-50 "></div>
            <p>100+ Hrs Live Content</p>
          </div>
          <div className="flex items-center space-x-4 text-sm w-[21rem] mx-auto">
            <div className="w-12 h-12 border border-white rounded-md border-opacity-50 "></div>
            <p>50+ Hrs Contest</p>
          </div>
          <div className="flex items-center space-x-4 text-sm w-[21rem] mx-auto">
            <div className="w-12 h-12 border border-white rounded-md border-opacity-50 "></div>
            <p>500+ Problems</p>
          </div>
          <div className="flex items-center space-x-4 text-sm w-[21rem] mx-auto">
            <div className="w-12 h-12 border border-white rounded-md border-opacity-50 "></div>
            <p className="w-72">
              Includes an interview bootcamp and access to a mentor network
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm w-[21rem] mx-auto">
            <div className="w-12 h-12 border border-white rounded-md border-opacity-50 "></div>
            <p className="w-64">
              Enjoy access to our content for one year (paid extentions
              available)
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm w-[21rem] mx-auto">
            <div className="w-12 h-12 border border-white rounded-md border-opacity-50 "></div>
            <p className="w-72">
              Flexible payment options, including no-cost EMI, are available.{" "}
            </p>
          </div>
          <button
            style={{ boxShadow: "0 0 100px rgba(255, 255, 255, 0.7)" }}
            className="rounded-sm px-28 py-2 w-[21rem] mx-auto  font-semibold bg-white text-[#04415B] flex items-center gap-2"
          >
            <p>Join Now</p> <BsArrowRightShort className="mt-1" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
