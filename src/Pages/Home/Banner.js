import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:container md:mx-auto">
        <div
          className="w-full h-[600px] bg-no-repeat bg-cover text-white flex items-center lg:justify-start justify-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="lg:ml-10 p-10">
            <p className="text-success text-3xl mb-5">Upto 30% Off</p>
            <div className="bg-white h-1 mb-3 w-24"></div>
            <h1 className="text-3xl lg:text-4xl font-bold ">
              Best Tools Collection
            </h1>
            <p className=" mt-3 lg:w-1/2">
              Best Drill machine, Screwdriver, Wrench, Pliers, Measuring Tape,
              Chisel, Soldering Iron, Electric saw etc. collection
            </p>
            <button className="px-7 py-3 bg-success mt-5 font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
