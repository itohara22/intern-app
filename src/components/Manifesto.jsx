"use client";

import { motion, easeOutExpo } from "framer-motion";

import Image from "next/image";
const tedSrc = "./teddy.svg";
const sunSrc = "./sun.svg";

const headingAnimation = {
  initial: {
    scale: 0,
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

const imgAnimation = {
  initial: {
    scale: 0,
    x: -100,
    rotate: 180,
  },
  animate: {
    rotate: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const imgAnimation2 = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};
const Manifesto = () => {
  return (
    <div id="manifesto" className=" text-black px-4 mt-20 ">
      <div className="bg-orange-100 mx-auto grid sm:grid-cols-2 place-items-center p-8 md:px-[10vw] lg:px-[5vw] my-2 rounded-2xl  min-w-full min-h-[85vh] ">
        <div className="flex flex-col min-h-full gap-2">
          <motion.div
            variants={headingAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-xs lg:text-sm font-bold">Lorem, ipsum dolor.</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              Lorem ipsum dolor sit.
            </h2>
          </motion.div>
          <div className="flex flex-col my-auto gap-14">
            <motion.div
              variants={imgAnimation2}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image src={sunSrc} width={50} height={50} />
            </motion.div>
            <motion.div
              variants={imgAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="self-center "
            >
              <Image src={tedSrc} width={200} height={200} />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={headingAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="leading-8 pr-[3vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            perspiciatis, voluptates magni perferendis esse ipsum nulla ut
            labore, iusto, fugit expedita. Incidunt, rem? Quo deserunt corrupti,
            atque id vero fuga!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Manifesto;
