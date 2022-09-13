import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex-col
       justify-center w-full h-full "
      >
        <div className="pb-8 mt-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello viewer, my name is Sumanta Kumar das, as the heading shows, I do
          am a fellow Full Stack Developer currently working on one of my
          project, please do check out some of my previous completed projects to
          review my performance on all of these work. Currently I know some of
          the following technologies relating creation of a functional website -
          Javascript, HTML, CSS, React, Redux, DOM, Bootstrap, JSX, TailwindCSS,
          Express, MongoDB.
        </p>
        <br />
        <p className="text-xl ">
          If you like my style of work and would like to work with me or want me
          to join the team of developers or want to give some suggestions
          relating my previous projects, do connect with me through the contact
          section below. Thank you for visiting this website/portfolio.
        </p>
      </div>
    </div>
  );
};

export default About;
