import { socialLinks, navLinks } from "../data/constants";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-primary/20 py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo/Intro */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-4xl font-extrabold text-primary">
            LS
          </Link>
          <p className="text-gray-400 mt-4 text-sm max-w-xs mx-auto md:mx-0">
            Thanks for coming so far. I hope you like the content. Feel free to
            connect!
          </p>
        </div>

        {/* Important Links (Reusing NavLinks for Quick Explore) */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Quick Explore
          </h4>
          <ul className="space-y-2 text-gray-400">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect With Me */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xl font-semibold text-white mb-4">
            Connect With Me
          </h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
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
          <p className="text-gray-400 text-sm">
            Reach out for projects or suggestions.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary/20 text-center text-gray-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Made With{" "}
          <FaHeart className="inline text-red-500 mx-1" /> By Lakshendra.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
