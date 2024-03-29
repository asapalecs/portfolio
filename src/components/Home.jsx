import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#f8961e]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alexandru Cristinescu
        </h1>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h3>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in developing exceptional digital experiences as a
          full-stack web developer. Currently, my main focus lies in creating
          responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f8961e] hover:border-[#f8961e]">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
            <span className="group-hover:rotate-90 duration-300 flex items-center">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
