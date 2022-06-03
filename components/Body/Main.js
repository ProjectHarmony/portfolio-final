import React from "react";
import { FaLinkedinIn, FaGitlab, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD AESTHETIC TOGETHER!
          </p>
          <h1 className="py-4 text-gray-700">
            My Name is <span className="text-[#5651e5]">Harmon Rod</span>
          </h1>
          <h1 className="py-2 text-gray-700">I am a Web Developer.</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a Web developer specialized in Front-End, building exceptional
            digital experiences. Currently, I am focused on building responsive
            front-end web applications while learning back-end and server-side
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/harmon-rod-manogura-ab682a238/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://gitlab.com/Harmonrod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitlab />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/ProjectHarmony"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="/HarmonCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillPersonLinesFill />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
