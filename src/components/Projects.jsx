import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  // State to track how many projects to show
  const [visibleProjects, setVisibleProjects] = useState(4);
  // Handler for showing more projects
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4); // Show 4 more projects on each click
  };

  return (
    <section id="projects">
      <div className="pb-4 mt-36">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center my-20"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              {/* {console.log(PROJECTS.slice(0, visibleProjects))} */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 w-full rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full ml-5 max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* "More Projects" Button */}
        {PROJECTS.length > visibleProjects && (
          <div className="flex justify-center mb-4">
            <button
              onClick={showMoreProjects}
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition duration-300"
            >
              More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
