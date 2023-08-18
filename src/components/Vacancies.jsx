"use client";
import { motion } from "framer-motion";

const animation = {
  initial: { rotate: 0 },
  animate: { rotate: 1 },
};

const headingAnimation = {
  initial: {
    scale: 0,
    x: -100,
  },
  animate: {
    scale: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
const Vacancies = () => {
  return (
    <div className="p-12">
      <motion.h2
        variants={headingAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-3xl lg:text-5xl font-bold my-4"
      >
        Lorem, ipsum
      </motion.h2>
      <div className="grid grid-cols-3 my-4 space-around gap-4">
        <motion.div
          variants={animation}
          initial="initial"
          whileHover="animate"
          className="bg-orange-100 p-4 md:p-8 lg:p-10 rounded-lg drop-shadow-sm max-w-[300px] max-h-[400px]"
        >
          <h3 className="text-lg font-bold">Lorem, ipsum.</h3>
          <ul className="list-disc text-xs md:text-sm px-4">
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
          </ul>
          <button className="bg-black text-white px-3 py-1 rounded-full hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-50 my-auto">
            view
          </button>
        </motion.div>
        <motion.div
          variants={animation}
          initial="initial"
          whileHover="animate"
          className="bg-orange-100 p-4 md:p-8 lg:p-10 rounded-lg drop-shadow-sm max-w-[300px] max-h-[400px]"
        >
          <h3 className="text-lg font-bold">Lorem, ipsum.</h3>
          <ul className="list-disc text-xs md:text-sm px-4">
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
          </ul>
          <button className="bg-black text-white px-3 py-1 rounded-full hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-50 my-auto">
            view
          </button>
        </motion.div>
        <motion.div
          variants={animation}
          initial="initial"
          whileHover="animate"
          className="bg-orange-100 p-4 md:p-8 lg:p-10 rounded-lg drop-shadow-sm max-w-[300px] max-h-[400px]"
        >
          <h3 className="text-lg font-bold">Lorem, ipsum.</h3>
          <ul className="list-disc text-xs md:text-sm px-4">
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
            <li className="my-2">Lorem ipsum dolor sit amet.</li>
          </ul>
          <button className="bg-black text-white px-3 py-1 rounded-full hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-50 my-auto">
            view
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Vacancies;
