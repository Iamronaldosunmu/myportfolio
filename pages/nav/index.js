import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <div className="bg-[#f5fffa] w-screen h-screen overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ duration: 0.6 }}
        className="w-full h-full bg-[#5AD7FF] absolute -left-[100vw]"
      ></motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full h-full bg-[#78FFBC] absolute -left-[100vw]"
      ></motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full h-full bg-[#EC78FF] absolute -left-[100vw]"
      ></motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full h-full bg-[#FF7878] absolute -left-[100vw]"
      ></motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full h-full bg-[#F4FF78] absolute -left-[100vw]"
      ></motion.div>
      {/* <div className="w-full h-full bg-[#78FFBC]"></div> */}
    </div>
  );
};
export default NavBar;
