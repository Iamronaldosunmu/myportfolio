import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#121212] flex flex-col items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.35, duration: 0.4 } }}
        className="text-[59px] soraFont text-[#ece5da]"
      >
        RONALD
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          borderRadius: 11,
        }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1, 1, 1, 1],
          borderRadius: [11, 11, 11, 11, 11, 11, 11, 11, 0],
          width: [22, 22, 22, 22, 22, 22, 22, 22, 340],
          height: [22, 22, 22, 22, 22, 22, 22, 22, 5],
          transition: {
            ease: "easeOut",
            duration: 3,
            type: "spring",
            times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.8, 0.85, 1],
          },
          // transition: { duration: 3, delay: 0.2 },
        }}
        className="bg-[#ece5da] w-[22px] h-[22px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.35, duration: 0.4 } }}
        className="text-[59px] soraFont text-[#ece5da]"
      >
        DOSUNMU
      </motion.div>
    </div>
  );
}
