import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 to-purple-700 text-white h-screen flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-64 h-64 bg-purple-300 opacity-20 rounded-full -top-10 -left-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-96 h-96 bg-blue-300 opacity-10 rounded-full top-20 right-10"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Software can be <span className="text-yellow-300">powerful</span> and{" "}
          <span className="text-yellow-300">elegant</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Secure, seamless, and scalable solutions tailored for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 flex justify-center space-x-4"
        >
          <a
            href="#contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium shadow-lg hover:bg-gray-100 transition duration-200"
          >
            Get Started
          </a>
          <a
            href="#case-studies"
            className="text-white border border-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition duration-200"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
