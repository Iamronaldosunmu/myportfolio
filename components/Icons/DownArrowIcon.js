import { motion } from "framer-motion";

const DownArrowIcon = ({ className }) => {
  return (
    <motion.svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/motion.svg"
      className={className}
      //   initial={{ y: 0 }}
      animate={{ y: [0, 25, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <path
        d="M44.2608 20.9014L46.6394 23.2861C47.6465 24.2959 47.6465 25.9287 46.6394 26.9277L25.8215 47.8105C24.8144 48.8203 23.1858 48.8203 22.1894 47.8105L1.36083 26.9277C0.353683 25.918 0.353683 24.2852 1.36083 23.2861L3.7394 20.9014C4.75725 19.8809 6.41797 19.9023 7.4144 20.9443L19.7144 33.8887V3.01562C19.7144 1.58691 20.8608 0.4375 22.2858 0.4375H25.7144C27.1394 0.4375 28.2858 1.58691 28.2858 3.01562V33.8887L40.5858 20.9443C41.5823 19.8916 43.243 19.8701 44.2608 20.9014Z"
        className="dark:fill-white fill-black transition-[300ms]"
      />
    </motion.svg>
  );
};

export default DownArrowIcon;
