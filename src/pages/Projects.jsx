import React, { Fragment } from "react";

import { projectsList } from "../utils/helperList";

function Projects() {
  return (
    <>
      <div className="container mx-auto mt-20 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-clip-text text-pink-700">
          Projects
        </h1>
        {projectsList.map((proj) => (
          <Fragment key={proj.label}>
            <div className="flex flex-col md:flex-row my-12 md:px-12">
              <div className="w-full md:w-1/2">
                <a href={proj.src} target="_blank" rel="noopener noreferrer">
                  <img
                    className=" shadow-lg rounded"
                    src={proj.imgSrc}
                    alt={proj.label}
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2 pt-4 md:pl-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-2">
                  {proj.label}
                </h3>
                {proj.description && <p className="mb-4">{proj.description}</p>}
                <button
                  onClick={() => window.open(proj.src, "_blank")}
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                >
                  See This Live
                </button>
                {proj.githubSrc && (
                  <button
                    onClick={() => window.open(proj.githubSrc, "_blank")}
                    className="bg-pink-100 hover:bg-pink-100 text-pink-800 font-bold py-2 px-4 rounded mb-2"
                  >
                    Source Code
                  </button>
                )}
                <div className="mt-4">
                  {proj.stack?.map((el) => (
                    <span
                      key={el}
                      className="inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-pink-700 mr-2 mb-2"
                    >
                      {el}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default Projects;
