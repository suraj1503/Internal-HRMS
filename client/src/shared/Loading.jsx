import { motion } from "framer-motion";

const Loading = ({imageSrc='https://peoplefirst.ril.com/v2/favicon.ico'}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.img
        src={imageSrc}
        alt="Loading"
        className="w-16 h-16"
        animate={{
          rotate: [0, 360, 360], // Spin once, then pause
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5, // Total duration per cycle
          ease: "linear",
          times: [0, 0.8, 1], // Spins for 80% of the time, then pauses
        }}
      />
    </div>
  );
};

export default Loading;

