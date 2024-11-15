"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

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
          <Link href="/" className="font-bold text-white logo md:text-2xl" onClick={closeMenu}>
            Jonathan Rampersad&#39;s Portfolio
          </Link>
          <button
            className="text-white md:hidden focus:outline-none ms-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 three-lines"
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
            className="block text-center text-white hover:text-gray-300 md:text-left"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-center text-white hover:text-gray-300 md:text-left"
            onClick={closeMenu}
          >
            About
          </Link>
          <a
            href="https://github.com/jono-rams"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full text-white hover:text-gray-300 md:justify-start" 
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-rampersad-47458a1a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full text-white hover:text-gray-300 md:justify-start" 
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
