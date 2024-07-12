import { useEffect, useState } from "react";

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
    <div className="text-pink-200 max-w-6xl mx-auto mt-10 px-7 md:mt-16 lg:mt-24 xl:px-0 flex flex-col items-center md:flex-row md:justify-between">
      <div className="md:w-1/2">
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl dark:text-white font-sans">
          Hello, I am <span className="text-pink-700">Divya</span>.
        </h1>
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl dark:text-white font-sans">
          <span className="skills">Creative</span>
          <span className="relative text-pink-300">
            {words.map((word, i) => (
              <span
                key={i}
                className={`cd-word transition-opacity duration-300 absolute pl-2 capitalize ${currentWord === word ? "opacity-100 animate-bounce" : "opacity-0"}`}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl dark:text-white font-sans">
          Based in Pune.
        </h1>
        <p className="text-xl text-pink-700 mb-6 font-serif">
          I am a passionate web developer with{" "}
          <span className="text-pink-200 font-bold">2+ years </span>of
          experience crafting beautiful and functional web applications.
        </p>
        <div className="flex space-x-4 mb-8">
          <Link
            to="/projects"
            className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            My Projects
          </Link>

          <a
            href="../../Divya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-pink-700 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-700 hover:border-transparent rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="../../laptop.webp"
          alt="Laptop"
          className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default Home;
