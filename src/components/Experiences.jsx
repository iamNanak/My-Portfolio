import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <section id="experience">
      <div className="mb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center my-20 text-4xl"
        >
          Experiences
        </motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -25, scale: 0.8}}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm lg:w-1/4"
              >
                <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5}}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="mb-2 font-semibold">{experience.role} </h3>
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
                <p className="text-stone-400">{experience.description}</p>
                <div className="mt-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
