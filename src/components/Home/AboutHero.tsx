import { motion } from "framer-motion";
import portpic from "../../assets/images/portpic.jpg";

export default function AboutHero() {
  return (
    <section className="relative  py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-cyan-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-100/20 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg font-medium text-cyan-600 mb-3 font-['Montserrat']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Front-end Developer
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Rubik'] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-cyan-600">Demtse Yibabe</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-['Montserrat'] max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I love creating digital products that people enjoy using. Whether
            it's a sleek online store or a powerful web app, I focus on making
            things that look good while working exactly how they should.
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-cyan-400/30 overflow-hidden shadow-2xl">
            <img
              src={portpic}
              alt="Demtse Yibabe"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/10 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
