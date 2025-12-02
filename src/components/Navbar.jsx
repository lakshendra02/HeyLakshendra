import { useState } from "react";
import { navLinks, socialLinks } from "../data/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { smoothScroll } from "../utils/smoothScroll"; // Import the utility

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    smoothScroll(id);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-sm shadow-lg py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => handleNavClick("home")}
          className="text-3xl font-bold tracking-widest text-primary border-2 border-primary rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          LS
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-lg font-medium transition-colors duration-300 relative group text-white hover:text-primary"
            >
              {link.title}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
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
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-xl font-medium text-white hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </button>
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
