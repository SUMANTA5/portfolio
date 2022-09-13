import React from "react";
import Img from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            A full stack web developer is a person who can develop both
            client-side and server-side of a website, who can also build
            websites suitable to run in both desktop and mobile. In addition to
            mastering various type of programming technologies used to make a
            fully functional website.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-gradient-to-r  from-cyan-500 to-blue-500 
             cursor-pointer"
            >
              Portfolio
              <samp className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </samp>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Img}
            alt=""
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
