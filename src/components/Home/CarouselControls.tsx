import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function CarouselControls({
  onPrevious,
  onNext,
}: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="flex items-center justify-center border-1 border-cyan-950 text-cyan-950 p-2 rounded-full cursor-pointer hover:bg-cyan-950 hover:text-white z-10 
                 absolute left-0 lg:left-16 xl:left-32 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4
                 w-8 h-8 md:w-10 md:h-10"
        aria-label="Previous products"
      >
        <FiChevronLeft className="size-5 md:size-6" />
      </button>

      <button
        onClick={onNext}
        className="flex items-center justify-center border-1 border-cyan-950 text-cyan-950 p-2 rounded-full cursor-pointer hover:bg-cyan-950 hover:text-white z-10 
                 absolute right-0 lg:right-16 xl:right-32 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4
                 w-8 h-8 md:w-10 md:h-10"
        aria-label="Next products"
      >
        <FiChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </>
  );
}
