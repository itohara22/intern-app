"use client";
import { selfImportantList } from "@/data/data";
import { motion } from "framer-motion";
const headingAnimation = {
  initial: {
    scale: 0.6,
    x: 100,
    opacity: 0,
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
const SelfImp = () => {
  return (
    <div className=" text-black px-28 my-20">
      <motion.div
        variants={headingAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p>Lorem ipsum dolor sit amet.</p>
        <h2 className="text-4xl font-bold">Lorem ipsum dolor sit.</h2>
      </motion.div>
      <div className="h-[400px] mt-6 px-16 flex overflow-x-scroll p-10 hide-scroll-bar">
        <ul
          id="selfimp-list"
          className=" mx-auto my-8 h-full flex flex-col flex-nowrap w-fit "
        >
          {selfImportantList.map((data, index) => {
            return (
              <li
                key={index}
                className="pl-8 border-l-2 relative text-gray-500 hover:text-black cursor-default"
              >
                <h4 className="text-lg mb-2 mt-8">{data.headind}</h4>
                <p className="text-sm">{data.para}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelfImp;
