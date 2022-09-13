import React from "react";
import newsApp from "../assets/portfolio/newsApp.jpg";
import notebook from "../assets/portfolio/notebook.jpg";
import NoteAppAPK from "../assets/portfolio/NoteAppAPK.jpg";
import reduxSaga from "../assets/portfolio/redux-saga.jpg";
import reactEmat from "../assets/portfolio/reactEmat.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: newsApp,
      href: "https://github.com/SUMANTA5/news-app",
    },
    {
      id: 2,
      src: notebook,
      href: "https://github.com/SUMANTA5/notebook",
    },
    {
      id: 3,
      src: NoteAppAPK,
      href: "https://github.com/SUMANTA5/NoteAppAPK",
    },
    {
      id: 4,
      src: reduxSaga,
      href: "https://github.com/SUMANTA5/redux-saga",
    },
    {
      id: 5,
      src: reactEmat,
      href: "https://github.com/SUMANTA5/emart",
    },
    {
      id: 6,
      src: reactWeather,
      href: "https://github.com/SUMANTA5/weather_app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <a className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a> */}
                <a
                  className="px-12 py-1 w-1/2 m-4 duration-200 hover:scale-105"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
