import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, socialLinks } from "../data/constants";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-sm shadow-lg py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Initials */}
        <NavLink
          to="/"
          className="text-3xl font-bold tracking-widest text-primary border-2 border-primary rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          LS
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 relative group ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`
              }
            >
              {link.title}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary text-2xl transition-colors duration-300"
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-dark-bg transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-white hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </NavLink>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-gray-700 w-1/2 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary text-2xl"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
