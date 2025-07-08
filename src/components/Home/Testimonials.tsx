import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import type { Variants } from "framer-motion";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );
  const remainingTestimonials = 3 - visibleTestimonials.length;
  if (remainingTestimonials > 0) {
    visibleTestimonials.push(...testimonials.slice(0, remainingTestimonials));
  }

  const nextTestimonials = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevTestimonials = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0
        ? testimonials.length - (testimonials.length % 3 || 3)
        : prevIndex - 3
    );
  };

  const cardVariants: Variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="py-12 px-4 md:px-8 relative ">
      <div className="flex flex-col items-center ">
        <h2 className=" md:text-left text-2xl font-bold  text-cyan-950 font-['Rubik'] uppercase">
          What our clients say
        </h2>
        <div className="relative mt-24">
          <div className="flex justify-center items-center gap-6 flex-wrap ">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                  className="relative bg-white shadow-lg py-8 px-6 flex flex-col rounded-xl items-center border-1 border-cyan-950 w-72"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="absolute -top-12 w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-xl font-bold mt-12 font-['Montserrat']">
                    {testimonial.name}
                  </h3>
                  <p className="text-cyan-950 mb-2 text-sm font-['Montserrat']">
                    {testimonial.role}
                  </p>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < testimonial.rating
                            ? "text-cyan-900"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-600 mb-4 font-['Montserrat']">
                    {testimonial.text}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonials}
              className="p-3 rounded-full bg-cyan-950 shadow-md border border-cyan-900 text-gray-100 hover:bg-white hover:text-gray-950 cursor-pointer transition-colors duration-100"
              aria-label="Previous testimonials"
            >
              <MdArrowBackIosNew className="size-5" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-3 rounded-full bg-cyan-950 shadow-md border border-cyan-900 text-gray-100 hover:bg-white hover:text-gray-950 cursor-pointer transition-colors duration-100"
              aria-label="Next testimonials"
            >
              <GrNext className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
