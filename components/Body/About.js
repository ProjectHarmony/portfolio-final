import React from "react";
import Link from "next/link"
const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a graduating student taking the Bachelor Science of Information
            Technology and currently training as a Front-End Web Developer on
            Nexplay E-Sports. I also do digital art commissions and Virtual
            Streaming. Ever since I was young I am Intrigued to code and became
            fascinated up until now.
          </p>
          <p className="py-2 text-gray-600">
            I started to learn HTML, CSS, and Javascript. Javascript is
            difficult but fun to learn. I am currently learning as a front-end
            developer using React, Next-Js, and and UI/UX designer. Since my
            goal is to become a full-stack Web Developer, I am now spending my
            time studying to make responsive websites and soon enough to
            discover more on server side and back-end Technology.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my Latest Projects</p>
        </div>
        <div className="w-full h-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="/"
                />
        </div>
      </div>
    </div>
  );
};

export default About;
