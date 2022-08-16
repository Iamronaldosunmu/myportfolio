import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import DownArrowIcon from "../../components/Icons/DownArrowIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import InstagramIcon from "../../components/Icons/InstagramIcon";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";
import TwitterIcon from "../../components/Icons/TwitterIcon";
import NavBar from "../../components/NavBar/index.tsx";

const Home = () => {
  const router = useRouter();
  const outerCursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.toggle("dark");
      outerCursorRef.current.classList.toggle("dark");
      innerCursorRef.current.classList.toggle("dark");
    } else {
      document.documentElement.classList.toggle("dark");
      outerCursorRef.current.classList.toggle("dark");
      innerCursorRef.current.classList.toggle("dark");
    }
  };
  const handleMouseMove = (e) => {
    innerCursorRef.current.style.top = e.pageY - 0 + "px";
    innerCursorRef.current.style.left = e.pageX - 8 + "px";
    outerCursorRef.current.style.top = e.pageY - 0 + "px";
    outerCursorRef.current.style.left = e.pageX - 8 + "px";
    if (
      outerCursorRef.current.style.top.slice(
        0,
        outerCursorRef.current.style.top.length - 2
      ) < 6 ||
      outerCursorRef.current.style.left.slice(
        0,
        outerCursorRef.current.style.left.length - 2
      ) >
        window.innerWidth - 10
    ) {
      outerCursorRef.current.style.opacity = 0;
      innerCursorRef.current.style.opacity = 0;
    } else {
      outerCursorRef.current.style.opacity = 1;
      innerCursorRef.current.style.opacity = 1;
    }
  };
  const handleLogoHoverEnter = (e) => {
    outerCursorRef.current.classList.add("overName");
    innerCursorRef.current.classList.add("overName");
    outerCursorRef.current.style.width = "70px";
    outerCursorRef.current.style.height = "70px";
    outerCursorRef.current.style.backgroundColor = "white";
    outerCursorRef.current.style.mixBlendMode = "difference";
    innerCursorRef.current.style.display = "none";
  };
  const handleLogoHoverOut = (e) => {
    outerCursorRef.current.classList.remove("overName");
    innerCursorRef.current.classList.remove("overName");
    outerCursorRef.current.style.width = "50px";
    outerCursorRef.current.style.height = "50px";
    outerCursorRef.current.style.backgroundColor = "#f5fffa";
    outerCursorRef.current.style.mixBlendMode = "normal";
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    // logoRef.current.addEventListener("mouseout", handleLogoHoverOut);
    // logoRef.current.addEventListener("mouseover", handleLogoHoverEnter);
    // navRef.current.addEventListener("mouseenter", handleLogoHoverEnter);
    // navRef.current.addEventListener("mouseleave", handleLogoHoverOut);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dark:bg-[black] transition-[300ms] bg-white min-h-screen min-w-screen">
      <div className="relative w-screen h-screen">
        <NavBar />
        <div className="w-full h-full flex items-center justify-center text-[65px] flex-col font-bold pb-[80px] content leading-[81.9px]">
          <p className="max-w-[900px] text-center">
            I'm a{" "}
            <span>
              {" "}
              <span className="gradientText">creative</span> fullstack
              &lt;developer&gt;
            </span>
          </p>
          <p className="inline-flex text-[28px] font-extralight gap-x-[16px] items-center">
            <img src="/Icons/locationIcon.svg" className="w-[34px]" /> Lagos,
            Nigeria
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleTheme}
          className="dark:text-white text-black transition-[300ms] absolute bottom-[39px] left-[69px] text-[22px] font-medium darkModeButton cursor-pointer"
        >
          Dark Mode
          <div className="dark:bg-white transtion-[300ms] h-[2px] bg-black mt-[3px]"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute flex gap-x-[36px] bottom-[20px] right-[69px] socialsSection"
        >
          <a href="https://github.com/Iamronaldosunmu" target="_blank">
            <GithubIcon className="w-[40px] cursor-pointer relative bottom-[10px]" />
          </a>
          <a href="https://instagram.com/iamthat_ronald" target="_blank">
            <InstagramIcon className="w-[25px] cursor-pointer " />
          </a>
          <a href="https://www.linkedin.com/in/ronald-dosunmu-2b3a77202/">
            <LinkedinIcon className="w-[28px] cursor-pointer relative bottom-[2.5px]" />
          </a>
          <a href="https://twitter.com/IamRonald05" target="_blank">
            <TwitterIcon className="w-[28px] cursor-pointer relative bottom-[2.5px]" />
          </a>
        </motion.div>
        <div className="absolute left-[calc(50%-27.5px)] bottom-[70px] flex flex-col gap-y-[24px] px-[10px] items-center content">
          <DownArrowIcon className="w-[40px]" />
          <p className="text-black dark:text-white transition-[300ms]">
            SCROLL
          </p>
        </div>
        <div
          ref={outerCursorRef}
          className="cursor-outer"
          id="cursor-outer"
        ></div>
        <div ref={innerCursorRef} className="cursor-inner"></div>
      </div>
    </div>
  );
};
export default Home;
