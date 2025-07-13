import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Connect() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-cyan-800 to-cyan-600">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3 font-['Rubik']">
            Let's Connect
          </h2>
          <p className="text-lg text-cyan-100 font-['Montserrat']">
            Reach out through any of these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:your.email@example.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500 text-white mb-4">
              <FaEnvelope className="text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-white font-['Rubik'] mb-1">
              Email
            </h3>
            <p className="text-cyan-100 text-sm font-['Montserrat']">
              demtse.yibabe@example.com
            </p>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0077B5] text-white mb-4">
              <FaLinkedin className="text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-white font-['Rubik'] mb-1">
              LinkedIn
            </h3>
          </motion.a>
          <motion.a
            href="https://github.com/demlew1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/30 transition-all"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 text-white mb-4">
              <FaGithub className="text-2xl" />
            </div>
            <h3 className="text-xl font-medium text-white font-['Rubik'] mb-1">
              GitHub
            </h3>
            <p className="text-cyan-100 text-sm font-['Montserrat']">
              @Demlew1
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
