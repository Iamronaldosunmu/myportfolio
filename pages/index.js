import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [nameIn, setNameIn] = useState(false);
  const [nameShowing, setNameShowing] = useState(true);
  const [circleFinished, setCircleFinished] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTimeout(() => setNameIn(true), 1050);
    setTimeout(() => setNameShowing(false), 2000);
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <motion.div
      animate={{ scale: [1, 1, 0.8, 3.8, 4] }}
      transition={{ delay: 4.9, duration: 1.5 }}
      onAnimationComplete={() => router.push("/home")}
      className="w-screen h-screen bg-[white] flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ backgroundColor: "#ffffff" }}
        animate={{ backgroundColor: "#000000" }}
        transition={{
          delay: 4.7,
          duration: 0.58,
          ease: [0.6, 0.01, -0.05, 0.9],
        }}
        className="flex flex-col items-center px-[30px] py-[80px] "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3.35, duration: 0.5 } }}
          className="text-[59px] font-medium soraFont text-[black] overflow-hidden"
        >
          {/* <motion.div
            initial={{ y: 30 }}
            animate={{
              y: 0,
              opacity: nameShowing ? 1 : 0,
              color: nameIn ? "white" : "black",
              transition: {
                delay: 3.45,
                // ease: [0.6, 0.01, -0.05, 0.9],
                // duration: 0.7,
              },
            }}
          >
            RONALD
          </motion.div> */}
          <motion.div
            animate={{
              opacity: nameShowing ? 1 : 0,
              color: nameIn ? "#ffffff" : "#000000",
            }}
            transition={{
              delay: 3.45,
              ease: [0.6, 0.01, -0.05, 0.9],
              duration: 0.4,
            }}
          >
            RONALD
          </motion.div>
        </motion.div>
        <div
          style={{ opacity: circleFinished ? 0 : 1 }}
          className="transition-[600ms]"
        >
          <motion.div
            initial={{
              opacity: 0,
              borderRadius: 11,
            }}
            animate={{
              opacity: [0, 1, 0, 1, 0, 1, 1, 1, 1],
              borderRadius: [11, 11, 11, 11, 11, 11, 11, 11, 4],
              width: [22, 22, 22, 22, 22, 22, 22, 22, 340],
              height: [22, 22, 22, 22, 22, 22, 22, 22, 7],
              transition: {
                ease: "easeIn",
                duration: 3,
                type: "spring",
                times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.8, 0.85, 1],
              },
              // transition: { duration: 3, delay: 0.2 },
            }}
            onAnimationComplete={() =>
              setTimeout(() => setCircleFinished(true), 1650)
            }
            className="bg-[black] w-[22px] h-[22px] rounded-full"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3.35, duration: 0.5 } }}
          className="text-[59px] font-medium soraFont text-[black] overflow-hidden"
        >
          {/* <motion.div
            initial={{ y: -30 }}
            animate={{
              y: 0,
              opacity: nameShowing ? 1 : 0,
              color: nameIn ? "white" : "black",
              transition: {
                delay: 3.45,
                // ease: [0.6, 0.01, -0.05, 0.9],
                // duration: 0.7,
              },
            }}
          >
            DOSUNMU
          </motion.div> */}
          <motion.div
            animate={{
              opacity: nameShowing ? 1 : 0,
              color: nameIn ? "#ffffff" : "#000000",
            }}
            transition={{
              delay: 3.45,
              ease: [0.6, 0.01, -0.05, 0.9],
              duration: 0.4,
            }}
          >
            DOSUNMU
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
