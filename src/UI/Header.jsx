import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" mt-3 absolute z-50 w-full  flex items-center justify-between ">
      <a
        className=" h-5 flex items-center space-x-1.5 font-semibold text-pink text-base group relative z-30 font-medium text-pink-900 hover:text-pink-900"
        href="/"
      >
        <span className="-translate-y-0.5 group-hover:scale-[1.2] ease-in-out cursor-pointer text-l  transform transition-transform duration-300">
          👻
        </span>
        <span className=" -translate-y-0.5 text-xl">Divya</span>
      </a>

      <div className="  fixed ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 z-40 flex-col items-end justify-start hidden h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0 top-[75px]">
        <Link
          className="text-xl relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-pink-900 dark:hover:text-white text-pink-500 dark:text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" text-xl relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-pink-900 dark:hover:text-white text-pink-500 dark:text-white"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-xl relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-pink-900 dark:hover:text-white text-pink-500 dark:text-white"
          to="/projects"
        >
          Projects
        </Link>
      </div>
    </header>
  );
}

export default Header;
