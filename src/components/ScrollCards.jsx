"use client";
import Image from "next/image";
import { scrollCardData } from "@/data/data";
import { motion, easeOut } from "framer-motion";

const scrollCardAnimation = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 2,
      ease: easeOut,
      type: "spring",
    },
  },
};

const headingAnimation = {
  initial: {
    scale: 0,
    x: 100,
  },
  animate: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const ScrollCard = () => {
  return (
    <div id="emotions" className="overflow-x-hidden">
      <motion.h2
        variants={headingAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-4xl mt-4 mb-10 px-8 font-bold"
      >
        Lorem ipsum dolor sit.
      </motion.h2>
      <motion.div
        variants={scrollCardAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=" flex overflow-x-scroll p-10 hide-scroll-bar "
      >
        <div className="flex flex-nowrap">
          {scrollCardData.map((data, index) => {
            return (
              <div key={index} className="inline-block px-3">
                <div className="bg-orange-200 p-10 w-[40ch] rounded-3xl m-2 hover:rotate-[2deg] transition-all duration-75">
                  <Image
                    src={"/emoji.svg"}
                    width={50}
                    height={50}
                    className="mb-6"
                    alt="emoji"
                  />
                  <h4 className="font-bold mb-4 text-lg">{data.heading}</h4>
                  <p className="text-sm leading-6">{data.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollCard;
