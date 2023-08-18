"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const imgSrc = "/teddy.svg";
import { scrollCardData } from "@/data/data";

const headingAnimation = {
  initial: {
    scale: 0,
    x: -100,
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
const headingAnimation2 = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
const Work = () => {
  return (
    <div id="work" className=" px-4">
      <div className="bg-violet-100 p-12 min-h-[80vh] rounded-2xl">
        <div className="flex justify-between mb-8">
          <motion.h2
            variants={headingAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold"
          >
            Lorem, ipsum dolor.
          </motion.h2>
          <motion.h2
            variants={headingAnimation2}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl text-violet-700 font-bold"
          >
            Lorem
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <div className="mt-3 max-w-[40vw] min-h-full grid">
            <div className="bg-orange-50 p-4 md:p-8 lg:p-10 rounded-t-lg drop-shadow-sm">
              <Image src={imgSrc} height={50} width={50} />
              <h3 className="text-2xl font-semibold mb-4 mt-2">lorem</h3>
              <p className="text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                inventore? Dolores, nemo facilis! Perspiciatis, ipsa.
              </p>
            </div>
            <div>
              <div className="bg-orange-100 p-4 md:p-8 lg:p-10 rounded-b-lg drop-shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">lorem</h3>
                <p className="text-sm leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  inventore? Dolores, nemo facilis! Perspiciatis, ipsa.
                </p>
              </div>
            </div>
          </div>
          <div id="work-scroll" className="h-[600px] flex overflow-y-scroll ">
            <div className="flex flex-nowrap flex-col">
              {scrollCardData.map((data, index) => {
                return (
                  <div key={index} className="inline-block px-3">
                    <div className="bg-orange-200 p-4 md:p-8 lg:p-10 min-h-[20vw] max-w-[25vw] rounded-md m-2">
                      <h4 className="font-semibold mb-4 text-md lg:text-lg">
                        {data.heading}
                      </h4>
                      <p className="text-xs leading-5 md:text-sm md:leading-7">
                        {data.para}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
