import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2anfyrc", "template_73br7w5", formRef.current, {
        publicKey: "ClJMn25mrnHihcWlM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    formRef.current.reset();
    confirm("Message Sent Successfully!");
  };

  const iconVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      x: "12.5%",
      y: "6.25%",
    },
    whileInView: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (


    <section id="contact" className="mt-15">
      <div className="border-t border-stone-900 pb-15"></div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center my-10 text-4xl"
      >
        Get in Touch

      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="container mx-auto flex flex-col justify-center items-start">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center my-10 text-4xl"
          >
            Let's Connect
          </motion.h2>

          <div className="flex justify-start items-center mt-2 gap-4 text-2xl">
            <motion.a
              variants={iconVariants}
              initial="initial"
              whileInView="whileInView"
              href="https://www.linkedin.com/in/nanak-n-singh/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              variants={iconVariants}
              initial="initial"
              whileInView="whileInView"
              href="https://github.com/iamNanak"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={iconVariants}
              initial="initial"
              whileInView="whileInView"
              href=""
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </motion.a>
            <motion.a
              variants={iconVariants}
              initial="initial"
              whileInView="whileInView"
              href=""
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </motion.a>
          </div>
        </div>

        <div className="container mx-auto md:max-w-96 flex flex-col justify-center items-center p-5 bg-stone-600 rounded-lg shadow-lg">
          <motion.h2
            className="text-center my-5 text-4xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            Let's Discuss Your Project
          </motion.h2>
          <form
            className="w-full flex flex-col gap-2"
            onSubmit={handleFormSubmit}
            ref={formRef}
          >
            {/* Name Input */}
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter Your Name"
              className="p-3 rounded-lg bg-stone-900 text-white placeholder:text-stone-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            {/* Email Input */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter Your Email"
              className="p-3 rounded-lg bg-stone-900 text-white placeholder:text-stone-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            {/* Message Input */}
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Drop a message"
              name="message"
              className="h-32 resize-none p-3 rounded-lg bg-stone-900 text-white placeholder:text-stone-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
