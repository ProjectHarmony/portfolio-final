import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGitlab, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a id="logo_nav" className="text-5xl font-dance">
          HR
        </a>
        <Link href="/"> </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#Contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-150 "
              : "fixed left-[-100%] top-0 ease-in duration-100"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <a id="logo_nav" className="text-5xl font-dance">
                HR
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4 text-sm font-bold">
              Let's Build something Aesthetic Together!
            </p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>

              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>

              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>

              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>

              <Link href="/#Contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5451e5] text-[15px] font-bold">
              Let's Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
               
                <a
                  href="https://www.linkedin.com/in/harmon-rod-manogura-ab682a238/"
                  target="_blank"
                  rel="noopener noreferrer"
                > <FaLinkedinIn size={15} /></a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              
                <a
                  href="https://gitlab.com/Harmonrod"
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaGitlab size={15} /></a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              
                <a
                  href="https://github.com/ProjectHarmony"
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaGithub size={15} /></a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              
                <a
                  href="/HarmonCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                ><BsFillPersonLinesFill size={15} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
