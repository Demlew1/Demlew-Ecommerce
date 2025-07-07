// import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import type { Testimonial } from "../../types/testimponial";
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sara Jay",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 4,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 2,
    name: "Cristian Daniel",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 3,
    name: "Kausar Hasan",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 5,
    name: "Emma Watson",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    text: "Creating a strong visual identity helped our business stand out in a crowded market. The approach was methodical and effective.",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=6",
    rating: 3,
    text: "The branding strategy developed for our startup was instrumental in our early success. Highly recommended for any new business.",
  },
];

const Testimonials = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="py-12 px-4 md:px-8 relative">
      <div className="align-element ">
        <h2 className="text-center flex flex-row justify-center md:text-left text-3xl md:text-4xl font-bold mb-6 text-gray-700 font-['Montserrat'] uppercase ">
          What our client say
        </h2>
        <div className="relative mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative shadow-lg py-4 px-6 flex flex-col rounded-xl items-center max-w-[300px] mx-auto "
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute -top-16 w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />
                <h3 className="text-xl font-bold mt-12  font-['Montserrat']">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 mb-2 text-lg font-['Montserrat']">
                  {testimonial.role}
                </p>

                <p className="text-center text-sm text-gray-500 mb-8 font-['Montserrat']">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute -top-16 right-0 flex space-x-4">
            <button
              // onClick={goToPrevious}
              className=" px-4 py-2 rounded-md shadow-5xl border-1 border-gray-800 text-black flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer focus:outline-none transition-colors duration-300"
              aria-label="Previous testimonials"
            >
              <MdArrowBackIosNew className="size-5" />
            </button>
            <button
              // onClick={goToNext}
              className=" px-4 py-2 rounded-md shadow-5xl border-1 border-gray-800 text-black flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer focus:outline-none transition-colors duration-300"
              aria-label="Next testimonials"
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
