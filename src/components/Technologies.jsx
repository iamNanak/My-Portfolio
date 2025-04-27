import { FaJava } from "react-icons/fa";
import { FaNodeJs, FaPython } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCss3,
  SiDjango,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { motion } from "framer-motion";

const iconVariants = () => ({
  initial: {
    y: 0,
    x:0,
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    y: [0,-1.25],
    x: [0,1.25],
    opacity: 1,
    transition: {
      duration: 0.5,

      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies and Tools I use
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiExpress className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiJavascript className="text-7xl text-yellow-300 rounded-md" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-600 rounded-md" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaJava className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiGithub className="text-7xl text-white rounded-md" />
        </motion.div>
        <motion.div
          variants={iconVariants()}
          intial="intial"
          animate="animate"
          className="p-4"
        >
          <FaPython className="text-7xl rounded-md" />
        </motion.div>        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiHtml5 className="text-7xl text-orange-500 rounded-md" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-blue-500 rounded-md" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiCss3 className="text-7xl text-blue-700 rounded-md" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiDjango className="text-7xl text-green-900 rounded-md"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
