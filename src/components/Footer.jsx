import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
//import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer = () => {
  const footerIcon = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedinIn size={17} />
        </>
      ),
      href: "https://www.linkedin.com/in/sumanta-kumar-das-8838b2186/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={17} />
        </>
      ),
      href: "https://github.com/SUMANTA5",
    },
    // {
    //   id: 3,
    //   child: (
    //     <>
    //       <HiOutlineMail />
    //     </>
    //   ),
    //   href: "https://mail.google.com/",
    // },
  ];

  return (
    <div>
      <footer class="text-gray-600 body-font bg-gray-800">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to="home"
            smooth
            duration={500}
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer"
          >
            <span class="ml-3 text-xl font-signature text-white ">Sumanta</span>
          </Link>
          <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            2022
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {footerIcon.map(({ id, child, href }) => (
              <a
                key={id}
                href={href}
                rel="noreferrer" 
                target="_blank"
                class="m-2 cursor-pointer text-gray-500 font  hover:text-white"
              >
                {child}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
