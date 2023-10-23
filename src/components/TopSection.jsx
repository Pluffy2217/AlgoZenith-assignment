import React from "react";
import logo from "../assets/logo.png";
import { BsArrowRightShort } from "react-icons/bs";

function TopSection() {
  return (
    <div className=" bg-[#03354A] w-screen md:h-[40rem] h-[45rem] bg-gradient-to-tl from-[#03354A] via-[#03354A] to-[#075b80]">
      <div className="md:flex-row flex flex-col justify-between items-center py-16 md:py-0">
        <div className="text-white md:p-36 flex flex-col space-y-6 items-center md:items-baseline">
          <h1 className="md:text-5xl text-3xl font-extrabold md:w-[110%]">
            Be Better at DSA & CP
          </h1>
          <p className="w-[85%] text-xs md:text-base text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex md:flex-row flex-col items-center md:space-x-10 space-y-4 md:space-y-0 order-4 md:order-none">
            <button
              style={{ boxShadow: "0 0 100px rgba(255, 255, 255, 0.4)" }}
              className="rounded-md py-2 md:px-10 px-32 bg-white text-[#04415B] font-bold flex items-center gap-2"
            >
              <p>Join Now</p> <BsArrowRightShort className="mt-1" size={25} />
            </button>
            <button className="rounded-md border border-opacity-50 border-gray-400 py-2 md:px-9 px-32 bg-gradient-to-r from-[#1e3742] to-[#05425C]">
              View curriculum
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 py-2 order-3 md:order-none">
            <div className="flex md:items-end items-center gap-3 text-xs md:text-base">
              <div className="w-8 h-8 border border-opacity-30 border-white rounded-md"></div>
              <label className="w-2/3 md:w-auto">
                Lorem ipsum dolor sit amet
              </label>
            </div>
            <div className="flex md:items-end items-center gap-3 text-xs md:text-base">
              <div className="w-8 h-8 border border-opacity-30 border-white rounded-md"></div>
              <label className="w-2/3 md:w-auto">
                Lorem ipsum dolor sit amet
              </label>
            </div>
            <div className="flex md:items-end items-center gap-3 text-xs md:text-base">
              <div className="w-8 h-8 border border-opacity-30 border-white rounded-md"></div>
              <label className="w-2/3 md:w-auto">
                Lorem ipsum dolor sit amet
              </label>
            </div>
            <div className="flex md:items-end items-center gap-3 text-xs md:text-base">
              <div className="w-8 h-8 border border-opacity-30 border-white rounded-md"></div>
              <label className="w-2/3 md:w-auto">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
        </div>
        <div>
          <img
            src={logo}
            alt="logo image"
            className="md:w-[50rem] md:h-[40rem] w-[28rem] md:-mt-0 -mt-16"
          />
        </div>
      </div>
    </div>
  );
}

export default TopSection;

//05425C
