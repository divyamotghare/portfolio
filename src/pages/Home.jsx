import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const words = ["Developer", "Coder", "Artist"];
let index = 0;

function Home() {
  const [currentWord, setCurrentWord] = useState(words[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" max-w-6xl mx-auto px-6 sm:px-6 xl:px-0 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between text-primary bg-primary-bg">
      <div className="md:w-1/2 mb-0">
        <img
          src="../../laptop.webp"
          alt="Laptop"
          className="w-full rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl mb-1 sm:text-5xl font-bold font-sans">
          Hello, I am <span className="underline text-secondary">Divya</span>.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans flex pl-20 sm:flex-wrap sm:pl-0 sm:justify-center md:justify-start mb-1">
          <span className="text-primary">Creative</span>
          <span className="relative ml-2 text-pinkshade1">
            {words.map((word, i) => (
              <span
                key={i}
                className={`cd-word absolute left-0 right-0 transition-opacity capitalize duration-300 ${
                  currentWord === word
                    ? "opacity-100 animate-bounce"
                    : "opacity-0"
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </h2>
        <h2 className="text-4xl mb-1 sm:text-5xl font-bold font-sans">
          Based in Pune.
        </h2>
        <p className="text-lg sm:text-xl text-pinkshade1 font-semibold font-sans mb-4">
          I am a passionate web developer with{" "}
          <span className="text-primary underline font-bold">2+ years</span> of
          experience crafting beautiful and functional web applications.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
          <Link
            to="/projects"
            className="bg-pinkshade1 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto text-center"
          >
            View My Projects
          </Link>
          <a
            href="../../Divya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-primary-bg font-semibold text-pinkshade1 hover:text-white py-3 px-6 border-2 border-pinkshade1 hover:border-transparent rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto text-center"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
