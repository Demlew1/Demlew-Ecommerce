import { motion } from "framer-motion";
import reactIcon from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript.svg";
import tailwind from "../../assets/images/tailwind.svg";
import nextjs from "../../assets/images/nextjs.svg";

export default function TechStack() {
  const technologies = [
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: typescript },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Next Js", icon: nextjs },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-800 mb-4 font-['Rubik']">
            Technologies I Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Montserrat']">
            Tools and frameworks I use daily to build exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-cyan-50 rounded-full p-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-cyan-800 font-['Rubik'] mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-600 text-center font-['Montserrat']">
                {tech.name === "React" && "For building interactive UIs"}
                {tech.name === "TypeScript" && "For type-safe JavaScript"}
                {tech.name === "Tailwind CSS" && "For rapid UI development"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative element */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-cyan-100 text-cyan-800 rounded-full font-['Montserrat'] font-medium"
          >
            And many more in my toolkit...
          </motion.div>
        </div>
      </div>
    </section>
  );
}
