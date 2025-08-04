import { motion } from "framer-motion";

export default function ProductLoadingState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center items-center h-[60vh]"
    >
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        <div className="h-4 bg-gray-200 rounded w-48"></div>
      </div>
    </motion.div>
  );
}
