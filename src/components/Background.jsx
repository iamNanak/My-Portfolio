import { motion } from "framer-motion";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 12.5, 0],
    y: [0, 6.25, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  
  animate2: {
    scale: [1, 1.1, 1],  
    x: [0, 17.5, 0],
    y: [0, 8.75, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate3: {
    scale: [1, 1.15, 1],
    x: [0, 35, 0],
    y: [0, 17.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  animate4: {
    scale: [1, 1.1, 1],
    x: [0, 17.5, 0],
    y: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate5: {
    scale: [1, 1.05, 1],
    x: [0, 15, 0],
    y: [0, 11.25, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate6: {
    scale: [1, 1.15, 1],
    x: [0, 25, 0],
    y: [0, -12.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex items-center justify-center filter blur-[100px] opacity-70">
      <motion.div
        className="bg-yellow-500 w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-orange-500 w-[360px] h-[260px] rounded-full absolute"
        variants={circleVariants}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-green-500 w-[370px] h-[270px] rounded-full absolute"
        variants={circleVariants}
        animate="animate3"
      ></motion.div>
      <motion.div
        className="bg-purple-500 w-[380px] h-[280px] rounded-full absolute"
        variants={circleVariants}
        animate="animate4"
      ></motion.div>
      <motion.div
        className="bg-blue-500 w-[390px] h-[290px] rounded-full absolute"
        variants={circleVariants}
        animate="animate5"
      ></motion.div>
      <motion.div
        className="bg-pink-500 w-[400px] h-[300px] rounded-full absolute"
        variants={circleVariants}
        animate="animate6"
      ></motion.div>
    </div>
  );
};

export default Background;
