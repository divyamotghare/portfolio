import { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className=" bg-pink-800 text-white py-6">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-6 mb-4">
          <p>Contact Me: </p>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaPhone
              size={24}
              className="text-white hover:text-pink-400 transition duration-300 cursor-pointer"
            />
            {isHovered && (
              <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-pink-100 font-bold text-pink-900 px-2 py-1 rounded text-sm whitespace-nowrap">
                +91 8421790434
              </span>
            )}
          </div>
          <li>
            <a
              href="https://github.com/divyamotghare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition duration-300"
            >
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:divyamotghare9@gmail.com"
              className="text-white hover:text-pink-400 transition duration-300"
            >
              <FaEnvelope size={24} />
              <span className="sr-only">Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/divya-motghare-242278200/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition duration-300"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
        <small className="text-pink-100">
          &copy; {year} by{" "}
          <a
            href="https://github.com/divyamotghare"
            className="text-pink-400 hover:text-pink-300 transition duration-300"
          >
            divyamotghare
          </a>
          . All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
