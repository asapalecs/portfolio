import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#f8961e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Alex, nice to meet you. Take a look around.</p>
          </div>
          <div>
            <p>
              If you had a software expert at your disposal, what could you
              accomplish? I am dedicated to crafting exceptional software
              solutions that enhance the lives of those in my vicinity. My
              expertise lies in developing software for a diverse range of
              clients, including individuals, small businesses, and large
              enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
