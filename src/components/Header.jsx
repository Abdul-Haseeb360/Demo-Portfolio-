import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Abdul Haseeb Shaikh</h1>
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`lg:flex lg:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:relative top-full left-0 right-0 bg-blue-600 lg:bg-transparent p-4 lg:p-0 mt-2 lg:mt-0`}
        >
          <li>
            <a
              href="#about"
              className="block py-2 lg:py-0 "
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 lg:py-0 "
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block py-2 lg:py-0 "
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 lg:py-0 "
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;