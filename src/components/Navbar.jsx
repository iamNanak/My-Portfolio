import logo from "../assets/mylogo.webp";
import { LINKS } from "../constants";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      x: 0,
      y: 0,
      scale: 1,
    });
  }, [controls]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className=" fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto md:my-2  bg-stone-950/3 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              alt="logo"
              className="mx-2"
              width={50}
              height={33}
            />
            {/* <h1 className="text-4xl font-extrabold font-mono ">NG</h1> */}
          </a>
        </div>

        <motion.div 
           animate={controls}
           initial={{ opacity: 0, scale: 0.8, x: "-25%", y:"-25%" }}
           transition={{ duration: 0.5 }}
           className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              key={index}
              href={link.href}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <div className="md:hidden">
        <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          
            </motion.button>
        </div>
      </div>

      {menuOpen && (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: "25%", y:"-25%" }}
            transition={{ duration: 0.1 }}
            animate={{ opacity: 1, scale: 1, x: 0, y:0 }}
        className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col justify-center items-center space-y-4 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <motion.a
                whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                key={index}
                href={link.href}
                className="text-white hover:text-stone-400 transition duration-300 "
                onClick={handleLinkClick}
              >
                {link.label}
              </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
