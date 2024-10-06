import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen m-auto bg-home-img bg-cover pt-20 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="text-white w-96 ml-[40%] pb-5 border-2 border-solid border-white backdrop-blur-sm rounded-lg z-10">
        <h1 className="text-center font-extrabold font-sans pt-20 text-2xl animate-fadeindown">
          WELCOME TO OUR NOTE SERVICE
        </h1>
        <h1 className="text-center font-extrabold font-sans pt-3 text-2xl animate-fadeinleft">
          NOTE YOUR TASK HERE!{" "}
          <FontAwesomeIcon className="animate-bounce" icon={faCircleDown} />
        </h1>
        <Link
          to="/login"
          className="mt-4 ml-[35%]  text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center animate-fadeindown hover:bg-indigo-600 hover:text-white"
        >
          <span>View More</span>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
