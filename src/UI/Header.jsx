import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check scroll position to toggle background
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-10 w-full px-4 mt-4 sm:mt-0 sm:px-6 lg:px-8 ${
        isScrolled
          ? "bg-opacity-40 backdrop-blur-md  shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <a
          className="h-5 flex items-center space-x-1.5 font-semibold text-pink text-base group relative z-30 font-medium text-pink-900 hover:text-pink-900"
          href="/"
        >
          <span className="-translate-y-0.5 group-hover:scale-[1.2] ease-in-out cursor-pointer text-l transform transition-transform duration-300">
            👻
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-primary hover:text-pinkshade1"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation menu */}
        <nav
          className={`${isMenuOpen ? "block  bg-white" : "hidden sm:bg-transparent"} sm:flex sm:items-center absolute sm:relative top-full left-0 right-0  shadow-md sm:shadow-none`}
        >
          <Link
            className={`block sm:inline-block text-xl px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out ${
              isActive("/")
                ? "text-secondary underline"
                : "text-primary hover:text-secondary"
            }`}
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`block sm:inline-block text-xl px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out ${
              isActive("/about")
                ? "text-secondary underline"
                : "text-primary hover:text-secondary"
            }`}
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className={`block sm:inline-block text-xl px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out ${
              isActive("/projects")
                ? "text-secondary underline"
                : "text-primary hover:text-secondary"
            }`}
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
