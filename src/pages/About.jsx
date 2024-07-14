function About() {
  const skillsData = [
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];
  return (
    <div className=" min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-20 px-4 md:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left mb-0 bg-clip-text text-primary w-full md:w-1/2">
            About Me
          </h1>
          <div className="w-full md:w-1/2">
            <img
              className="w-full max-w-md mx-auto transform hover:scale-105 transition duration-500 ease-in-out"
              src="../../space.webp"
              alt="Space"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed space-y-4 font-semibold text-pinkshade1">
              <span className=" block font-bold text-2xl text-pinkshade1 mb-4">
                Hey there! 👋
              </span>
              I'm a front-end developer with over two years of hands-on
              experience, diving deep into the world of React.js, JavaScript,
              HTML, and CSS. I've had the pleasure of bringing several web
              projects to life, focusing on creating sleek, responsive, and
              user-friendly interfaces.
            </p>
            <p className="text-lg leading-relaxed font-semibold mt-4 text-pinkshade1">
              My adventure in web development kicked off with a curiosity about
              how websites work and a drive to create awesome things on the web.
              Since then, I've tackled a variety of projects, each one adding a
              new skill or two to my toolkit.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-2xl mt-5 font-bold text-pinkshade1 text-center mb-4">
                Skills
              </h2>
              <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md">
                <ul className="flex flex-wrap justify-center gap-3 ">
                  {skillsData.map((skill, index) => (
                    <li key={index} className="flex flex-col items-center">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-16 h-16 mb-2"
                      />
                      <span className="text-sm font-medium text-pinkshade1">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
