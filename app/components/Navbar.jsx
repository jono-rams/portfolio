"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-4 bg-gray-800">
      <div className="container flex flex-col items-center px-4 mx-auto md:flex-row md:justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold text-white" onClick={closeMenu}>
            Jonathan Rampersad's Portfolio
          </Link>
          <button
            className="text-white md:hidden focus:outline-none ms-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto mt-4 md:mt-0 items-center space-y-4 md:space-y-0 md:space-x-6`}
        >
          <Link
            href="/"
            className="block text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            About
          </Link>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
