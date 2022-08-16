import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="dark:text-[white] transition-[300ms] text-black font-bold text-[33px] fixed left-[44px] top-[15px] navItem p-[15px] cursor-pointer logo"
      >
        Ronald
        <span className="first-letter:block w-[9px] h-[9px] dark:bg-[white] bg-black rounded-full border-2 dark:border-[black] border-white transition-[300ms] absolute bottom-[22px] right-[10.5px]"></span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-[53px] p-[10px] flex flex-col gap-y-[13px] cursor-pointer fixed right-[54px] top-[40px] navContainer"
      >
        <div className="w-[full] h-[2px] transition-[300ms] dark:bg-[white] bg-black"></div>
        <div className="w-[full] h-[1.5px] transition-[300ms] dark:bg-[white] bg-black"></div>
      </motion.div>
    </>
  );
};
export default NavBar;
